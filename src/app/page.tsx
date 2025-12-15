import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SkillSection from "@/components/SkillSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";
import ScrollReveal from "@/components/ScrollReveal";
import MouseTrail from "@/components/MouseTrail";
import ProgressBar from "@/components/ProgressBar";
import Sparkles from "@/components/Sparkles";
import GridBackground from "@/components/GridBackground";
import ReadyBadge from "@/components/ReadyBadge";
import SkillPill from "@/components/SkillPill";
import SocialIcons from "@/components/SocialIcons";
import IllustrationSection from "@/components/IllustrationSection";
import ContactForm from "@/components/ContactForm";
import AnimatedCounter from "@/components/AnimatedCounter";
import AnimatedIcon from "@/components/AnimatedIcon";
import HoverGlow from "@/components/HoverGlow";
import { projects } from "@/data/projects";

export default function Home() {
  const skills = ['Python', 'Java', 'Node.js', 'Spring Boot', 'MySQL'];
  
  return (
    <main id="main-content" className="min-h-screen text-slate-100 dark:text-slate-100 light:text-slate-800 relative overflow-hidden">
      <GridBackground />
      <ProgressBar />
      <Navigation />
      <MouseTrail />
      <FloatingElements />
      <Sparkles />

      {/* Hero Section - Centered Layout */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center px-6 pt-24 relative z-10">
        <div className="max-w-5xl mx-auto w-full">
          {/* Centered Content */}
          <div className="text-center space-y-8">
            <ScrollReveal direction="fade" delay={0}>
              <ReadyBadge />
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={200}>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight">
                  Backend{' '}
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                    Developer
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-400 mt-4">
                  Building scalable applications with clean code and modern technologies
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={400}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-slate-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  <span>College of Computing</span>
                </div>
                <span className="hidden sm:inline text-slate-600">|</span>
                <span className="text-cyan-400 font-semibold">Computer Science</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={600}>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Passionate about creating efficient backend systems, APIs, and full-stack solutions. 
                Focused on writing maintainable code and solving complex problems.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={800}>
              <div className="flex flex-wrap justify-center gap-3 pt-4">
                {skills.map((skill, index) => (
                  <SkillPill key={index} name={skill} />
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1000}>
              <div className="flex flex-wrap justify-center gap-4 pt-8">
                <a href="#projects">
                  <button className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transform relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      View My Work
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                </a>
                <a href="/Worachat_Resume_Backend_Developer.pdf" download="Worachat_Paranya_Resume.pdf">
                  <button className="group px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-xl hover:shadow-emerald-500/50 hover:scale-105 transform relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Download Resume
                      <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </span>
                  </button>
                </a>
                <a href="#contact">
                  <button className="group px-8 py-4 bg-transparent border-2 border-cyan-400/50 text-cyan-400 rounded-xl font-semibold transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/30 hover:scale-105 transform backdrop-blur-sm relative overflow-hidden">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span className="relative z-10 flex items-center gap-2">
                      Get In Touch
                      <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={1200}>
              <div className="pt-8">
                <SocialIcons />
              </div>
            </ScrollReveal>
          </div>

          {/* Illustration Section - Below Content */}
          <ScrollReveal direction="up" delay={1400}>
            <div className="mt-16 lg:mt-24 flex justify-center">
              <div className="relative w-full max-w-2xl h-96">
                <IllustrationSection />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              {/* Profile Picture */}
              <div className="mb-8 relative inline-block group">
                <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl shadow-cyan-500/30 animate-glow-pulse group-hover:scale-110 transition-transform duration-500">
                  <div className="w-full h-full rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden relative">
                    <Image
                      src="/profile.jpg"
                      alt="Worachat Paranya"
                      fill
                      sizes="160px"
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      priority
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-slate-900 animate-pulse">
                  <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                </div>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative">
                About <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">Me</span>
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400/20 rounded-full blur-xl animate-ping"></div>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                To be reborn, you must first accept the death of who you used to be
              </p>
            </div>
          </ScrollReveal>

          {/* About Content */}
          <ScrollReveal direction="up" delay={200}>
            <HoverGlow glowColor="cyan">
              <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl mb-12 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.01] relative overflow-hidden group">
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-blue-500/0 to-indigo-500/0 group-hover:from-cyan-500/5 group-hover:via-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
                    <AnimatedIcon delay={0}>
                      <span className="text-4xl"></span>
                    </AnimatedIcon>
                    Who I Am
                  </h3>
                  <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                    <p className="group-hover:text-slate-200 transition-colors">
                      สวัสดีครับ ผมชื่อ <span className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">วรชาติ ปรัญญา </span> 
                      เป็นนักศึกษามหาวิทยาลัยขอนแก่น คณะวิทยาลัยการคอมพิวเตอร์ สาขาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 3
                    </p>
                    <p className="group-hover:text-slate-200 transition-colors">
                      ผมมีความสนใจเป็นพิเศษในด้าน Backend Development, AI/ML, และการออกแบบระบบที่สามารถขยายตัวได้ 
                      รวมถึงการพัฒนาซอฟต์แวร์ที่เน้นผู้ใช้เป็นศูนย์กลาง
                    </p>
                    <p className="group-hover:text-slate-200 transition-colors">
                      ตอนนี้ผมกำลังมองหาตำแหน่งฝึกงานในตำแหน่ง Backend Developer เพื่อพัฒนาทักษะและเรียนรู้จากทีมงานที่มีประสบการณ์ 
                      และพร้อมที่จะมีส่วนร่วมในโปรเจกต์ที่น่าสนใจ
                    </p>
                  </div>
                </div>
              </div>
            </HoverGlow>
          </ScrollReveal>

          {/* Education & Interests */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <ScrollReveal direction="right" delay={400}>
              <HoverGlow glowColor="cyan">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <AnimatedIcon delay={0}>
                        <span className="text-3xl"></span>
                      </AnimatedIcon>
                      Education
                    </h3>
                    <div className="space-y-6">
                      <div className="border-l-4 border-cyan-500 pl-6 group-hover:border-cyan-400 transition-colors">
                        <h4 className="text-xl font-semibold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                          College of Computing / Computer Science
                        </h4>
                        <p className="text-slate-400 mb-1 group-hover:text-slate-300 transition-colors">มหาวิทยาลัยขอนแก่น</p>
                        <p className="text-sm text-slate-500 group-hover:text-slate-400 transition-colors">ปีการศึกษาที่ 3</p>
                      </div>
                    </div>
                  </div>
                </div>
              </HoverGlow>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={400}>
              <HoverGlow glowColor="blue">
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500"></div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                      <AnimatedIcon delay={200}>
                        <span className="text-3xl"></span>
                      </AnimatedIcon>
                      Interests & Goals
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Backend Development & API Design',
                        'Machine Learning & AI Integration',
                        'Full-Stack Development',
                        'System Architecture & Scalability',
                        'Clean Code & Best Practices'
                      ].map((interest, index) => (
                        <div key={index} className="flex items-start gap-3 group/item hover:translate-x-2 transition-transform duration-300">
                          <span className="text-cyan-400 mt-1 group-hover/item:text-cyan-300 transition-colors">▸</span>
                          <p className="text-slate-300 group-hover/item:text-slate-200 transition-colors">{interest}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </HoverGlow>
            </ScrollReveal>
          </div>

          {/* Skills Section */}
          <SkillSection />

          {/* What I Do */}
          <ScrollReveal direction="up" delay={600}>
            <div className="mt-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">
                What I Do
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  { icon: '💻', title: 'Web Development', desc: 'สร้างเว็บแอปพลิเคชันที่ทันสมัยและตอบสนองได้ดีด้วย React, Next.js และเทคโนโลยีล่าสุด', delay: 0 },
                  { icon: '📱', title: 'Mobile Development', desc: 'พัฒนาแอปมือถือด้วย Flutter และ Kotlin Multiplatform Mobile สำหรับทั้ง iOS และ Android', delay: 200 },
                  { icon: '🤖', title: 'AI & Backend', desc: 'ออกแบบและพัฒนาระบบ Backend ที่มีประสิทธิภาพ รวมถึงการรวม AI/ML เข้ากับแอปพลิเคชัน', delay: 400 }
                ].map((item, index) => (
                  <ScrollReveal key={index} direction="up" delay={600 + index * 100}>
                    <HoverGlow glowColor="cyan">
                      <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 text-center hover:shadow-xl hover:shadow-cyan-500/20 hover:scale-105 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-500"></div>
                        <div className="relative z-10">
                          <AnimatedIcon delay={item.delay}>
                            <div className="text-5xl mb-4">{item.icon}</div>
                          </AnimatedIcon>
                          <h4 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">{item.title}</h4>
                          <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </HoverGlow>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative">
                My <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">Projects</span>
                <div className="absolute -top-2 -left-2 w-6 h-6 bg-blue-400/20 rounded-full blur-lg animate-ping"></div>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-4">
                ผลงานที่ผมได้พัฒนาและมีส่วนร่วมในการสร้าง<br className="hidden md:block" />
                รวมถึงโปรเจกต์ส่วนตัวและโปรเจกต์ที่ทำร่วมกับทีม
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <HoverGlow glowColor="cyan">
                  <div className="bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 group">
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">Total Projects: </span>
                    <span className="text-cyan-400 font-bold group-hover:text-cyan-300 transition-colors">
                      <AnimatedCounter end={projects.length} />
                    </span>
                  </div>
                </HoverGlow>
                <HoverGlow glowColor="blue">
                  <div className="bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-110 group">
                    <span className="text-slate-300 group-hover:text-slate-200 transition-colors">Categories: </span>
                    <span className="text-cyan-400 font-bold group-hover:text-blue-300 transition-colors">
                      <AnimatedCounter end={new Set(projects.map(p => p.category)).size} />
                    </span>
                  </div>
                </HoverGlow>
              </div>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <ProjectCard {...project} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative z-10 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/3 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="max-w-6xl mx-auto w-full relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight relative">
                Get In <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text animate-gradient">Touch</span>
                <div className="absolute -bottom-2 right-0 w-12 h-12 bg-indigo-400/20 rounded-full blur-xl animate-pulse"></div>
              </h2>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                มีคำถามหรือสนใจในผลงานของผม? ติดต่อผมได้เลยครับ ผมพร้อมตอบกลับทุกข้อความ
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ScrollReveal direction="right" delay={200}>
              <ContactForm />
            </ScrollReveal>

            {/* Contact Information */}
            <ScrollReveal direction="left" delay={200}>
              <div className="space-y-6">
                <HoverGlow glowColor="cyan">
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                        <AnimatedIcon delay={0}>
                          <span className="text-2xl"></span>
                        </AnimatedIcon>
                        Contact Information
                      </h3>
                      <div className="space-y-6">
                        <a
                          href="mailto:nick.worachatz@gmail.com"
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item border border-transparent hover:border-cyan-500/30 hover:scale-105"
                        >
                          <svg className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors mt-1 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                          <div>
                            <p className="text-sm text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">Email</p>
                            <p className="text-slate-200 group-hover/item:text-cyan-400 transition-colors font-medium">
                              nick.worachatz@gmail.com
                            </p>
                          </div>
                        </a>
                        <a
                          href="tel:+66828814470"
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item border border-transparent hover:border-cyan-500/30 hover:scale-105"
                        >
                          <svg className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors mt-1 group-hover/item:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                          <div>
                            <p className="text-sm text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">Phone</p>
                            <p className="text-slate-200 group-hover/item:text-cyan-400 transition-colors font-medium">
                              082-881-4470
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://www.facebook.com/nick.worachatz/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item border border-transparent hover:border-cyan-500/30 hover:scale-105"
                        >
                          <svg className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors mt-1 group-hover/item:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                          </svg>
                          <div>
                            <p className="text-sm text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">Facebook</p>
                            <p className="text-slate-200 group-hover/item:text-cyan-400 transition-colors font-medium">
                              Nick Worachat Paranya
                            </p>
                          </div>
                        </a>
                        <a
                          href="https://www.instagram.com/nicky_wrc/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-4 p-4 rounded-lg hover:bg-slate-700/50 transition-all duration-300 group/item border border-transparent hover:border-cyan-500/30 hover:scale-105"
                        >
                          <svg className="w-5 h-5 text-cyan-400 group-hover/item:text-cyan-300 transition-colors mt-1 group-hover/item:scale-110" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                          <div>
                            <p className="text-sm text-slate-400 mb-1 group-hover/item:text-slate-300 transition-colors">Instagram</p>
                            <p className="text-slate-200 group-hover/item:text-cyan-400 transition-colors font-medium">
                              nicky_wrc
                            </p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </HoverGlow>

                <HoverGlow glowColor="purple">
                  <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-indigo-500/10 rounded-2xl p-8 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-500 hover:scale-[1.02] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-indigo-500/0 group-hover:from-cyan-500/10 group-hover:to-indigo-500/10 transition-all duration-500"></div>
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold mb-4 text-white flex items-center gap-2">
                        <AnimatedIcon delay={0}>
                          <span className="text-2xl"></span>
                        </AnimatedIcon>
                        Let&apos;s Connect!
                      </h3>
                      <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors">
                        ผมเปิดรับโอกาสในการฝึกงานและทำงานร่วมกัน 
                        หากคุณสนใจในผลงานของผมหรือมีโปรเจกต์ที่น่าสนใจ อย่าลังเลที่จะติดต่อมาครับ
                      </p>
                      <div className="flex gap-4">
                        <a
                          href="https://github.com/nicky-wrc"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-6 py-2 bg-slate-700/50 hover:bg-slate-700 text-white rounded-lg transition-all duration-300 font-medium backdrop-blur-sm border border-slate-600/50 hover:border-cyan-500/50 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/30"
                        >
                          View GitHub
                        </a>
                        <a
                          href="#projects"
                          className="px-6 py-2 border border-slate-600/50 hover:border-cyan-400 text-slate-300 hover:text-cyan-300 rounded-lg transition-all duration-300 font-medium backdrop-blur-sm hover:scale-110 hover:bg-cyan-400/10"
                        >
                          View Projects
                        </a>
                      </div>
                    </div>
                  </div>
                </HoverGlow>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />

    </main>
  );
}