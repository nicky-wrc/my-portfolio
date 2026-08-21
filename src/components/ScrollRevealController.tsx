"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR = "[data-reveal]";

export default function ScrollRevealController() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const items = Array.from(
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR),
    );
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      items.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const initialViewport = window.innerHeight * 0.94;
    items.forEach((item) => {
      if (
        item.getClientRects().length > 0 &&
        item.getBoundingClientRect().top < initialViewport
      ) {
        item.classList.add("is-visible");
      }
    });
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -12%", threshold: 0.01 },
    );

    items.forEach((item) => {
      if (!item.classList.contains("is-visible")) observer.observe(item);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("reveal-ready");
    };
  }, [pathname]);

  return null;
}
