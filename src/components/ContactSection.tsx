import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import { siteConfig } from "@/data/site";

type ContactSectionProps = {
  showHeading?: boolean;
};

export default function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <section id="contact" className="section-shell contact-section">
      <div className="site-container">
        {showHeading ? (
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something useful."
            description="I’m open to software engineering internships, project conversations, and opportunities to contribute to a thoughtful engineering team."
          />
        ) : null}

        <div className="contact-grid">
          <div className="contact-details" data-reveal="left">
            <p className="contact-intro">
              The best way to reach me is by email. Share the role, project, or
              problem you have in mind and I’ll get back to you as soon as I can.
            </p>

            <dl className="contact-list">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                </dd>
              </div>
              <div>
                <dt>Location</dt>
                <dd>{siteConfig.location}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
                </dd>
              </div>
            </dl>

            <nav className="social-row" aria-label="Social profiles">
              <a href={siteConfig.github.url} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={siteConfig.linkedin.url} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={siteConfig.instagram.url} target="_blank" rel="noreferrer">
                Instagram
              </a>
            </nav>
          </div>

          <div data-reveal="right" data-reveal-delay="1">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
