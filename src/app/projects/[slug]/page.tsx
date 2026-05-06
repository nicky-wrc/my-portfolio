import React from 'react';
import { Metadata } from 'next';
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectImage from "@/components/ProjectImage";
import GridBackground from "@/components/GridBackground";
import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import { countOverviewBlocks, parseProjectContent } from "@/lib/projectContent";
import ProjectOverview from "@/components/ProjectOverview";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: project.title,
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

  if (!project) notFound();

  const totalTechnologies = project.tags.length;
  const mainFeatures = countOverviewBlocks(project.content);
  const { blocks: overviewBlocks } = parseProjectContent(project.content);
  const titledBlocks = overviewBlocks.filter((b) => b.title);
  const quickFeatures =
    titledBlocks.length > 0
      ? titledBlocks.slice(0, 5).map((b) => ({
          title: b.title,
          preview: b.body.length > 120 ? `${b.body.slice(0, 118)}…` : b.body,
        }))
      : overviewBlocks.slice(0, 4).map((b) => ({
          title: `${b.body.slice(0, 96)}${b.body.length > 96 ? '…' : ''}`,
          preview: '',
        }));

  return (
    <main id="main-content" className="min-h-screen text-slate-100 relative overflow-hidden">
      <GridBackground />
      <Navigation />

      <div className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Back */}
          <ScrollReveal direction="left" delay={0}>
            <Link
              href="/#projects"
              className="text-cyan-300 hover:text-fuchsia-300 mb-8 inline-flex items-center gap-2 transition-colors group font-display text-xs uppercase tracking-[0.22em]"
            >
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              <span>Back</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-400">Projects</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-300 normal-case tracking-normal">{project.title}</span>
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left: meta */}
            <div className="space-y-8 min-w-0">
              <ScrollReveal direction="up" delay={100}>
                <div>
                  <p className="font-script text-2xl text-cyan-200/90 mb-1">— mission file —</p>
                  <h1 className="font-display text-3xl md:text-5xl uppercase tracking-tight mb-4 text-white">
                    {project.title}
                  </h1>
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 rounded-full mb-5" />
                  <p className="text-lg text-slate-300/90 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={200}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="cyber-card p-5 text-center">
                    <div className="font-display text-3xl text-holo">{totalTechnologies}</div>
                    <div className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400 mt-1">
                      Total Technology
                    </div>
                  </div>
                  <div className="cyber-card p-5 text-center">
                    <div className="font-display text-3xl text-holo-pink">{mainFeatures}</div>
                    <div className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400 mt-1">
                      Highlights
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={300}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {project.demoUrl && (
                    <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="btn-holo flex-1">
                      Live Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Link>
                  )}
                  {project.githubUrl ? (
                    <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-holo-ghost flex-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      View Source
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="btn-holo-ghost flex-1 opacity-50 cursor-not-allowed"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      Private Repo
                    </button>
                  )}
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={400}>
                <div>
                  <h3 className="font-display text-lg uppercase tracking-[0.2em] text-white mb-4 flex items-center gap-2">
                    <span className="text-holo-cyan">{"</>"}</span>
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tech, index) => (
                      <div key={index} className="cyber-border rounded-lg px-3 py-1.5 bg-[#050816]/60">
                        <span className="text-slate-200 hover:text-holo-cyan transition-colors font-display text-xs tracking-wider uppercase">
                          {tech}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: image + Key Features */}
            <div className="min-w-0 space-y-8 lg:sticky lg:top-28 lg:self-start">
              <ScrollReveal direction="right" delay={200}>
                <ProjectImage src={project.image} alt={project.title} />
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="cyber-card p-6 md:p-7">
                  <div className="scan-line" />
                  <h3 className="font-display text-lg uppercase tracking-[0.2em] text-white mb-5 flex items-center gap-2">
                    <span className="w-2 h-5 rounded-full bg-gradient-to-b from-cyan-400 via-fuchsia-400 to-violet-400" />
                    Key <span className="text-holo-pink">Features</span>
                  </h3>
                  <div className="space-y-3">
                    {quickFeatures.length > 0 ? (
                      quickFeatures.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-3 group rounded-lg p-2 -mx-2 motion-safe:transition-colors motion-safe:duration-300 hover:bg-cyan-400/[0.04]"
                        >
                          <span className="font-display text-fuchsia-400 mt-0.5 group-hover:text-cyan-300 motion-safe:transition-colors shrink-0">
                            ▸
                          </span>
                          <div className="min-w-0">
                            <p className="text-slate-100/95 font-medium text-sm leading-snug">{feature.title}</p>
                            {feature.preview ? (
                              <p className="text-slate-500 text-xs leading-relaxed mt-1">{feature.preview}</p>
                            ) : null}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="flex items-start gap-3">
                        <span className="font-display text-fuchsia-400 mt-1">▸</span>
                        <p className="text-slate-300 leading-relaxed">{project.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ScrollReveal direction="up" delay={350} className="mt-14 lg:mt-20">
            <ProjectOverview content={project.content} />
          </ScrollReveal>
        </div>
      </div>

      <Footer />
    </main>
  );
}
