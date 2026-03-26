import React from 'react';

const SERVICES = [
  { name: 'FRONTEND', port: ':3000', tech: 'React + Vite', color: '#FFD93D' },
  { name: 'API GATEWAY', port: ':8000', tech: 'FastAPI + Uvicorn', color: '#fff' },
  { name: 'IMAGE-MODEL', port: ':8001 GPU', tech: 'EfficientNetV2 + XceptionNet', color: '#FF6B6B' },
  { name: 'AUDIO-MODEL', port: ':8002', tech: 'Wav2Vec2 + RawNet2', color: '#C4B5FD' },
  { name: 'TEXT-MODEL', port: ':8003', tech: 'RoBERTa-base', color: '#fff' },
];

export default function DockerServices() {
  return (
    <section
      id="section-docker"
      style={{
        background: '#000',
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '40px 40px',
        borderBottom: '4px solid #000',
        padding: '4rem 0',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>

        {/* Title */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          <h2 style={{
            fontWeight: 900, textTransform: 'uppercase',
            color: '#fff', lineHeight: 1,
            fontSize: 'clamp(3rem, 10vw, 8rem)',
          }}>SHIP IT.</h2>
        </div>

        {/* Services */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', alignItems: 'center' }}>
          {SERVICES.map((s, i) => (
            <React.Fragment key={s.name}>
              <div
                style={{
                  border: `4px solid ${s.color}`,
                  color: '#fff',
                  background: 'transparent',
                  boxShadow: '6px 6px 0px 0px #fff',
                  padding: '1.25rem',
                  display: 'flex', flexDirection: 'column', gap: '0.75rem',
                  minWidth: '150px',
                  transition: 'background 100ms ease-linear',
                  cursor: 'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                <span style={{ fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.name}</span>
                <span style={{
                  borderRadius: '9999px',
                  border: `4px solid ${s.color}`,
                  color: s.color,
                  fontWeight: 900, fontSize: '0.7rem',
                  padding: '0.15rem 0.7rem',
                  alignSelf: 'flex-start',
                }}>{s.port}</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'rgba(255,255,255,0.6)' }}>{s.tech}</span>
              </div>
              {i < SERVICES.length - 1 && (
                <div style={{
                  display: 'none',
                  width: '2rem',
                  borderTop: '2px dashed rgba(255,255,255,0.25)',
                  '@media (min-width: 1024px)': { display: 'block' },
                }} className="hidden lg:block" />
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Code block */}
        <div style={{
          border: '4px solid #fff',
          background: 'rgba(255,255,255,0.04)',
          padding: '1.5rem',
          boxShadow: '6px 6px 0px 0px #fff',
        }}>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontFamily: 'monospace' }}>
            docker-compose.yml
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontFamily: 'monospace', fontSize: '0.85rem' }}>
            <div style={{ borderLeft: '4px solid #4ade80', paddingLeft: '0.75rem', color: '#4ade80' }}>$ docker-compose up --build</div>
            <div style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: '1rem' }}>[+] Running 5/5</div>
            {SERVICES.map(s => (
              <div key={s.name} style={{ color: 'rgba(255,255,255,0.5)', paddingLeft: '1rem' }}>
                {' ✔ '}{s.name.toLowerCase().replace(/ /g, '-').padEnd(18)} Running on {s.port}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
