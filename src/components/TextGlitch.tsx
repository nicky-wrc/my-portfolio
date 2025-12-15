'use client';

import { ReactNode } from 'react';

interface TextGlitchProps {
  children: ReactNode;
  className?: string;
}

export default function TextGlitch({ children, className = '' }: TextGlitchProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{children}</span>
      <span
        className="absolute inset-0 text-cyan-400 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
          transform: 'translate(-2px, -2px)',
        }}
      >
        {children}
      </span>
      <span
        className="absolute inset-0 text-blue-400 opacity-0 hover:opacity-100 transition-opacity duration-300"
        style={{
          clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
          transform: 'translate(2px, 2px)',
        }}
      >
        {children}
      </span>
    </span>
  );
}



