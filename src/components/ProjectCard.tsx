import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  index: number;
  reveal?: boolean;
  headingLevel?: "h2" | "h4";
};

function formatStack(tags: string[]) {
  const visibleTags = tags.slice(0, 5);
  const remaining = tags.length - visibleTags.length;

  return `${visibleTags.join(" · ")}${remaining > 0 ? ` · +${remaining}` : ""}`;
}

export default function ProjectCard({
  project,
  index,
  reveal = true,
  headingLevel = "h2",
}: ProjectCardProps) {
  const projectNumber = String(index + 1).padStart(2, "0");
  const Heading = headingLevel;

  return (
    <li className="project-card" data-reveal={reveal ? "up" : undefined}>
      <span className="project-card-number" aria-hidden="true">
        {projectNumber}
      </span>

      <div className="project-card-title">
        <Heading>
          <Link href={`/projects/${project.slug}`}>{project.title}</Link>
        </Heading>
        <p>
          {project.category} / {project.role}
        </p>
      </div>

      <p className="project-card-description">
        {project.description || "—"}
      </p>

      <p className="project-card-stack">
        <span className="sr-only">Technology stack: </span>
        {formatStack(project.tags)}
      </p>

      <div className="project-card-links">
        <Link href={`/projects/${project.slug}`} className="text-link">
          {project.caseStudy ? "Read case study" : "View project"}
          <span aria-hidden="true">↗</span>
        </Link>

        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            className="text-link text-link-muted"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        ) : null}

        {project.demoUrl ? (
          <a
            href={project.demoUrl}
            className="text-link text-link-muted"
            target="_blank"
            rel="noreferrer"
          >
            Live demo <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </li>
  );
}
