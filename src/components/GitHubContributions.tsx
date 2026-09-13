"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, ArrowUpRight, RefreshCw } from "lucide-react";
import { siteConfig } from "@/data/site";
import type { Contributions } from "@/lib/github-contributions";
import RevealHeading from "@/components/ui/RevealHeading";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const colors = ["#202422", "#0e4429", "#006d32", "#26a641", "#39d353"];
export default function GitHubContributions() {
  const [data, setData] = useState<Contributions | null>(null);
  const [error, setError] = useState(false);
  const [attempt, setAttempt] = useState(0);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/github-contributions", { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Unavailable");
        return response.json();
      })
      .then((result: Contributions) => setData(result))
      .catch(() => {
        if (!controller.signal.aborted) setError(true);
      });
    return () => controller.abort();
  }, [attempt]);
  const offset = data
    ? new Date(`${data.days[0].date}T00:00:00Z`).getUTCDay()
    : 0;
  return (
    <section
      id="github"
      className="github-section site-container"
      aria-label="GitHub contributions"
    >
      <div className="section-heading">
        <span className="section-badge">
          <Github size={14} /> GITHUB ACTIVITY
        </span>
        <RevealHeading text="My code contributions" />
        <p>Consistent contributions and continuous learning.</p>
      </div>
      <motion.div
        className="contributions-panel"
        initial={{
          opacity: reduced ? 1 : 0,
          y: reduced ? 0 : 30,
          scale: reduced ? 1 : 0.98,
        }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="contributions-top">
          <div>
            <Github size={22} />
            <h3>{siteConfig.name}</h3>
          </div>
          <span>@{siteConfig.github.handle}</span>
        </div>
        {data ? (
          <>
            <p className="contribution-total">
              <strong>{data.total.toLocaleString("en-US")}</strong>{" "}
              contributions in the displayed year
            </p>
            <div
              className="contributions-scroll"
              tabIndex={0}
              role="region"
              aria-label="Daily GitHub activity; scroll horizontally to explore"
            >
              <div className="contribution-months" aria-hidden="true">
                {data.days.map((day, index) =>
                  index === 0 || day.date.slice(8) === "01" ? (
                    <span
                      key={day.date}
                      style={{
                        gridColumn: Math.floor((index + offset) / 7) + 1,
                      }}
                    >
                      {new Date(`${day.date}T00:00:00Z`).toLocaleString(
                        "en-US",
                        { month: "short", timeZone: "UTC" },
                      )}
                    </span>
                  ) : null,
                )}
              </div>
              <motion.div
                className="contribution-grid"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {data.days.map((day, index) => (
                  <motion.span
                    key={day.date}
                    className="contribution-cell"
                    style={{
                      backgroundColor: colors[day.level],
                      gridColumn: Math.floor((index + offset) / 7) + 1,
                      gridRow: ((index + offset) % 7) + 1,
                    }}
                    title={`${day.count} contributions on ${day.date}`}
                    role="img"
                    aria-label={`${day.count} contributions on ${day.date}`}
                    variants={{
                      hidden: {
                        opacity: reduced ? 1 : 0,
                        scale: reduced ? 1 : 0,
                      },
                      visible: { opacity: 1, scale: 1 },
                    }}
                    transition={{
                      duration: reduced ? 0 : 0.25,
                      delay: reduced ? 0 : Math.floor(index / 7) * 0.012,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            <div className="contributions-legend">
              <span>
                {data.days[0].date} — {data.days.at(-1)?.date}
              </span>
              <div>
                Less{" "}
                {colors.map((color) => (
                  <i key={color} style={{ backgroundColor: color }} />
                ))}{" "}
                More
              </div>
            </div>
          </>
        ) : error ? (
          <div className="contribution-state" role="status">
            <p>GitHub activity is temporarily unavailable.</p>
            <button
              className="pill-button"
              onClick={() => {
                setError(false);
                setAttempt((value) => value + 1);
              }}
            >
              <RefreshCw size={14} /> Try again
            </button>
          </div>
        ) : (
          <div className="contribution-state" role="status">
            Loading GitHub activity…
          </div>
        )}
        <a
          href={siteConfig.github.url}
          className="pill-button github-profile-link"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={17} /> Visit GitHub Profile <ArrowUpRight size={16} />
        </a>
      </motion.div>
    </section>
  );
}
