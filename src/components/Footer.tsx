import type { CSSProperties } from "react";
import { siteConfig } from "@/data/site";

const socialLinks = [
  {
    id: "email",
    label: "Email",
    href: siteConfig.emailHref,
    ariaLabel: `Email Worachat at ${siteConfig.email}`,
    external: false,
  },
  {
    id: "facebook",
    label: "Facebook",
    href: siteConfig.facebook.url,
    ariaLabel: "Visit Worachat on Facebook (opens in a new tab)",
    external: true,
  },
  {
    id: "instagram",
    label: "Instagram",
    href: siteConfig.instagram.url,
    ariaLabel: "Visit Worachat on Instagram (opens in a new tab)",
    external: true,
  },
  {
    id: "github",
    label: "GitHub",
    href: siteConfig.github.url,
    ariaLabel: "Visit Worachat on GitHub (opens in a new tab)",
    external: true,
  },
] as const;

type SocialIconName = (typeof socialLinks)[number]["id"];

function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "email") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "facebook") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <path d="M17.5 6.5h.01" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.4 4 5 5 0 0 0 19.3.5S18.2.1 15 1.8a13.4 13.4 0 0 0-7 0C4.8.1 3.7.5 3.7.5A5 5 0 0 0 3.6 4a5.4 5.4 0 0 0-1.4 3.7c0 5.3 3.5 6.5 6.8 6.9A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="site-footer"
      data-reveal="footer"
      aria-label={`${siteConfig.name} portfolio footer`}
    >
      <div className="footer-backdrop" aria-hidden="true" />

      <div className="site-container footer-content">
        <nav className="footer-socials" aria-label="Connect with Worachat">
          <ul>
            {socialLinks.map((social, index) => (
              <li
                key={social.id}
                style={{ "--social-index": index } as CSSProperties}
              >
                <a
                  href={social.href}
                  aria-label={social.ariaLabel}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                >
                  <SocialIcon name={social.id} />
                  <span className="sr-only">{social.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="footer-copyright">
          <strong>© 2026 Worachat</strong>
          {" "}
          <span>— Crafted with code, curiosity, and purpose.</span>
        </p>
      </div>
    </footer>
  );
}
