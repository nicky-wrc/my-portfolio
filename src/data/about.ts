/** Central place to update About “Overview” links and copy */
export const aboutLinks = {
  resumeHref: "/Worachat_Resume_Backend_Developer.pdf",
  resumeDownloadAs: "Worachat_Paranya_Resume.pdf",
  github: "https://github.com/nicky-wrc",
  /** Update this to your real profile when ready */
  linkedin: "https://www.linkedin.com/in/worachat-paranya/",
} as const;

export type AboutIconKey = "code" | "education" | "zap" | "chip" | "rocket";

export type AboutOverviewBlock = {
  icon: AboutIconKey;
  text: string;
};

export const aboutOverviewBlocks: AboutOverviewBlock[] = [
  {
    icon: "code",
    text: "I’m a **full-stack–minded developer**: I like turning rough ideas into working software—UIs people can click through and **APIs that stay honest under load**. My usual stack spans **React, Next.js**, strong **backend** work (Java / Spring Boot, Node-style services), and **SQL** you can actually explain to someone else.",
  },
  {
    icon: "education",
    text: "I’m a **final-year Computer Science** student at **Khon Kaen University** (College of Computing). Classwork gave me the map; **personal and team projects** gave me the miles—POS systems, attendance tech, service-center apps, and more—each one a lesson in shipping, not just starting.",
  },
  {
    icon: "zap",
    text: "I geek out over **clean boundaries**: sensible data models, predictable REST contracts, and code the next person won’t hate reading. I’m not chasing perfection on day one—I’m chasing **clarity you can iterate on** and results you can point to.",
  },
  {
    icon: "chip",
    text: "**AI / ML** is the playground where I stretch: face recognition, analytics pipelines, “smart” features wired into real apps. I want integrations that **feel helpful**, not gimmicky—understandable enough that the team still owns the system.",
  },
  {
    icon: "rocket",
    text: "I’m hunting an **internship** where I can take tasks **end to end**—from ticket to merge—swap feedback with people who’ve been in the trenches, and learn how great teams keep quality high when deadlines breathe down their necks. If that sounds like your crew, **I’m ready to build with you**.",
  },
];
