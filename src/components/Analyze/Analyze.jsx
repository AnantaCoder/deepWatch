import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import DEEPFAKE_IMAGE from '../../assets/deepfake_image.png';
import DEEPFAKE_TEXT from '../../assets/deepfake_text.png';
import DEEPFAKE_VIDEO from '../../assets/deepfake_video.png';
import DEEPFAKE_MAIl from '../../assets/deepfake_mail.png';
import DEEPFAKE_AUDIO from '../../assets/deepfake_audio.png';
const DETECTORS = [
  { 
    id: 'image', 
    title: 'IMAGE DETECTION', 
    icon: '📷', 
    img: DEEPFAKE_IMAGE, // Example Abstract
    accept: 'image/*' 
  },
  { 
    id: 'text', 
    title: 'TEXT DETECTION', 
    icon: '📝', 
    img: DEEPFAKE_TEXT, 
    accept: '.txt,.pdf,.doc,.docx' 
  },
  { 
    id: 'video', 
    title: 'VIDEO DETECTION', 
    icon: '🎬', 
    img: DEEPFAKE_VIDEO, 
    accept: 'video/*' 
  },
  { 
    id: 'mail', 
    title: 'MAIL DETECTION', 
    icon: '✉️', 
    img: DEEPFAKE_MAIl, 
    accept: '.eml,.txt,application/pdf' 
  },
  { 
    id: 'audio', 
    title: 'AUDIO DETECTION', 
    icon: '🎙️', 
    img: DEEPFAKE_AUDIO, 
    accept: 'audio/*' 
  },
];

// --- Sub-Component: Neo-Brutalist Modal ---
const ResultModal = ({ result, onClose }) => {
  if (!result) return null;

  const fakescore = result.all_scores.fake;
  const isFake = fakescore >= 40; 
  const accentColor = isFake ? '#FF6B6B' : '#4ade80';
  const PredictResult = isFake ? 'FAKE' : 'REAL';

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 100,
      backgroundColor: 'rgba(0,0,0,0.8)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      backdropFilter: 'blur(4px)', padding: '1rem'
    }}>
      <div style={{
        background: '#FFFDF5',
        border: '4px solid #000',
        boxShadow: '12px 12px 0px #000',
        width: '100%', maxWidth: '500px',
        padding: '2rem', position: 'relative'
      }}>
        <h2 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem', textTransform: 'uppercase' }}>
          Analysis Complete
        </h2>
        
        <div style={{
          background: accentColor,
          border: '4px solid #000',
          padding: '1.5rem',
          textAlign: 'center',
          marginBottom: '1.5rem',
          boxShadow: '6px 6px 0px #000'
        }}>
          <div style={{ fontSize: '0.9rem', fontWeight: 900, opacity: 0.8 }}>PREDICTION:</div>
          <div style={{ fontSize: '3.5rem', fontWeight: 900, color: '#000' }}>
            {PredictResult}
          </div>
        </div>

        <div style={{ fontWeight: 800, fontSize: '1.1rem', marginBottom: '2rem' }}>
          <p>Confidence: <span style={{fontSize: '1.5rem'}}>{result.confidence.toFixed(2)}%</span></p>
          <p style={{ fontSize: '0.7rem', opacity: 0.6, marginTop: '0.5rem' }}>MODEL: {result.metadata.model_id}</p>
        </div>

        <button 
          onClick={onClose}
          style={{
            width: '100%', background: '#000', color: '#fff',
            border: 'none', padding: '1rem', fontWeight: 900,
            textTransform: 'uppercase', cursor: 'pointer',
            fontSize: '1.1rem', transition: 'transform 0.1s'
          }}
          onMouseDown={e => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={e => e.currentTarget.style.transform = 'scale(1)'}
        >
          Close Result
        </button>
      </div>
    </div>
  );
};

export default function Analyze() {
  const [isMobile, setIsMobile] = useState(false);
  const [loadingId, setLoadingId] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null); 
  
  // Updated refs to include 'text'
  const fileInputRefs = {
    image: useRef(null),
    text: useRef(null), // New Ref
    video: useRef(null),
    mail: useRef(null),
    audio: useRef(null),
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleFileUpload = async (event, type) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoadingId(type);
    const formData = new FormData();
    formData.append('file', file);

    try {
      // Endpoint is now dynamic: /detect/image, /detect/text, etc.
      const response = await axios.post(`http://localhost:3000/detect/${type}`, formData);
      setAnalysisResult(response.data); 
      
    } catch (error) {
      console.error(`Error uploading ${type}:`, error);
      alert("Analysis failed. Please check backend connection.");
    } finally {
      setLoadingId(null);
      event.target.value = null;
    }
  };

  return (
    <div style={{
      minHeight: '100vh', background: '#FFFDF5',
      backgroundImage: `linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)`,
      backgroundSize: '40px 40px', padding: isMobile ? '2rem 1rem' : '4rem 2rem',
      fontFamily: 'Space Grotesk, sans-serif',
    }}>
      
      <ResultModal 
        result={analysisResult} 
        onClose={() => setAnalysisResult(null)} 
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* <header style={{ marginBottom: '4rem', textAlign: isMobile ? 'left' : 'center' }}>
          <h1 style={{ fontSize: isMobile ? '3.5rem' : '6rem', fontWeight: 900, textTransform: 'uppercase', lineHeight: 0.9, color: '#000', marginBottom: '1rem' }}>
            DETECT THE <span style={{ color: '#FF6B6B', WebkitTextStroke: '2px #000' }}>TRUTH</span>
          </h1>
        </header> */}
        {/* Header Section */}
        <header style={{ marginBottom: '4rem', textAlign: isMobile ? 'left' : 'center' }}>
          <h1 style={{
            fontSize: isMobile ? '3.5rem' : '6rem',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 0.9,
            color: '#000',
            marginBottom: '1rem'
          }}>
            DETECT THE <span style={{ color: '#FF6B6B', WebkitTextStroke: '2px #000' }}>TRUTH</span>
          </h1>
          <p style={{
            fontSize: '1.25rem',
            fontWeight: 700,
            background: '#000',
            color: '#fff',
            display: 'inline-block',
            padding: '0.5rem 1.5rem',
            transform: 'rotate(-1deg)',
            boxShadow: '6px 6px 0px #FF6B6B'
          }}>
            UNMASKING SYNTHETIC CONTENT WITH SURGICAL PRECISION
          </p>
        </header>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: '2.5rem' 
        }}>
          {DETECTORS.map((item) => (
            <div 
              key={item.id}
              onClick={() => !loadingId && fileInputRefs[item.id].current.click()}
              style={{
                border: '4px solid #000', background: '#fff',
                boxShadow: '10px 10px 0px 0px #000', padding: '2rem',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                transition: 'all 0.2s ease', cursor: loadingId ? 'wait' : 'pointer',
                opacity: loadingId && loadingId !== item.id ? 0.5 : 1
              }}
            >
              <input 
                type="file" 
                ref={fileInputRefs[item.id]} 
                style={{ display: 'none' }}
                accept={item.accept} 
                onChange={(e) => handleFileUpload(e, item.id)}
              />

              <h2 style={{ fontSize: '1.5rem', fontWeight: 900, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{fontSize: '2rem'}}>{item.icon}</span> {item.title}
              </h2>

              <div style={{
  height: '180px',
  border: '4px solid #000',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  overflow: 'hidden',
  // --- New Image Styles ---
  backgroundImage: `url(${item.img})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: loadingId && loadingId !== item.id ? 'grayscale(100%)' : 'none',
}}>
  {/* Dark Overlay to make the button pop */}
  <div style={{
    position: 'absolute',
    inset: 0,
    background: 'rgba(0,0,0,0.3)', // Adjust opacity to see more/less of the image
    zIndex: 0
  }} />

  <button style={{
    zIndex: 1,
    background: loadingId === item.id ? '#000' : '#fff',
    color: loadingId === item.id ? '#fff' : '#000',
    border: '3px solid #000',
    padding: '0.75rem 1.5rem',
    fontWeight: 900,
    boxShadow: loadingId === item.id ? 'none' : '4px 4px 0px #000',
    textTransform: 'uppercase'
  }}>
    {loadingId === item.id ? 'ANALYZING...' : `SCAN ${item.id}`}
  </button>
</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}