import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://worachat.dev'),
  title: {
    default: "Worachat Paranya - Developer Portfolio",
    template: "%s | Worachat Paranya",
  },
  description: "Portfolio of Worachat Paranya - Web & Mobile Developer specializing in Backend Development, AI/ML, and Full-Stack applications. Looking for internship opportunities.",
  keywords: ["Backend Developer", "Full-Stack Developer", "Web Developer", "Mobile Developer", "React", "Next.js", "Python", "Java", "Portfolio"],
  authors: [{ name: "Worachat Paranya" }],
  creator: "Worachat Paranya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Worachat Paranya - Developer Portfolio",
    description: "Web & Mobile Developer specializing in Backend Development, AI/ML, and Full-Stack applications.",
    siteName: "Worachat Paranya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worachat Paranya - Developer Portfolio",
    description: "Web & Mobile Developer specializing in Backend Development, AI/ML, and Full-Stack applications.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased default-theme`}
      >
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
