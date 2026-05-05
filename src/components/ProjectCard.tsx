'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  slug: string;
  image: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, category, slug, image }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageError, setImageError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 18;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 18;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => setMousePosition({ x: 0, y: 0 });

  return (
    <div
      className="cyber-card group flex flex-col h-full overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg)`,
      }}
    >
      <div className="scan-line" />

      {/* Image */}
      <div className={`h-48 relative overflow-hidden ${imageError ? 'bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/15 to-violet-500/20' : 'bg-gradient-to-br from-[#0a0e2c] to-[#050816]'}`}>
        {!imageError && (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-110 transition-transform duration-700"
            onError={() => setImageError(true)}
          />
        )}
        {imageError && (
          <div className="flex items-center justify-center h-full">
            <svg className="w-12 h-12 text-cyan-300/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}

        {/* Top gradient veil */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/30 to-transparent" />

        {/* Holographic shimmer */}
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-400/0 via-fuchsia-400/0 to-violet-400/0 group-hover:from-cyan-400/15 group-hover:via-fuchsia-400/10 group-hover:to-violet-400/15 transition-all duration-500" />

        {/* Category badge */}
        <div className="absolute top-3 right-3 cyber-chip !text-[0.6rem] !py-1 !px-3">
          {category}
        </div>
      </div>

      {/* Body */}
      <div className="p-6 flex flex-col flex-grow relative z-10">
        <h3 className="font-display text-lg md:text-xl uppercase tracking-wider text-white mb-3 group-hover:text-holo-cyan transition-colors duration-300">
          <Link href={`/projects/${slug}`} className="hover:underline underline-offset-4 decoration-fuchsia-400/60">
            {title}
          </Link>
        </h3>
        <p className="text-slate-300 text-sm mb-5 flex-grow leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mb-5">
          {tags.slice(0, 3).map((tag, idx) => (
            <span
              key={idx}
              className="text-[0.65rem] font-display tracking-[0.18em] uppercase text-cyan-200 bg-cyan-400/5 px-2.5 py-1 rounded-md border border-cyan-400/20 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-cyan-400/15">
          <Link
            href={`/projects/${slug}`}
            className="inline-flex items-center gap-2 font-display text-xs uppercase tracking-[0.22em] text-holo-cyan hover:text-holo-pink transition-colors group/link"
          >
            Read More
            <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
