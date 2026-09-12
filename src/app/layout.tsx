import type { Metadata, Viewport } from "next";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import {
  Geist,
  Geist_Mono,
  Plus_Jakarta_Sans,
  Instrument_Serif,
  Outfit,
  Playfair_Display,
} from "next/font/google";
import { siteConfig } from "@/data/site";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});
const instrument = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-display",
  display: "swap",
});

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#0F0E0E",
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
    <html lang="en" className="dark">
      <body
        className={[
          geist.variable,
          mono.variable,
          jakarta.variable,
          instrument.variable,
          outfit.variable,
          playfair.variable,
        ].join(" ")}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
