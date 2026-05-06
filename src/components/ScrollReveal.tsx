'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';
import { MOTION_RESUME_EVENT } from '@/components/MotionResume';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  className?: string;
}

function usePrefersReducedMotion() {
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const apply = () => setReduce(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  return reduce;
}

export default function ScrollReveal({ 
  children, 
  delay = 0, 
  direction = 'up',
  className = '' 
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -4% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduceMotion]);

  /** After a long background tab, replay enter transition for elements still on screen. */
  useEffect(() => {
    if (reduceMotion) return;

    const replayIfInView = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const h = window.innerHeight || document.documentElement.clientHeight;
      const inView = rect.top < h * 0.92 && rect.bottom > h * 0.08;
      if (!inView) return;
      setIsVisible(false);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsVisible(true));
      });
    };

    window.addEventListener(MOTION_RESUME_EVENT, replayIfInView);
    return () => window.removeEventListener(MOTION_RESUME_EVENT, replayIfInView);
  }, [reduceMotion]);

  const getDirectionClass = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return 'translate-y-10 opacity-0';
        case 'down':
          return '-translate-y-10 opacity-0';
        case 'left':
          return '-translate-x-10 opacity-0';
        case 'right':
          return 'translate-x-10 opacity-0';
        case 'fade':
          return 'opacity-0';
        default:
          return 'translate-y-10 opacity-0';
      }
    }
    return 'translate-y-0 translate-x-0 opacity-100';
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${getDirectionClass()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}






