"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const track = useRef<HTMLDivElement>(null);
  const reduced = usePrefersReducedMotion();
  // Measure the entire runway, not the one-screen sticky visual. Its final
  // viewport is the handoff to About, after the opening/closing progress holds.
  const { scrollYProgress } = useScroll({
    target: track,
    offset: ["start start", "end end"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 0.1, 0.35, 0.85, 1],
    [0, 0, -20, -70, -70],
  );
  const scale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.85, 1],
    [1, 1, 0.97, 0.97],
  );
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.35, 0.85, 1],
    [1, 1, 0.2, 0.2],
  );
  // Keep the opening view unchanged, then frame and reopen the existing artwork.
  // This portfolio has decorative artwork rather than a hero photo/video.
  const artworkScale = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.65, 1],
    [1, 1, 0.94, 1, 1],
  );
  const artworkClip = useTransform(
    scrollYProgress,
    [0, 0.1, 0.2, 0.65, 1],
    [
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 8% 0% 8% round 24px)",
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 0% 0% 0% round 0px)",
    ],
  );
  const artworkOpacity = useTransform(
    scrollYProgress,
    [0, 0.75, 0.85, 1],
    [1, 1, 0.85, 0.85],
  );
  return (
    <div ref={track} className="hero-scroll-track">
      <section id="home" className="portfolio-hero">
        <motion.div
          className="absolute inset-0"
          data-hero-artwork
          style={
            reduced
              ? {
                  scale: 1,
                  opacity: 1,
                  clipPath: "inset(0% 0% 0% 0% round 0px)",
                }
              : {
                  scale: artworkScale,
                  clipPath: artworkClip,
                  opacity: artworkOpacity,
                }
          }
        >
          <HeroBackground />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          data-hero-content
          style={
            reduced ? { y: 0, scale: 1, opacity: 1 } : { y, scale, opacity }
          }
        >
          <HeroContent />
          <div className="hero-availability">
            <span />
            Open to internships
          </div>
          <a href="#about" className="hero-scroll" aria-label="Scroll to about">
            <span />
            SCROLL TO EXPLORE
          </a>
        </motion.div>
      </section>
    </div>
  );
}
