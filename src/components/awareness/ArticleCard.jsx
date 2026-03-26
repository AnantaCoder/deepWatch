import React, { useState } from 'react';
import { Shield } from 'lucide-react';

const SEVERITY_HEADER = {
  CRITICAL: { bg: '#FF6B6B', color: '#fff' },
  HIGH:     { bg: '#FFD93D', color: '#000' },
  MEDIUM:   { bg: '#C4B5FD', color: '#000' },
  INFO:     { bg: '#FFFDF5', color: '#000' },
};

export default function ArticleCard({ article }) {
  const [hovered, setHovered] = useState(false);
  const [readHovered, setReadHovered] = useState(false);

  const header = SEVERITY_HEADER[article.severity] || SEVERITY_HEADER.INFO;

  return (
    <div
      style={{
        background: '#fff',
        border: '4px solid #000',
        boxShadow: hovered ? '12px 12px 0px 0px #000' : '8px 8px 0px 0px #000',
        transform: hovered ? 'translateY(-4px)' : 'none',
        transition: 'transform 200ms ease-linear, box-shadow 200ms ease-linear',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ─── Card Header ─── */}
      <div
        style={{
          background: header.bg,
          color: header.color,
          borderBottom: '4px solid #000',
          padding: '1rem 1.25rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          {/* Left: category + severity badge */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
            <span
              style={{
                borderRadius: '9999px',
                border: '2px solid rgba(0,0,0,0.3)',
                background: 'rgba(0,0,0,0.1)',
                padding: '0.15rem 0.6rem',
                fontWeight: 900,
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                display: 'inline-block',
                fontFamily: 'Space Grotesk, sans-serif',
              }}
            >
              {article.category}
            </span>
            {(article.severity === 'CRITICAL' || article.isBreaking) && (
              <span
                style={{
                  borderRadius: '9999px',
                  background: '#000',
                  color: '#fff',
                  padding: '0.15rem 0.6rem',
                  fontWeight: 900,
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  display: 'inline-block',
                  fontFamily: 'Space Grotesk, sans-serif',
                  animation: article.isBreaking ? 'blink 2s ease-in-out infinite' : 'none',
                }}
              >
                {article.isBreaking ? '⚑ BREAKING' : '⚠ CRITICAL'}
              </span>
            )}
          </div>

          {/* Right: date + read time */}
          <div
            style={{
              fontWeight: 700,
              fontSize: '0.65rem',
              textTransform: 'uppercase',
              opacity: 0.6,
              textAlign: 'right',
              fontFamily: 'Space Grotesk, sans-serif',
              flexShrink: 0,
              marginLeft: '0.5rem',
            }}
          >
            {article.date}<br />{article.readTime}
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            marginTop: '0.75rem',
            fontSize: '1.05rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.25,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            fontFamily: 'Space Grotesk, sans-serif',
            margin: '0.75rem 0 0 0',
          }}
        >
          {article.title}
        </h3>
      </div>

      {/* ─── Card Body ─── */}
      <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Excerpt */}
        <p
          style={{
            fontSize: '0.85rem',
            fontWeight: 700,
            lineHeight: 1.65,
            color: 'rgba(0,0,0,0.7)',
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            flex: 1,
            fontFamily: 'Space Grotesk, sans-serif',
            margin: 0,
          }}
        >
          {article.excerpt}
        </p>

        {/* Stat block */}
        {article.stat && (
          <div
            style={{
              border: '4px solid #000',
              marginTop: '1rem',
              padding: '0.75rem',
              background: '#FFFDF5',
              boxShadow: '3px 3px 0px #000',
              display: 'flex',
              alignItems: 'baseline',
              gap: '0.75rem',
            }}
          >
            <span
              style={{
                fontSize: '1.75rem',
                fontWeight: 900,
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#000',
                lineHeight: 1,
              }}
            >
              {article.stat}
            </span>
            <span
              style={{
                fontSize: '0.6rem',
                fontWeight: 900,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                fontFamily: 'Space Grotesk, sans-serif',
                color: '#000',
              }}
            >
              {article.statLabel}
            </span>
          </div>
        )}

        {/* Tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
          {article.tags.map(tag => (
            <span
              key={tag}
              style={{
                border: '2px solid #000',
                padding: '0.15rem 0.5rem',
                fontWeight: 700,
                fontSize: '0.6rem',
                textTransform: 'uppercase',
                background: '#FFFDF5',
                fontFamily: 'Space Grotesk, sans-serif',
                cursor: 'default',
                transition: 'background 100ms, color 100ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#000'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#FFFDF5'; e.currentTarget.style.color = '#000'; }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ─── Card Footer ─── */}
      <div
        style={{
          borderTop: '4px solid #000',
          padding: '0.85rem 1.25rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span
          style={{
            fontWeight: 900,
            fontSize: '0.8rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            borderBottom: `4px solid ${readHovered ? '#FF6B6B' : '#000'}`,
            color: readHovered ? '#FF6B6B' : '#000',
            paddingBottom: '2px',
            cursor: 'pointer',
            fontFamily: 'Space Grotesk, sans-serif',
            transition: 'color 100ms, border-color 100ms',
          }}
          onMouseEnter={() => setReadHovered(true)}
          onMouseLeave={() => setReadHovered(false)}
        >
          READ MORE →
        </span>

        {/* Shield icon */}
        <div
          style={{
            border: '4px solid #000',
            padding: '0.35rem',
            background: header.bg,
            boxShadow: '2px 2px 0px #000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Shield size={18} strokeWidth={3} color={header.color} />
        </div>
      </div>
    </div>
  );
}
