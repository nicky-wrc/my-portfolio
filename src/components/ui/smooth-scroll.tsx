"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Section stacking uses the site's existing Lenis instance, not a second root. */
export function ScrollStack({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const panels = root.current?.querySelectorAll<HTMLElement>(
      "[data-scroll-panel]",
    );
    if (!panels) return;
    // Touch browsers change the visual viewport during toolbar gestures.
    // Their panels flow normally; no sticky measurements/refreshes are needed.
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) return;
    let frame = 0;
    const measure = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        for (const panel of panels) {
          // A long section scrolls all the way to its bottom before it sticks.
          // Short sections stick at the top, as in the supplied reference.
          const revealRoom =
            panel.dataset.scrollPanel === "home"
              ? 0
              : Math.min(200, window.innerHeight * 0.25);
          const top =
            panel.offsetHeight > window.innerHeight
              ? window.innerHeight - panel.offsetHeight - revealRoom
              : 0;
          // Cover earlier pinned panels without changing the content layout.
          // Round upward so fractional section heights cannot leave a seam.
          const fill = Math.max(
            0,
            Math.ceil(window.innerHeight - panel.getBoundingClientRect().height - top),
          );
          panel.style.setProperty("--stack-top", `${top}px`);
          panel.style.setProperty("--stack-fill", `${fill}px`);
          const hold = panel.nextElementSibling;
          if (
            hold instanceof HTMLElement &&
            hold.hasAttribute("data-scroll-hold")
          ) {
            hold.style.setProperty("--stack-fill", `${fill}px`);
          }
        }
        ScrollTrigger.refresh();
      });
    };
    const observer = new ResizeObserver(measure);
    panels.forEach((panel) => observer.observe(panel));
    window.addEventListener("resize", measure);
    measure();
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={root} className="portfolio-scroll-stack">
      {children}
    </div>
  );
}

export function ScrollPanel({
  anchor,
  children,
}: {
  anchor: string;
  children: ReactNode;
}) {
  return (
    <>
      {/* Navigation targets must stay in normal flow while the panel is sticky. */}
      <div data-scroll-anchor={anchor} aria-hidden="true" />
      <div data-scroll-panel={anchor} className="portfolio-scroll-panel">
        {children}
      </div>
      {anchor !== "home" && (
        <div
          data-scroll-hold={anchor}
          className="portfolio-scroll-hold"
          aria-hidden="true"
        />
      )}
    </>
  );
}
