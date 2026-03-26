import React from 'react';

const DATASETS = [
  { name: 'FaceForensics++', type: 'VISUAL', headerColor: '#FFD93D', stat: '1000+', statLabel: 'VIDEOS', detail: '4 manipulation methods — Deepfakes, Face2Face, FaceSwap, NeuralTextures', modality: 'IMAGE / VIDEO' },
  { name: 'DFDC', type: 'VISUAL', headerColor: '#FFD93D', stat: '100K+', statLabel: 'CLIPS', detail: 'Facebook Deepfake Detection Challenge — largest public dataset', modality: 'IMAGE / VIDEO' },
  { name: 'Celeb-DF v2', type: 'VISUAL', headerColor: '#FFD93D', stat: '6K+', statLabel: 'FACES', detail: '590 real + 5639 fake high-quality celebrity videos', modality: 'IMAGE / VIDEO' },
  { name: 'ASVspoof 2021', type: 'AUDIO', headerColor: '#C4B5FD', stat: '300K+', statLabel: 'SAMPLES', detail: 'TTS & voice conversion attacks — industry anti-spoofing benchmark', modality: 'AUDIO' },
  { name: 'FakeAVCeleb', type: 'AUDIO+VID', headerColor: '#FF6B6B', stat: '19K+', statLabel: 'VIDEOS', detail: 'Audio-visual synchronized deepfakes — multimodal manipulation', modality: 'AUDIO + VIDEO', textWhite: true },
  { name: 'GPT vs Human', type: 'TEXT', headerColor: '#FFFDF5', stat: '500K+', statLabel: 'SAMPLES', detail: 'Human vs GPT-4 writing corpus + phishing corpora for email detection', modality: 'TEXT / EMAIL' },
];

export default function Datasets() {
  return (
    <section
      id="section-datasets"
      style={{
        background: '#FFFDF5',
        backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
        borderBottom: '4px solid #000',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
        <h2 style={{
          fontWeight: 900, textTransform: 'uppercase',
          fontSize: 'clamp(2rem, 8vw, 7rem)',
          lineHeight: 1, marginBottom: '3rem',
        }}>TRAINED ON REALITY.</h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
        }}>
          {DATASETS.map(d => (
            <div
              key={d.name}
              style={{
                border: '4px solid #000',
                background: '#fff',
                boxShadow: '8px 8px 0px 0px #000',
                transition: 'transform 200ms ease-linear, box-shadow 200ms ease-linear',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '12px 12px 0px 0px #000'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000'; }}
            >
              <div style={{
                background: d.headerColor,
                borderBottom: '4px solid #000',
                padding: '1rem',
                display: 'flex', alignItems: 'flex-start',
                justifyContent: 'space-between', gap: '0.5rem',
              }}>
                <span style={{ fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase', color: d.textWhite ? '#fff' : '#000' }}>{d.name}</span>
                <span style={{
                  borderRadius: '9999px', border: `4px solid ${d.textWhite ? '#fff' : '#000'}`,
                  fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase',
                  padding: '0.1rem 0.6rem', whiteSpace: 'nowrap', flexShrink: 0,
                  color: d.textWhite ? '#fff' : '#000',
                }}>{d.type}</span>
              </div>
              <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <div style={{ fontSize: '2.5rem', fontWeight: 900, lineHeight: 1 }}>{d.stat}</div>
                  <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.15rem' }}>{d.statLabel}</div>
                </div>
                <p style={{ fontWeight: 700, fontSize: '0.85rem', lineHeight: 1.5 }}>{d.detail}</p>
                <div style={{
                  border: '4px solid #000', background: '#FFFDF5',
                  padding: '0.2rem 0.6rem', fontWeight: 900,
                  textTransform: 'uppercase', fontSize: '0.65rem',
                  display: 'inline-block', letterSpacing: '0.1em',
                }}>{d.modality}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
