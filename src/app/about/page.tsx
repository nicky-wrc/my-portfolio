import { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SkillSection from '@/components/SkillSection';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';

export const metadata: Metadata = {
  title: 'About | Worachat Paranya - Developer Portfolio',
  description: 'Learn about Worachat Paranya, a Computer Science student at Khon Kaen University specializing in Backend Development, AI/ML, and Full-Stack applications.',
  openGraph: {
    title: 'About | Worachat Paranya',
    description: 'Computer Science student passionate about Backend Development and AI/ML.',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-hidden">
      <GridBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-violet-500 blur-2xl opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
            <div className="relative w-44 h-44 rounded-full p-[3px] bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-violet-500 shadow-2xl shadow-fuchsia-500/30 animate-glow-pulse">
              <div className="w-full h-full rounded-full bg-[#0a0e2c] border-2 border-[#050816] overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Worachat Paranya"
                  fill
                  sizes="176px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <p className="font-script text-2xl text-cyan-200/90 mb-2">— get to know —</p>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-6">
            <span className="text-white">About </span>
            <span className="text-holo">Me</span>
          </h1>
          <p className="text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
            To be reborn, you must first accept the death of who you used to be.
          </p>
        </div>
      </section>

      {/* Bio */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card p-8 md:p-12">
            <div className="scan-line" />
            <h2 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-6 text-white">
              <span className="text-holo-cyan">Who</span> I Am
            </h2>
            <div className="space-y-5 text-slate-300 leading-relaxed text-lg">
              <p>
                สวัสดีครับ ผมชื่อ{' '}
                <span className="text-holo-pink font-semibold">วรชาติ ปรัญญา</span>{' '}
                เป็นนักศึกษามหาวิทยาลัยขอนแก่น คณะวิทยาการคอมพิวเตอร์
                สาขาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 3
              </p>
              <p>
                ผมหลงใหลใน <span className="text-cyan-300 font-semibold">Backend Development</span>,{' '}
                <span className="text-fuchsia-300 font-semibold">AI/ML</span>{' '}
                และการออกแบบระบบที่ขยายตัวได้ พร้อมพัฒนาประสบการณ์ผู้ใช้ที่ทันสมัย
              </p>
              <p>
                ตอนนี้กำลังมองหาตำแหน่งฝึกงาน Backend Developer
                เพื่อร่วมงานกับทีมมืออาชีพและสร้างผลงานที่มีคุณค่าจริง ๆ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education + Interests */}
      <section className="py-12 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-cyan-400 to-fuchsia-400" />
                Education
              </h2>
              <div className="border-l-2 border-cyan-400/50 pl-6">
                <h3 className="font-display text-lg text-holo-cyan mb-2">
                  College of Computing · Computer Science
                </h3>
                <p className="text-slate-400 mb-1">มหาวิทยาลัยขอนแก่น (KKU)</p>
                <p className="text-sm text-slate-500 font-mono">{'>'} year-3 // in_progress</p>
              </div>
            </div>

            <div className="cyber-card p-8">
              <h2 className="font-display text-xl md:text-2xl uppercase tracking-wider mb-6 text-white flex items-center gap-3">
                <span className="w-2 h-6 rounded-full bg-gradient-to-b from-fuchsia-400 to-violet-500" />
                Interests &amp; Goals
              </h2>
              <div className="space-y-3">
                {[
                  'Backend Development & API Design',
                  'Machine Learning & AI Integration',
                  'Full-Stack Development',
                  'System Architecture & Scalability',
                  'Clean Code & Best Practices',
                ].map((it, i) => (
                  <div key={i} className="flex items-center gap-3 group hover:translate-x-1 transition-transform">
                    <span className="font-display text-fuchsia-400 group-hover:text-cyan-300 transition-colors">▸</span>
                    <p className="text-slate-300 group-hover:text-white transition-colors">{it}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <SkillSection />
      </div>

      {/* What I Do */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <p className="font-script text-2xl text-cyan-200/90 text-center mb-2">— what I do —</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight text-center mb-12">
            <span className="text-white">What </span>
            <span className="text-holo">I Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Web Development', desc: 'สร้างเว็บแอปพลิเคชันที่ทันสมัยและตอบสนองได้ดีด้วย React, Next.js และเทคโนโลยีล่าสุด' },
              { title: 'Mobile Development', desc: 'พัฒนาแอปมือถือด้วย Flutter และ Kotlin Multiplatform Mobile สำหรับทั้ง iOS และ Android' },
              { title: 'AI & Backend', desc: 'ออกแบบและพัฒนาระบบ Backend ที่มีประสิทธิภาพ รวมถึงการรวม AI/ML เข้ากับแอปพลิเคชัน' },
            ].map((item, idx) => (
              <div key={idx} className="cyber-card p-7 text-center group">
                <div className="scan-line" />
                <div className="mx-auto mb-4 w-14 h-14 rounded-xl flex items-center justify-center cyber-border bg-[#050816]/50">
                  <span className="font-display font-extrabold text-lg text-holo">{idx + 1}</span>
                </div>
                <h3 className="font-display text-xl uppercase tracking-wide text-white mb-3 group-hover:text-holo-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
