import Link from "next/link";
import type { Project } from "@/data/projects";

type ProjectFeatureProps = {
  project: Project;
  index: number;
};

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M5 15 15 5M7 5h8v8" />
    </svg>
  );
}

export default function ProjectFeature({ project, index }: ProjectFeatureProps) {
  const caseStudy = project.caseStudy;
  const layoutDirection = index % 2 === 0 ? "visual-left" : "visual-right";
  const visualReveal = index % 2 === 0 ? "left" : "right";
  const copyReveal = index % 2 === 0 ? "right" : "left";

  return (
    <article className={`project-feature project-feature-${layoutDirection}`}>
      <div className="project-feature-visual" data-reveal={visualReveal}>
        <div className="project-preview" aria-hidden="true">
          <div className="project-preview-header">
            <span>System preview</span>
            <span>{String(index + 1).padStart(2, "0")}</span>
          </div>

          <div className="project-preview-canvas">
            <div className="project-preview-identity">
              <span>{project.category}</span>
              <strong>{project.title}</strong>
            </div>

            <div className="project-preview-stack">
              {project.tags.slice(0, 5).map((tag, tagIndex) => (
                <span key={tag}>
                  <small>{String(tagIndex + 1).padStart(2, "0")}</small>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="project-preview-footer">
            <span>{project.role}</span>
            <span>{project.githubUrl ? "Source available" : "Portfolio record"}</span>
          </div>
        </div>
      </div>

      <div
        className="project-feature-content"
        data-reveal={copyReveal}
        data-reveal-delay="1"
      >
        <p className="project-index">
          {String(index + 1).padStart(2, "0")} / {project.category}
        </p>
        <h3>{project.title}</h3>
        <p className="project-role">{project.role}</p>

        {project.description ? (
          <p className="project-feature-description">
            {project.description}
          </p>
        ) : null}

        {caseStudy ? (
          <>
            <div className="case-summary">
              <div>
                <p className="detail-label">Problem</p>
                <p>{caseStudy.problem}</p>
              </div>
              <div>
                <p className="detail-label">Solution</p>
                <p>{caseStudy.solution}</p>
              </div>
            </div>

            <div className="technical-decisions">
              <p className="detail-label">Key features</p>
              <ol>
                {caseStudy.highlights.map((highlight, highlightIndex) => (
                  <li key={highlight}>
                    <span>{String(highlightIndex + 1).padStart(2, "0")}</span>
                    <p>{highlight}</p>
                  </li>
                ))}
              </ol>
            </div>
          </>
        ) : null}

        <ul className="tag-list" aria-label="Technology stack">
          {project.tags.slice(0, 8).map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="project-actions">
          <Link href={`/projects/${project.slug}`} className="text-link">
            {caseStudy ? "View case study" : "Project details"} <ArrowUpRight />
          </Link>
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              className="text-link text-link-muted"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <ArrowUpRight />
            </a>
          ) : null}
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              className="text-link text-link-muted"
              target="_blank"
              rel="noreferrer"
            >
              Live demo <ArrowUpRight />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
