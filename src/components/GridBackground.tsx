'use client';

export default function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-500/20 via-transparent to-transparent blur-3xl" />
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-500/20 via-transparent to-transparent blur-3xl" />
      
      {/* Animated Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
    </div>
  );
}



