import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore web, mobile, data, backend, and applied AI projects by Worachat Paranya.",
  openGraph: {
    title: "Projects | Worachat Paranya",
    description:
      "An index of software engineering projects, technical roles, and implementation stacks.",
  },
};

export default function ProjectsPage() {
  return (
    <main id="main-content">
      <section className="page-hero">
        <div className="site-container" data-reveal>
          <p className="eyebrow">
            Project archive / {String(projects.length).padStart(2, "0")}
          </p>
          <h1>Work shaped by systems thinking.</h1>
          <p className="page-hero-copy">
            A complete index of web, mobile, data, backend, and applied AI work,
            with the role and technology choices behind each project.
          </p>
        </div>
      </section>

      <section className="section-shell" aria-label="Complete project index">
        <div className="site-container">
          <SectionHeading
            eyebrow="Complete index"
            title="Projects, decisions, and working systems."
            description="Open an entry for its available context, source repository, and live build."
          />

          <ol className="project-index-list m-0 list-none p-0">
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
