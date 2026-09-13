"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { skills as groups } from "@/data/skills";
import { skills } from "@/components/sections/Skills/skills.data";
import MarqueeRow from "@/components/sections/Skills/MarqueeRow";
const verbs = ["build with.", "create with.", "explore."];
export default function SkillSection() {
  const reducedMotion = usePrefersReducedMotion();
  const [word, setWord] = useState(0);
  useEffect(() => {
    if (reducedMotion) return;
    const timer = window.setInterval(
      () => setWord((value) => (value + 1) % verbs.length),
      2600,
    );
    return () => window.clearInterval(timer);
  }, [reducedMotion]);
  const [selected, setSelected] = useState("All");
  const visible =
    selected === "All"
      ? skills
      : skills.filter((s) =>
          groups.find((g) => g.category === selected)?.items.includes(s.name),
        );
  const middle = Math.ceil(visible.length / 2);
  return (
    <section id="skills" className="skills-section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-heading"
      >
        <span className="section-badge">✳ THE TOOLS BEHIND THE WORK</span>
        <h2>
          The stack I{" "}
          <span className="skill-heading-word" aria-hidden="true">
            <AnimatePresence mode="wait">
              <motion.span
                key={reducedMotion ? 0 : word}
                initial={{ opacity: 0, y: 15, filter: "blur(7px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -15, filter: "blur(7px)" }}
                transition={{ duration: 0.35 }}
              >
                {verbs[reducedMotion ? 0 : word]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="sr-only">build with.</span>
        </h2>
        <p>From the first line of code to a complete working system.</p>
      </motion.div>
      <div className="filter-pills" role="group" aria-label="Skill categories">
        {["All", ...groups.map((g) => g.category)].map((category) => (
          <button
            key={category}
            onClick={() => setSelected(category)}
            aria-pressed={selected === category}
          >
            {category}
          </button>
        ))}
      </div>
      {reducedMotion ? (
        <ul className="static-skills">
          {visible.map((skill) => (
            <li key={skill.name}>
              <skill.icon style={{ color: skill.color }} />
              {skill.name}
            </li>
          ))}
        </ul>
      ) : (
        <div className="skill-marquees" key={selected}>
          <MarqueeRow skills={visible.slice(0, middle)} speed={40} />
          {visible.length > 1 && (
            <MarqueeRow skills={visible.slice(middle)} reverse speed={45} />
          )}
        </div>
      )}
    </section>
  );
}
