'use client';

import { useEffect, useRef } from 'react';

interface ConfettiParticle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
}

function generateParticles(): ConfettiParticle[] {
  const colors = ['#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899', '#f59e0b', '#10b981'];
  const particles: ConfettiParticle[] = [];

  for (let i = 0; i < 50; i++) {
    particles.push({
      id: i,
      x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
      y: -10,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4,
      speedX: (Math.random() - 0.5) * 4,
      speedY: Math.random() * 3 + 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 10,
    });
  }
  return particles;
}

export default function Confetti({ trigger }: { trigger: boolean }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);

  useEffect(() => {
    if (!trigger) return;

    particlesRef.current = generateParticles();

    function renderParticles() {
      if (!containerRef.current) return;

      containerRef.current.innerHTML = particlesRef.current
        .map(
          (p) => `<div style="
            position: absolute;
            left: ${p.x}px;
            top: ${p.y}px;
            width: ${p.size}px;
            height: ${p.size}px;
            background-color: ${p.color};
            transform: rotate(${p.rotation}deg);
            border-radius: 2px;
          "></div>`
        )
        .join('');
    }

    function animate() {
      particlesRef.current = particlesRef.current
        .map((p) => ({
          ...p,
          x: p.x + p.speedX,
          y: p.y + p.speedY,
          rotation: p.rotation + p.rotationSpeed,
          speedY: p.speedY + 0.1,
        }))
        .filter((p) => p.y < window.innerHeight + 100);

      renderParticles();

      if (particlesRef.current.length > 0) {
        animationRef.current = requestAnimationFrame(animate);
      }
    }

    renderParticles();
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [trigger]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-[10000]"
      aria-hidden="true"
    />
  );
}





