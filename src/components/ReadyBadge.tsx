'use client';

export default function ReadyBadge() {
  return (
    <div className="cyber-chip animate-pulse-glow">
      <span className="relative inline-flex w-2.5 h-2.5">
        <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
        <span className="relative inline-flex rounded-full w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_10px_rgba(0,255,163,0.9)]" />
      </span>
      <span className="font-display">SYSTEM ONLINE · READY TO BUILD</span>
    </div>
  );
}
