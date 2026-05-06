'use client';

import { useEffect, useLayoutEffect, useState } from 'react';

export default function AppBootSequence() {
  const [phase, setPhase] = useState<'boot' | 'exit' | 'done'>('boot');

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase('done');
    }
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cancelled = false;
    document.body.style.overflow = 'hidden';
    const minMs = 1650;
    const start = performance.now();

    const runExit = () => {
      if (cancelled) return;
      setPhase('exit');
      window.setTimeout(() => {
        if (!cancelled) setPhase('done');
      }, 820);
    };

    const ready = () => {
      const elapsed = performance.now() - start;
      window.setTimeout(runExit, Math.max(0, minMs - elapsed));
    };

    const fontWait = document.fonts.ready.catch(() => undefined);
    void fontWait.then(() => {
      if (cancelled) return;
      if (document.readyState === 'complete') ready();
      else window.addEventListener('load', ready, { once: true });
    });

    return () => {
      cancelled = true;
      document.body.style.overflow = '';
    };
  }, []);

  useEffect(() => {
    if (phase === 'done') {
      document.body.style.overflow = '';
    }
  }, [phase]);

  if (phase === 'done') return null;

  return (
    <div
      className={`app-boot-root ${phase === 'exit' ? 'app-boot-root--exit' : ''}`}
      role="status"
      aria-label="Loading portfolio"
    >
      <div className="app-boot-backdrop" aria-hidden />
      <div className="app-boot-grid" aria-hidden />
      <div className="app-boot-aurora app-boot-aurora--a" aria-hidden />
      <div className="app-boot-aurora app-boot-aurora--b" aria-hidden />
      <div className="app-boot-beam" aria-hidden />
      <div className="app-boot-sparks" aria-hidden />

      <div className="app-boot-rings-wrap" aria-hidden>
        <div className="app-boot-rings">
          <div className="app-boot-ring app-boot-ring--outer" />
          <div className="app-boot-ring app-boot-ring--mid" />
          <div className="app-boot-ring app-boot-ring--inner" />
        </div>
      </div>

      <div className="app-boot-content">
        <p className="font-display text-[0.65rem] md:text-xs tracking-[0.42em] text-cyan-300/90 mb-3 md:mb-4 app-boot-fade-in">
          SYSTEM BOOT
        </p>
        <h1 className="font-display font-extrabold uppercase tracking-[0.12em] text-2xl sm:text-3xl md:text-4xl mb-2 app-boot-title app-boot-fade-in">
          <span className="text-white drop-shadow-[0_0_20px_rgba(0,229,255,0.35)]">
            Worachat
          </span>
          <span className="text-holo">.dev</span>
        </h1>
        <p className="font-mono text-[0.65rem] text-fuchsia-300/70 tracking-widest mb-8 md:mb-10 app-boot-fade-in app-boot-fade-in--delay">
          // Uplink secure channel
        </p>

        <div className="app-boot-progress" aria-hidden>
          <div className="app-boot-progress-glow" />
          <div className="app-boot-progress-track">
            <div className="app-boot-progress-fill" />
          </div>
          <div className="app-boot-progress-edge" />
        </div>

        <ul className="font-mono text-left text-[0.62rem] md:text-xs text-slate-500 space-y-2 mt-8 max-w-xs mx-auto md:mx-0">
          <li className="app-boot-log app-boot-log--1">
            <span className="text-cyan-500/90">{'>'}</span> handshake_neural…{' '}
            <span className="text-emerald-400/90">OK</span>
          </li>
          <li className="app-boot-log app-boot-log--2">
            <span className="text-cyan-500/90">{'>'}</span> mount_holo_ui…{' '}
            <span className="text-emerald-400/90">OK</span>
          </li>
          <li className="app-boot-log app-boot-log--3">
            <span className="text-cyan-500/90">{'>'}</span> stream_assets…{' '}
            <span className="text-emerald-400/90">OK</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
