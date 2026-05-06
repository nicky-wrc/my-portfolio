import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import GridBackground from '@/components/GridBackground';
import { projects } from '@/data/projects';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Explore projects by Worachat Paranya including web applications, mobile apps, AI/ML projects, and backend systems.',
  openGraph: {
    title: 'Projects | Worachat',
    description: 'Web applications, mobile apps, and AI/ML projects.',
  },
};

export default function ProjectsPage() {
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const categories = Object.keys(projectsByCategory);

  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-hidden">
      <GridBackground />
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden z-10">
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="font-script text-2xl text-cyan-200/90 mb-2">— mission archive —</p>
          <h1 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-6">
            <span className="text-white">My </span>
            <span className="text-holo">Projects</span>
          </h1>
          <p className="text-slate-300/85 max-w-2xl mx-auto leading-relaxed">
            ผลงานที่ผมพัฒนาและมีส่วนร่วม รวมถึงโปรเจกต์ส่วนตัวและทีม
            ทุกชิ้นถูกฝึกฝนเหมือนหุ่นยนต์พร้อมรบในสนามจริง
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="cyber-chip">
              <span className="text-slate-300">Total</span>
              <span className="text-holo-cyan font-bold">{projects.length}</span>
            </div>
            <div className="cyber-chip">
              <span className="text-slate-300">Categories</span>
              <span className="text-holo-pink font-bold">{categories.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-3">
              <span className="text-white">All </span>
              <span className="text-holo-cyan">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* By category */}
      {categories.map((category) => (
        <section key={category} className="py-16 px-6 border-t border-cyan-400/10 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="font-display text-2xl md:text-3xl uppercase tracking-tight text-white mb-2">
                {category}
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-fuchsia-400 rounded-full" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsByCategory[category].map((project, index) => (
                <ProjectCard key={index} {...project} />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center cyber-frame p-12">
          <p className="font-script text-2xl text-cyan-200/90 mb-2">— let&apos;s collab —</p>
          <h2 className="font-display text-3xl md:text-4xl uppercase tracking-tight mb-4">
            <span className="text-white">Interested in </span>
            <span className="text-holo-pink">Working Together?</span>
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            หากคุณสนใจผลงานของผม หรือต้องการเชิญร่วมโปรเจกต์ใหม่ ทักมาเลยครับ
          </p>
          <a href="/contact" className="btn-holo">
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
