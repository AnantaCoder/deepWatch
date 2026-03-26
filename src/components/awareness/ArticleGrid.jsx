import React, { useRef, useState, useEffect } from 'react';
import ArticleCard from './ArticleCard';

export default function ArticleGrid({ articles, activeCategory, onReset }) {
  const label = activeCategory === 'ALL' ? 'ALL THREATS' : activeCategory;
  const [isMobile, setIsMobile] = useState(false);
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft]   = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Update arrow visibility whenever articles or isMobile changes
  useEffect(() => {
    updateScrollState();
  }, [articles, isMobile]);

  function updateScrollState() {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
  }

  function scroll(dir) {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * 300, behavior: 'smooth' });
    setTimeout(updateScrollState, 350);
  }

  return (
    <section
      id="article-grid"
      style={{ background: '#FFFDF5', position: 'relative', padding: isMobile ? '2.5rem 1.25rem' : '4rem 1.5rem', overflow: 'hidden' }}
    >
      {/* Halftone texture */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(#000 1px, transparent 1.5px)', backgroundSize: '28px 28px', opacity: 0.04, pointerEvents: 'none' }} />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: isMobile ? '1.5rem' : '2.5rem', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: isMobile ? 'clamp(1.75rem, 8vw, 2.5rem)' : 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif', margin: 0 }}>
            {label}
          </h2>

          {/* Count pill */}
          <span style={{ border: '4px solid #000', background: '#000', color: '#fff', borderRadius: '9999px', padding: '0.15rem 0.85rem', fontWeight: 900, fontSize: '1rem', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.4 }}>
            {articles.length}
          </span>

          <span style={{ marginLeft: 'auto', fontWeight: 700, fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(0,0,0,0.4)', fontFamily: 'Space Grotesk, sans-serif' }}>
            {isMobile ? 'SWIPE →' : 'SORTED BY SEVERITY'}
          </span>
        </div>

        {/* ── Empty state ── */}
        {articles.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '5rem 1rem' }}>
            <div style={{ width: '5.5rem', height: '5.5rem', border: '8px solid #000', borderRadius: '9999px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 900, fontFamily: 'Space Grotesk, sans-serif' }}>!</div>
            <div style={{ fontSize: isMobile ? '1.2rem' : '1.6rem', fontWeight: 900, textTransform: 'uppercase', marginTop: '1.25rem', fontFamily: 'Space Grotesk, sans-serif' }}>
              NO ARTICLES IN THIS CATEGORY
            </div>
            <button onClick={onReset} style={{ background: '#000', color: '#fff', border: '4px solid #000', height: '3rem', padding: '0 2rem', fontWeight: 900, textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.1em', boxShadow: '4px 4px 0px #000', cursor: 'pointer', marginTop: '1.5rem', fontFamily: 'Space Grotesk, sans-serif', transition: 'transform 100ms, box-shadow 100ms' }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}>
              SHOW ALL
            </button>
          </div>
        ) : isMobile ? (
          /* ── MOBILE: horizontal scroll carousel ── */
          <div style={{ position: 'relative' }}>
            {/* Left arrow */}
            {canScrollLeft && (
              <button
                onClick={() => scroll(-1)}
                aria-label="Scroll left"
                style={{ position: 'absolute', left: '-0.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#000', color: '#FFD93D', border: '4px solid #000', width: '2.75rem', height: '2.75rem', fontWeight: 900, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0px #FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ‹
              </button>
            )}

            {/* Right arrow */}
            {canScrollRight && (
              <button
                onClick={() => scroll(1)}
                aria-label="Scroll right"
                style={{ position: 'absolute', right: '-0.5rem', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: '#000', color: '#FFD93D', border: '4px solid #000', width: '2.75rem', height: '2.75rem', fontWeight: 900, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '3px 3px 0px #FF6B6B', fontFamily: 'Space Grotesk, sans-serif' }}
              >
                ›
              </button>
            )}

            {/* Scroll track */}
            <div
              ref={scrollRef}
              onScroll={updateScrollState}
              style={{ display: 'flex', gap: '1rem', overflowX: 'auto', overflowY: 'visible', paddingBottom: '1.25rem', paddingLeft: '0.25rem', paddingRight: '0.25rem', scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {articles.map(article => (
                <div
                  key={article.id}
                  style={{ minWidth: 'min(82vw, 300px)', maxWidth: 'min(82vw, 300px)', scrollSnapAlign: 'start', display: 'flex', flexDirection: 'column' }}
                >
                  <ArticleCard article={article} />
                </div>
              ))}
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.4rem', marginTop: '0.75rem' }}>
              {articles.map((_, i) => (
                <div
                  key={i}
                  style={{ width: '8px', height: '8px', border: '2px solid #000', background: i === 0 ? '#000' : 'transparent' }}
                />
              ))}
            </div>
          </div>
        ) : (
          /* ── DESKTOP: normal grid ── */
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
            {articles.map(article => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
