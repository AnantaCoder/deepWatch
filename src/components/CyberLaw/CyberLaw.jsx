import React from "react";

const allLaws = [
  {
    section: "IT Act, 2000",
    title: "The Primary Shield",
    desc: "The base law for all digital activities and e-commerce in India.",
    impact: "Legal status for digital docs"
  },
  {
    section: "DPDP Act, 2023",
    title: "Data Privacy",
    desc: "Companies must ask before using your data and delete it if you ask.",
    impact: "Your right to be forgotten"
  },
  {
    section: "Section 43",
    title: "Data Theft",
    desc: "Stealing, damaging, or copying data without permission is a crime.",
    impact: "Protects your private files"
  },
  {
    section: "Section 66C",
    title: "Identity Theft",
    desc: "Using someone else's password, DP, or biometrics fraudulently.",
    impact: "Stop social media imposters"
  },
  {
    section: "Section 66D",
    title: "Cheating by Personation",
    desc: "Scamming people using computer resources (Fake calls/Phishing).",
    impact: "Fight back against KYC scams"
  },
  {
    section: "Section 66E",
    title: "Privacy Violation",
    desc: "Capturing or sharing private images of others without consent.",
    impact: "Anti-voyeurism protection"
  },
  {
    section: "Section 66F",
    title: "Cyber Terrorism",
    desc: "Attacking national databases or threatening country's security.",
    impact: "Life imprisonment penalty"
  },
  {
    section: "Section 67",
    title: "Obscene Content",
    desc: "Sharing or publishing 'adult' or harmful content online.",
    impact: "Cleans up the digital space"
  },
  {
    section: "Section 67B",
    title: "Child Protection",
    desc: "Extremely strict laws against content depicting minors.",
    impact: "Zero tolerance policy"
  },
  {
    section: "Section 69",
    title: "Gov Intervention",
    desc: "Allows the government to block websites for national safety.",
    impact: "National security power"
  }
];

const CyberLawSimple = () => {
  return (
    <div className="min-h-screen bg-[#FFFDF5] text-black font-sans py-12 px-6 flex flex-col items-center">
      
      {/* Header - Centered */}
      <header className="max-w-4xl w-full mb-16 text-center border-b-8 border-black pb-10">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Cyber Law <br />
          <span className="bg-yellow-300 px-4 inline-block mt-2">Directory</span>
        </h1>
        <p className="text-xl font-bold mt-6 text-gray-600 italic">
          — 10 Essential Laws protecting the Indian Digital Space —
        </p>
      </header>

      {/* Grid Layout - Centered */}
      <div className="max-w-6xl w-full grid gap-6 sm:grid-cols-2 lg:grid-cols-2 justify-center">
        {allLaws.map((law, index) => (
          <div 
            key={index}
            className="border-4 border-black bg-white p-8 hover:bg-yellow-50 transition-all flex flex-col items-center text-center group shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <span className="bg-black text-white text-xs font-black px-3 py-1 uppercase mb-4">
              {law.section}
            </span>
            
            <h2 className="text-2xl font-black uppercase mb-3 leading-tight group-hover:scale-105 transition-transform">
              {law.title}
            </h2>
            
            <p className="text-gray-700 font-bold mb-6 leading-relaxed max-w-xs">
              {law.desc}
            </p>

            <div className="w-full bg-gray-100 p-4 border-t-4 border-black mt-auto">
              <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest mb-1">Key Protection</p>
              <p className="text-sm font-black text-black uppercase">{law.impact}</p>
            </div>
          </div>
        ))}
      </div>

      <br /><br />

      {/* DOWNLOAD SECTION (Added Before Last Box) */}
      <div className="mt-20 mb-10 text-center">
        <p className="font-black uppercase text-xs tracking-[0.2em] mb-4 text-gray-400">Official Resources</p>
        <a 
          href="https://www.ncib.in/pdf/cyber-law.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-white border-4 border-black px-8 py-4 font-black uppercase text-lg shadow-[6px_6px_0px_0px_#000] hover:bg-black hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
        >
          <span>📥 Download Full Legal PDF</span>
        </a>
      </div>
      
      <br /><br />

      {/* GAP BEFORE LAST BOX (Using mt-32 for a significant space) */}
      <div className="w-full max-w-4xl mt-32">
        {/* Emergency Footer - Centered */}
        <footer className="w-full bg-black text-white p-12 text-center shadow-[12px_12px_0px_0px_#FFD93D]">
          <h3 className="text-3xl font-black mb-2 uppercase italic">Need Legal Help?</h3>
          <p className="mb-8 font-bold text-gray-400 tracking-widest">NATIONAL CYBER CRIME HELPLINE</p>
          <a href="tel:1930" className="text-5xl md:text-7xl font-black text-yellow-300 hover:scale-110 inline-block transition-transform">
            1930
          </a>
          <div className="mt-8">
             <p className="text-sm font-bold border-2 border-white inline-block px-4 py-2 hover:bg-white hover:text-black transition-colors cursor-pointer uppercase">
              www.cybercrime.gov.in
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default CyberLawSimple;