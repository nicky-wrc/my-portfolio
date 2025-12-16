'use client';

interface SkillPillProps {
  name: string;
  icon?: string;
}

export default function SkillPill({ name, icon }: SkillPillProps) {
  return (
    <div className="group relative px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-full backdrop-blur-sm hover:border-cyan-400/50 hover:bg-slate-800/70 transition-all duration-300 hover:scale-105 cursor-pointer">
      {icon && <span className="mr-2">{icon}</span>}
      <span className="text-sm font-medium text-slate-300 group-hover:text-cyan-400 transition-colors">
        {name}
      </span>
      <div className="absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
    </div>
  );
}






