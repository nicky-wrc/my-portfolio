'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function RouteTransitionOrchestrator({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isFirstNav = useRef(true);
  const [warp, setWarp] = useState(false);

  useEffect(() => {
    if (isFirstNav.current) {
      isFirstNav.current = false;
      return;
    }
    setWarp(true);
    const id = window.setTimeout(() => setWarp(false), 820);
    return () => window.clearTimeout(id);
  }, [pathname]);

  return (
    <>
      <div
        className={`route-warp-layer ${warp ? 'route-warp-layer--on' : ''}`}
        aria-hidden
      />
      {children}
    </>
  );
}
