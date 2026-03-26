import React, { useState, useEffect } from 'react';
import awarenessArticles from '../../data/awarenessArticles';

const SEVERITY_COLORS = {
  CRITICAL: '#FF6B6B',
  HIGH:     '#FFD93D',
  MEDIUM:   '#C4B5FD',
  INFO:     '#fff',
};

function getCategoryCounts() {
  const counts = {};
  awarenessArticles.forEach(a => { counts[a.category] = (counts[a.category] || 0) + 1; });
  return counts;
}
const categoryCounts = getCategoryCounts();

const PILLS = [
  { label: 'ALL',              value: 'ALL' },
  { label: 'DEEPFAKE',        value: 'DEEPFAKE' },
  { label: 'CYBERCRIME',      value: 'CYBERCRIME' },
  { label: 'SCAM ALERT',      value: 'SCAM ALERT' },
  { label: 'HOW TO STAY SAFE', value: 'HOW TO STAY SAFE' },
  { label: 'CASE STUDY',      value: 'CASE STUDY' },
  { label: 'BREAKING',        value: 'BREAKING' },
];

function getPillLabel(pill) {
  if (pill.value === 'ALL') return `ALL (${awarenessArticles.length})`;
  return `${pill.label} (${categoryCounts[pill.value] || 0})`;
}

export default function CategoryFilter({ activeCategory, setActiveCategory }) {
  const [hovered, setHovered]   = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <section
      style={{
        background: '#FFFDF5',
        borderBottom: '4px solid #000',
        padding: isMobile ? '1.25rem 1.25rem' : '2rem 1.5rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)', backgroundSize: '40px 40px', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── PILLS ROW — scrollable on mobile ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.5rem' : '0.75rem', overflowX: isMobile ? 'auto' : 'visible', paddingBottom: isMobile ? '0.75rem' : 0, scrollbarWidth: 'none', msOverflowStyle: 'none' }}>

          {/* Label */}
          <span style={{ fontWeight: 900, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', borderRight: '4px solid #000', paddingRight: '0.85rem', marginRight: '0.1rem', whiteSpace: 'nowrap', fontFamily: 'Space Grotesk, sans-serif', flexShrink: 0 }}>
            FILTER:
          </span>

          {/* Pills */}
          {PILLS.map(pill => {
            const isActive = activeCategory === pill.value;
            const isHov    = hovered === pill.value && !isMobile;
            return (
              <button
                key={pill.value}
                onClick={() => setActiveCategory(pill.value)}
                onMouseEnter={() => setHovered(pill.value)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isActive || isHov ? '#000' : '#fff',
                  color:      isActive || isHov ? '#fff' : '#000',
                  border: '4px solid #000',
                  fontWeight: 900,
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '0.35rem 0.75rem',
                  boxShadow: isActive ? 'none' : '3px 3px 0px #000',
                  transform:  isActive ? 'translate(2px,2px)' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'all 120ms ease-linear',
                  borderRadius: 0,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                {getPillLabel(pill)}
              </button>
            );
          })}
        </div>

        {/* ── Severity legend — hidden on mobile to save space ── */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.75rem' }}>
            <span style={{ fontWeight: 900, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.12em', fontFamily: 'Space Grotesk, sans-serif', opacity: 0.5 }}>SEVERITY:</span>
            {Object.entries(SEVERITY_COLORS).map(([sev, color]) => (
              <div key={sev} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <div style={{ width: '11px', height: '11px', background: color, border: '2px solid #000', flexShrink: 0 }} />
                <span style={{ fontWeight: 700, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Space Grotesk, sans-serif' }}>{sev}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
