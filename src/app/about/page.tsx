'use client';

import { useEffect } from 'react';

/** Legacy URL: send visitors to the on-page #about section */
export default function AboutRedirectPage() {
  useEffect(() => {
    window.location.replace('/#about');
  }, []);

  return (
    <main className="flex min-h-[40vh] items-center justify-center text-slate-400">
      <p className="text-sm">Redirecting to overview…</p>
    </main>
  );
}
