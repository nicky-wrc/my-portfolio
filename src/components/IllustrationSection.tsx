'use client';

import { useEffect, useState } from 'react';

export default function IllustrationSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-full flex items-center justify-center">
      {/* Floating Code Elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/20 rounded-xl backdrop-blur-sm shadow-lg"
            style={{
              transform: `translate(${mousePosition.x * (i + 1) * 0.2}px, ${mousePosition.y * (i + 1) * 0.2}px) rotate(${i * 20}deg)`,
              left: `${15 + i * 25}%`,
              top: `${20 + i * 15}%`,
              transition: 'transform 0.4s ease-out',
            }}
          >
            <div className="p-3 text-cyan-400/40 font-mono text-xs">
              {i === 0 && 'const api = {...}'}
              {i === 1 && 'function solve() {'}
              {i === 2 && 'return data'}
              {i === 3 && 'async await'}
            </div>
          </div>
        ))}
      </div>

      {/* Central Illustration - Simplified */}
      <div className="relative z-10 flex items-center justify-center gap-8">
        {/* Terminal/Code Window */}
        <div className="relative">
          <div className="w-72 h-48 bg-slate-800/80 backdrop-blur-sm border-2 border-cyan-400/30 rounded-lg shadow-2xl shadow-cyan-500/20">
            <div className="flex items-center gap-2 p-3 border-b border-slate-700">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs text-slate-400 ml-2">terminal</span>
            </div>
            <div className="p-4 font-mono text-sm text-cyan-400">
              <div className="mb-2">
                <span className="text-green-400">$</span> npm start
              </div>
              <div className="text-slate-300">
                Server running on port 3000
              </div>
              <div className="text-blue-400 mt-2">
                ✓ Build successful
              </div>
            </div>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-cyan-400/10 rounded-lg blur-xl -z-10 animate-pulse"></div>
        </div>

        {/* Floating Elements */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Database Icon */}
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border-2 border-blue-400/30 rounded-lg backdrop-blur-sm flex items-center justify-center shadow-lg"
              style={{
                transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

