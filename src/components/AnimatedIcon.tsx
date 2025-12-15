'use client';

import { ReactNode } from 'react';

interface AnimatedIconProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimatedIcon({ children, delay = 0, className = '' }: AnimatedIconProps) {
  return (
    <div 
      className={`inline-block animate-bounce ${className}`}
      style={{ animationDelay: `${delay}ms`, animationDuration: '2s' }}
    >
      {children}
    </div>
  );
}



