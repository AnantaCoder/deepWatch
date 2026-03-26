import React from 'react';
import { Eye, Mic, Mail } from 'lucide-react';

const CARDS = [
  {
    id: 'image',
    Icon: Eye,
    title: 'IMAGE / VIDEO',
    headerBg: '#FFD93D',
    iconBg: '#FFD93D',
    status: 'ACTIVE',
    model: 'EfficientNetV2-L + XceptionNet',
    dataset: 'FaceForensics++ · DFDC · Celeb-DF v2',
    detects: 'GAN artifacts · face swaps · temporal inconsistencies',
    metric1: 'Accuracy: 98.2%',
    metric2: 'AUC: 0.991',
  },
  {
    id: 'audio',
    Icon: Mic,
    title: 'AUDIO',
    headerBg: '#C4B5FD',
    iconBg: '#C4B5FD',
    status: 'ACTIVE',
    model: 'Wav2Vec2 + RawNet2',
    dataset: 'ASVspoof 2021 · FakeAVCeleb · ADD 2022',
    detects: 'TTS synthesis · voice conversion · prosody anomalies',
    metric1: 'EER: 2.1%',
    metric2: 'Min-tDCF: 0.058',
  },
  {
    id: 'text',
    Icon: Mail,
    title: 'TEXT / EMAIL',
    headerBg: '#FFFDF5',
    iconBg: '#FFFDF5',
    status: 'ACTIVE',
    model: 'RoBERTa-base fine-tuned',
    dataset: 'Human vs GPT-4 corpus · phishing corpora',
    detects: 'AI writing patterns · unusual distributions · metadata flags',
    metric1: 'F1: 0.96',
    metric2: 'Precision: 0.97',
  },
];

export function ModalityCardStatic({ card }) {
  const { Icon, title, headerBg, iconBg, status, model, dataset, detects, metric1, metric2 } = card;

  return (
    <div style={{
      border: '4px solid #000',
      background: '#fff',
      boxShadow: '6px 6px 0px 0px #000',
      transition: 'transform 200ms ease-linear, box-shadow 200ms ease-linear',
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '10px 10px 0px 0px #000'; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '6px 6px 0px 0px #000'; }}
    >
      {/* Header */}
      <div style={{
        background: headerBg,
        borderBottom: '4px solid #000',
        padding: '0.75rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '0.75rem',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: iconBg,
            border: '4px solid #000',
            padding: '0.4rem',
            display: 'flex', alignItems: 'center',
          }}>
            <Icon size={18} strokeWidth={3} />
          </div>
          <span style={{ fontWeight: 900, fontSize: '1rem', textTransform: 'uppercase' }}>{title}</span>
        </div>
        <span style={{
          borderRadius: '9999px',
          border: '4px solid #000',
          background: '#000',
          color: '#fff',
          fontSize: '0.65rem',
          textTransform: 'uppercase',
          fontWeight: 900,
          padding: '0.1rem 0.6rem',
          letterSpacing: '0.1em',
        }}>{status}</span>
      </div>

      {/* Body */}
      <div style={{ padding: '1rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {[['Model', model], ['Dataset', dataset], ['Detects', detects]].map(([lbl, val]) => (
          <div key={lbl}>
            <span style={{ fontSize: '0.6rem', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{lbl}</span>
            <p style={{ fontWeight: 700, fontSize: '0.85rem', margin: '0.15rem 0 0' }}>{val}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div style={{
        borderTop: '4px solid #000',
        padding: '0.6rem 1.25rem',
        background: '#FFFDF5',
        display: 'flex',
        gap: '1.5rem',
      }}>
        <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>{metric1}</span>
        <span style={{ fontWeight: 900, fontSize: '0.85rem' }}>{metric2}</span>
      </div>
    </div>
  );
}

export { CARDS };
export default ModalityCardStatic;
