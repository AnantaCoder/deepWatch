import React from 'react';

export default function HardCard({
  children,
  className = '',
  bg = 'bg-white',
  shadowSize = 'shadow-hard-md',
  hover = true,
}) {
  return (
    <div
      className={`
        border-4 border-black ${bg} ${shadowSize}
        ${hover ? 'card-lift' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
}
