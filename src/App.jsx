import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import UploadZone from './components/UploadZone';
import ScanResults from './components/ScanResults';
import HowItWorks from './components/HowItWorks';
import Datasets from './components/Datasets';
import DockerServices from './components/DockerServices';
import Footer from './components/Footer';
import ScanningOverlay from './components/ScanningOverlay';

// Simulate different results each scan for demo variety
function generateResults() {
  const imageScore = Math.floor(Math.random() * 40 + 55);   // 55-95
  const audioScore = Math.floor(Math.random() * 50 + 30);   // 30-80
  const textScore  = Math.floor(Math.random() * 45 + 50);   // 50-95
  const avg = (imageScore + audioScore + textScore) / 3;
  return {
    image: imageScore,
    audio: audioScore,
    text: textScore,
    verdict: avg >= 60 ? 'DEEPFAKE' : 'REAL',
  };
}

export default function App() {
  const [scanStatus, setScanStatus] = useState('idle'); // 'idle' | 'scanning' | 'complete'
  const [results, setResults] = useState(null);

  const handleScan = useCallback(() => {
    setScanStatus('scanning');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleScanComplete = useCallback(() => {
    const r = generateResults();
    setResults(r);
    setScanStatus('complete');
    // Scroll to results
    setTimeout(() => {
      document.getElementById('section-results')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const handleScanAgain = useCallback(() => {
    setScanStatus('idle');
    setResults(null);
    setTimeout(() => {
      document.getElementById('section-analyze')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  const scrollToAnalyze = useCallback(() => {
    document.getElementById('section-analyze')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="min-h-screen bg-[#FFFDF5]" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
      {/* Scanning overlay */}
      {scanStatus === 'scanning' && (
        <ScanningOverlay onComplete={handleScanComplete} />
      )}

      <Navbar />

      <main>
        {/* Section 2 — Hero */}
        <Hero onAnalyzeClick={scrollToAnalyze} />

        {/* Section 3 — Upload & Analyze */}
        <UploadZone onScan={handleScan} />

        {/* Section 4 — Results (shown after scan) */}
        {scanStatus === 'complete' && results && (
          <ScanResults results={results} onScanAgain={handleScanAgain} />
        )}

        {/* Section 5 — How It Works */}
        <HowItWorks />

        {/* Section 6 — Datasets & Benchmarks */}
        <Datasets />

        {/* Section 7 — Docker / Deployment */}
        <DockerServices />
      </main>

      {/* Section 8 — Footer */}
      <Footer />
    </div>
  );
}
