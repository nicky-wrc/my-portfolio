import type { Metadata, Viewport } from "next";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ScrollRevealController from "@/components/ScrollRevealController";
import { siteConfig } from "@/data/site";
import "./globals.css";

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#080808",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://worachat.dev"),
  title: {
    default: `${siteConfig.name} — ${siteConfig.role}`,
    template: "%s — Worachat Paranya",
  },
  description:
    "Portfolio of Worachat Paranya, a backend-focused full-stack developer working across web systems, APIs, and applied AI.",
  keywords: [
    "Worachat Paranya",
    "Backend Developer",
    "Full-Stack Developer",
    "AI Developer",
    "Next.js",
    "Spring Boot",
    "Python",
  ],
  authors: [{ name: "Worachat Paranya" }],
  creator: "Worachat Paranya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Backend-focused full-stack development, reliable systems, and applied AI.",
    siteName: "Worachat Paranya",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.role}`,
    description:
      "Backend-focused full-stack development, reliable systems, and applied AI.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navigation />
        {children}
        <Footer />
        <ScrollRevealController />
      </body>
    </html>
  );
}
