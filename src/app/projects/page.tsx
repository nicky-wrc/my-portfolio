import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';

export default function ProjectsPage() {
  // จัดกลุ่มโปรเจกต์ตาม category
  const projectsByCategory = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, typeof projects>);

  const categories = Object.keys(projectsByCategory);

  return (
    <main className="min-h-screen text-slate-100">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-blue-500/5 to-indigo-500/5"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            ผลงานที่ผมได้พัฒนาและมีส่วนร่วมในการสร้าง รวมถึงโปรเจกต์ส่วนตัวและโปรเจกต์ที่ทำร่วมกับทีม
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <div className="bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50">
              <span className="text-slate-300">Total Projects: </span>
              <span className="text-cyan-400 font-bold">{projects.length}</span>
            </div>
            <div className="bg-slate-800/60 backdrop-blur-sm px-6 py-3 rounded-full border border-slate-700/50">
              <span className="text-slate-300">Categories: </span>
              <span className="text-cyan-400 font-bold">{categories.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">All Projects</h2>
            <p className="text-slate-300">โปรเจกต์ทั้งหมดที่ผมได้พัฒนา</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Projects by Category */}
      {categories.map((category) => (
        <section key={category} className="py-16 px-6 border-t border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-white">
                {category}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsByCategory[category].map((project, index) => (
                <ProjectCard 
                  key={index}
                  {...project}
                />
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 border border-cyan-500/20 backdrop-blur-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Interested in Working Together?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            หากคุณสนใจในผลงานของผมหรือต้องการติดต่อเพื่อโอกาสในการทำงานร่วมกัน
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-105 transform"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}

