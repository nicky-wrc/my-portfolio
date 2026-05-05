'use client';

import { useEffect, useState, CSSProperties } from 'react';

type CardColor = 'cyan' | 'emerald' | 'violet' | 'pink';

const COLOR_STYLES: Record<CardColor, { border: string; glow: string; shadow: string }> = {
  cyan: {
    border: 'rgba(0, 229, 255, 0.55)',
    glow: 'rgba(0, 229, 255, 0.45)',
    shadow: '0 8px 30px -8px rgba(0, 229, 255, 0.55), inset 0 0 0 1px rgba(255, 46, 209, 0.18)',
  },
  emerald: {
    border: 'rgba(0, 255, 163, 0.55)',
    glow: 'rgba(0, 255, 163, 0.45)',
    shadow: '0 8px 30px -8px rgba(0, 255, 163, 0.55), inset 0 0 0 1px rgba(0, 229, 255, 0.18)',
  },
  violet: {
    border: 'rgba(139, 92, 246, 0.55)',
    glow: 'rgba(139, 92, 246, 0.45)',
    shadow: '0 8px 30px -8px rgba(139, 92, 246, 0.55), inset 0 0 0 1px rgba(255, 46, 209, 0.18)',
  },
  pink: {
    border: 'rgba(255, 46, 209, 0.55)',
    glow: 'rgba(255, 46, 209, 0.45)',
    shadow: '0 8px 30px -8px rgba(255, 46, 209, 0.55), inset 0 0 0 1px rgba(0, 229, 255, 0.18)',
  },
};

interface HoloCardProps {
  color: CardColor;
  rotate: number;
  positionStyle: CSSProperties;
  parallaxX: number;
  parallaxY: number;
  mouseX: number;
  mouseY: number;
  children: React.ReactNode;
}

function HoloCard({
  color,
  rotate,
  positionStyle,
  parallaxX,
  parallaxY,
  mouseX,
  mouseY,
  children,
}: HoloCardProps) {
  const c = COLOR_STYLES[color];
  return (
    <div
      className="absolute hidden sm:flex items-center gap-2 px-4 py-2.5 font-mono text-sm whitespace-nowrap rounded-2xl backdrop-blur-md"
      style={{
        ...positionStyle,
        background: 'rgba(8, 12, 36, 0.85)',
        border: `1px solid ${c.border}`,
        boxShadow: c.shadow,
        transform: `translate(${mouseX * parallaxX}px, ${mouseY * parallaxY}px) rotate(${rotate}deg)`,
        transition: 'transform 0.45s ease-out',
        width: 'max-content',
        maxWidth: 'none',
      }}
    >
      {/* Inner glow halo */}
      <span
        className="pointer-events-none absolute -inset-[1px] rounded-2xl"
        style={{
          boxShadow: `0 0 24px -4px ${c.glow}`,
          opacity: 0.55,
        }}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </div>
  );
}

export default function IllustrationSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 18;
      const y = (e.clientY / window.innerHeight - 0.5) * 18;
      setMousePosition({ x, y });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative h-full w-full flex items-center justify-center select-none">
      {/* Aurora plasma glow behind the robot */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="absolute w-[34rem] h-[34rem] rounded-full bg-gradient-to-tr from-fuchsia-500/40 via-cyan-400/30 to-emerald-400/30 blur-[100px] animate-pulse-glow" />
        <div className="absolute w-[20rem] h-[20rem] rounded-full bg-gradient-to-br from-violet-500/40 to-pink-500/30 blur-[80px] animate-aurora-2" />
      </div>

      {/* Orbit rings */}
      <div
        className="absolute w-[24rem] h-[24rem] rounded-full border border-cyan-300/15 animate-rotate-slow pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.25}px, ${mousePosition.y * 0.25}px) rotate(0deg)`,
        }}
      />
      <div
        className="absolute w-[16rem] h-[16rem] rounded-full border border-fuchsia-300/15 pointer-events-none"
        style={{
          transform: `translate(${mousePosition.x * 0.4}px, ${mousePosition.y * 0.4}px)`,
        }}
      />

      {/* Floating tech holo cards */}
      <HoloCard
        color="cyan"
        rotate={-5}
        positionStyle={{ left: 0, top: '4%' }}
        parallaxX={0.35}
        parallaxY={0.35}
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
      >
        <span className="text-fuchsia-300">{'>'}</span>
        <span className="text-cyan-200">initializing.</span>
        <span className="text-emerald-300">ai_core</span>
      </HoloCard>

      <HoloCard
        color="emerald"
        rotate={4}
        positionStyle={{ right: 0, top: '14%' }}
        parallaxX={-0.4}
        parallaxY={0.3}
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
      >
        <span className="text-cyan-300">status:</span>
        <span className="text-emerald-300 font-semibold">ONLINE</span>
        <span className="relative inline-flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
          <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
        </span>
      </HoloCard>

      <HoloCard
        color="violet"
        rotate={3}
        positionStyle={{ left: 0, bottom: '12%' }}
        parallaxX={0.3}
        parallaxY={-0.35}
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
      >
        <span className="text-fuchsia-300">load:</span>
        <span className="text-violet-200">backend.systems</span>
      </HoloCard>

      <HoloCard
        color="pink"
        rotate={-3}
        positionStyle={{ right: 0, bottom: '24%' }}
        parallaxX={-0.3}
        parallaxY={-0.25}
        mouseX={mousePosition.x}
        mouseY={mousePosition.y}
      >
        <span className="text-cyan-300">deploy:</span>
        <span className="text-pink-200">production</span>
      </HoloCard>

      {/* The Robot */}
      <div
        className="relative z-10"
        style={{
          transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          transition: 'transform 0.45s ease-out',
        }}
      >
        <Robot />
      </div>

      {/* Light beam under the robot */}
      <div className="absolute bottom-0 w-72 h-2 bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent blur-md pointer-events-none" />
      <div className="absolute bottom-1 w-44 h-1 bg-gradient-to-r from-transparent via-fuchsia-300/70 to-transparent blur-sm pointer-events-none" />
    </div>
  );
}

function Robot() {
  return (
    <div className="relative animate-float-y">
      <svg
        width="280"
        height="320"
        viewBox="0 0 280 320"
        className="drop-shadow-[0_0_30px_rgba(0,229,255,0.45)]"
      >
        <defs>
          <linearGradient id="bodyGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#1a1d3a" />
            <stop offset="50%" stopColor="#0a0e2c" />
            <stop offset="100%" stopColor="#05060f" />
          </linearGradient>
          <linearGradient id="chrome" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#9aa3c8" />
            <stop offset="50%" stopColor="#3a4068" />
            <stop offset="100%" stopColor="#1a1d3a" />
          </linearGradient>
          <radialGradient id="visor" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00ffff" />
            <stop offset="60%" stopColor="#00e5ff" />
            <stop offset="100%" stopColor="#0066aa" />
          </radialGradient>
          <radialGradient id="core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff5fa2" />
            <stop offset="60%" stopColor="#ff2ed1" />
            <stop offset="100%" stopColor="#5a0d4a" />
          </radialGradient>
          <linearGradient id="antenna" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#00ffa3" />
            <stop offset="100%" stopColor="#00e5ff" />
          </linearGradient>
        </defs>

        {/* Antenna */}
        <line x1="140" y1="20" x2="140" y2="50" stroke="url(#antenna)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="140" cy="16" r="6" fill="#00ffa3">
          <animate attributeName="r" values="5;7;5" dur="1.4s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="16" r="11" fill="#00ffa3" opacity="0.25">
          <animate attributeName="r" values="9;14;9" dur="1.4s" repeatCount="indefinite" />
        </circle>

        {/* Head */}
        <rect x="92" y="48" width="96" height="78" rx="22" fill="url(#bodyGrad)" stroke="#00e5ff" strokeWidth="1.5" />
        {/* Head highlight */}
        <rect x="98" y="54" width="84" height="10" rx="6" fill="rgba(255,255,255,0.06)" />
        {/* Visor */}
        <rect x="104" y="70" width="72" height="32" rx="14" fill="url(#visor)" opacity="0.95">
          <animate attributeName="opacity" values="0.85;1;0.85" dur="2.2s" repeatCount="indefinite" />
        </rect>
        {/* Eyes */}
        <circle cx="124" cy="86" r="5" fill="#ffffff" />
        <circle cx="156" cy="86" r="5" fill="#ffffff" />
        <circle cx="124" cy="86" r="2.2" fill="#0a0e2c" />
        <circle cx="156" cy="86" r="2.2" fill="#0a0e2c" />
        {/* Cheek vent lines */}
        <line x1="100" y1="115" x2="116" y2="115" stroke="#ff2ed1" strokeWidth="1.2" opacity="0.9" />
        <line x1="164" y1="115" x2="180" y2="115" stroke="#ff2ed1" strokeWidth="1.2" opacity="0.9" />

        {/* Neck */}
        <rect x="128" y="126" width="24" height="12" rx="3" fill="url(#chrome)" />

        {/* Body */}
        <path
          d="M 70 140 Q 70 138 72 138 L 208 138 Q 210 138 210 140 L 210 232 Q 210 244 198 244 L 82 244 Q 70 244 70 232 Z"
          fill="url(#bodyGrad)"
          stroke="#00e5ff"
          strokeWidth="1.5"
        />
        {/* Body shoulder plate */}
        <rect x="76" y="142" width="128" height="14" rx="6" fill="rgba(255,255,255,0.06)" />

        {/* Chest core */}
        <circle cx="140" cy="188" r="22" fill="url(#core)">
          <animate attributeName="r" values="20;24;20" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="188" r="32" fill="#ff2ed1" opacity="0.18">
          <animate attributeName="r" values="28;36;28" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="140" cy="188" r="9" fill="#ffffff" opacity="0.95" />

        {/* Body lights */}
        <rect x="86" y="166" width="6" height="6" rx="1" fill="#00ffa3" />
        <rect x="86" y="178" width="6" height="6" rx="1" fill="#00e5ff" />
        <rect x="86" y="190" width="6" height="6" rx="1" fill="#ff2ed1" />
        <rect x="188" y="166" width="6" height="6" rx="1" fill="#ff2ed1" />
        <rect x="188" y="178" width="6" height="6" rx="1" fill="#00e5ff" />
        <rect x="188" y="190" width="6" height="6" rx="1" fill="#00ffa3" />

        {/* Body grill */}
        <line x1="118" y1="222" x2="162" y2="222" stroke="#00e5ff" strokeWidth="1.2" opacity="0.7" />
        <line x1="124" y1="230" x2="156" y2="230" stroke="#ff2ed1" strokeWidth="1.2" opacity="0.7" />

        {/* Left Arm */}
        <rect x="40" y="148" width="22" height="58" rx="10" fill="url(#chrome)" />
        <rect x="38" y="200" width="26" height="22" rx="10" fill="url(#bodyGrad)" stroke="#00e5ff" strokeWidth="1" />
        <circle cx="51" cy="211" r="3" fill="#00ffa3" />

        {/* Right Arm */}
        <rect x="218" y="148" width="22" height="58" rx="10" fill="url(#chrome)" />
        <rect x="216" y="200" width="26" height="22" rx="10" fill="url(#bodyGrad)" stroke="#ff2ed1" strokeWidth="1" />
        <circle cx="229" cy="211" r="3" fill="#ff2ed1" />

        {/* Hover base / legs */}
        <ellipse cx="140" cy="262" rx="58" ry="10" fill="url(#chrome)" />
        <ellipse cx="140" cy="262" rx="42" ry="6" fill="#0a0e2c" />
        {/* Thrusters */}
        <ellipse cx="110" cy="282" rx="12" ry="4" fill="#00e5ff" opacity="0.85">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="170" cy="282" rx="12" ry="4" fill="#ff2ed1" opacity="0.85">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="1.4s" repeatCount="indefinite" />
        </ellipse>
        <ellipse cx="140" cy="296" rx="40" ry="6" fill="url(#visor)" opacity="0.5">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="2s" repeatCount="indefinite" />
        </ellipse>
      </svg>
    </div>
  );
}
