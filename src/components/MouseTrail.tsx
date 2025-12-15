'use client';

import { useEffect, useState } from 'react';

interface TrailPoint {
  id: number;
  x: number;
  y: number;
  timestamp: number;
}

export default function MouseTrail() {
  const [trail, setTrail] = useState<TrailPoint[]>([]);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPoint: TrailPoint = {
        id: trailId++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now(),
      };

      setTrail((prev) => [...prev, newPoint].slice(-20)); // Keep last 20 points

      // Remove old points
      setTimeout(() => {
        setTrail((prev) => prev.filter((p) => p.id !== newPoint.id));
      }, 500);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {trail.map((point, index) => {
        const opacity = 1 - index / trail.length;
        const size = 10 - (index * 0.4);
        
        return (
          <div
            key={point.id}
            className="absolute rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 blur-sm"
            style={{
              left: `${point.x}px`,
              top: `${point.y}px`,
              width: `${size}px`,
              height: `${size}px`,
              transform: 'translate(-50%, -50%)',
              opacity: opacity * 0.6,
              transition: 'all 0.1s ease-out',
            }}
          />
        );
      })}
    </div>
  );
}



