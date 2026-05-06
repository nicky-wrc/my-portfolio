'use client';

import { useEffect } from 'react';

/** Dispatched when the tab becomes visible again — ScrollReveal and others can replay motion. */
export const MOTION_RESUME_EVENT = 'portfolio:resume-motion';

/**
 * Browsers often throttle or stall CSS / WAAPI animations after a tab sits in the background.
 * When the user returns and scrolls, motion can look "dead" until a refresh. This nudges
 * animations to resume and broadcasts a custom event so reveal-type components can replay.
 */
export default function MotionResume() {
  useEffect(() => {
    const resume = () => {
      if (document.visibilityState !== 'visible') return;

      requestAnimationFrame(() => {
        try {
          document.getAnimations().forEach((animation) => {
            try {
              animation.play();
            } catch {
              /* ignore */
            }
          });
        } catch {
          /* getAnimations may be unavailable in very old engines */
        }

        window.dispatchEvent(new CustomEvent(MOTION_RESUME_EVENT));
      });
    };

    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) resume();
    };

    document.addEventListener('visibilitychange', resume);
    window.addEventListener('pageshow', onPageShow);
    return () => {
      document.removeEventListener('visibilitychange', resume);
      window.removeEventListener('pageshow', onPageShow);
    };
  }, []);

  return null;
}
