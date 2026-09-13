"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import HeroContent from "./HeroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  const section = useRef<HTMLElement>(null);
  const reduced = usePrefersReducedMotion();
  // This hero is already sticky and one viewport tall. "end start" gives it
  // a full viewport of progress without changing the following section's position.
  const { scrollYProgress } = useScroll({
    target: section,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -70]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.85, 1],
    [1, 1, 0.2, 0],
  );
  // Keep the opening view unchanged, then frame and reopen the existing artwork.
  // This portfolio has decorative artwork rather than a hero photo/video.
  const artworkScale = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65],
    [1, 0.94, 1],
  );
  const artworkClip = useTransform(
    scrollYProgress,
    [0, 0.15, 0.65],
    [
      "inset(0% 0% 0% 0% round 0px)",
      "inset(0% 8% 0% 8% round 24px)",
      "inset(0% 0% 0% 0% round 0px)",
    ],
  );
  const artworkOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 1, 0]);
  return (
    <section id="home" ref={section} className="portfolio-hero">
      <motion.div
        className="absolute inset-0"
        data-hero-artwork
        style={
          reduced
            ? { scale: 1, opacity: 1, clipPath: "inset(0% 0% 0% 0% round 0px)" }
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
        style={reduced ? { y: 0, scale: 1, opacity: 1 } : { y, scale, opacity }}
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
  );
}
