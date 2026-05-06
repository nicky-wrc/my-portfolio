import { Metadata } from 'next';
import SkillSection from '@/components/SkillSection';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import ProfileAvatar from '@/components/ProfileAvatar';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about Worachat Paranya, a Computer Science student at Khon Kaen University specializing in Backend Development, AI/ML, and Full-Stack applications.',
  openGraph: {
    title: 'About | Worachat',
    description: 'Computer Science student passionate about Backend Development and AI/ML.',
  },
};

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-hidden">
      <GridBackground />

      {/* Hero */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden z-10">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <ProfileAvatar priority size="hero" className="mb-10" />
          <div className="space-y-4 md:space-y-5">
            <p className="font-script text-xl md:text-2xl text-cyan-200/90">— get to know —</p>
            <h1
              className="font-display text-4xl md:text-5xl lg:text-6xl uppercase flex flex-wrap justify-center items-baseline gap-x-3 gap-y-0"
              style={{ letterSpacing: '-0.02em' }}
            >
              <span className="text-white">About</span>
              <span className="text-holo">Me</span>
            </h1>
            <p className="text-slate-300/90 max-w-2xl mx-auto leading-snug md:leading-relaxed text-base md:text-lg">
              To be reborn, you must first accept the death of who you used to be.
            </p>
          </div>
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
                สวัสดีครับ — ผมชื่อ{' '}
                <span className="text-holo-pink font-semibold">วรชาติ ปรัญญา</span>
                {' '}นักศึกษาสาขาวิทยาการคอมพิวเตอร์ คณะวิทยาการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น
                ชั้นปีที่ 4 ถ้าให้สรุปในหนึ่งประโยค ผมเป็นคนที่ชอบทำให้ไอเดียบนกระดาษกลายเป็นซอฟต์แวร์ที่
                <strong className="text-slate-200 font-medium">ใช้ได้จริง อธิบายได้ และมีเหตุผลรองรับ</strong>
              </p>
              <p>
                ผมหลงใหลใน{' '}
                <span className="text-cyan-300 font-semibold">Full-Stack Development</span>,{' '}
                <span className="text-fuchsia-300 font-semibold">AI/ML</span>
                {' '}และการออกแบบระบบที่<strong className="text-slate-200 font-medium">ขยายตัวได้จริง</strong>
                — ทั้งหน้าบ้าน หลังบ้าน และการเชื่อมต่อ ให้ผู้ใช้รู้สึกว่าโปรดักต์
                <strong className="text-slate-200 font-medium">ลื่นไหล อ่านง่าย และทันโลกปัจจุบัน</strong>
                ไม่ได้แค่หน้าตาดีแต่ใช้งานยาก
              </p>
              <p>
                ตอนนี้ผมกำลังมองหาโอกาส{' '}
                <span className="text-cyan-300/95 font-semibold">ฝึกงาน Full-Stack Developer</span>
                {' '}เพื่อเข้าไปเรียนรู้กับทีมมืออาชีพที่ทำของจริง มีมาตรฐาน และมีโจทย์ที่วัดผลได้
                ผมพร้อมถาม รับฟีดแบ็ก และส่งมอบงานให้จบอย่างมีเหตุผล — ถ้าคุณมองหาคนที่อยากเติบโตไปกับทีม
                <strong className="text-slate-200 font-medium"> ผมพร้อมคุยและลงมือทำร่วมกันครับ</strong>
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
                <p className="text-sm text-slate-500 font-mono">{'>'} year-4 // in_progress</p>
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
