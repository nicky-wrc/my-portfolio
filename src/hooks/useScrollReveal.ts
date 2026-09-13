"use client";

import { useSyncExternalStore } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useIntroAnimation } from "@/context/IntroAnimationContext";

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
  distance = 50,
}: {
  delay?: number;
  image?: boolean;
  once?: boolean;
  distance?: number;
} = {}) {
  const reduced = usePrefersReducedMotion();
  const { isIntroComplete } = useIntroAnimation();
  const mobile = useSyncExternalStore(subscribe, snapshot, serverSnapshot);
  const hidden = {
    opacity: 0,
    y: mobile ? Math.max(35, distance * 0.85) : Math.max(55, distance),
    ...(image ? { scale: 0.94 } : {}),
  };
  const visible = { opacity: 1, y: 0, ...(image ? { scale: 1 } : {}) };
  return {
    initial: reduced ? (false as const) : hidden,
    animate: reduced ? visible : hidden,
    whileInView: reduced || isIntroComplete ? visible : hidden,
    viewport: {
      once,
      amount: 0.15,
      margin: mobile
        ? ("0px 0px -140px 0px" as const)
        : ("0px 0px -200px 0px" as const),
    },
    transition: {
      duration: reduced ? 0 : mobile ? 0.95 : 1.1,
      delay: reduced ? 0 : delay,
      ease: [0.215, 0.61, 0.355, 1] as const,
    },
  };
}
