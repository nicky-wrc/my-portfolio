"use client";

import { useEffect, useRef, useCallback } from "react";
import { visibleAnimation } from "@/lib/visible-animation";

interface Comet {
  x: number;
  y: number;
  length: number;
  speed: number;
  size: number;
  opacity: number;
  delay: number;
  active: boolean;
}

export default function CometBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cometsRef = useRef<Comet[]>([]);

  // dx and dy ratios for a ~45-degree angle (coming from top-right to bottom-left)
  const angle = Math.PI / 4; // 45 degrees
  const dxRatio = -Math.cos(angle); // negative X (moves left)
  const dyRatio = Math.sin(angle); // positive Y (moves down)

  const initComet = useCallback(
    (width: number, height: number, forceImmediate = false): Comet => {
      // Determine spawn location: either from top of screen or right of screen
      const isTopSpawn = Math.random() > 0.5;
      let x = 0;
      let y = 0;

      if (isTopSpawn) {
        // Spawn at top edge, from X = width * 0.2 to width * 1.5 (entering from top-right)
        x = Math.random() * (width * 1.3) + width * 0.2;
        y = -100;
      } else {
        // Spawn at right edge, from Y = -100 to height * 0.6
        x = width + 100;
        y = Math.random() * (height * 0.6) - 100;
      }

      return {
        x,
        y,
        length: Math.random() * 120 + 80, // length of tail: 80px to 200px
        speed: Math.random() * 5 + 4, // speed: 4px to 9px per frame
        size: Math.random() * 1.5 + 1.0, // thickness: 1.0px to 2.5px
        opacity: Math.random() * 0.6 + 0.4, // opacity: 0.4 to 1.0
        delay: forceImmediate ? 0 : Math.random() * 400 + 50, // frames to wait before activating
        active: forceImmediate,
      };
    },
    [],
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 767px), (pointer: coarse)").matches;
    const maxComets = isMobile ? 3 : 16;

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

    // Initialize comets: spawn some immediately and some with delay
    cometsRef.current = [];
    for (let i = 0; i < maxComets; i++) {
      cometsRef.current.push(initComet(width, height, i < maxComets / 2));
    }

    const animate = (_time: number, delta: number) => {
      const step = delta / (1000 / 60);

      // Clear with transparent layer
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      cometsRef.current.forEach((comet) => {
        if (!comet.active) {
          comet.delay -= step;
          if (comet.delay <= 0) {
            // Re-initialize from edges
            const fresh = initComet(width, height, true);
            Object.assign(comet, fresh);
          }
          return;
        }

        // Move comet
        comet.x += dxRatio * comet.speed * step;
        comet.y += dyRatio * comet.speed * step;

        // Tail endpoint (trailing behind the movement)
        const xEnd = comet.x - dxRatio * comet.length;
        const yEnd = comet.y - dyRatio * comet.length;

        // Draw trail gradient
        const grad = ctx.createLinearGradient(comet.x, comet.y, xEnd, yEnd);
        grad.addColorStop(0, `rgba(255, 255, 255, ${comet.opacity})`);
        grad.addColorStop(0.3, `rgba(255, 255, 255, ${comet.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(255, 255, 255, 0)`); // fades to transparent

        ctx.strokeStyle = grad;
        ctx.lineWidth = comet.size;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(comet.x, comet.y);
        ctx.lineTo(xEnd, yEnd);
        ctx.stroke();

        // Draw glowing comet head
        ctx.fillStyle = `rgba(255, 255, 255, ${comet.opacity})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = `rgba(255, 255, 255, 0.9)`;
        ctx.beginPath();
        ctx.arc(comet.x, comet.y, comet.size * 0.8, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // Reset blur

        // Check if fully off-screen (bottom-left)
        if (comet.y > height + comet.length || comet.x < -comet.length) {
          comet.active = false;
          comet.delay = Math.random() * 300 + 100; // wait 1.5s to 6.5s before respawning
        }
      });

    };

    const stopAnimation = visibleAnimation(canvas, animate, 60);

    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        const dimensions = setupCanvas();
        width = dimensions.width;
        height = dimensions.height;
        // Keep active comets but adjust coordinates if necessary, or just reinit them
        cometsRef.current = cometsRef.current.map((c) =>
          c.active ? c : initComet(width, height),
        );
      }, 250);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener("resize", handleResize);
      stopAnimation();
    };
  }, [initComet, dxRatio, dyRatio]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-[11] pointer-events-none"
      style={{ width: "100%", height: "100%" }}
      aria-hidden="true"
    />
  );
}
