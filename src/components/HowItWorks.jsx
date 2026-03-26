import React from 'react';
import { ArrowRight } from 'lucide-react';

const STEPS = [
  {
    num: '01', name: 'INGEST', process: 'Upload & Route',
    tech: 'FFmpeg · OpenCV · Pydub',
    desc: 'File MIME type detected and routed to correct preprocessing pipeline for each modality.',
    color: '#FFD93D',
  },
  {
    num: '02', name: 'PREPROCESS', process: 'Extract & Transform',
    tech: 'OpenCV · Librosa · HuggingFace Tokenizer',
    desc: 'Video frames at 10fps, audio to mel-spectrogram, text tokenized with RoBERTa vocabulary.',
    color: '#C4B5FD',
  },
  {
    num: '03', name: 'INFER', process: 'Model Inference',
    tech: 'EfficientNetV2 · Wav2Vec2 · RoBERTa',
    desc: 'Three specialized neural networks independently score input for synthetic media signatures.',
    color: '#FF6B6B',
  },
  {
    num: '04', name: 'FUSE', process: 'Aggregate & Decide',
    tech: 'Weighted Ensemble · Threshold Rule',
    desc: 'Per-modality scores combined via learned weights. Final verdict if any score exceeds threshold.',
    color: '#FFFDF5',
  },
];

export default function HowItWorks() {
  return (
    <section
      id="section-howitworks"
      style={{
        background: '#C4B5FD',
        borderTop: '4px solid #000',
        borderBottom: '4px solid #000',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Badge */}
        <div style={{ marginBottom: '2rem' }}>
          <span style={{
            display: 'inline-block',
            borderRadius: '9999px',
            background: '#000', color: '#fff',
            border: '4px solid #000',
            padding: '0.4rem 1.2rem',
            fontWeight: 900, fontSize: '0.8rem',
            textTransform: 'uppercase', letterSpacing: '0.15em',
            boxShadow: '4px 4px 0px 0px #000',
            transform: 'rotate(1deg)',
          }}>03 — PIPELINE</span>
        </div>

        {/* Title */}
        <h2 style={{
          fontWeight: 900,
          textTransform: 'uppercase',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          WebkitTextStroke: '3px #000',
          color: 'transparent',
          lineHeight: 1,
          marginBottom: '1.5rem',
        }}>THE MACHINE.</h2>

        {/* Subtitle */}
        <div style={{
          display: 'inline-block',
          background: '#FF6B6B', color: '#fff',
          border: '4px solid #000',
          padding: '0.5rem 1rem',
          fontWeight: 900, fontSize: '1.4rem',
          textTransform: 'uppercase',
          boxShadow: '6px 6px 0px 0px #000',
          transform: 'rotate(-2deg)',
          marginBottom: '3rem',
        }}>Four layers. Zero tolerance.</div>

        {/* Steps */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '0',
          alignItems: 'stretch',
        }}>
          {STEPS.map((step, i) => (
            <React.Fragment key={step.num}>
              <div
                style={{
                  flex: '1 1 200px',
                  border: '4px solid #000',
                  background: '#fff',
                  boxShadow: '8px 8px 0px 0px #000',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'transform 200ms ease-linear, box-shadow 200ms ease-linear',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '12px 12px 0px 0px #000'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px #000'; }}
              >
                {/* Background number */}
                <div style={{
                  position: 'absolute', top: '0.5rem', right: '1rem',
                  fontSize: '6rem', fontWeight: 900, opacity: 0.06,
                  lineHeight: 1, pointerEvents: 'none', userSelect: 'none',
                }}>{step.num}</div>

                {/* Header */}
                <div style={{
                  background: step.color,
                  borderBottom: '4px solid #000',
                  padding: '1rem',
                  display: 'flex', alignItems: 'center', gap: '0.75rem',
                }}>
                  <div style={{
                    background: step.color,
                    border: '4px solid #000',
                    padding: '0.5rem 0.6rem',
                    fontWeight: 900, fontSize: '0.75rem',
                  }}>{step.num}</div>
                  <span style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem' }}>{step.name}</span>
                </div>

                {/* Body */}
                <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  <div style={{ fontWeight: 900, fontSize: '1.1rem', textTransform: 'uppercase' }}>{step.process}</div>
                  <div style={{
                    border: '4px solid #000', background: '#FFFDF5',
                    padding: '0.25rem 0.75rem', fontSize: '0.75rem', fontWeight: 700,
                    display: 'inline-block',
                  }}>{step.tech}</div>
                  <p style={{ fontWeight: 700, fontSize: '0.9rem', lineHeight: 1.5 }}>{step.desc}</p>
                </div>
              </div>

              {i < STEPS.length - 1 && (
                <div style={{ display: 'flex', alignItems: 'center', padding: '1rem 0.25rem' }}>
                  <ArrowRight size={32} strokeWidth={4} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
