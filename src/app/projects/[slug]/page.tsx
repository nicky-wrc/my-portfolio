import type { Metadata } from "next";
import Link from "next/link";
import { notFound, permanentRedirect } from "next/navigation";
import {
  projectSlugAliases,
  projects,
  resolveProjectSlug,
} from "@/data/projects";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  const canonicalParams = projects.map((project) => ({ slug: project.slug }));
  const aliasParams = Object.keys(projectSlugAliases).map((slug) => ({ slug }));

  return [...canonicalParams, ...aliasParams];
}

export async function generateMetadata({
  params,
}: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const canonicalSlug = resolveProjectSlug(slug);
  const project = projects.find((item) => item.slug === canonicalSlug);

  if (!project) {
    return { title: "Not Found" };
  }

  return {
    title: project.title,
    description: project.description || `${project.title} by Worachat Paranya.`,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.description || `${project.title} by Worachat Paranya.`,
    },
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const canonicalSlug = resolveProjectSlug(slug);

  if (canonicalSlug !== slug) {
    permanentRedirect(`/projects/${canonicalSlug}`);
  }

  const projectIndex = projects.findIndex((item) => item.slug === canonicalSlug);
  const project = projects[projectIndex];

  if (!project) notFound();

  const projectNumber = String(projectIndex + 1).padStart(2, "0");
  const projectNarrative = project.content.trim();

  return (
    <main id="main-content">
      <section className="project-detail-hero">
        <div className="site-container">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb m-0 list-none p-0">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{project.title}</li>
            </ol>
          </nav>

          <div className="project-detail-title" data-reveal>
            <div>
              <p className="eyebrow">
                Project {projectNumber} / {project.category}
              </p>
              <h1>{project.title}</h1>
            </div>

            <div>
              <dl>
                <div>
                  <dt>Role</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt>Area</dt>
                  <dd>{project.category}</dd>
                </div>
                <div>
                  <dt>Stack</dt>
                  <dd>{project.tags.length} technologies</dd>
                </div>
              </dl>
            </div>
          </div>

          {project.description ? (
            <p className="project-detail-intro" data-reveal>
              {project.description}
            </p>
          ) : null}
        </div>
      </section>

      <section className="section-shell">
        <div className="site-container detail-layout">
          <aside className="detail-aside" data-reveal>
            <p className="detail-label">Project links</p>
            <div className="project-actions">
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  View source <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              {project.demoUrl ? (
                <a
                  href={project.demoUrl}
                  className="text-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live site <span aria-hidden="true">↗</span>
                </a>
              ) : null}
              <Link href="/projects" className="text-link text-link-muted">
                All projects <span aria-hidden="true">←</span>
              </Link>
            </div>
          </aside>

          <article className="detail-content">
            {project.caseStudy ? (
              <>
                <section className="detail-section" data-reveal>
                  <h2>Problem and solution</h2>
                  <div className="detail-pair">
                    <div>
                      <p className="detail-label">Problem</p>
                      <p className="prose">{project.caseStudy.problem}</p>
                    </div>
                    <div>
                      <p className="detail-label">Solution</p>
                      <p className="prose">{project.caseStudy.solution}</p>
                    </div>
                  </div>
                </section>

                <section className="detail-section" data-reveal>
                  <h2>Technical approach</h2>
                  <ol className="detail-highlights">
                    {project.caseStudy.highlights.map((highlight, index) => (
                      <li key={highlight}>
                        <span aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ol>
                </section>
              </>
            ) : null}

            {projectNarrative ? (
              <section className="detail-section" data-reveal>
                <h2>
                  {project.caseStudy ? "Implementation details" : "Project overview"}
                </h2>
                <p className="prose">
                  {projectNarrative}
                </p>
              </section>
            ) : null}

            <section className="detail-section" data-reveal>
              <h2>Technology stack</h2>
              <ul className="tag-list" aria-label="Technology stack">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </section>
          </article>
        </div>
      </section>
    </main>
  );
}
