import React, { useEffect, useRef, useState } from 'react';

// Safe marquee with pure CSS animation instead of react-fast-marquee
const MARQUEE_TEXT = "DEEPFAKE DETECTED ✦ SYNTHETIC VOICE IDENTIFIED ✦ AI TEXT FLAGGED ✦ VISUAL ARTIFACTS FOUND ✦ STAY VIGILANT ✦  ";

function MarqueeBanner() {
  return (
    <div className="border-y-4 border-black bg-black py-3 overflow-hidden">
      <div style={{
        display: 'flex',
        whiteSpace: 'nowrap',
        animation: 'marqueeScroll 20s linear infinite',
      }}>
        {/* Repeat text enough times to fill any screen */}
        {[0, 1, 2, 3].map(i => (
          <span key={i} style={{
            color: '#FFFFFF',
            fontWeight: 900,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginRight: '3rem',
            flexShrink: 0,
          }}>
            {MARQUEE_TEXT}
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

export default function Hero({ onAnalyzeClick }) {
  const scanLineRef = useRef(null);
  const [linePos, setLinePos] = useState(0);

  useEffect(() => {
    let pos = 0;
    const timer = setInterval(() => {
      pos = (pos + 1) % 100;
      setLinePos(pos);
    }, 30);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="section-hero"
      style={{
        minHeight: '100vh',
        background: '#FFFDF5',
        backgroundImage: `
          linear-gradient(rgba(0,0,0,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,0,0,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '4rem 1.5rem',
        display: 'grid',
        gridTemplateColumns: '3fr 2fr',
        gap: '3rem',
        alignItems: 'center',
        flex: 1,
      }}>
        {/* LEFT — 60% */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', minWidth: 0 }}>

          {/* Bouncing badge */}
          <div>
            <span style={{
              display: 'inline-block',
              borderRadius: '9999px',
              background: '#FF6B6B',
              border: '4px solid #000',
              color: '#fff',
              fontWeight: 900,
              fontSize: '0.7rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '0.4rem 1.2rem',
              boxShadow: '4px 4px 0px 0px #000',
              animation: 'bounce 2s ease-in-out infinite',
            }}>
              ⚡ AI-POWERED DETECTION
            </span>
          </div>

          {/* Headline */}
          <div style={{ lineHeight: 1 }}>
            <div style={{
              fontSize: 'clamp(4rem, 11vw, 9rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              WebkitTextStroke: '3px #000',
              color: 'transparent',
              lineHeight: 1,
            }}>CATCH</div>

            <div style={{ lineHeight: 1.05, margin: '0.1em 0' }}>
              <span style={{
                display: 'inline-block',
                fontSize: 'clamp(4rem, 11vw, 9rem)',
                fontWeight: 900,
                textTransform: 'uppercase',
                background: '#FF6B6B',
                color: '#fff',
                border: '4px solid #000',
                padding: '0 0.2em',
                transform: 'rotate(-1deg)',
                boxShadow: '8px 8px 0px 0px #000',
                lineHeight: 1.05,
              }}>THE</span>
            </div>

            <div style={{
              fontSize: 'clamp(4rem, 11vw, 9rem)',
              fontWeight: 900,
              textTransform: 'uppercase',
              color: '#000',
              lineHeight: 1,
            }}>FAKE.</div>
          </div>

          {/* Subheadline */}
          <p style={{
            fontSize: '1.15rem',
            fontWeight: 700,
            maxWidth: '28rem',
            borderLeft: '4px solid #000',
            paddingLeft: '1rem',
            lineHeight: 1.5,
          }}>
            Multi-modal AI detection across image, video, audio, and text. Zero mercy for synthetic media.
          </p>

          {/* CTA Row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              id="hero-analyze-btn"
              onClick={onAnalyzeClick}
              style={{
                background: '#FF6B6B',
                color: '#fff',
                border: '4px solid #000',
                height: '3.5rem',
                padding: '0 2rem',
                fontWeight: 900,
                fontFamily: 'Space Grotesk, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '6px 6px 0px 0px #000',
                fontSize: '1.1rem',
                cursor: 'pointer',
                borderRadius: 0,
                transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000'; }}
            >
              ANALYZE NOW →
            </button>
            <button
              id="hero-how-btn"
              onClick={() => document.getElementById('section-howitworks')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: '#fff',
                color: '#000',
                border: '4px solid #000',
                height: '3.5rem',
                padding: '0 2rem',
                fontWeight: 900,
                fontFamily: 'Space Grotesk, sans-serif',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                boxShadow: '6px 6px 0px 0px #000',
                fontSize: '1.1rem',
                cursor: 'pointer',
                borderRadius: 0,
                transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000'; }}
            >
              SEE HOW IT WORKS
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', marginTop: '1.5rem' }}>
            {[['98.2%', 'ACCURACY'], ['3', 'MODALITIES'], ['<2S', 'PER SCAN']].map(([val, lbl]) => (
              <div key={lbl} style={{
                border: '4px solid #000',
                background: '#fff',
                padding: '1rem',
                boxShadow: '4px 4px 0px 0px #000',
                textAlign: 'center',
                minWidth: '90px',
              }}>
                <div style={{ fontSize: '2.25rem', fontWeight: 900, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.25rem' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Visual Chaos Zone */}
        <div style={{ minHeight: '460px', position: 'relative' }}>
          <div style={{
            border: '4px solid #000',
            background: 'rgba(196, 181, 253, 0.3)',
            boxShadow: '12px 12px 0px 0px #000',
            position: 'relative',
            minHeight: '460px',
            overflow: 'visible',
          }}>
            {/* Bg outlined text */}
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              pointerEvents: 'none', overflow: 'hidden', opacity: 0.07,
            }}>
              <span style={{
                fontSize: 'clamp(5rem, 10vw, 8rem)',
                fontWeight: 900, textTransform: 'uppercase',
                WebkitTextStroke: '3px #000', color: 'transparent',
              }}>REAL</span>
            </div>

            {/* Stickers */}
            <div style={{
              position: 'absolute', top: '1rem', left: '1rem',
              border: '4px solid #000', background: '#FFD93D',
              padding: '0.5rem 0.75rem', fontWeight: 900, fontSize: '0.85rem',
              textTransform: 'uppercase', boxShadow: '4px 4px 0px 0px #000',
              transform: 'rotate(-3deg)', zIndex: 20,
            }}>📷 IMAGE</div>

            <div style={{
              position: 'absolute', top: '3rem', right: '-1rem',
              border: '4px solid #000', background: '#C4B5FD',
              padding: '0.5rem 0.75rem', fontWeight: 900, fontSize: '0.85rem',
              textTransform: 'uppercase', boxShadow: '4px 4px 0px 0px #000',
              transform: 'rotate(2deg)', zIndex: 20,
            }}>🎙 AUDIO</div>

            <div style={{
              position: 'absolute', bottom: '2rem', left: '2rem',
              border: '4px solid #000', background: '#FF6B6B',
              color: '#fff',
              padding: '0.5rem 0.75rem', fontWeight: 900, fontSize: '0.85rem',
              textTransform: 'uppercase', boxShadow: '4px 4px 0px 0px #000',
              transform: 'rotate(-1deg)', zIndex: 20,
            }}>✉ TEXT</div>

            {/* Central scan card */}
            <div style={{
              margin: '3.5rem 1.5rem',
              border: '4px solid #000',
              background: '#fff',
              boxShadow: '8px 8px 0px 0px #000',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* SCAN PROGRESS header */}
              <div style={{
                borderBottom: '4px solid #000',
                padding: '0.6rem 1rem',
                fontWeight: 900,
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                background: '#FFFDF5',
              }}>SCAN PROGRESS</div>
              <div style={{ padding: '1rem 1rem 1rem' }}>
              {/* Scan line */}
              <div style={{
                position: 'absolute',
                left: 0,
                width: '100%',
                height: '2px',
                background: '#FF6B6B',
                opacity: 0.7,
                top: `${linePos}%`,
                transition: 'top 0.03s linear',
                zIndex: 10,
                pointerEvents: 'none',
              }} />

              {/* Progress bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { label: 'IMAGE', value: 87, color: '#FFD93D' },
                  { label: 'AUDIO', value: 64, color: '#C4B5FD' },
                  { label: 'TEXT', value: 92, color: '#FF6B6B' },
                ].map(({ label, value, color }) => (
                  <div key={label}>
                    <div style={{ fontWeight: 900, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{label}</div>
                    <div style={{ border: '2px solid #000', height: '1.25rem', background: '#FFFDF5', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ width: `${value}%`, height: '100%', background: color }} />
                    </div>
                    <div style={{ fontSize: '0.7rem', fontWeight: 700, marginTop: '0.15rem' }}>{value}%</div>
                  </div>
                ))}
              </div>

              {/* Verdict */}
              <div style={{
                background: '#FF6B6B',
                color: '#fff',
                border: '4px solid #000',
                textAlign: 'center',
                fontSize: '1.1rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                padding: '0.5rem',
                boxShadow: '4px 4px 0px 0px #000',
              }}>
                ⚠ VERDICT: DEEPFAKE
              </div>
              </div>{/* end padding wrapper */}
            </div>{/* end scan card */}
          </div>{/* end violet box */}
        </div>{/* end right col */}
      </div>

      {/* Marquee */}
      <MarqueeBanner />
    </section>
  );
}
