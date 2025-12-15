import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectImage from "@/components/ProjectImage";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

// Generate static params for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate dynamic metadata for each project
export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Worachat Paranya',
    };
  }

  return {
    title: `${project.title} | Worachat Paranya - Developer Portfolio`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Calculate metrics
  const totalTechnologies = project.tags.length;
  const mainFeatures = project.content.split('.').filter(s => s.trim().length > 0).length;

  return (
    <main id="main-content" className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 text-slate-200 font-sans">
      <Navigation />
      
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <ScrollReveal direction="left" delay={0}>
            <Link 
              href="/#projects" 
              className="text-cyan-400 hover:text-cyan-300 mb-8 inline-flex items-center gap-2 transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">Projects</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300">{project.title}</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Project Info */}
            <div className="space-y-8">
              {/* Project Title */}
              <ScrollReveal direction="up" delay={100}>
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
                    {project.title}
                    <div className="w-full h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 rounded-full mt-2"></div>
                  </h1>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>

              {/* Metrics Cards */}
              <ScrollReveal direction="up" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl">{""}</div>
                      <div>
                        <div className="text-3xl font-bold text-cyan-400">{totalTechnologies}</div>
                        <div className="text-sm text-slate-400">Total Technology</div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-slate-800/60 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="text-2xl"></div>
                      <div>
                        <div className="text-3xl font-bold text-blue-400">{mainFeatures}</div>
                        <div className="text-sm text-slate-400">Main Feature</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Action Buttons */}
              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.demoUrl && (
                    <Link
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 transform flex items-center justify-center gap-2 group"
                    >
                      <span>Live Demo</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                  {project.githubUrl ? (
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-4 bg-slate-800/60 hover:bg-slate-700/60 border border-slate-700/50 hover:border-slate-600 text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 transform flex items-center justify-center gap-2 group backdrop-blur-sm"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Github</span>
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="flex-1 px-6 py-4 bg-slate-800/30 border border-slate-700/30 text-slate-500 rounded-xl font-semibold cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      <span>Private Repo</span>
                    </button>
                  )}
                </div>
              </ScrollReveal>

              {/* Technologies Used */}
              <ScrollReveal direction="up" delay={400}>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="text-cyan-400">{"</>"}</span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-slate-800/60 backdrop-blur-sm px-4 py-2 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 group"
                      >
                        <span className="text-slate-300 group-hover:text-cyan-300 transition-colors font-medium">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Media & Features */}
            <div className="space-y-8">
              {/* Project Image/Media */}
              <ScrollReveal direction="right" delay={200}>
                <ProjectImage src={project.image} alt={project.title} />
              </ScrollReveal>

              {/* Key Features */}
              <ScrollReveal direction="right" delay={300}>
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
                  <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="text-yellow-400"></span>
                    Key Features
                  </h3>
                  <div className="space-y-4">
                    {project.content.split('.').filter(s => s.trim().length > 20).slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <p className="text-slate-300 leading-relaxed">{feature.trim()}.</p>
                      </div>
                    ))}
                    {project.content.split('.').filter(s => s.trim().length > 20).length === 0 && (
                      <div className="flex items-start gap-3">
                        <span className="text-cyan-400 mt-1">▸</span>
                        <p className="text-slate-300 leading-relaxed">{project.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>

              {/* Project Overview */}
              <ScrollReveal direction="right" delay={400}>
                <div className="bg-slate-800/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                  <h3 className="text-xl font-bold text-white mb-4">Project Overview</h3>
                  <p className="text-slate-300 leading-relaxed">
                    {project.content}
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
