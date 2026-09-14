"use client";
import { PortfolioArrow } from "@/components/ui/PortfolioIcons";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Instagram,
  Code2,
  GraduationCap,
  MapPin,
} from "lucide-react";
import AboutHeader from "@/components/sections/About/AboutHeader";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AboutOverviewContent() {
  const entrance = useScrollReveal({ image: true, distance: 30 });
  const cardEntrance = (index: number) => ({
    ...entrance,
    transition: {
      ...entrance.transition,
      delay: entrance.transition.duration === 0 ? 0 : (index % 3) * 0.1,
    },
  });
  return (
    <section id="about" className="about-section">
      <div>
        <AboutHeader />
      </div>
      <div
        className="bento-grid"
        onPointerMove={(event) => {
          if (event.pointerType !== "mouse") return;
          for (const card of event.currentTarget.querySelectorAll<HTMLElement>(
            ".glass-card",
          )) {
            const bounds = card.getBoundingClientRect();
            card.style.setProperty(
              "--glow-x",
              event.clientX - bounds.left + "px",
            );
            card.style.setProperty(
              "--glow-y",
              event.clientY - bounds.top + "px",
            );
          }
        }}
      >
        <motion.article {...cardEntrance(0)} className="glass-card bento-profile">
          <div className="profile-top">
            <Image
              src="/nicky_dev3.jpg"
              alt="Worachat Paranya"
              width={260}
              height={330}
              className="profile-portrait"
            />
            <div>
              <p className="micro-label">A FULL STACK DEVELOPER</p>
              <h2>
                Worachat
                <br />
                Paranya<span className="text-orange-400">.</span>
              </h2>
              <p>
                Building dependable web applications, backend systems, and
                applied AI.
              </p>
            </div>
          </div>
          <div className="profile-bottom">
            <span className="status-dot" />
            Open to internship opportunities <ArrowUpRight size={17} />
          </div>
        </motion.article>
        <motion.div {...cardEntrance(1)} className="glass-card bento-ticker">
          <div className="ticker-content">
            BACKEND SYSTEMS · FULL STACK DEVELOPMENT · APPLIED AI · COMPUTER
            SCIENCE · BACKEND SYSTEMS · FULL STACK DEVELOPMENT · APPLIED AI ·
            COMPUTER SCIENCE ·{" "}
          </div>
        </motion.div>
        <motion.article {...cardEntrance(2)} className="glass-card bento-small">
          <GraduationCap className="text-orange-400" size={30} />
          <div>
            <p className="micro-label">EDUCATION</p>
            <h3>Computer Science</h3>
            <p>Final year · Khon Kaen University</p>
          </div>
        </motion.article>
        <motion.div {...cardEntrance(0)} className="glass-card bento-small">
          <Link
            href="/projects"
            className="card-cover-link"
            aria-label="Browse all projects"
          />
          <strong className="bento-number">
            {String(projects.length).padStart(2, "0")}
            <span><PortfolioArrow /></span>
          </strong>
          <div>
            <p className="micro-label">SELECTED & EXPLORATORY WORK</p>
            <h3>Projects</h3>
          </div>
        </motion.div>
        <motion.article {...cardEntrance(1)} className="glass-card bento-small">
          <div className="mini-stack">
            {["Next.js", "React", "Python", "Java", "PostgreSQL", "Docker"].map(
              (s) => (
                <span key={s}>{s}</span>
              ),
            )}
          </div>
          <div>
            <p className="micro-label">CORE EXPERTISE</p>
            <h3>My stack</h3>
          </div>
        </motion.article>
        <motion.article {...cardEntrance(2)} className="glass-card bento-wide">
          <Code2 className="text-orange-400" />
          <div>
            <p className="micro-label">FROM INTERFACE TO INFRASTRUCTURE</p>
            <h3>
              Think in systems.
              <br />
              Build end to end.
            </h3>
            <p>
              Clear data models, predictable APIs, and software a team can
              continue to own.
            </p>
          </div>
        </motion.article>
        <motion.article {...cardEntrance(0)} className="glass-card bento-small">
          <div className="bento-socials">
            <a
              href={siteConfig.github.url}
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
            <a
              href={siteConfig.linkedin.url}
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href={siteConfig.instagram.url}
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
          </div>
          <div>
            <p className="micro-label">STAY CONNECTED</p>
            <h3>Profiles</h3>
          </div>
        </motion.article>
        <motion.article {...cardEntrance(1)} className="glass-card bento-location">
          <MapPin size={24} />
          <div>
            <p className="micro-label">BASED IN</p>
            <h3>{siteConfig.location}</h3>
          </div>
          <a href="/resume" className="pill-button">
            View résumé <ArrowUpRight size={15} />
          </a>
        </motion.article>
      </div>
      <motion.div {...entrance} className="about-story">
        <p className="micro-label">THE WAY I WORK</p>
        <p>
          I’m a final-year Computer Science student at Khon Kaen University and
          a backend-focused full-stack developer. My work spans REST APIs,
          role-based business systems, real-time applications, data workflows,
          and computer vision. I enjoy turning complex requirements into
          software that is understandable, maintainable, and useful.
        </p>
      </motion.div>
    </section>
  );
}
