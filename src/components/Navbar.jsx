import React, { useState } from 'react';
import { Menu, X, Star } from 'lucide-react';

const S = {
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    background: '#FFFDF5',
    borderBottom: '4px solid #000',
    backgroundImage: 'radial-gradient(#000 1.5px, transparent 1.5px)',
    backgroundSize: '20px 20px',
  },
  inner: {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 1.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '5rem',
  },
  logo: {
    border: '4px solid #000',
    background: '#FFD93D',
    padding: '0.5rem 1rem',
    boxShadow: '4px 4px 0px 0px #000',
    fontWeight: 900,
    fontSize: '1.2rem',
    textTransform: 'uppercase',
    transform: 'rotate(-1deg)',
    cursor: 'pointer',
    fontFamily: 'Space Grotesk, sans-serif',
    userSelect: 'none',
  },
};

const navLinks = ['ANALYZE', 'HOW IT WORKS', 'DATASETS', 'DOCS'];
const linkMap = {
  'ANALYZE': 'section-analyze',
  'HOW IT WORKS': 'section-howitworks',
  'DATASETS': 'section-datasets',
  'DOCS': 'section-docker',
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileOpen(false);
  };

  return (
    <>
      <nav style={S.nav}>
        <div style={S.inner}>
          {/* Logo */}
          <div style={S.logo} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            DEEP//WATCH
          </div>

          {/* Desktop nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden md:flex">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => scrollTo(linkMap[link])}
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
          </div>

          {/* Right: Star + Upload */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="hidden md:flex">
            <Star size={22} style={{ animation: 'spin 10s linear infinite' }} />
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
              }}
              onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
              onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; }}
            >
              UPLOAD FILE
            </button>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              border: '4px solid #000',
              background: '#FFFDF5',
              padding: '0.4rem',
              boxShadow: '4px 4px 0px 0px #000',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'transform 100ms ease-linear, box-shadow 100ms ease-linear',
              borderRadius: 0,
            }}
            className="md:hidden"
            onMouseDown={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = 'none'; }}
            onMouseUp={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '4px 4px 0px 0px #000'; }}
          >
            {mobileOpen ? <X size={24} strokeWidth={3} /> : <Menu size={24} strokeWidth={3} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 40,
          background: '#FFFDF5',
          borderBottom: '4px solid #000',
          display: 'flex', flexDirection: 'column',
          paddingTop: '6rem', padding: '6rem 1.5rem 1.5rem',
          gap: '1rem',
        }}>
          {navLinks.map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(linkMap[link])}
              style={{
                fontWeight: 900,
                fontSize: '1.5rem',
                textTransform: 'uppercase',
                border: '4px solid #000',
                padding: '1rem 1.5rem',
                background: '#fff',
                boxShadow: '4px 4px 0px 0px #000',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'Space Grotesk, sans-serif',
                borderRadius: 0,
              }}
            >
              {link}
            </button>
          ))}
          <button
            onClick={() => scrollTo('section-analyze')}
            style={{
              background: '#000', color: '#fff',
              border: '4px solid #000',
              padding: '1rem 1.5rem',
              fontWeight: 900, fontSize: '1.2rem',
              boxShadow: '4px 4px 0px 0px #000',
              cursor: 'pointer',
              fontFamily: 'Space Grotesk, sans-serif',
              marginTop: '0.5rem',
              borderRadius: 0,
            }}
          >
            UPLOAD FILE
          </button>
        </div>
      )}
    </>
  );
}
