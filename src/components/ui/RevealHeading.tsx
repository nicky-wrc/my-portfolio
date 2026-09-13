"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIntroAnimation } from "@/context/IntroAnimationContext";

/** Word-mask entrance adapted from Ram's Work, Skills and GitHub headings. */
export default function RevealHeading({
  text,
  as = "h2",
}: {
  text: string;
  as?: "h1" | "h2";
}) {
  const reduced = usePrefersReducedMotion();
  const { isIntroComplete } = useIntroAnimation();
  const { viewport, transition } = useScrollReveal({ distance: 40 });
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Heading
      className="reveal-heading"
      initial={reduced ? false : "hidden"}
      animate={reduced ? "visible" : "hidden"}
      whileInView={reduced || isIntroComplete ? "visible" : "hidden"}
      viewport={viewport}
      aria-label={text}
    >
      {text.split(" ").map((word, index) => (
        <span
          className="reveal-word-mask"
          key={`${word}-${index}`}
          aria-hidden="true"
        >
          <motion.span
            className="reveal-word"
            variants={{
              hidden: {
                opacity: reduced ? 1 : 0,
                y: reduced ? 0 : "100%",
              },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{
              ...transition,
              delay: reduced ? 0 : index * 0.08,
            }}
          >
            {word}
          </motion.span>{" "}
        </span>
      ))}
    </Heading>
  );
}
