import Image from "next/image";
import { siteConfig } from "@/data/site";

export default function AboutOverviewContent() {
  return (
    <div className="about-grid">
      <figure className="about-portrait-composition">
        <div className="about-photo about-photo-main" data-reveal="left">
          <Image
            src="/nicky_dev3.jpg"
            alt="Casual portrait of Worachat Paranya"
            width={828}
            height={1472}
            sizes="(max-width: 640px) 100vw, (max-width: 900px) 55vw, 22vw"
          />
        </div>
        <div
          className="about-photo about-photo-work"
          data-reveal="scale"
          data-reveal-delay="1"
        >
          <Image
            src="/nicky_dev.jpg"
            alt="Laptop displaying a Photo Booth portrait of Worachat Paranya"
            width={1086}
            height={1448}
            sizes="(max-width: 640px) 48vw, (max-width: 900px) 28vw, 12vw"
          />
        </div>
        <div
          className="about-photo about-photo-detail"
          data-reveal="right"
          data-reveal-delay="2"
        >
          <Image
            src="/nicky_dev2.jpg"
            alt="Mirror portrait of Worachat Paranya"
            width={828}
            height={1472}
            sizes="(max-width: 640px) 48vw, (max-width: 900px) 28vw, 12vw"
          />
        </div>
        <figcaption data-reveal data-reveal-delay="3">
          <span>{siteConfig.name}</span>
          <span>{siteConfig.location}</span>
        </figcaption>
      </figure>

      <div className="about-copy" data-reveal="right" data-reveal-delay="1">
        <p className="eyebrow">About / {siteConfig.role}</p>
        <h2>Engineering with clarity, from interface to infrastructure.</h2>
        <p className="about-lead">
          I’m a final-year Computer Science student at Khon Kaen University and
          a backend-focused full-stack developer. I enjoy turning complex
          requirements into software that is understandable, maintainable, and
          useful.
        </p>
        <p>
          My projects span REST APIs, role-based business systems, real-time
          applications, data workflows, and computer vision. I care about clear
          data models, predictable contracts, and technical decisions that a
          team can continue to own.
        </p>

        <dl className="work-principles">
          <div>
            <dt>01</dt>
            <dd>
              <strong>Think in systems</strong>
              <span>Start with the problem, boundaries, data, and failure paths.</span>
            </dd>
          </div>
          <div>
            <dt>02</dt>
            <dd>
              <strong>Build end to end</strong>
              <span>Connect product flows, interfaces, APIs, and persistence.</span>
            </dd>
          </div>
          <div>
            <dt>03</dt>
            <dd>
              <strong>Use AI with purpose</strong>
              <span>Apply models where they solve a real user or operational need.</span>
            </dd>
          </div>
        </dl>

        <div className="about-links">
          <a
            href={siteConfig.resume.download}
            className="button button-secondary"
            aria-label="Download Worachat Paranya's resume as a PDF"
          >
            Download résumé
          </a>
          <a
            href={siteConfig.linkedin.url}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
          <a
            href={siteConfig.github.url}
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
