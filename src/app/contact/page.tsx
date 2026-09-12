import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Mail,
  MapPin,
  Phone,
  Github,
  Linkedin,
  Instagram,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { siteConfig } from "@/data/site";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Worachat Paranya about software engineering internships and development projects.",
};
export default function ContactPage() {
  return (
    <main id="main-content" className="contact-page">
      <Link href="/" className="text-link">
        <ArrowLeft size={16} />
        Back to portfolio
      </Link>
      <div className="section-heading">
        <span className="section-badge">✳ LET’S CONNECT</span>
        <h1>
          Start a <em>conversation.</em>
        </h1>
        <p>A good project starts with a simple hello.</p>
      </div>
      <div className="contact-sheet glass-card">
        <aside>
          <span className="status-line">
            <i className="status-dot" />
            Open to internships
          </span>
          <h2>
            Let’s work
            <br />
            together.
          </h2>
          <p>
            Share the role, project, or problem you have in mind and I’ll get
            back to you as soon as I can.
          </p>
          <a href={siteConfig.emailHref}>
            <Mail />
            <span>
              <small>EMAIL</small>
              {siteConfig.email}
            </span>
          </a>
          <a href={siteConfig.phoneHref}>
            <Phone />
            <span>
              <small>PHONE</small>
              {siteConfig.phone}
            </span>
          </a>
          <div className="contact-location">
            <MapPin />
            <span>
              <small>LOCATION</small>
              {siteConfig.location}
            </span>
          </div>
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
        </aside>
        <div className="contact-form-panel">
          <h2>
            Send me a message <span>↗</span>
          </h2>
          <p>Tell me a little about what you have in mind.</p>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
