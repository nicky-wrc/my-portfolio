"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import ProjectPreview from "@/components/ProjectPreview";
import type { Project } from "@/data/projects";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
type ProjectCardProps = {
  project: Project;
  index: number;
  reveal?: boolean;
  headingLevel?: "h2" | "h4";
};
export default function ProjectCard({ project, index }: ProjectCardProps) {
  const reduced = usePrefersReducedMotion();
  return (
    <motion.article
      layout
      className="portfolio-project-card"
      initial={{ opacity: reduced ? 1 : 0, y: reduced ? 0 : 45, scale: reduced ? 1 : 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : Math.min(index * 0.06, 0.18), ease: [0.16, 1, 0.3, 1] }}
      whileHover={reduced ? undefined : { y: -6 }}
    >
      <Link
        className="project-preview-link"
        href={"/projects/" + project.slug}
        aria-label={"View " + project.title}
      >
        <ProjectPreview project={project} />
      </Link>
      <div className="project-card-body">
        <div className="project-meta">
          <span>{project.category}</span>
          {project.featured && <span className="featured-dot">Featured</span>}
        </div>
        <h3>
          <Link href={"/projects/" + project.slug}>{project.title}</Link>
        </h3>
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        <div className="project-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          {project.tags.length > 4 && <span>+{project.tags.length - 4}</span>}
        </div>
        <div className="project-card-actions">
          <Link href={"/projects/" + project.slug}>
            Explore project <ArrowUpRight size={15} />
          </Link>
          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={"View source for " + project.title}
              >
                <Github size={17} />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={"Open live demo for " + project.title}
              >
                <ArrowUpRight size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
