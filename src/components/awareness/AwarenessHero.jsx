import React, { useEffect, useRef, useState } from 'react';

const THREAT_BARS = [
  { label: 'VOICE CLONE SCAMS', pct: 94, color: '#FF6B6B' },
  { label: 'VIDEO DEEPFAKES',   pct: 87, color: '#FF6B6B' },
  { label: 'FAKE KYC CALLS',    pct: 76, color: '#FFD93D' },
  { label: 'AI PHISHING',       pct: 68, color: '#C4B5FD' },
  { label: 'FACE HARVEST',      pct: 61, color: '#C4B5FD' },
];

function ThreatBar({ label, pct, color, animated }) {
  return (
    <div style={{ marginBottom: '0.85rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
        <span style={{ fontWeight: 700, color: '#fff', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
          {label}
        </span>
        <span style={{ fontWeight: 900, color: '#FFD93D', fontSize: '0.8rem' }}>{pct}%</span>
      </div>
      <div style={{ border: '2px solid rgba(255,255,255,0.3)', height: '0.85rem', background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{ height: '100%', background: color, width: animated ? `${pct}%` : '0%', transition: 'width 700ms ease-out' }} />
      </div>
    </div>
  );
}

export default function AwarenessHero({ onReadLatest }) {
  const [animated, setAnimated]   = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 250);
    return () => clearTimeout(t);
  }, []);

  const headlineSize = isMobile ? 'clamp(2.6rem, 13vw, 4rem)' : 'clamp(3rem, 7vw, 6rem)';

  return (
    <section style={{ background: '#000', position: 'relative', overflow: 'hidden', padding: isMobile ? '3rem 1.25rem 2.5rem' : '5rem 1.5rem' }}>
      {/* Halftone */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#fff 1px, transparent 1.5px)', backgroundSize: '24px 24px', opacity: 0.06, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── MAIN LAYOUT: row on desktop, column on mobile ── */}
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: isMobile ? '2.5rem' : '3rem', alignItems: isMobile ? 'stretch' : 'center' }}>

          {/* ─── LEFT / TOP — Hero text ─── */}
          <div style={{ flex: isMobile ? 'unset' : '0 0 62%', minWidth: 0 }}>

            {/* Breaking pill */}
            <div style={{ marginBottom: '1.25rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                borderRadius: '9999px', background: '#FF6B6B', color: '#fff',
                border: '4px solid #fff', fontWeight: 900, fontSize: '0.65rem',
                textTransform: 'uppercase', letterSpacing: '0.12em',
                padding: '0.25rem 0.85rem', boxShadow: '4px 4px 0px 0px #fff',
                animation: 'blink 2s ease-in-out infinite',
              }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#fff', display: 'inline-block', animation: 'blink 1s ease-in-out infinite', flexShrink: 0 }} />
                ⚑ AWARENESS HUB — STAY INFORMED
              </span>
            </div>

            {/* Headline stack */}
            <div style={{ position: 'relative', marginBottom: '0.4rem' }}>
              {/* Ghost */}
              <div aria-hidden="true" style={{ position: 'absolute', top: '3px', left: '3px', fontSize: headlineSize, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, WebkitTextStroke: '2px #fff', color: 'transparent', opacity: 0.25, userSelect: 'none', fontFamily: 'Space Grotesk, sans-serif' }}>
                THE TRUTH
              </div>
              <div style={{ fontSize: headlineSize, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', position: 'relative' }}>
                THE TRUTH
              </div>
            </div>

            <div style={{ marginBottom: '0.4rem' }}>
              <span style={{
                display: 'inline-block', fontSize: headlineSize, fontWeight: 900, textTransform: 'uppercase',
                lineHeight: 1, background: '#FF6B6B', color: '#fff', border: '4px solid #fff',
                padding: '0 0.4rem', transform: 'rotate(-1deg)',
                boxShadow: isMobile ? '4px 4px 0px 0px #fff' : '8px 8px 0px 0px #fff',
                fontFamily: 'Space Grotesk, sans-serif',
              }}>
                IS BEING
              </span>
            </div>

            <div style={{ fontSize: headlineSize, fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, color: '#FFD93D', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1.25rem' }}>
              FAKED.
            </div>

            {/* Subtext */}
            <p style={{ fontSize: isMobile ? '0.95rem' : '1.1rem', fontWeight: 700, color: 'rgba(255,255,255,0.8)', borderLeft: '4px solid #FFD93D', paddingLeft: '1rem', marginBottom: '2rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              Real cases. Real victims. Real consequences.
            </p>

            {/* Stats row */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '1.75rem' }}>
              {[{ num: '9', label: 'ARTICLES' }, { num: '3', label: 'CATEGORIES' }, { num: '₹40L+', label: 'CASES COVERED' }].map(({ num, label }) => (
                <div key={label} style={{ border: '4px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: isMobile ? '0.75rem' : '1rem 1.25rem', boxShadow: '4px 4px 0px 0px rgba(255,255,255,0.3)', color: '#fff', flex: isMobile ? '1 1 0' : 'initial', minWidth: isMobile ? '0' : '90px', textAlign: isMobile ? 'center' : 'left' }}>
                  <div style={{ fontSize: isMobile ? '1.5rem' : '2rem', fontWeight: 900, color: '#FFD93D', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif' }}>{num}</div>
                  <div style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(255,255,255,0.6)', marginTop: '0.2rem' }}>{label}</div>
                </div>
              ))}
            </div>

            {/* CTA buttons */}
            <div style={{ display: 'flex', gap: '0.75rem', flexDirection: isMobile ? 'column' : 'row' }}>
              <button
                onClick={onReadLatest}
                style={{ background: '#FF6B6B', color: '#fff', border: '4px solid #fff', height: '3.25rem', padding: '0 1.75rem', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: '6px 6px 0px 0px #fff', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', transition: 'transform 100ms, box-shadow 100ms', width: isMobile ? '100%' : 'auto' }}
                onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0px 0px #fff'; }}
              >
                READ LATEST →
              </button>
              <a
                href="https://cybercrime.gov.in" target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', color: '#fff', border: '4px solid #fff', height: '3.25rem', padding: '0 1.75rem', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: '6px 6px 0px 0px rgba(255,255,255,0.3)', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'background 150ms', width: isMobile ? '100%' : 'auto' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
              >
                REPORT A CASE
              </a>
            </div>
          </div>

          {/* ─── RIGHT / BOTTOM — Threat Meter ─── */}
          <div style={{ flex: 1, border: '4px solid rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)', padding: isMobile ? '1.25rem' : '1.75rem', boxShadow: '8px 8px 0px 0px rgba(255,255,255,0.2)' }}>
            <div style={{ fontWeight: 900, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#fff', borderBottom: '4px solid rgba(255,255,255,0.2)', paddingBottom: '0.65rem', marginBottom: '1.1rem' }}>
              THREAT LEVEL
            </div>
            {THREAT_BARS.map(bar => <ThreatBar key={bar.label} {...bar} animated={animated} />)}
            <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.75rem' }}>
              Updated Mar 2025
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
