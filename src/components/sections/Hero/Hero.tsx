"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const inner = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        inner.current,
        { scale: 1, y: 0, opacity: 1, filter: "blur(0px)" },
        {
          scale: 0.88,
          y: -100,
          opacity: 0,
          filter: "blur(12px)",
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });
    return () => media.revert();
  }, []);
  return (
    <section id="home" ref={section} className="portfolio-hero">
      <div ref={inner} className="absolute inset-0">
        <HeroBackground />
        <HeroContent />
        <div className="hero-availability">
          <span />
          Open to internships
        </div>
        <a href="#about" className="hero-scroll" aria-label="Scroll to about">
          <span />
          SCROLL TO EXPLORE
        </a>
      </div>
    </section>
  );
}
