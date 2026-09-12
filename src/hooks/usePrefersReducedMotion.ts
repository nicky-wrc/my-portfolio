"use client";

import { useSyncExternalStore } from "react";

const query = "(prefers-reduced-motion: reduce)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(query);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getSnapshot = () => window.matchMedia(query).matches;
const getServerSnapshot = () => false;

/** Keep the first client render consistent with SSR, then apply the device setting. */
export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
