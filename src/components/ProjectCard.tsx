'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  description: string;
  tags: string[];
  category: string;
  slug: string;
  image: string; // รับค่ารูปภาพเพิ่มเข้ามา
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, tags, category, slug, image }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      className="bg-slate-800/60 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2 transition-all duration-500 border border-slate-700/50 flex flex-col h-full group hover:border-cyan-500/50"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${-mousePosition.y * 0.5}deg) rotateY(${mousePosition.x * 0.5}deg) translateY(${mousePosition.y * -0.1}px)`,
      }}
    >
      
      {/* ส่วนแสดงรูปภาพ */}
      <div className="h-48 bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          onError={(e) => {
            e.currentTarget.style.display = 'none'; 
            e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-cyan-500/20', 'to-blue-500/20');
          }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Badge ประเภทโปรเจกต์ */}
        <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-xs px-3 py-1.5 rounded-lg text-cyan-300 font-semibold border border-cyan-500/30 shadow-lg z-10">
            {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
            <Link href={`/projects/${slug}`} className="hover:underline">
                {title}
            </Link>
        </h3>
        <p className="text-slate-300 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs font-medium text-cyan-300 bg-cyan-500/10 px-3 py-1 rounded-lg border border-cyan-500/20 backdrop-blur-sm">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700/50">
            <Link href={`/projects/${slug}`} className="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-2 group/link transition-colors">
                Read More 
                <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;