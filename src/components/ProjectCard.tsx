'use client';

import React from 'react';
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
  return (
    <div className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl hover:shadow-teal-500/20 hover:-translate-y-2 transition duration-300 border border-slate-700 flex flex-col h-full group">
      
      {/* ส่วนแสดงรูปภาพ */}
      <div className="h-48 bg-slate-700 relative overflow-hidden">
        {/* ใช้ img tag ธรรมดาเพื่อให้ง่ายต่อการใส่รูป (หรือจะใช้ Next Image ก็ได้) */}
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          // ถ้าหารูปไม่เจอ ให้แสดงสีพื้นหลังแทน (Error Handling แบบบ้านๆ)
          onError={(e) => {
            e.currentTarget.style.display = 'none'; 
            e.currentTarget.parentElement!.classList.add('bg-gradient-to-br', 'from-slate-700', 'to-slate-600');
          }}
        />
        
        {/* Badge ประเภทโปรเจกต์ */}
        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm text-xs px-2 py-1 rounded text-white border border-slate-600 z-10">
            {category}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-teal-400 transition">
            <Link href={`/projects/${slug}`}>
                {title}
            </Link>
        </h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs font-medium text-teal-300 bg-teal-900/30 px-2 py-1 rounded border border-teal-800">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-4 border-t border-slate-700">
            <Link href={`/projects/${slug}`} className="text-teal-400 text-sm font-semibold hover:text-teal-300 flex items-center gap-1">
                Read More <span className="text-lg">→</span>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;