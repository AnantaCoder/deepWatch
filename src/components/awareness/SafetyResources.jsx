import React, { useState, useEffect } from 'react';
import { Phone, Globe, Smartphone, Headphones } from 'lucide-react';

const RESOURCES = [
  { icon: Globe,      text: 'CYBERCRIME.GOV.IN — FILE FIR ONLINE', href: 'https://cybercrime.gov.in' },
  { icon: Phone,      text: 'CALL 1930 — NATIONAL HELPLINE',        href: 'tel:1930' },
  { icon: Smartphone, text: 'CEIR PORTAL — BLOCK STOLEN DEVICE',    href: 'https://ceir.gov.in' },
  { icon: Headphones, text: 'RBI HELPLINE — BANKING FRAUD: 14440',  href: 'tel:14440' },
];

const CHECKLIST = [
  'Never share OTPs even with "bank officials" on call',
  'Set a family video call codeword for emergencies',
  'Lock your social media photos to friends only',
  'Enable 2FA on all banking and email accounts',
  'Use DEEP//WATCH to verify suspicious media',
];

export default function SafetyResources() {
  const [email, setEmail]         = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [resHovered, setResHovered] = useState(null);
  const [subHeld, setSubHeld]     = useState(false);
  const [isMobile, setIsMobile]   = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const handleSubscribe = () => { if (email.trim()) setSubscribed(true); };

  return (
    <section style={{ background: '#FFD93D', borderTop: '8px solid #000', borderBottom: '8px solid #000', padding: isMobile ? '3rem 1.25rem' : '5rem 1.5rem' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

        {/* Two-column grid (single column on mobile) */}
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: isMobile ? '2.5rem' : '4rem' }}>

          {/* ─── LEFT: Report a Crime ─── */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span style={{ display: 'inline-block', borderRadius: '9999px', background: '#000', color: '#FFD93D', border: '4px solid #000', fontWeight: 900, fontSize: '0.6rem', textTransform: 'uppercase', letterSpacing: '0.15em', padding: '0.2rem 0.85rem', transform: 'rotate(-1deg)', fontFamily: 'Space Grotesk, sans-serif' }}>
                ACT NOW
              </span>
            </div>

            <h2 style={{ fontSize: isMobile ? 'clamp(2rem, 9vw, 2.75rem)' : 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif', margin: '0 0 0.85rem 0' }}>
              BEEN TARGETED?
            </h2>

            <p style={{ fontWeight: 700, fontSize: isMobile ? '0.95rem' : '1.1rem', borderLeft: '4px solid #000', paddingLeft: '1rem', margin: '0 0 1.5rem 0', fontFamily: 'Space Grotesk, sans-serif' }}>
              Report to India's National Cyber Crime Portal
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {RESOURCES.map((res, i) => {
                const Icon = res.icon;
                const isHov = resHovered === i && !isMobile;
                return (
                  <a key={i} href={res.href} target={res.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    style={{ border: '4px solid #000', background: '#fff', padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem', boxShadow: isHov ? '6px 6px 0px #000' : '4px 4px 0px #000', transform: isHov ? 'translateY(-1px)' : 'none', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textDecoration: 'none', color: '#000', transition: 'transform 150ms, box-shadow 150ms', cursor: 'pointer' }}
                    onMouseEnter={() => setResHovered(i)} onMouseLeave={() => setResHovered(null)}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', minWidth: 0 }}>
                      <div style={{ border: '4px solid #000', background: '#FF6B6B', padding: '0.35rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon size={16} strokeWidth={3} color="#fff" />
                      </div>
                      <span style={{ fontWeight: 900, fontSize: isMobile ? '0.7rem' : '0.8rem', textTransform: 'uppercase', letterSpacing: '0.04em', fontFamily: 'Space Grotesk, sans-serif', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{res.text}</span>
                    </div>
                    <span style={{ fontWeight: 900, fontSize: '1.1rem', flexShrink: 0, marginLeft: '0.5rem' }}>→</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* ─── RIGHT: Protect Yourself ─── */}
          <div>
            <h2 style={{ fontSize: isMobile ? 'clamp(1.75rem, 7vw, 2.25rem)' : 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, textTransform: 'uppercase', lineHeight: 1, fontFamily: 'Space Grotesk, sans-serif', margin: '0 0 1.25rem 0' }}>
              PROTECT YOURSELF
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {CHECKLIST.map((item, i) => {
                const isLast = i === CHECKLIST.length - 1;
                return (
                  <div key={i} style={{ border: '4px solid #000', background: isLast ? '#FF6B6B' : '#fff', color: isLast ? '#fff' : '#000', padding: isMobile ? '0.85rem 1rem' : '1rem 1.25rem', boxShadow: '4px 4px 0px #000', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ border: '4px solid #000', background: isLast ? '#fff' : '#FF6B6B', color: isLast ? '#FF6B6B' : '#fff', width: isMobile ? '2.1rem' : '2.5rem', height: isMobile ? '2.1rem' : '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '0.85rem', flexShrink: 0, boxShadow: '2px 2px 0px #000', fontFamily: 'Space Grotesk, sans-serif' }}>
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <p style={{ fontWeight: 700, fontSize: isMobile ? '0.85rem' : '0.9rem', fontFamily: 'Space Grotesk, sans-serif', lineHeight: 1.5, margin: 0, alignSelf: 'center' }}>{item}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ─── Newsletter strip ─── */}
        <div style={{ borderTop: '4px solid #000', marginTop: isMobile ? '2rem' : '3rem', paddingTop: isMobile ? '1.5rem' : '2rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: isMobile ? 'stretch' : 'center', flexDirection: isMobile ? 'column' : 'row', flexWrap: 'wrap' }}>
            <span style={{ fontSize: isMobile ? '1rem' : 'clamp(1.1rem, 2.5vw, 1.5rem)', fontWeight: 900, textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', flexShrink: 0 }}>
              GET THREAT ALERTS IN YOUR INBOX
            </span>

            {subscribed ? (
              <div style={{ flex: 1, border: '4px solid #000', padding: '0.75rem 1.5rem', background: '#000', color: '#FFD93D', fontWeight: 900, fontSize: '0.95rem', textTransform: 'uppercase', fontFamily: 'Space Grotesk, sans-serif', letterSpacing: '0.1em' }}>
                ✓ SUBSCRIBED — STAY VIGILANT.
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '0.75rem', flex: 1, flexDirection: isMobile ? 'column' : 'row' }}>
                <input
                  type="email" value={email} onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                  placeholder="your@email.com"
                  style={{ border: '4px solid #000', height: '3.25rem', padding: '0 1rem', fontWeight: 700, fontSize: '1rem', flex: 1, background: '#fff', outline: 'none', boxShadow: '4px 4px 0px #000', fontFamily: 'Space Grotesk, sans-serif', minWidth: '160px', transition: 'box-shadow 150ms, background 150ms', width: isMobile ? '100%' : 'auto' }}
                  onFocus={e => { e.currentTarget.style.background = '#C4B5FD'; e.currentTarget.style.boxShadow = '6px 6px 0px #000'; }}
                  onBlur={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.boxShadow = '4px 4px 0px #000'; }}
                />
                <button onClick={handleSubscribe}
                  style={{ background: '#000', color: '#fff', border: '4px solid #000', height: '3.25rem', padding: '0 1.75rem', fontWeight: 900, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', boxShadow: subHeld ? 'none' : '4px 4px 0px #000', transform: subHeld ? 'translate(2px,2px)' : 'none', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', transition: 'transform 100ms, box-shadow 100ms', whiteSpace: 'nowrap', flexShrink: 0 }}
                  onMouseDown={() => setSubHeld(true)} onMouseUp={() => setSubHeld(false)} onMouseLeave={() => setSubHeld(false)}
                >
                  SUBSCRIBE →
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
