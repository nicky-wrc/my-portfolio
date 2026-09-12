import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { siteConfig } from "@/data/site";
import resumePages from "@/data/resume-preview.json";
export const metadata: Metadata = {
  title: "Resume",
  description: "View Worachat Paranya’s resume.",
};
export default function ResumePage() {
  return (
    <main id="main-content" className="resume-page site-container">
      <Link href="/" className="text-link">
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
      <div className="resume-header">
        <div>
          <p className="micro-label">CURRICULUM VITAE</p>
          <h1>Worachat Paranya</h1>
        </div>
        <div className="resume-actions">
          <a
            href={siteConfig.resume.download}
            target="_blank"
            rel="noreferrer"
            className="gradient-button"
          >
            PDF file <ExternalLink size={15} />
          </a>
        </div>
      </div>
      <div className="glass-card resume-frame">
        <div className="resume-bezel">
          <span>● ● ●</span> RESUME_VIEWER.PDF
        </div>
        <div className="resume-pages">
          {resumePages.map((page, index) => (
            <Image
              key={page.src}
              src={page.src}
              width={page.width}
              height={page.height}
              alt={`Worachat Paranya resume, page ${index + 1}`}
              sizes="(max-width: 1200px) 100vw, 1120px"
              priority={index === 0}
              unoptimized
            />
          ))}
        </div>
        <details className="resume-text-version">
          <summary>Read as text</summary>
          {resumePages.map((page) => <p key={page.src}>{page.text}</p>)}
        </details>
      </div>
    </main>
  );
}
