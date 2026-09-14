"use client";

import { PortfolioArrow } from "@/components/ui/PortfolioIcons";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import PersonalMark from "@/components/PersonalMark";
import { useIntroAnimation } from "@/context/IntroAnimationContext";

export default function IntroScreen() {
  const { completeIntro } = useIntroAnimation();
  const overlay = useRef<HTMLDivElement>(null);
  const name = useRef<HTMLDivElement>(null);
  const skip = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    skip.current?.focus();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      completeIntro();
      return;
    }
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const touch = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    const timeline = gsap.timeline({ paused: true, onComplete: completeIntro });
    let active = true;
    // Wait for lettering metrics so Safari does not reveal a fallback-font crop.
    document.fonts.ready.then(() => { if (active) timeline.play(); });
    timeline
      .fromTo(
        name.current,
        { opacity: 0, clipPath: "inset(0 100% 0 0)", scale: 1.04 },
        {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          duration: 2.2,
          ease: "none",
        },
      )
      .to(
        name.current,
        {
          opacity: 0,
          scale: touch ? 1.15 : 18,
          filter: touch ? "none" : "blur(10px)",
          duration: 0.85,
          ease: "power3.in",
        },
        "+=0.2",
      )
      .to(overlay.current, { opacity: 0, duration: 0.85 }, "<0.15");
    const fallback = window.setTimeout(completeIntro, 4500);
    return () => {
      active = false;
      timeline.kill();
      clearTimeout(fallback);
      document.body.style.overflow = originalOverflow;
    };
  }, [completeIntro]);
  return (
    <div ref={overlay} className="intro-overlay">
      <div ref={name} className="intro-signature" aria-label="Worachat">
        <PersonalMark signature />
      </div>
      <button ref={skip} onClick={completeIntro} className="intro-skip">
        Skip intro <PortfolioArrow />
      </button>
    </div>
  );
}
