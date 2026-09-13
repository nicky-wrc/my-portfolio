"use client";

import { motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/** Word-mask entrance adapted from Ram's Work, Skills and GitHub headings. */
export default function RevealHeading({
  text,
  as = "h2",
}: {
  text: string;
  as?: "h1" | "h2";
}) {
  const reduced = usePrefersReducedMotion();
  const Heading = as === "h1" ? motion.h1 : motion.h2;
  return (
    <Heading
      className="reveal-heading"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
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
                y: reduced ? 0 : "105%",
                rotateX: reduced ? 0 : 70,
              },
              visible: { opacity: 1, y: 0, rotateX: 0 },
            }}
            transition={{
              duration: reduced ? 0 : 0.8,
              delay: reduced ? 0 : index * 0.055,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>{" "}
        </span>
      ))}
    </Heading>
  );
}
