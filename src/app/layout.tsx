import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Orbitron, Dancing_Script } from "next/font/google";
import "./globals.css";

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

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#02030a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://worachat.dev'),
  title: {
    default: "Worachat Paranya — Backend Engineer & AI Developer",
    template: "%s | Worachat Paranya",
  },
  description: "Futuristic developer portfolio of Worachat Paranya — Backend, Full-Stack & AI engineer crafting scalable systems and delightful experiences.",
  keywords: ["Backend Developer", "Full-Stack Developer", "AI Developer", "Robotics", "Web Developer", "Mobile Developer", "React", "Next.js", "Python", "Java", "Portfolio"],
  authors: [{ name: "Worachat Paranya" }],
  creator: "Worachat Paranya",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Worachat Paranya — Backend Engineer & AI Developer",
    description: "Futuristic developer portfolio. Backend, Full-Stack and AI engineering, with a robotic flair.",
    siteName: "Worachat Paranya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Worachat Paranya — Backend Engineer & AI Developer",
    description: "Futuristic developer portfolio. Backend, Full-Stack and AI engineering, with a robotic flair.",
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
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${orbitron.variable} ${dancingScript.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-white focus:rounded-lg focus:outline-none"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
