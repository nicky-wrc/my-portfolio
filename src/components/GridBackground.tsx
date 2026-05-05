'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Subtle data grid */}
      <div
        className="absolute inset-0 opacity-[0.12] data-grid"
        style={{
          maskImage: 'radial-gradient(ellipse at 50% 40%, black 25%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at 50% 40%, black 25%, transparent 80%)',
        }}
      />

      {/* Slow drifting auroras */}
      <div className="absolute -top-32 -left-32 w-[44rem] h-[44rem] rounded-full blur-[140px] bg-fuchsia-500/15 animate-aurora-1" />
      <div className="absolute top-20 right-[-12rem] w-[46rem] h-[46rem] rounded-full blur-[140px] bg-cyan-400/12 animate-aurora-2" />
      <div className="absolute bottom-[-16rem] left-1/3 w-[42rem] h-[42rem] rounded-full blur-[160px] bg-violet-500/15 animate-aurora-3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[26rem] h-[26rem] rounded-full blur-[140px] bg-emerald-400/[0.06]" />

      {/* Deep vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_35%,_rgba(0,0,0,0.6)_100%)]" />
    </div>
  );
}
