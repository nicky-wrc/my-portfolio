'use client';

import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { skills } from '@/data/skills';

const iconMapping: Record<string, { type: 'simpleicons' | 'devicons'; name: string }> = {
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
  'React': { type: 'simpleicons', name: 'react' },
  'Angular': { type: 'simpleicons', name: 'angular' },
  'Vue.js': { type: 'simpleicons', name: 'vuedotjs' },
  'Laravel': { type: 'simpleicons', name: 'laravel' },
  'Spring Boot': { type: 'simpleicons', name: 'spring' },
  'Express': { type: 'simpleicons', name: 'express' },
  'Kotlin Multiplatform Mobile': { type: 'simpleicons', name: 'kotlin' },
  'PyTorch': { type: 'simpleicons', name: 'pytorch' },
  'MySQL': { type: 'simpleicons', name: 'mysql' },
  'PostgreSQL': { type: 'simpleicons', name: 'postgresql' },
  'Firebase': { type: 'simpleicons', name: 'firebase' },
  'Git & GitHub': { type: 'simpleicons', name: 'github' },
  'VS Code': { type: 'devicons', name: 'visualstudiocode' },
  'Postman': { type: 'simpleicons', name: 'postman' },
  'Figma': { type: 'simpleicons', name: 'figma' },
  'Canva': { type: 'simpleicons', name: 'canva' },
  'Docker': { type: 'simpleicons', name: 'docker' },
};

const colorMap: Record<string, string> = {
  'JavaScript': 'F7DF1E', 'TypeScript': '3178C6', 'Python': '3776AB', 'PHP': '777BB4',
  'HTML': 'E34F26', 'CSS': '1572B6', 'C': 'A8B9CC', 'Java': 'ED8B00', 'Kotlin': '7F52FF',
  'React': '61DAFB', 'Angular': 'DD0031', 'Vue.js': '4FC08D', 'Laravel': 'FF2D20',
  'Spring Boot': '6DB33F', 'Express': 'FFFFFF', 'PyTorch': 'EE4C2C',
  'MySQL': '4479A1', 'PostgreSQL': '4169E1', 'Firebase': 'FFCA28',
  'Git & GitHub': 'F0F0F0', 'VS Code': '007ACC', 'Postman': 'FF6C37',
  'Figma': 'F24E1E', 'Canva': '00C4CC', 'Docker': '2496ED',
};

const categoryAccents: Record<string, { from: string; via: string; to: string; glow: string; ring: string; tag: string }> = {
  'Programming Skills': {
    from: 'from-cyan-400',
    via: 'via-blue-500',
    to: 'to-violet-500',
    glow: 'rgba(0, 229, 255, 0.45)',
    ring: 'ring-cyan-400/40',
    tag: 'CORE.LANG',
  },
  'Frameworks': {
    from: 'from-fuchsia-400',
    via: 'via-pink-500',
    to: 'to-rose-500',
    glow: 'rgba(255, 46, 209, 0.45)',
    ring: 'ring-fuchsia-400/40',
    tag: 'FRAMEWORK',
  },
  'Database': {
    from: 'from-emerald-400',
    via: 'via-teal-500',
    to: 'to-cyan-500',
    glow: 'rgba(0, 255, 163, 0.45)',
    ring: 'ring-emerald-400/40',
    tag: 'DATA.LAYER',
  },
  'Tools': {
    from: 'from-violet-400',
    via: 'via-purple-500',
    to: 'to-indigo-500',
    glow: 'rgba(139, 92, 246, 0.45)',
    ring: 'ring-violet-400/40',
    tag: 'TOOLKIT',
  },
};

function getIconUrl(skillName: string): string | null {
  const cfg = iconMapping[skillName.trim()];
  if (!cfg) return null;
  if (cfg.type === 'devicons') {
    let name = cfg.name.toLowerCase();
    if (name === 'visualstudiocode') name = 'vscode';
    return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${name}/${name}-original.svg`;
  }
  const color = (colorMap[skillName.trim()] || '00E5FF').replace('#', '');
  return `https://cdn.simpleicons.org/${cfg.name}/${color}`;
}

/** A single skill chip — the "wow" interactive card */
function SkillChip({ name, accent }: { name: string; accent: typeof categoryAccents[string] }) {
  const [imgError, setImgError] = useState(false);
  const iconUrl = getIconUrl(name);
  const showIcon = iconUrl && !imgError;

  return (
    <div
      className="group relative flex flex-col items-center justify-center gap-2 p-3 sm:p-4 rounded-xl bg-[#050816]/70 border border-cyan-400/10 hover:border-fuchsia-400/40 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.04]"
      style={{
        boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.04)',
      }}
    >
      {/* Glowing halo on hover */}
      <span
        className="pointer-events-none absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ boxShadow: `0 0 28px -4px ${accent.glow}` }}
      />

      {/* Holographic shimmer overlay */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to}`}
        style={{ mixBlendMode: 'overlay', filter: 'blur(0.5px)', opacity: 0 }}
      />

      <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to} opacity-0 group-hover:opacity-25 transition-opacity duration-300 blur-md`}
        />
        {showIcon ? (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={iconUrl}
            alt={name}
            className="relative w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-[0_4px_8px_rgba(0,0,0,0.4)]"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`relative w-full h-full rounded-full flex items-center justify-center bg-gradient-to-br ${accent.from} ${accent.via} ${accent.to} text-white font-display font-bold text-sm`}
          >
            {name.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>

      <span className="relative text-[0.65rem] sm:text-xs font-display tracking-wider text-slate-300 group-hover:text-white transition-colors text-center max-w-full truncate w-full">
        {name}
      </span>
    </div>
  );
}

/** A glowing category panel — header + skill chips */
function CategoryPanel({ category, items, index }: { category: string; items: string[]; index: number }) {
  const accent = categoryAccents[category] ?? categoryAccents['Programming Skills'];

  return (
    <ScrollReveal direction="up" delay={index * 120}>
      <div className="cyber-card p-6 md:p-7 h-full relative">
        <div className="scan-line" />

        {/* Top accent stripe */}
        <div
          className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${accent.from} ${accent.via} ${accent.to} opacity-90`}
        />
        <div
          className="absolute -top-1 left-0 right-0 h-2 blur-sm"
          style={{ background: `linear-gradient(to right, transparent, ${accent.glow}, transparent)` }}
        />

        {/* Header */}
        <div className="flex items-start justify-between mb-6 gap-3">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-[0.6rem] tracking-[0.3em] text-slate-500 mb-1">
              {accent.tag} · {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-xl md:text-2xl uppercase tracking-wide leading-tight">
              <span
                className={`bg-gradient-to-r ${accent.from} ${accent.via} ${accent.to} bg-clip-text text-transparent`}
              >
                {category}
              </span>
            </h3>
          </div>
          <div
            className="shrink-0 font-display text-3xl md:text-4xl font-extrabold leading-none opacity-90"
            style={{
              background: `linear-gradient(135deg, ${accent.glow}, transparent)`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {String(items.length).padStart(2, '0')}
          </div>
        </div>

        {/* Skill chips grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 sm:gap-3">
          {items.map((item) => (
            <SkillChip key={item} name={item} accent={accent} />
          ))}
        </div>
      </div>
    </ScrollReveal>
  );
}

/** Infinite-scroll marquee of all skill icons */
function SkillMarquee({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="relative overflow-hidden py-4 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className={`flex gap-10 items-center ${reverse ? 'animate-marquee-reverse' : 'animate-marquee'}`} style={{ width: 'max-content' }}>
        {[...items, ...items].map((name, i) => {
          const url = getIconUrl(name);
          return (
            <div key={i} className="shrink-0 flex items-center gap-3 group">
              {url ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={url}
                  alt={name}
                  className="w-8 h-8 object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              ) : (
                <span className="w-8 h-8 rounded-full bg-cyan-400/20 grid place-items-center font-display text-[0.6rem] text-cyan-200">
                  {name.slice(0, 2).toUpperCase()}
                </span>
              )}
              <span className="font-display text-xs uppercase tracking-[0.22em] text-slate-400 group-hover:text-white transition-colors whitespace-nowrap">
                {name}
              </span>
              <span className="text-fuchsia-400/40 select-none">·</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

const SkillSection = () => {
  const allItems = skills.flatMap((g) => g.items);
  const totalCount = allItems.length;

  return (
    <section className="py-20 px-2 border-t border-cyan-400/10 relative" aria-labelledby="skills-heading">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal direction="up" delay={0}>
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <p className="font-mono text-[0.65rem] tracking-[0.3em] text-cyan-300/80 uppercase mb-3">
              <span className="text-fuchsia-300">{'//'}</span> tech_stack.deploy()
            </p>
            <p className="font-script text-2xl md:text-3xl text-cyan-200/90 mb-2">— my arsenal —</p>
            <h2
              id="skills-heading"
              className="font-display text-3xl md:text-5xl uppercase tracking-tight"
            >
              <span className="text-white">Technical </span>
              <span className="text-holo">Skills</span>
            </h2>
            <p className="text-slate-300/85 mt-4 leading-relaxed">
              เครื่องมือทุกชิ้นในคลังแสงของผม — ตั้งแต่ภาษาโปรแกรม, framework
              ไปจนถึงเครื่องมือที่ใช้ส่ง production จริง
            </p>

            {/* Stats row */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <div className="cyber-chip">
                <span className="text-slate-300">Total</span>
                <span className="text-holo-cyan font-bold">{totalCount}</span>
              </div>
              <div className="cyber-chip">
                <span className="text-slate-300">Categories</span>
                <span className="text-holo-pink font-bold">{skills.length}</span>
              </div>
              <div className="cyber-chip">
                <span className="text-slate-300">Status</span>
                <span className="text-emerald-300 font-bold inline-flex items-center gap-2">
                  ACTIVE
                  <span className="relative inline-flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                    <span className="relative inline-flex rounded-full w-2 h-2 bg-emerald-400" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Marquee banner */}
        <ScrollReveal direction="fade" delay={150}>
          <div className="cyber-frame mb-10 mx-2">
            <SkillMarquee items={allItems} />
          </div>
        </ScrollReveal>

        {/* Category panels — 2x2 wow grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {skills.map((group, idx) => (
            <CategoryPanel
              key={group.category}
              category={group.category}
              items={group.items}
              index={idx}
            />
          ))}
        </div>

        {/* Reverse marquee bottom */}
        <ScrollReveal direction="fade" delay={300}>
          <div className="cyber-frame mt-10 mx-2">
            <SkillMarquee items={allItems} reverse />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default SkillSection;
