import React, { useEffect, useState } from 'react';

const STEPS = [
  'UPLOADING FILE...',
  'PREPROCESSING DATA...',
  'RUNNING IMAGE MODEL...',
  'RUNNING AUDIO MODEL...',
  'RUNNING TEXT MODEL...',
  'FUSING RESULTS...',
];

export default function ScanningOverlay({ onComplete }) {
  const [stepIndex, setStepIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalSteps = STEPS.length;
    let currentStep = 0;
    let currentProgress = 0;

    const run = () => {
      if (currentStep >= totalSteps - 1) {
        setProgress(100);
        setTimeout(() => onComplete(), 600);
        return;
      }
      currentStep += 1;
      currentProgress = Math.min(currentProgress + Math.round(95 / (totalSteps - 1)), 95);
      setStepIndex(currentStep);
      setProgress(currentProgress);
      setTimeout(run, 450);
    };

    const t = setTimeout(run, 450);
    return () => clearTimeout(t);
  }, [onComplete]);

  const MODALITY_DONE = [
    { label: 'IMAGE / VIDEO', done: stepIndex > 2 },
    { label: 'AUDIO', done: stepIndex > 3 },
    { label: 'TEXT / EMAIL', done: stepIndex > 4 },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      background: '#000',
      backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
      backgroundSize: '40px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{
        border: '4px solid #fff',
        background: '#000',
        boxShadow: '16px 16px 0px 0px #fff',
        padding: '2.5rem',
        maxWidth: '32rem', width: 'calc(100% - 3rem)',
      }}>
        {/* Header */}
        <div style={{ borderBottom: '4px solid #fff', paddingBottom: '1rem', marginBottom: '2rem' }}>
          <div style={{ color: '#fff', fontWeight: 900, fontSize: '1.75rem', textTransform: 'uppercase' }}>
            ANALYZING...
          </div>
          <div style={{ color: 'rgba(255,255,255,0.4)', fontWeight: 700, fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginTop: '0.25rem' }}>
            DEEP//WATCH DETECTION ENGINE
          </div>
        </div>

        {/* Current step */}
        <div style={{ color: '#FFD93D', fontWeight: 900, textTransform: 'uppercase', fontSize: '1rem', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
          {STEPS[stepIndex]}
        </div>

        {/* Progress bar */}
        <div style={{
          border: '4px solid #fff', height: '2rem',
          background: '#000', position: 'relative',
          overflow: 'hidden', marginBottom: '1.5rem',
        }}>
          <div style={{
            height: '100%', background: '#FF6B6B',
            width: `${progress}%`,
            transition: 'width 400ms ease-linear',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: progress > 50 ? '#fff' : '#fff',
            fontWeight: 900, fontSize: '0.85rem',
            mixBlendMode: 'difference',
          }}>
            {progress}%
          </div>
        </div>

        {/* Modality status */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {MODALITY_DONE.map(({ label, done }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{
                width: '1rem', height: '1rem',
                borderRadius: '9999px',
                border: '2px solid #fff',
                background: done ? '#FFD93D' : 'transparent',
                flexShrink: 0,
                transition: 'background 200ms ease-linear',
              }} />
              <span style={{ fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', flex: 1 }}>
                {label}
              </span>
              {done && (
                <span style={{
                  borderRadius: '9999px',
                  border: '2px solid #FFD93D',
                  color: '#FFD93D',
                  fontSize: '0.6rem', fontWeight: 900,
                  padding: '0.1rem 0.5rem',
                }}>DONE</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
