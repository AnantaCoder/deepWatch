import React, { useState, useEffect } from 'react';
import { Menu, X, Star } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = ['ANALYZE', 'HOW IT WORKS', 'DATASETS', 'DOCS'];
const LINK_MAP = {
  'ANALYZE': 'section-analyze',
  'HOW IT WORKS': 'section-howitworks',
  'DATASETS': 'section-datasets',
  'DOCS': 'section-docker',
};

export default function Navbar({ articleCount = 9 }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isAwarenessPage = location.pathname === '/awareness';

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile) setMobileOpen(false);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  const scrollTo = (id) => {
    if (isAwarenessPage) {
      // Navigate home first, then scroll
      navigate('/');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: '#FFFDF5',
        borderBottom: '4px solid #000',
        backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
        backgroundSize: '20px 20px',
      }}>
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: isMobile ? '4rem' : '5rem',
        }}>
          {/* Logo */}
          <Link
            to="/"
            style={{
              border: '4px solid #000',
              background: '#FFD93D',
              padding: isMobile ? '0.4rem 0.75rem' : '0.5rem 1rem',
              boxShadow: '4px 4px 0px 0px #000',
              fontWeight: 900,
              fontSize: isMobile ? '1rem' : '1.2rem',
              textTransform: 'uppercase',
              transform: 'rotate(-1deg)',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              userSelect: 'none',
              flexShrink: 0,
              textDecoration: 'none',
              color: '#000',
              display: 'inline-block',
            }}
          >
            DEEP//WATCH
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {NAV_LINKS.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(LINK_MAP[link])}
                  onMouseEnter={() => setHoveredLink(link)}
                  onMouseLeave={() => setHoveredLink(null)}
                  style={{
                    fontWeight: 900,
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    border: hoveredLink === link ? '4px solid #000' : '4px solid transparent',
                    padding: '0.5rem 0.75rem',
                    background: hoveredLink === link ? '#FF6B6B' : 'transparent',
                    color: hoveredLink === link ? '#fff' : '#000',
                    boxShadow: hoveredLink === link ? '4px 4px 0px 0px #000' : 'none',
                    cursor: 'pointer',
                    fontFamily: 'Space Grotesk, sans-serif',
                    transition: 'all 100ms ease-linear',
                    borderRadius: 0,
                  }}
                >
                  {link}
                </button>
              ))}

             {/* CYBAR LAW link with badge */}
              <Link
                to="/cyber-law"
                onMouseEnter={() => setHoveredLink('CYBER-LAW')}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: 'relative',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: isAwarenessPage || hoveredLink === 'CYBER-LAW' ? '4px solid #000' : '4px solid transparent',
                  padding: '0.5rem 0.75rem',
                  background: isAwarenessPage ? '#FF6B6B' : hoveredLink === 'CYBER-LAW' ? '#FF6B6B' : 'transparent',
                  color: isAwarenessPage || hoveredLink === 'CYBER-LAW' ? '#fff' : '#000',
                  boxShadow: isAwarenessPage || hoveredLink === 'CYBER-LAW' ? '4px 4px 0px 0px #000' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'all 100ms ease-linear',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                CYBER LAW
              </Link>

              {/* AWARENESS link with badge */}
              <Link
                to="/awareness"
                onMouseEnter={() => setHoveredLink('AWARENESS')}
                onMouseLeave={() => setHoveredLink(null)}
                style={{
                  position: 'relative',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  border: isAwarenessPage || hoveredLink === 'AWARENESS' ? '4px solid #000' : '4px solid transparent',
                  padding: '0.5rem 0.75rem',
                  background: isAwarenessPage ? '#FF6B6B' : hoveredLink === 'AWARENESS' ? '#FF6B6B' : 'transparent',
                  color: isAwarenessPage || hoveredLink === 'AWARENESS' ? '#fff' : '#000',
                  boxShadow: isAwarenessPage || hoveredLink === 'AWARENESS' ? '4px 4px 0px 0px #000' : 'none',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  transition: 'all 100ms ease-linear',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                }}
              >
                AWARENESS
                {/* Notification badge */}
                <span
                  style={{
                    position: 'absolute',
                    top: '-8px',
                    right: '-8px',
                    background: '#FF6B6B',
                    color: '#fff',
                    border: '2px solid #000',
                    borderRadius: '9999px',
                    width: '20px',
                    height: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 900,
                    fontSize: '10px',
                    boxShadow: '2px 2px 0px #000',
                    animation: 'bounce 1s ease-in-out infinite',
                    fontFamily: 'Space Grotesk, sans-serif',
                    flexShrink: 0,
                  }}
                >
                  {articleCount}
                </span>
              </Link>
            </div>
          )}

          {/* Desktop right: Star + Upload */}
          {!isMobile && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Star size={22} style={{ animation: 'spin 10s linear infinite', flexShrink: 0 }} />
              <button
                id="nav-upload-btn"
                onClick={() => scrollTo('section-analyze')}
                style={{
                  background: '#000',
                  color: '#fff',
                  border: '4px solid #000',
                  padding: '0.6rem 1.5rem',
                  fontWeight: 900,
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  boxShadow: '4px 4px 0px 0px #000',
                  cursor: 'pointer',
                  fontFamily: 'Space Grotesk, sans-serif',
                  borderRadius: 0,
                  transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
                  whiteSpace: 'nowrap',
                }}
                onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
                onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; }}
              >
                UPLOAD FILE
              </button>
            </div>
          )}

          {/* Mobile: Hamburger */}
          {isMobile && (
            <button
              id="nav-hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                border: '4px solid #000',
                background: mobileOpen ? '#FF6B6B' : '#FFFDF5',
                color: mobileOpen ? '#fff' : '#000',
                padding: '0.35rem',
                boxShadow: '4px 4px 0px 0px #000',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'background 100ms ease-linear',
                borderRadius: 0,
                flexShrink: 0,
              }}
            >
              {mobileOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
            </button>
          )}
        </div>
      </nav>

      {/* Mobile fullscreen menu overlay */}
      {isMobile && mobileOpen && (
        <div style={{
          position: 'fixed',
          top: '4rem',
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 40,
          background: '#FFFDF5',
          borderTop: '4px solid #000',
          display: 'flex',
          flexDirection: 'column',
          padding: '1.5rem 1.25rem',
          gap: '0.75rem',
          overflowY: 'auto',
        }}>
          {NAV_LINKS.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(LINK_MAP[link])}
              style={{
                fontWeight: 900,
                fontSize: '1.4rem',
                textTransform: 'uppercase',
                border: '4px solid #000',
                padding: '1rem 1.25rem',
                background: '#fff',
                boxShadow: '4px 4px 0px 0px #000',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                borderRadius: 0,
                width: '100%',
                transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; }}
            >
              {link}
            </button>
          ))}

          {/* AWARENESS mobile link */}
          <Link
            to="/awareness"
            style={{
              fontWeight: 900,
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              border: '4px solid #000',
              padding: '1rem 1.25rem',
              background: '#FF6B6B',
              color: '#fff',
              boxShadow: '4px 4px 0px 0px #000',
              textAlign: 'left',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              borderRadius: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
            }}
          >
            AWARENESS
            <span
              style={{
                background: '#fff',
                color: '#FF6B6B',
                border: '2px solid #000',
                borderRadius: '9999px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 900,
                fontSize: '11px',
                boxShadow: '2px 2px 0px #000',
              }}
            >
              {articleCount}
            </span>
          </Link>

           {/* CYBER LAW mobile link */}
          <Link
            to="/cyber-law"
            style={{
              fontWeight: 900,
              fontSize: '1.4rem',
              textTransform: 'uppercase',
              border: '4px solid #000',
              padding: '1rem 1.25rem',
              background: '#FF6B6B',
              color: '#fff',
              boxShadow: '4px 4px 0px 0px #000',
              textAlign: 'left',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              borderRadius: 0,
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              textDecoration: 'none',
            }}
          >
            CYBER LAW
          </Link>

          <button
            onClick={() => scrollTo('section-analyze')}
            style={{
              background: '#000',
              color: '#fff',
              border: '4px solid #000',
              padding: '1rem 1.25rem',
              fontWeight: 900,
              fontSize: '1.2rem',
              textTransform: 'uppercase',
              boxShadow: '4px 4px 0px 0px #000',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              marginTop: '0.5rem',
              borderRadius: 0,
              width: '100%',
              transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
            }}
            onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; }}
          >
            UPLOAD FILE
          </button>

          {/* Decorative bottom tag */}
          <div style={{
            marginTop: 'auto',
            paddingTop: '1.5rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
          }}>
            <Star size={18} style={{ animation: 'spin 10s linear infinite', flexShrink: 0 }} />
            <span style={{ fontWeight: 900, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', opacity: 0.5 }}>
              DEEP//WATCH — AI DEEPFAKE DETECTION
            </span>
          </div>
        </div>
      )}
    </>
  );
}
