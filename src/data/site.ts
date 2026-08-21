export const siteConfig = {
  name: "Worachat Paranya",
  role: "Full-Stack Developer",
  location: "Khon Kaen, Thailand",
  email: "worachat.pa@kkumail.com",
  emailHref: "mailto:worachat.pa@kkumail.com",
  phone: "082-881-4470",
  phoneHref: "tel:+66828814470",
  github: {
    handle: "nicky-wrc",
    url: "https://github.com/nicky-wrc",
  },
  linkedin: {
    handle: "worachat-paranya-6ba09630a",
    url: "https://www.linkedin.com/in/worachat-paranya-6ba09630a/",
  },
  instagram: {
    handle: "nicky_wrc",
    url: "https://www.instagram.com/nicky_wrc/",
  },
  facebook: {
    label: "Nick Worachat Paranya",
    url: "https://www.facebook.com/nick.worachatz/",
  },
  resume: {
    pdf: "/Worachat_Resume_Backend_Developer.pdf",
    download: "/api/resume",
    html: "/resume.html",
    downloadName: "Worachat_Paranya_Resume.pdf",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export type SiteConfig = typeof siteConfig;
export type NavLink = (typeof navLinks)[number];
