import React from 'react';

const TICKER_TEXT =
  'VOICE CLONE SCAM — ₹40L STOLEN ✦ $25M CORPORATE DEEPFAKE FRAUD ✦ 1.1M CYBER CRIMES IN INDIA 2023 ✦ 96% OF DEEPFAKES NON-CONSENSUAL ✦ 10 SECONDS OF AUDIO = VOICE CLONE ✦ AI PHONE SCAMS RISING 230% ✦ 3 PHOTOS ENOUGH TO FAKE YOUR FACE ✦ STAY ALERT. STAY INFORMED. ✦ ';

export default function NewsTickerBar({ variant = 'yellow' }) {
  const isYellow = variant === 'yellow';

  return (
    <div
      style={{
        borderTop: '4px solid #000',
        borderBottom: '4px solid #000',
        background: isYellow ? '#FFD93D' : '#000',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
        position: 'relative',
      }}
    >
      {/* Fixed left anchor */}
      <div
        style={{
          background: isYellow ? '#000' : '#FFD93D',
          color: isYellow ? '#FFD93D' : '#000',
          fontWeight: 900,
          fontSize: '0.7rem',
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          padding: '0.75rem 1rem',
          borderRight: `4px solid ${isYellow ? '#000' : '#FFD93D'}`,
          whiteSpace: 'nowrap',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          zIndex: 2,
        }}
      >
        LIVE THREATS
      </div>

      {/* Scrolling area */}
      <div style={{ overflow: 'hidden', flex: 1, display: 'flex', alignItems: 'center' }}>
        <div
          className="ticker-track"
          style={{
            color: isYellow ? '#000' : '#FFD93D',
            fontWeight: 900,
            fontSize: '0.85rem',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            paddingLeft: '2rem',
          }}
        >
          <span>{TICKER_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TICKER_TEXT}</span>
          <span aria-hidden="true">{TICKER_TEXT}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{TICKER_TEXT}</span>
        </div>
      </div>
    </div>
  );
}
