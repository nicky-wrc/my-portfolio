import AboutOverviewContent from "@/components/AboutOverviewContent";
import ContactSection from "@/components/ContactSection";
import MoreProjects from "@/components/MoreProjects";
import ProjectFeature from "@/components/ProjectFeature";
import SectionHeading from "@/components/SectionHeading";
import SkillSection from "@/components/SkillSection";
import { featuredProjects, projects } from "@/data/projects";
import { siteConfig } from "@/data/site";

const featuredSlugs = new Set(featuredProjects.map((project) => project.slug));
const additionalProjects = projects.filter(
  (project) => !featuredSlugs.has(project.slug),
);

export default function Home() {
  return (
    <main id="main-content">
      <section id="home" className="hero-section">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="site-container hero-layout">
          <div className="hero-copy">
            <p className="availability" data-intro data-intro-delay="0">
              <span aria-hidden="true" /> {siteConfig.role} · Open to internships
            </p>
            <h1 data-intro data-intro-delay="1">
              I build dependable software for the web, backend, and applied AI.
            </h1>
            <p className="hero-intro" data-intro data-intro-delay="2">
              I’m <strong>Worachat Paranya</strong>, a backend-focused full-stack
              developer and final-year Computer Science student at Khon Kaen
              University. I turn complex requirements into clear, maintainable
              systems.
            </p>

            <div className="hero-actions" data-intro data-intro-delay="3">
              <a href="#projects" className="button button-primary">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                href={siteConfig.resume.download}
                className="button button-secondary"
                aria-label="Download Worachat Paranya's resume as a PDF"
              >
                Download resume <span aria-hidden="true">↓</span>
              </a>
              <a
                href={siteConfig.github.url}
                target="_blank"
                rel="noreferrer"
                className="button button-secondary"
              >
                GitHub <span aria-hidden="true">↗</span>
              </a>
              <a href="#contact" className="text-link">
                Contact me <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div
              className="hero-proof"
              aria-label="Portfolio summary"
              data-intro
              data-intro-delay="4"
            >
              <div>
                <strong>{projects.length}</strong>
                <span>Documented projects</span>
              </div>
              <div>
                <strong>Backend + AI</strong>
                <span>Primary engineering focus</span>
              </div>
              <div>
                <strong>KKU</strong>
                <span>Final-year Computer Science</span>
              </div>
            </div>
          </div>

          <aside className="hero-brief" data-intro="scale" data-intro-delay="3">
            <div className="hero-brief-header">
              <span>Developer profile</span>
              <span>{siteConfig.location}</span>
            </div>
            <dl>
              <div>
                <dt>Focus</dt>
                <dd>Backend systems, full-stack products, applied AI</dd>
              </div>
              <div>
                <dt>Languages</dt>
                <dd>TypeScript, Java, Python, SQL</dd>
              </div>
              <div>
                <dt>Working with</dt>
                <dd>Next.js, Spring Boot, FastAPI, PostgreSQL</dd>
              </div>
              <div>
                <dt>Approach</dt>
                <dd>Clear boundaries, maintainable code, useful outcomes</dd>
              </div>
            </dl>
            <div className="hero-brief-footer">
              <span>Available for</span>
              <strong>Internship opportunities</strong>
            </div>
          </aside>
        </div>
      </section>

      <section id="about" className="section-shell section-toned">
        <div className="site-container">
          <AboutOverviewContent />
        </div>
      </section>

      <section id="skills" className="section-shell">
        <div className="site-container">
          <SectionHeading
            eyebrow="Technology"
            title="A practical stack for building complete systems."
            description="Grouped by how I use the tools—not by arbitrary proficiency percentages."
          />
          <SkillSection />
        </div>
      </section>

      <section id="projects" className="section-shell section-toned projects-section">
        <div className="site-container">
          <SectionHeading
            eyebrow="Featured work / 05"
            title="Projects framed as engineering decisions."
            description="Five selected systems presented through their role, implementation stack, and verified technical decisions."
          />

          <div className="project-feature-list">
            {featuredProjects.map((project, index) => (
              <ProjectFeature key={project.slug} project={project} index={index} />
            ))}
          </div>

          <MoreProjects
            projects={additionalProjects}
            startIndex={featuredProjects.length}
          />
        </div>
      </section>

      <ContactSection />
    </main>
  );
}
