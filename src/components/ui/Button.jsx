import React from 'react';

export default function Button({
  children,
  variant = 'primary', // primary | secondary | outline-white
  className = '',
  onClick,
  id,
  type = 'button',
}) {
  const variants = {
    primary: `bg-[#FF6B6B] text-white border-4 border-black shadow-hard-sm`,
    secondary: `bg-white text-black border-4 border-black shadow-hard-sm`,
    'outline-white': `bg-transparent text-white border-4 border-white shadow-hard-sm-white`,
    black: `bg-black text-white border-4 border-black shadow-hard-sm`,
  };

  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      className={`
        btn-push font-black uppercase tracking-wide
        cursor-pointer
        ${variants[variant] || variants.primary}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
