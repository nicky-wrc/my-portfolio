import { Metadata } from 'next';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import SkillSection from '@/components/SkillSection';
import Footer from '@/components/Footer';

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
    <main id="main-content" className="min-h-screen text-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 relative inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 p-1 shadow-2xl shadow-cyan-500/30">
              <div className="w-full h-full rounded-full bg-slate-800 border-4 border-slate-700 overflow-hidden relative">
                <Image
                  src="/profile.jpg"
                  alt="Worachat Paranya"
                  fill
                  sizes="160px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Me</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            To be reborn, you must first accept the death of who you used to be
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-xl">
            <h2 className="text-3xl font-bold mb-6 text-white">Who I Am</h2>
            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
              <p>
                สวัสดีครับ ผมชื่อ <span className="text-cyan-400 font-semibold">วรชาติ ปรัญญา </span> 
                เป็นนักศึกษามหาวิทยาลัยขอนแก่น คณะวิทยาการคอมพิวเตอร์ สาขาวิทยาการคอมพิวเตอร์ ชั้นปีที่ 3
              </p>
              <p>
                ผมมีความสนใจเป็นพิเศษในด้าน Backend Development, AI/ML, และการออกแบบระบบที่สามารถขยายตัวได้ 
                รวมถึงการพัฒนาซอฟต์แวร์ที่เน้นผู้ใช้เป็นศูนย์กลาง
              </p>
              <p>
                ตอนนี้ผมกำลังมองหาตำแหน่งฝึกงานในตำแหน่ง Backend Developer เพื่อพัฒนาทักษะและเรียนรู้จากทีมงานที่มีประสบการณ์ 
                และพร้อมที่จะมีส่วนร่วมในโปรเจกต์ที่น่าสนใจ
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-3xl"></span>
                Education
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-cyan-500 pl-6">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-2">
                    College of Computing / Computer Science
                  </h3>
                  <p className="text-slate-400 mb-1">มหาวิทยาลัย ขอนแก่น</p>
                  <p className="text-sm text-slate-500">ปีการศึกษาที่ 3</p>
                </div>
                {/* เพิ่มข้อมูลการศึกษาเพิ่มเติมได้ที่นี่ */}
              </div>
            </div>

            {/* Experience / Interests */}
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
              <h2 className="text-2xl font-bold mb-6 text-white flex items-center gap-3">
                <span className="text-3xl"></span>
                Interests & Goals
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">▸</span>
                  <p className="text-slate-300">Backend Development & API Design</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <p className="text-slate-300">Machine Learning & AI Integration</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <p className="text-slate-300">Full-Stack Development</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <p className="text-slate-300">System Architecture & Scalability</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-teal-400 mt-1">▸</span>
                  <p className="text-slate-300">Clean Code & Best Practices</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection />

      {/* What I Do */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            What I <span className="text-white">Do</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-4">Web Development</h3>
              <p className="text-slate-400">
                สร้างเว็บแอปพลิเคชันที่ทันสมัยและตอบสนองได้ดีด้วย React, Next.js และเทคโนโลยีล่าสุด
              </p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-4">Mobile Development</h3>
              <p className="text-slate-300">
                พัฒนาแอปมือถือด้วย Flutter และ Kotlin Multiplatform Mobile สำหรับทั้ง iOS และ Android
              </p>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 text-center hover:shadow-xl hover:shadow-cyan-500/10">
              <div className="text-5xl mb-4"></div>
              <h3 className="text-xl font-bold text-white mb-4">AI & Backend</h3>
              <p className="text-slate-400">
                ออกแบบและพัฒนาระบบ Backend ที่มีประสิทธิภาพ รวมถึงการรวม AI/ML เข้ากับแอปพลิเคชัน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

