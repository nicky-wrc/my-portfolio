'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { skills } from '@/data/skills';

const iconMapping: Record<string, { type: 'simpleicons' | 'devicons', name: string }> = {
  // Programming Skills
  'JavaScript': { type: 'simpleicons', name: 'javascript' },
  'TypeScript': { type: 'simpleicons', name: 'typescript' },
  'Python': { type: 'simpleicons', name: 'python' },
  'PHP': { type: 'simpleicons', name: 'php' },
  'SQL': { type: 'simpleicons', name: 'mysql' },
  'HTML': { type: 'simpleicons', name: 'html5' },
  'CSS': { type: 'devicons', name: 'css3' },
  'C': { type: 'simpleicons', name: 'c' },
  'Java': { type: 'devicons', name: 'java' },
  'Kotlin': { type: 'simpleicons', name: 'kotlin' },

  // Frameworks
  'React': { type: 'simpleicons', name: 'react' },
  'Angular': { type: 'simpleicons', name: 'angular' },
  'Vue.js': { type: 'simpleicons', name: 'vuedotjs' },
  'Laravel': { type: 'simpleicons', name: 'laravel' },
  'Spring Boot': { type: 'simpleicons', name: 'spring' },
  'Express': { type: 'simpleicons', name: 'express' },
  'Kotlin Multiplatform Mobile': { type: 'simpleicons', name: 'kotlin' },
  'PyTorch': { type: 'simpleicons', name: 'pytorch' },

  // Database
  'MySQL': { type: 'simpleicons', name: 'mysql' },
  'PostgreSQL': { type: 'simpleicons', name: 'postgresql' },
  'Firebase': { type: 'simpleicons', name: 'firebase' },

  // Tools
  'Git & GitHub': { type: 'simpleicons', name: 'github' },
  'VS Code': { type: 'devicons', name: 'visualstudiocode' },
  'Postman': { type: 'simpleicons', name: 'postman' },
  'Figma': { type: 'simpleicons', name: 'figma' },
  'Canva': { type: 'simpleicons', name: 'canva' },
  'Docker': { type: 'simpleicons', name: 'docker' },
};

const normalizeSkillName = (name: string): string => {
  return name.trim();
};

const getIconColor = (skillName: string): string => {
  const colorMap: Record<string, string> = {
    'JavaScript': 'F7DF1E',
    'TypeScript': '3178C6',
    'Python': '3776AB',
    'PHP': '777BB4',
    'HTML': 'E34F26',
    'CSS': '1572B6',
    'C': 'A8B9CC',
    'Java': 'ED8B00',
    'Kotlin': '7F52FF',
    'React': '61DAFB',
    'Angular': 'DD0031',
    'Vue.js': '4FC08D',
    'Laravel': 'FF2D20',
    'Spring Boot': '6DB33F',
    'Express': '000000',
    'PyTorch': 'EE4C2C',
    'MySQL': '4479A1',
    'PostgreSQL': '4169E1',
    'Firebase': 'FFCA28',
    'Git & GitHub': '181717',
    'VS Code': '007ACC',
    'Postman': 'FF6C37',
    'Figma': 'F24E1E',
    'Canva': '00C4CC',
    'Docker': '2496ED',
  };

  return colorMap[skillName] || '14B8A6';
};

interface SkillIconProps {
  item: string;
  iconUrl: string | null;
}

function SkillIcon({ item, iconUrl }: SkillIconProps) {
  const [imageError, setImageError] = useState(false);

  if (!iconUrl || imageError) {
    return (
      <div className="w-20 h-20 bg-slate-700/40 backdrop-blur-sm rounded-xl p-2 flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 border border-slate-600/50 group-hover:border-cyan-500/50">
        <span className="text-xs text-slate-300 text-center font-medium leading-tight px-1">
          {item}
        </span>
      </div>
    );
  }

  return (
    <div className="w-20 h-20 bg-slate-700/40 backdrop-blur-sm rounded-xl p-4 flex items-center justify-center hover:bg-slate-700/60 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20 border border-slate-600/50 group-hover:border-cyan-500/50">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={iconUrl}
        alt={item}
        className="w-full h-full object-contain"
        loading="lazy"
        onError={() => setImageError(true)}
      />
    </div>
  );
}

const SkillSection = () => {
  const getIconUrl = (skillName: string): string | null => {
    const normalized = normalizeSkillName(skillName);
    const iconConfig = iconMapping[normalized];

    if (!iconConfig) {
      return null;
    }

    if (iconConfig.type === 'devicons') {
      let deviconName = iconConfig.name.toLowerCase();

      if (deviconName === 'visualstudiocode') {
        deviconName = 'vscode';
      }

      return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${deviconName}/${deviconName}-original.svg`;
    } else {
      const color = getIconColor(normalized);
      const cleanColor = color.replace('#', '');
      return `https://cdn.simpleicons.org/${iconConfig.name}/${cleanColor}`;
    }
  };

  return (
    <section className="py-24 px-6 border-t border-slate-700/50 relative" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <h2 id="skills-heading" className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-400 text-transparent bg-clip-text">
            Technical Skills
          </h2>
          <p className="text-slate-300 text-center mb-12 text-lg">Technologies I work with</p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 150}>
              <div className="bg-slate-800/60 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-xl hover:shadow-cyan-500/10 hover:scale-[1.02] transform">
                <h3 className="text-xl font-bold text-cyan-400 mb-6 border-b border-slate-700/50 pb-3">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-4" role="list" aria-label={`${skillGroup.category} skills`}>
                  {skillGroup.items.map((item, idx) => {
                    const iconUrl = getIconUrl(item);

                    return (
                      <div
                        key={idx}
                        className="group relative flex flex-col items-center justify-center cursor-pointer"
                        role="listitem"
                      >
                        <SkillIcon item={item} iconUrl={iconUrl} />
                        <span className="text-xs text-slate-400 mt-2 text-center max-w-[90px] truncate group-hover:text-cyan-400 transition-colors font-medium">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
