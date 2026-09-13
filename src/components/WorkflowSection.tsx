"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Asterisk,
  Braces,
  Database,
  GitBranch,
  Layers,
  ScanEye,
  ShieldCheck,
  Sparkles,
  Terminal,
} from "lucide-react";
import { workflowValues } from "@/data/workflow";
import { projects } from "@/data/projects";
import RevealHeading from "@/components/ui/RevealHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const visualIcons = {
  flow: [Braces, Database, ShieldCheck],
  layers: [Layers, Database, Terminal],
  iteration: [GitBranch, ShieldCheck, GitBranch],
  tools: [Terminal, Sparkles, Braces],
  pipeline: [ScanEye, Database, Braces],
};
function WorkflowVisual({
  kind,
  reduced,
}: {
  kind: keyof typeof visualIcons;
  reduced: boolean;
}) {
  if (kind === "flow")
    return (
      <div className="workflow-bars">
        <small>PROJECT MIX</small>
        <div>
          {["Web App", "AI", "Mobile App", "Data Analytics"].map((category) => {
            const count = projects.filter(
              (project) => project.category === category,
            ).length;
            return (
              <div key={category}>
                <span>{count}</span>
                <motion.i
                  initial={{ scaleY: reduced ? 1 : 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9 }}
                  style={{ height: 10 + count * 5 }}
                />
                <small>
                  {category.replace(" App", "").replace(" Analytics", "")}
                </small>
              </div>
            );
          })}
        </div>
      </div>
    );
  if (kind === "layers")
    return (
      <div className="workflow-notification">
        <ShieldCheck size={24} />
        <div>
          <strong>Clear roles. Clear access.</strong>
          <small>UI → API → Database</small>
        </div>
        <span className="status-dot" />
      </div>
    );
  if (kind === "iteration")
    return (
      <div className="workflow-learning">
        <div>
          <span>Learn</span>
          <span>Apply</span>
          <span>Refine</span>
        </div>
        <svg viewBox="0 0 260 60" fill="none">
          <path d="M0 50 H260 M0 25 H260" stroke="#ffffff08" />
          <motion.path
            d="M4 50 C40 50 40 28 74 32 S110 46 142 22 S185 36 214 12 S239 15 256 4"
            stroke="#c2ef3a"
            strokeWidth="2.5"
            initial={{ pathLength: reduced ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          />
        </svg>
      </div>
    );
  return (
    <>
      {visualIcons[kind].map((Icon, step) => (
        <motion.div
          key={step}
          className="workflow-node"
          initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: reduced ? 0 : 0.15 + step * 0.12,
          }}
        >
          <Icon size={26} />
          {step < 2 && <ArrowRight className="workflow-arrow" size={14} />}
        </motion.div>
      ))}
    </>
  );
}
export default function WorkflowSection() {
  const reduced = usePrefersReducedMotion();
  return (
    <section id="workflow" className="workflow-section site-container">
      <div className="section-heading">
        <span className="section-badge">
          <Asterisk size={14} /> MY WORKFLOW & VALUES
        </span>
        <RevealHeading text="Building dependable software. Learning with every project." />
      </div>
      <div
        className="workflow-grid"
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse" || reduced) return;
          for (const card of event.currentTarget.querySelectorAll<HTMLElement>(
            ".workflow-card",
          )) {
            const rect = card.getBoundingClientRect();
            card.style.setProperty(
              "--glow-x",
              `${event.clientX - rect.left}px`,
            );
            card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
          }
        }}
      >
        {workflowValues.map((value, index) => (
          <motion.article
            key={value.title}
            className={`workflow-card workflow-card--${value.visual}`}
            initial={{
              opacity: reduced ? 1 : 0,
              y: reduced ? 0 : 45,
              scale: reduced ? 1 : 0.96,
            }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: reduced ? 0 : (index % 3) * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={reduced ? undefined : { y: -4 }}
          >
            <div
              className={`workflow-visual visual-${value.visual}`}
              aria-hidden="true"
            >
              <WorkflowVisual kind={value.visual} reduced={reduced} />
            </div>
            <div className="workflow-copy">
              <p className="micro-label">{value.label}</p>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
      <div className="workflow-tags">
        {[
          "REST APIs",
          "Role-based access",
          "PostgreSQL",
          "Full-stack systems",
          "Computer vision",
          "AI-assisted development",
        ].map((tag) => (
          <span key={tag}>
            <Asterisk size={12} />
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
}
