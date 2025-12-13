// src/app/page.tsx

import Link from "next/link";
// ใช้ ../ เพื่อถอยจาก app ออกไปหา components และ data
import ProjectCard from "../components/ProjectCard";
import SkillSection from "../components/SkillSection";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md z-50 border-b border-white/5">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-teal-400 to-blue-500 text-transparent bg-clip-text">
          WorachatPortfolio
        </h1>
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-teal-400 cursor-pointer transition">About Me</li>
          <li className="hover:text-teal-400 cursor-pointer transition">Skills</li>
          <li className="hover:text-teal-400 cursor-pointer transition">Projects</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20">
        <div className="mb-6 relative">
             {/* ส่วนรูปโปรไฟล์ที่แก้ให้แล้ว */}
             <div className="w-32 h-32 rounded-full bg-slate-700 border-4 border-teal-500 overflow-hidden flex items-center justify-center relative">
                <img 
                   src="/profile.jpg"  // อย่าลืมเอารูปชื่อนี้ไปวางในโฟลเดอร์ public นะครับ
                   alt="Worachat Paranya" 
                   className="w-full h-full object-cover"
                />
             </div>
        </div>
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
          Hi, I'm <span className="text-teal-400">Worachat Paranya</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed">
          I build scalable <span className="text-slate-200">Web & Mobile Applications</span>. 
          Focusing on backend logic, clean code, and user-centric design.
        </p>
        <div className="flex gap-4">
           <Link href="#projects">
             <button className="px-8 py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-full font-semibold transition shadow-lg shadow-teal-500/25">
               View Projects
             </button>
           </Link>
           <button className="px-8 py-3 border border-slate-600 hover:border-teal-400 text-slate-300 hover:text-white rounded-full font-semibold transition">
             Download Resume
           </button>
        </div>
      </section>

      {/* Skills Section */}
      <SkillSection />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h3>
            <p className="text-slate-400">Some of the projects I've worked on recently.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-slate-500 border-t border-slate-800 text-sm">
        <p>© 2025 Designed & Built by Worachat.</p>
      </footer>

    </main>
  );
}