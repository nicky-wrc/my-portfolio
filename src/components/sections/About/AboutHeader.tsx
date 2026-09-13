"use client";

import { memo, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntroAnimation } from "@/context/IntroAnimationContext";
import AboutDome from "./AboutDome";

gsap.registerPlugin(ScrollTrigger);

const AboutHeader = memo(function AboutHeader() {
  const header = useRef<HTMLDivElement>(null);
  const { isIntroComplete } = useIntroAnimation();
  useLayoutEffect(() => {
    if (!isIntroComplete || !header.current) return;
    const media = gsap.matchMedia();
    media.add(
      "(prefers-reduced-motion: no-preference)",
      () => {
        const documentTop = () => {
          const element = header.current!;
          const panel = element.closest<HTMLElement>("[data-scroll-panel]");
          const anchor = document.querySelector<HTMLElement>(
            '[data-scroll-anchor="about"]',
          );
          // Refresh against the normal-flow anchor, even if this panel is pinned.
          return panel && anchor
            ? anchor.getBoundingClientRect().top +
                window.scrollY +
                element.getBoundingClientRect().top -
                panel.getBoundingClientRect().top
            : element.getBoundingClientRect().top + window.scrollY;
        };
        // Ram's choreographed entrance, scoped to this existing header. Re-entering
        // from either edge plays it again; no second animator owns these transforms.
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: header.current,
            start: () => documentTop() - window.innerHeight * 0.65,
            end: () => documentTop() + header.current!.offsetHeight,
            toggleActions: "play reverse play reverse",
            invalidateOnRefresh: true,
          },
        });
        timeline
          .fromTo(
            ".about-dome",
            { opacity: 0, scale: 0.82 },
            {
              opacity: 1,
              scale: 1,
              duration: 0.8,
              ease: "power3.out",
            },
          )
          .fromTo(
            ".about-badge",
            { opacity: 0, scale: 0.85, y: 25 },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.7,
              ease: "power3.out",
            },
            0.2,
          )
          .fromTo(
            ".about-title",
            { opacity: 0, y: 55, clipPath: "inset(100% 0% 0% 0%)" },
            {
              opacity: 1,
              y: 0,
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1,
              ease: "power3.out",
            },
            0.4,
          )
          .fromTo(
            ".about-subtitle",
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
            },
            0.65,
          );
      },
      header,
    );
    return () => media.revert();
  }, [isIntroComplete]);
  return (
    <div
      ref={header}
      className="text-center mb-8 sm:mb-12 md:mb-16 about-header-container"
    >
      {/* Visual Dome Crown just above heading */}
      <AboutDome />

      {/* Badge container */}
      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] mb-3 sm:mb-4 text-[#ff6b3d] text-[11px] sm:text-xs font-semibold tracking-wider uppercase font-outfit about-badge">
        <div className="w-3.5 h-3.5 rounded-full bg-[#ff6b3d] flex items-center justify-center text-[#0F0E0E] flex-shrink-0">
          <svg
            className="w-[50%] h-[50%]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          >
            <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
          </svg>
        </div>
        <span>Get to Know Me</span>
      </div>

      {/* Title */}
      <h2
        className="text-[2.35rem] xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[96px] font-black tracking-[-0.03em] leading-[0.95] sm:leading-[0.9] text-white about-title px-2 sm:px-0"
        style={{
          fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
        }}
      >
        Turning ideas into{" "}
        <span
          className="font-bold px-1 text-white animate-pulse"
          style={{
            fontFamily: "var(--font-plus-jakarta-sans), sans-serif",
            textTransform: "none",
          }}
        >
          reality
        </span>
      </h2>

      {/* Subtitle */}
      <p
        className="text-xs xs:text-sm sm:text-xl md:text-2xl mt-2.5 sm:mt-4 max-w-2xl mx-auto about-subtitle italic px-3 sm:px-0"
        style={{
          fontFamily:
            'var(--font-playfair), "Playfair Display", Georgia, serif',
          color: "rgba(255,255,255,0.95)",
        }}
      >
        Developer by day, problem solver by nature. Let&apos;s build something
        amazing together.
      </p>
    </div>
  );
});

export default AboutHeader;
