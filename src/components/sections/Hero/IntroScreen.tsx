"use client";

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
    const timeline = gsap.timeline({ onComplete: completeIntro });
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
          scale: 18,
          filter: "blur(10px)",
          duration: 0.85,
          ease: "power3.in",
        },
        "+=0.2",
      )
      .to(overlay.current, { opacity: 0, duration: 0.85 }, "<0.15");
    const fallback = window.setTimeout(completeIntro, 4500);
    return () => {
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
        Skip intro ↗
      </button>
    </div>
  );
}
