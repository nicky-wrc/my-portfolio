import React from 'react';
import Link from "next/link";
import { projects } from "../../../data/projects";
import { notFound } from "next/navigation";


interface ProjectDetailProps {
  params: { slug: string };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-900 text-slate-200 font-sans py-24 px-6">
      <div className="max-w-4xl mx-auto">
        
        <Link href="/" className="text-teal-400 hover:text-teal-300 mb-8 inline-flex items-center gap-2 transition">
          <span>←</span> Back to Projects
        </Link>

        <div className="mb-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-white">{project.title}</h1>
            <p className="text-xl text-teal-400 font-medium mb-6">{project.role}</p>
            
            <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                    <span key={tag} className="bg-slate-800 px-3 py-1 rounded text-sm text-slate-300 border border-slate-700">
                        {tag}
                    </span>
                ))}
            </div>
        </div>

        <div className="w-full h-64 md:h-96 bg-slate-800 rounded-xl mb-12 flex items-center justify-center border border-slate-700 overflow-hidden shadow-2xl">
            <span className="text-slate-500 text-lg">Project Screenshot / Demo Video</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="md:col-span-2 space-y-8">
                <div>
                    <h3 className="text-2xl font-bold text-white mb-4">Project Overview</h3>
                    <p className="text-slate-400 leading-relaxed text-lg">
                        {project.content}
                    </p>
                </div>
            </div>

            <div className="bg-slate-800 p-6 rounded-xl border border-slate-700 h-fit">
                <h4 className="text-lg font-bold text-white mb-6 border-b border-slate-700 pb-2">Project Info</h4>
                
                <div className="flex flex-col gap-3">
                    {project.githubUrl ? (
                        <Link href={project.githubUrl} target="_blank" className="w-full text-center py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition font-medium">
                            View Source Code
                        </Link>
                    ) : (
                        <button disabled className="w-full py-3 bg-slate-700/50 text-slate-500 rounded-lg cursor-not-allowed">Private Repo</button>
                    )}
                    
                    {project.demoUrl && (
                        <Link href={project.demoUrl} target="_blank" className="w-full text-center py-3 bg-teal-500 hover:bg-teal-600 text-white rounded-lg transition font-medium shadow-lg shadow-teal-500/20">
                            Live Demo
                        </Link>
                    )}
                </div>
            </div>
        </div>
      </div>
    </main>
  );
}