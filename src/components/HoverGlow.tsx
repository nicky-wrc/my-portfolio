'use client';

import { ReactNode } from 'react';

interface HoverGlowProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

export default function HoverGlow({ children, className = '', glowColor = 'cyan' }: HoverGlowProps) {
  const glowClasses = {
    cyan: 'hover:shadow-cyan-500/50 hover:shadow-2xl',
    blue: 'hover:shadow-blue-500/50 hover:shadow-2xl',
    purple: 'hover:shadow-purple-500/50 hover:shadow-2xl',
  };

  return (
    <div className={`transition-all duration-300 ${glowClasses[glowColor as keyof typeof glowClasses] || glowClasses.cyan} ${className}`}>
      {children}
    </div>
  );
}



