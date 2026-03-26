import React, { useState, useRef } from 'react';
import { Upload } from 'lucide-react';
import ModalityCard, { CARDS } from './ModalityCard';

export default function UploadZone({ onScan }) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [pastedText, setPastedText] = useState('');
  const [textFocused, setTextFocused] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => {
    e.preventDefault(); setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) setUploadedFile(file);
  };
  const handleFileChange = (e) => {
    if (e.target.files[0]) setUploadedFile(e.target.files[0]);
  };
  const handleScan = () => {
    if (!uploadedFile && !pastedText.trim()) {
      alert('Please upload a file or paste text to analyze.');
      return;
    }
    onScan({ file: uploadedFile, text: pastedText });
  };

  return (
    <section
      id="section-analyze"
      style={{
        background: '#FFFDF5',
        backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
        borderBottom: '4px solid #000',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Section label */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            borderRadius: '9999px',
            background: '#FFD93D',
            border: '4px solid #000',
            padding: '0.4rem 1.2rem',
            fontWeight: 900,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            boxShadow: '4px 4px 0px 0px #000',
            transform: 'rotate(-1deg)',
          }}>
            02 — ANALYZE
          </span>
        </div>

        <h2 style={{
          fontSize: 'clamp(2.5rem, 8vw, 7rem)',
          fontWeight: 900,
          textTransform: 'uppercase',
          lineHeight: 1,
          marginBottom: '3rem',
        }}>DROP YOUR FILE.</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '3rem',
        }}>
          {/* LEFT — Upload */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Drop zone */}
            <div
              id="upload-dropzone"
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              style={{
                border: `4px ${isDragging ? 'solid' : 'dashed'} #000`,
                background: isDragging ? 'rgba(255,217,61,0.3)' : '#fff',
                minHeight: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem',
                cursor: 'pointer',
                boxShadow: '8px 8px 0px 0px #000',
                transition: 'background 200ms ease-linear, border-style 200ms ease-linear',
                textAlign: 'center',
              }}
            >
              <input
                ref={fileInputRef}
                type="file"
                style={{ display: 'none' }}
                accept=".jpg,.jpeg,.png,.mp4,.wav,.mp3,.txt,.eml"
                onChange={handleFileChange}
              />
              <Upload size={64} strokeWidth={3} style={{ marginBottom: '1rem' }} />
              {uploadedFile ? (
                <>
                  <p style={{ fontSize: '1.5rem', fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>FILE READY</p>
                  <div style={{
                    border: '4px solid #000', background: '#FFD93D',
                    padding: '0.5rem 1rem', fontWeight: 900,
                    marginTop: '0.75rem', boxShadow: '4px 4px 0px 0px #000',
                    wordBreak: 'break-all',
                  }}>{uploadedFile.name}</div>
                  <p style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginTop: '0.5rem' }}>
                    {(uploadedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </>
              ) : (
                <>
                  <p style={{ fontSize: '1.4rem', fontWeight: 900, textTransform: 'uppercase', margin: '0 0 0.5rem' }}>
                    DRAG &amp; DROP OR CLICK TO UPLOAD
                  </p>
                  <div style={{
                    border: '2px solid #000',
                    padding: '0.25rem 0.75rem',
                    fontWeight: 700,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.15em',
                    marginTop: '0.75rem',
                  }}>
                    JPG · PNG · MP4 · WAV · MP3 · TXT · EML
                  </div>
                  <span style={{
                    marginTop: '1rem',
                    display: 'inline-block',
                    borderRadius: '9999px',
                    background: '#FF6B6B',
                    color: '#fff',
                    border: '4px solid #000',
                    fontWeight: 900,
                    fontSize: '0.7rem',
                    padding: '0.2rem 0.8rem',
                  }}>MAX 50MB</span>
                </>
              )}
            </div>

            {/* OR divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ flex: 1, borderTop: '4px solid #000' }} />
              <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>OR</span>
              <div style={{ flex: 1, borderTop: '4px solid #000' }} />
            </div>

            {/* Text area */}
            <div>
              <label style={{
                display: 'block',
                fontWeight: 900,
                fontSize: '0.8rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                borderBottom: '4px solid #000',
                paddingBottom: '0.25rem',
                marginBottom: '0.5rem',
              }}>PASTE EMAIL / TEXT</label>
              <textarea
                id="text-paste-area"
                value={pastedText}
                onChange={(e) => setPastedText(e.target.value)}
                onFocus={() => setTextFocused(true)}
                onBlur={() => setTextFocused(false)}
                placeholder="Paste suspicious email or text here..."
                style={{
                  border: '4px solid #000',
                  width: '100%',
                  height: '8rem',
                  padding: '1rem',
                  fontWeight: 700,
                  fontSize: '1rem',
                  background: textFocused ? '#FFD93D' : '#fff',
                  resize: 'none',
                  outline: 'none',
                  boxShadow: textFocused ? '4px 4px 0px 0px #000' : 'none',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'background 100ms ease-linear, box-shadow 100ms ease-linear',
                  boxSizing: 'border-box',
                }}
              />
            </div>

            {/* CTA */}
            <button
              id="scan-btn"
              onClick={handleScan}
              style={{
                background: '#FF6B6B',
                color: '#fff',
                border: '4px solid #000',
                height: '4rem',
                width: '100%',
                fontSize: '1.2rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                boxShadow: '8px 8px 0px 0px #000',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                borderRadius: 0,
                transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000'; }}
            >
              SCAN FOR DEEPFAKES →
            </button>
          </div>

          {/* RIGHT — Modality cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {CARDS.map((card) => (
              <ModalityCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
