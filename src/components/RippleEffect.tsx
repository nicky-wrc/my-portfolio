'use client';

import { useEffect, useRef } from 'react';

interface RippleEffectProps {
  children: React.ReactNode;
  className?: string;
}

export default function RippleEffect({ children, className = '' }: RippleEffectProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const createRipple = (e: MouseEvent) => {
      const ripple = document.createElement('span');
      const rect = element.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = `${size}px`;
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      ripple.classList.add('ripple');

      element.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    element.addEventListener('click', createRipple);

    return () => {
      element.removeEventListener('click', createRipple);
    };
  }, []);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {children}
    </div>
  );
}




