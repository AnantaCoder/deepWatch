import React from 'react';

export default function Badge({
  children,
  bg = 'bg-[#FFD93D]',
  textColor = 'text-black',
  rotate = '',
  animate = '',
  className = '',
}) {
  return (
    <span
      className={`
        inline-block rounded-full border-4 border-black px-4 py-1
        font-black text-xs uppercase tracking-widest
        shadow-hard-sm
        ${bg} ${textColor} ${rotate} ${animate} ${className}
      `}
      style={{ display: 'inline-block' }}
    >
      {children}
    </span>
  );
}
