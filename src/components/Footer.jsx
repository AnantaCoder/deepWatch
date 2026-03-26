import React from 'react';

const TECH_STACK = ['PyTorch', 'FastAPI', 'Docker', 'HuggingFace', 'React'];
const LINKS = ['ANALYZE', 'HOW IT WORKS', 'DATASETS', 'GITHUB'];
const LINK_IDS = { 'ANALYZE': 'section-analyze', 'HOW IT WORKS': 'section-howitworks', 'DATASETS': 'section-datasets', 'GITHUB': null };

export default function Footer() {
  const scrollTo = (id) => {
    if (!id) { window.open('https://github.com', '_blank'); return; }
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: '#FFD93D',
      borderTop: '8px solid #000',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 1.5rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '3rem',
        }}>
          {/* Logo + tagline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{
              border: '4px solid #000', background: '#000', color: '#fff',
              padding: '0.6rem 1.25rem', fontWeight: 900, fontSize: '1.5rem',
              textTransform: 'uppercase', boxShadow: '8px 8px 0px 0px #000',
              transform: 'rotate(-1deg)', alignSelf: 'flex-start',
            }}>DEEP//WATCH</div>
            <p style={{ fontWeight: 900, fontStyle: 'italic', fontSize: '1.4rem', margin: 0 }}>"No fake gets past us."</p>
            <p style={{ fontWeight: 700, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0 }}>
              Built for hackathon. Designed to win.
            </p>
          </div>

          {/* Quick links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', borderBottom: '4px solid #000', paddingBottom: '0.4rem', marginBottom: '0.5rem' }}>
              QUICK LINKS
            </span>
            {LINKS.map(link => (
              <button
                key={link}
                onClick={() => scrollTo(LINK_IDS[link])}
                style={{
                  fontWeight: 900, textTransform: 'uppercase', textAlign: 'left',
                  background: 'transparent', border: 'none', borderBottom: '2px solid transparent',
                  cursor: 'pointer', fontSize: '0.95rem',
                  fontFamily: 'Space Grotesk, sans-serif', padding: '0.2rem 0',
                  transition: 'all 100ms ease-linear',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderBottom = '4px solid #000'; }}
                onMouseLeave={e => { e.currentTarget.style.borderBottom = '2px solid transparent'; }}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Tech stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <span style={{ fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', borderBottom: '4px solid #000', paddingBottom: '0.4rem', marginBottom: '0.5rem' }}>
              TECH STACK
            </span>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {TECH_STACK.map(tech => (
                <span key={tech} style={{
                  borderRadius: '9999px', border: '4px solid #000',
                  padding: '0.25rem 0.75rem', fontWeight: 900, fontSize: '0.8rem',
                  background: '#fff', boxShadow: '4px 4px 0px 0px #000',
                }}>{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '4px solid #000', marginTop: '3rem', paddingTop: '1.5rem',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between',
          alignItems: 'center', gap: '1rem',
        }}>
          <span style={{ fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', fontSize: '0.8rem' }}>
            DEEP//WATCH © 2026
          </span>
          <span style={{ fontWeight: 700, fontStyle: 'italic', fontSize: '0.85rem' }}>
            Made with rage against synthetic media.
          </span>
        </div>
      </div>

      {/* Spinning star */}
      <div style={{
        position: 'absolute', bottom: '1.5rem', right: '1.5rem',
        border: '4px solid #000', borderRadius: '9999px',
        padding: '1rem', background: '#FF6B6B',
        animation: 'spin 10s linear infinite',
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
    </footer>
  );
}
