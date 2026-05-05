'use client';

interface SkillPillProps {
  name: string;
  icon?: string;
}

export default function SkillPill({ name, icon }: SkillPillProps) {
  return (
    <div className="group relative px-4 py-2 cyber-border rounded-full bg-[#050816]/50 hover:scale-105 transition-all duration-300 cursor-default">
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/0 via-fuchsia-400/0 to-violet-400/0 group-hover:from-cyan-400/15 group-hover:via-fuchsia-400/15 group-hover:to-violet-400/15 transition-all duration-300" />
      {icon && <span className="mr-2 relative">{icon}</span>}
      <span className="relative text-xs md:text-sm font-display tracking-[0.18em] uppercase text-slate-200 group-hover:text-white transition-colors">
        {name}
      </span>
    </div>
  );
}
