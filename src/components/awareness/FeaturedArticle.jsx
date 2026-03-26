import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

export default function FeaturedArticle({ article }) {
  const [btnHeld, setBtnHeld]   = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (!article) return null;

  return (
    <section style={{ background: '#FFFDF5', padding: isMobile ? '1.5rem 1.25rem' : '3rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{
          border: '4px solid #000',
          background: '#fff',
          boxShadow: isMobile ? '8px 8px 0px 0px #000' : '16px 16px 0px 0px #000',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : '60% 40%',
          overflow: 'hidden',
        }}>

          {/* ─── Content ─── */}
          <div style={{ padding: isMobile ? '1.5rem' : '2.5rem' }}>

            {/* Badge row */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.4rem', marginBottom: '0.85rem' }}>
              {['FEATURED', '⚑ BREAKING', article.category].map((badge, i) => (
                <span key={i} style={{
                  borderRadius: i < 2 ? '9999px' : 0,
                  background: i === 1 ? '#FF6B6B' : i === 0 ? '#000' : 'transparent',
                  color: i < 2 ? '#fff' : '#000',
                  border: '4px solid #000',
                  padding: '0.15rem 0.75rem',
                  fontWeight: 900, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.12em',
                  boxShadow: '2px 2px 0px #000',
                  animation: i === 1 ? 'blink 2s ease-in-out infinite' : 'none',
                }}>
                  {badge}
                </span>
              ))}
              <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', color: 'rgba(0,0,0,0.5)', fontFamily: 'Space Grotesk, sans-serif', whiteSpace: 'nowrap' }}>
                {article.date} · {article.readTime}
              </span>
            </div>

            {/* Title */}
            <h2 style={{ fontSize: isMobile ? 'clamp(1.3rem, 5.5vw, 1.8rem)' : 'clamp(1.6rem, 3vw, 2.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1.1, fontFamily: 'Space Grotesk, sans-serif', margin: '0 0 1rem 0' }}>
              {article.title}
            </h2>

            {/* Excerpt */}
            <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', fontWeight: 700, lineHeight: 1.7, borderLeft: '4px solid #FF6B6B', paddingLeft: '1rem', color: 'rgba(0,0,0,0.8)', fontFamily: 'Space Grotesk, sans-serif', marginBottom: '1.25rem' }}>
              {article.excerpt}
            </p>

            {/* Tags */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
              {article.tags.map(tag => (
                <span key={tag} style={{ border: '4px solid #000', background: '#FFD93D', padding: '0.2rem 0.6rem', fontWeight: 900, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.06em', boxShadow: '2px 2px 0px #000', fontFamily: 'Space Grotesk, sans-serif', cursor: 'default', transition: 'transform 100ms, box-shadow 100ms' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '2px 2px 0px #000'; }}>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            <button
              style={{ background: '#FF6B6B', color: '#fff', border: '4px solid #000', height: '3.25rem', padding: '0 1.75rem', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: btnHeld ? 'none' : '6px 6px 0px 0px #000', transform: btnHeld ? 'translate(2px,2px)' : 'none', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', transition: 'transform 100ms, box-shadow 100ms', width: isMobile ? '100%' : 'auto' }}
              onMouseDown={() => setBtnHeld(true)}
              onMouseUp={() => setBtnHeld(false)}
              onMouseLeave={() => setBtnHeld(false)}
            >
              READ FULL ARTICLE →
            </button>
          </div>

          {/* ─── Stat Panel ─── */}
          <div style={{
            background: '#FF6B6B',
            borderTop: isMobile ? '4px solid #000' : 'none',
            borderLeft: isMobile ? 'none' : '4px solid #000',
            padding: isMobile ? '2rem 1.5rem' : '3rem 2rem',
            display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
            textAlign: 'center', color: '#fff', position: 'relative',
            minHeight: isMobile ? '160px' : 'auto',
          }}>
            {/* Ghost */}
            {article.stat && (
              <div aria-hidden="true" style={{ position: 'absolute', fontSize: isMobile ? 'clamp(3rem, 15vw, 5rem)' : 'clamp(4rem, 10vw, 7rem)', fontWeight: 900, WebkitTextStroke: '2px rgba(255,255,255,0.3)', color: 'transparent', userSelect: 'none', lineHeight: 1, top: '50%', left: '50%', transform: 'translate(-50%, -52%)', fontFamily: 'Space Grotesk, sans-serif', whiteSpace: 'nowrap' }}>
                {article.stat}
              </div>
            )}

            {article.stat && (
              <div style={{ fontSize: isMobile ? 'clamp(2.5rem, 12vw, 4.5rem)' : 'clamp(3.5rem, 8vw, 6rem)', fontWeight: 900, lineHeight: 1, color: '#fff', fontFamily: 'Space Grotesk, sans-serif', position: 'relative', zIndex: 1 }}>
                {article.stat}
              </div>
            )}
            {article.statLabel && (
              <div style={{ marginTop: '0.85rem', fontSize: '0.65rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.1em', border: '4px solid #fff', padding: '0.4rem 0.85rem', boxShadow: '4px 4px 0px #fff', position: 'relative', zIndex: 1 }}>
                {article.statLabel}
              </div>
            )}

            {/* Spinning star */}
            <div style={{ position: 'absolute', bottom: '0.75rem', right: '0.75rem', border: '4px solid #fff', borderRadius: '9999px', padding: '0.4rem', animation: 'spin 10s linear infinite', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={16} strokeWidth={3} color="#fff" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
