import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Worachat Paranya about software engineering internships, development projects, and collaboration opportunities.",
  openGraph: {
    title: "Contact | Worachat Paranya",
    description:
      "Start a conversation with Worachat Paranya about software engineering and development opportunities.",
  },
};

export default function ContactPage() {
  return (
    <main id="main-content">
      <section className="page-hero" aria-labelledby="contact-page-title">
        <div className="site-container">
          <p className="eyebrow">Get in touch</p>
          <h1 id="contact-page-title">Start a thoughtful engineering conversation.</h1>
          <p className="page-hero-copy">
            Have an internship opportunity, a project to discuss, or a technical
            problem worth exploring? Share the context and let&apos;s see how I can
            contribute.
          </p>
        </div>
      </section>

      <ContactSection showHeading={false} />
    </main>
  );
}
