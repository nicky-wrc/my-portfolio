import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/data/projects";

type MoreProjectsProps = {
  projects: Project[];
  startIndex: number;
};

export default function MoreProjects({ projects, startIndex }: MoreProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <details className="more-projects" data-reveal="up">
      <summary className="more-projects-summary">
        <span className="more-projects-label more-projects-label-open">
          View More Projects
        </span>
        <span className="more-projects-label more-projects-label-close">
          Show Less
        </span>
        <span className="more-projects-count">
          {projects.length} additional projects
        </span>
        <span className="more-projects-icon" aria-hidden="true">
          <span />
          <span />
        </span>
      </summary>

      <div className="more-projects-content">
        <div className="more-projects-heading">
          <div>
            <p className="eyebrow">Additional work</p>
            <h3>More systems, experiments, and focused builds.</h3>
          </div>
          <Link href="/projects" className="text-link">
            Open project archive <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <ol className="project-index-list additional-projects-list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              index={startIndex + index}
              reveal={false}
              headingLevel="h4"
            />
          ))}
        </ol>
      </div>
    </details>
  );
}
