"use client";

import { useEffect, useRef, useCallback } from "react";
import { visibleAnimation } from "@/lib/visible-animation";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  opacityDirection: number;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);

  const initParticles = useCallback(
    (width: number, height: number, count: number) => {
      particlesRef.current = [];
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * width,
          y: Math.random() * height,
          size: Math.random() * 1.5 + 0.5,
          speedY: -(Math.random() * 0.3 + 0.1),
          speedX: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.4 + 0.4,
          opacityDirection: Math.random() > 0.5 ? 0.002 : -0.002,
        });
      }
    },
    [],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true, // Better performance
    });
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const particleCount = isMobile ? 6 : 30;

    // Setup canvas with optimized DPR
    const setupCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      const width = window.innerWidth;
      const height = window.innerHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      return { width, height };
    };

    let { width, height } = setupCanvas();
    initParticles(width, height, particleCount);

    const animate = (_time: number, delta: number) => {
      const step = delta / (1000 / 60);

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Batch shadow operations - exact original rendering
      particlesRef.current.forEach((particle) => {
        particle.y += particle.speedY * step;
        particle.x += particle.speedX * step;
        particle.opacity += particle.opacityDirection * step;

        if (particle.opacity >= 0.8 || particle.opacity <= 0.4) {
          particle.opacityDirection *= -1;
        }

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;

        ctx.shadowBlur = 15;
        ctx.shadowColor = `rgba(255, 255, 255, ${particle.opacity * 0.8})`;
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.shadowBlur = 0; // Reset once after all particles

    };

    const stopAnimation = visibleAnimation(canvas, animate, 60);

    // Debounced resize handler
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const { width: newWidth, height: newHeight } = setupCanvas();
        width = newWidth;
        height = newHeight;
        initParticles(newWidth, newHeight, particleCount);
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      stopAnimation();
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[12] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
