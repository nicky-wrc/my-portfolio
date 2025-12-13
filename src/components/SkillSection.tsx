import React from 'react';
import { skills } from '@/data/skills'; // ใช้ @ แทน ../ ได้เลย

const SkillSection = () => {
  return (
    <section className="py-20 px-6 bg-slate-900 border-t border-slate-800">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold mb-12 text-center text-slate-100">
          Technical Skills
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-teal-500/50 transition duration-300">
              <h4 className="text-xl font-bold text-teal-400 mb-4 border-b border-slate-700 pb-2">
                {skillGroup.category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span key={idx} className="px-3 py-1 bg-slate-700 text-slate-300 rounded-md text-sm font-medium">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;