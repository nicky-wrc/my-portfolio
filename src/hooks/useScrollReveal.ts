"use client";

import { useSyncExternalStore } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const query = "(max-width: 767px)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const snapshot = () => window.matchMedia(query).matches;
const serverSnapshot = () => false;

/** Intersection-driven entrance; no scroll listener, RAF loop or layout wrapper. */
export function useScrollReveal({
  delay = 0,
  image = false,
  once = false,
}: {
  delay?: number;
  image?: boolean;
  once?: boolean;
} = {}) {
  const reduced = usePrefersReducedMotion();
  const mobile = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  return {
    initial: reduced
      ? (false as const)
      : { opacity: 0, y: mobile ? 24 : 44, ...(image ? { scale: 0.97 } : {}) },
    animate: reduced
      ? { opacity: 1, y: 0, ...(image ? { scale: 1 } : {}) }
      : undefined,
    whileInView: { opacity: 1, y: 0, ...(image ? { scale: 1 } : {}) },
    viewport: { once, amount: 0.08, margin: "0px 0px -24px 0px" as const },
    transition: {
      duration: reduced ? 0 : mobile ? 0.7 : 0.85,
      delay: reduced ? 0 : delay,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  };
}
