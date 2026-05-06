import AboutOverviewContent from "@/components/AboutOverviewContent";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProgressBar from "@/components/ProgressBar";
import GridBackground from "@/components/GridBackground";
import ReadyBadge from "@/components/ReadyBadge";
import SkillPill from "@/components/SkillPill";
import SocialIcons from "@/components/SocialIcons";
import IllustrationSection from "@/components/IllustrationSection";
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import { projects } from "@/data/projects";

export default function Home() {
  const skills = ['Python', 'Java', 'Node.js', 'Spring Boot', 'MySQL', 'Next.js'];

  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-x-clip overflow-y-visible">
      <GridBackground />
      <ProgressBar />

      {/* ============================================================
          HERO
          ============================================================ */}
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 relative z-10"
      >
        <div className="max-w-7xl mx-auto w-full grid xl:grid-cols-2 gap-12 items-center min-w-0">
          {/* Left: Text */}
          <div className="text-center xl:text-left space-y-8 min-w-0 w-full max-w-full px-0.5 sm:px-1">
            <ScrollReveal direction="fade" delay={0}>
              <div className="flex justify-center xl:justify-start">
                <ReadyBadge />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-3 md:space-y-4">
                <p className="font-script text-xl md:text-2xl text-cyan-200/90">
                  Hello, I&apos;m Worachat —
                </p>
                <h1
                  className="font-display font-extrabold uppercase w-full min-w-0 max-w-full flex flex-col gap-2 md:gap-2.5"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  <span className="block text-white drop-shadow-[0_0_22px_rgba(0,229,255,0.35)] leading-none text-[clamp(1.72rem,calc(0.82rem+3.6vw),3.1rem)] xl:text-[clamp(1.8rem,calc(0.78rem+2.4vw),3.25rem)]">
                    Full-Stack
                  </span>
                  <span className="block text-holo pr-1 sm:pr-2 text-pretty leading-none text-[clamp(1.65rem,calc(0.78rem+3.35vw),2.95rem)] xl:text-[clamp(1.72rem,calc(0.74rem+2.2vw),3.05rem)]">
                    Developer
                  </span>
                </h1>
                <p className="font-script text-lg md:text-xl text-slate-200/90 leading-snug md:leading-normal mt-1">
                  Designing &amp; crafting{' '}
                  <span className="text-holo-pink font-semibold">intelligent systems</span>
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={300}>
              <p className="text-base md:text-lg text-slate-300/85 leading-relaxed max-w-xl mx-auto xl:mx-0">
                I build scalable APIs, AI-powered services and full-stack experiences with a robotic
                attention to detail. Currently a CS undergrad at Khon Kaen University, hunting for an
                internship to ship real-world products.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={450}>
              <div className="flex flex-wrap justify-center xl:justify-start gap-2">
                {skills.map((skill, idx) => (
                  <SkillPill key={idx} name={skill} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <div className="flex flex-wrap justify-center xl:justify-start gap-4 pt-2">
                <a href="#projects" className="btn-holo">
                  Explore Projects
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a
                  href="/Worachat_Resume_Backend_Developer.pdf"
                  download="Worachat_Paranya_Resume.pdf"
                  className="btn-holo-ghost"
                >
                  Download Resume
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={750}>
              <div className="flex justify-center xl:justify-start">
                <SocialIcons />
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal direction="up" delay={900}>
              <div className="grid grid-cols-3 gap-4 pt-6 max-w-md mx-auto xl:mx-0">
                {[
                  { value: projects.length, label: 'Projects', suffix: '+' },
                  { value: 5, label: 'Stack', suffix: '+' },
                  { value: 3, label: 'Years CS', suffix: 'Y' },
                ].map((s, i) => (
                  <div key={i} className="cyber-border rounded-xl p-4 bg-[#050816]/50 text-center">
                    <div className="font-display text-2xl md:text-3xl text-holo">
                      <AnimatedCounter end={s.value} />
                      {s.suffix}
                    </div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase font-display text-slate-400 mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Robot illustration */}
          <ScrollReveal direction="fade" delay={300}>
            <div className="relative w-full min-w-0 h-[520px] md:h-[600px] lg:h-[640px] flex items-center justify-center px-2">
              <IllustrationSection />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          ABOUT — full overview lives here (#about)
          ============================================================ */}
      <section
        id="about"
        className="relative z-10 flex flex-col items-center justify-center overflow-hidden px-6 py-20 md:py-28"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-fuchsia-500/15 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-400/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <ScrollReveal direction="up" delay={0}>
            <AboutOverviewContent showCtas={false} />
          </ScrollReveal>
        </div>

        <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl md:mt-16">
          <ScrollReveal direction="up" delay={120}>
            <SkillSection />
          </ScrollReveal>
        </div>

        <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl md:mt-16">
          <ScrollReveal direction="up" delay={200}>
            <div>
              <h3 className="font-display mb-12 text-center text-3xl uppercase tracking-tight md:text-4xl">
                <span className="text-white">What </span>
                <span className="text-holo">I Do</span>
              </h3>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {[
                  {
                    title: 'Web Development',
                    desc: 'สร้างเว็บแอปพลิเคชันสมัยใหม่ที่รวดเร็วและสวยงามด้วย React, Next.js และเทคโนโลยีล่าสุด',
                  },
                  {
                    title: 'Mobile Development',
                    desc: 'พัฒนาแอปมือถือทั้ง iOS และ Android ด้วย Flutter และ Kotlin Multiplatform Mobile',
                  },
                  {
                    title: 'AI & Backend',
                    desc: 'ออกแบบ Backend ที่เสถียร พร้อมรวม AI / ML เข้ากับแอปพลิเคชันเพื่อประสบการณ์อัจฉริยะ',
                  },
                ].map((item, idx) => (
                  <ScrollReveal key={idx} direction="up" delay={260 + idx * 80} className="h-full">
                    <div className="group cyber-card h-full p-7 text-center">
                      <div className="scan-line" />
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#050816]/50 cyber-border">
                        <span className="font-display text-lg font-extrabold text-holo">{idx + 1}</span>
                      </div>
                      <h4 className="font-display mb-3 text-xl uppercase tracking-wide text-white transition-colors group-hover:text-holo-cyan">
                        {item.title}
                      </h4>
                      <p className="leading-relaxed text-slate-300">{item.desc}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================
          PROJECTS
          ============================================================ */}
      <section
        id="projects"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <p className="font-script text-2xl text-cyan-200/90 mb-2">— recent missions —</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">
                <span className="text-white">My </span>
                <span className="text-holo">Projects</span>
              </h2>
              <p className="text-slate-300/85 max-w-2xl mx-auto mt-6 leading-relaxed">
                ผลงานคัดสรรที่ออกแบบและสร้างขึ้นมาทั้งโปรเจกต์ส่วนตัวและงานทีม
                — แต่ละชิ้นถูกฝึกฝนเหมือนหุ่นยนต์ที่พร้อมรบในสนามจริง
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <div className="cyber-chip">
                  <span className="text-slate-300">Total</span>
                  <span className="text-holo-cyan font-bold">
                    <AnimatedCounter end={projects.length} />
                  </span>
                </div>
                <div className="cyber-chip">
                  <span className="text-slate-300">Categories</span>
                  <span className="text-holo-pink font-bold">
                    <AnimatedCounter end={new Set(projects.map(p => p.category)).size} />
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 80}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CONTACT
          ============================================================ */}
      <section
        id="contact"
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-fuchsia-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              <p className="font-script text-2xl text-cyan-200/90 mb-2">— say hello —</p>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">
                <span className="text-white">Get In </span>
                <span className="text-holo-pink">Touch</span>
              </h2>
              <p className="text-slate-300/85 max-w-2xl mx-auto mt-6 leading-relaxed">
                มีคำถามหรือสนใจในผลงานของผม? ส่งข้อความหา robot ตัวนี้ได้เลย — ผมตอบทุกข้อความครับ
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <ScrollReveal direction="right" delay={150}>
              <ContactForm />
            </ScrollReveal>

            <ScrollReveal direction="left" delay={150}>
              <div className="space-y-6">
                <div className="cyber-card p-8">
                  <h3 className="font-display text-xl md:text-2xl uppercase tracking-wider mb-6 text-white flex items-center gap-3">
                    <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-400" />
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {[
                      { label: 'Email', value: 'worachat.pa@kkumail.com', href: 'mailto:nick.worachatz@gmail.com', icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
                      { label: 'Phone', value: '082-881-4470', href: 'tel:+66828814470', icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' },
                      { label: 'Facebook', value: 'Nick Worachat Paranya', href: 'https://www.facebook.com/nick.worachatz/', icon: 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z', filled: true },
                      { label: 'Instagram', value: 'nicky_wrc', href: 'https://www.instagram.com/nicky_wrc/', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', filled: true },
                    ].map((c, i) => (
                      <a
                        key={i}
                        href={c.href}
                        target={c.href.startsWith('http') ? '_blank' : undefined}
                        rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#050816]/50 border border-cyan-400/15 hover:border-fuchsia-400/40 hover:bg-[#050816]/70 hover:scale-[1.02] transition-all duration-300 group"
                      >
                        <span className="w-10 h-10 rounded-lg flex items-center justify-center cyber-border bg-[#050816]/60 group-hover:scale-110 transition-transform">
                          <svg className="w-5 h-5 text-cyan-300 group-hover:text-fuchsia-300 transition-colors" fill={c.filled ? 'currentColor' : 'none'} stroke={c.filled ? undefined : 'currentColor'} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={c.icon} />
                          </svg>
                        </span>
                        <div>
                          <p className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400 mb-1">
                            {c.label}
                          </p>
                          <p className="text-white font-medium group-hover:text-holo-cyan transition-colors">
                            {c.value}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="cyber-frame p-8">
                  <h3 className="font-display text-xl uppercase tracking-wider mb-3 text-white">
                    Let&apos;s <span className="text-holo-pink">Connect</span>
                  </h3>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    ผมเปิดรับโอกาสในการฝึกงานและทำงานร่วมกัน หากคุณมีโปรเจกต์ที่น่าสนใจ
                    หรืออยากให้ผมร่วมทีม อย่าลังเลที่จะทักมาเลย
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/nicky-wrc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-holo-ghost"
                    >
                      View GitHub
                    </a>
                    <a href="#projects" className="btn-holo-ghost">
                      View Projects
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
