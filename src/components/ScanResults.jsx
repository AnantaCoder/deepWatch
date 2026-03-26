import React from 'react';
import { Eye, Mic, Mail } from 'lucide-react';

const SCORE_CARDS = [
  {
    id: 'image', Icon: Eye, modality: 'IMAGE / VIDEO', headerBg: '#FFD93D', scoreKey: 'image',
    details: ['GAN artifacts detected: 3', 'Face swap signature: Present', 'Temporal inconsistency: High', 'Mesh alignment: Irregular'],
  },
  {
    id: 'audio', Icon: Mic, modality: 'AUDIO', headerBg: '#C4B5FD', scoreKey: 'audio',
    details: ['TTS synthesis markers: Found', 'Prosody anomaly: Detected', 'Voice conversion: Probable', 'Formant irregularity: High'],
  },
  {
    id: 'text', Icon: Mail, modality: 'TEXT / EMAIL', headerBg: '#FFFDF5', scoreKey: 'text',
    details: ['AI writing patterns: Strong', 'Perplexity score: Low', 'Burstiness: Abnormal', 'Metadata flags: 2'],
  },
];

const PIPELINE = [
  { step: '01', label: 'INGEST', detail: 'Upload & route file', time: '12ms' },
  { step: '02', label: 'PREPROCESS', detail: 'Extract frames, mel-spectrogram, tokenize', time: '340ms' },
  { step: '03', label: 'INFER', detail: 'Model inference across 3 modalities', time: '1.2s' },
  { step: '04', label: 'FUSE', detail: 'Weighted ensemble + threshold decision', time: '8ms' },
];

function ScoreCard({ card, scores }) {
  const { Icon, modality, headerBg, scoreKey, details } = card;
  const score = scores[scoreKey] ?? 0;
  const isFake = score >= 60;

  return (
    <div style={{ border: '4px solid #000', background: '#fff', boxShadow: '8px 8px 0px 0px #000' }}>
      <div style={{ background: headerBg, borderBottom: '4px solid #000', padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <Icon size={18} strokeWidth={3} />
        <span style={{ fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase' }}>{modality}</span>
      </div>
      <div style={{ padding: '1.25rem 1.25rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <span style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>{score}%</span>
          <span style={{
            borderRadius: '9999px', border: '4px solid #000', fontWeight: 900,
            fontSize: '0.7rem', textTransform: 'uppercase', padding: '0.2rem 0.75rem',
            background: isFake ? '#FF6B6B' : '#FFD93D', color: isFake ? '#fff' : '#000',
          }}>{isFake ? 'FAKE' : 'REAL'}</span>
        </div>

        <div style={{ border: '4px solid #000', height: '1.5rem', background: '#FFFDF5', overflow: 'hidden', marginBottom: '1rem' }}>
          <div style={{
            width: `${score}%`, height: '100%',
            background: isFake ? '#FF6B6B' : '#FFD93D',
          }} />
        </div>

        <div style={{ borderTop: '4px solid #000', paddingTop: '1rem' }}>
          {details.map(d => (
            <div key={d} style={{ borderBottom: '2px solid rgba(0,0,0,0.15)', padding: '0.4rem 0', fontWeight: 700, fontSize: '0.8rem' }}>{d}</div>
          ))}
        </div>
      </div>

      <div style={{
        borderTop: '4px solid #000', padding: '0.6rem', textAlign: 'center',
        fontWeight: 900, fontSize: '0.8rem', textTransform: 'uppercase',
        background: isFake ? '#FF6B6B' : '#FFD93D', color: isFake ? '#fff' : '#000',
      }}>
        {isFake ? '⚠ FLAGGED' : '✓ PASSED'}
      </div>
    </div>
  );
}

export default function ScanResults({ results, onScanAgain }) {
  const isDeepfake = results.verdict === 'DEEPFAKE';

  return (
    <section
      id="section-results"
      style={{
        background: '#000',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        borderBottom: '4px solid #000',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Label */}
        <div style={{ marginBottom: '2.5rem' }}>
          <span style={{
            display: 'inline-block',
            border: '4px solid #fff', color: '#fff',
            fontWeight: 900, fontSize: 'clamp(2rem, 6vw, 4rem)',
            textTransform: 'uppercase', padding: '0.5rem 1.5rem',
            boxShadow: '8px 8px 0px 0px #fff',
            transform: 'rotate(-1deg)',
          }}>SCAN RESULTS</span>
        </div>

        {/* Verdict */}
        <div style={{
          border: '4px solid #000',
          background: isDeepfake ? '#FF6B6B' : '#FFD93D',
          color: isDeepfake ? '#fff' : '#000',
          textAlign: 'center',
          padding: '2rem',
          marginBottom: '2.5rem',
          boxShadow: '12px 12px 0px 0px #fff',
        }}>
          <div style={{ fontSize: 'clamp(1.5rem, 5vw, 3rem)', fontWeight: 900, textTransform: 'uppercase' }}>
            {isDeepfake ? '⚠ DEEPFAKE DETECTED' : '✓ CONTENT APPEARS REAL'}
          </div>
          <div style={{ fontSize: '1.4rem', fontWeight: 700, marginTop: '0.75rem' }}>
            CONFIDENCE: {isDeepfake ? '94.7%' : '87.3%'}
          </div>
        </div>

        {/* Score cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginBottom: '2.5rem',
        }}>
          {SCORE_CARDS.map(c => (
            <ScoreCard key={c.id} card={c} scores={results} />
          ))}
        </div>

        {/* Pipeline trace */}
        <div style={{
          border: '4px solid #000', background: '#FFFDF5',
          padding: '1.5rem', boxShadow: '6px 6px 0px 0px #fff',
          marginBottom: '2.5rem',
        }}>
          <div style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.15em', borderBottom: '4px solid #000', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
            PIPELINE TRACE
          </div>
          {PIPELINE.map((s, i) => (
            <div key={s.step} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{
                  borderRadius: '9999px', border: '4px solid #000',
                  background: '#FFD93D', width: '2.5rem', height: '2.5rem',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 900, fontSize: '0.7rem', flexShrink: 0,
                }}>{s.step}</div>
                {i < PIPELINE.length - 1 && (
                  <div style={{ borderLeft: '4px solid #000', height: '2.5rem' }} />
                )}
              </div>
              <div style={{ paddingBottom: i < PIPELINE.length - 1 ? '0' : '0', paddingTop: '0.25rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                  <span style={{ fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.08em' }}>{s.label}</span>
                  <span style={{
                    borderRadius: '9999px', border: '4px solid #000',
                    background: '#000', color: '#fff',
                    fontSize: '0.65rem', fontWeight: 900,
                    padding: '0.1rem 0.5rem',
                  }}>{s.time}</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '0.85rem' }}>{s.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Scan Again */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            id="scan-again-btn"
            onClick={onScanAgain}
            style={{
              background: '#000', color: '#fff',
              border: '4px solid #fff',
              boxShadow: '8px 8px 0px 0px #fff',
              fontWeight: 900, fontSize: '1.2rem',
              textTransform: 'uppercase',
              height: '4rem', padding: '0 3rem',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              borderRadius: 0,
              transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '8px 8px 0px 0px #fff'; }}
          >
            ↺ SCAN AGAIN
          </button>
        </div>
      </div>
    </section>
  );
}
