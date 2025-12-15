'use client';

import { useEffect, useState } from 'react';

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      const progressPercent = (scrolled / windowHeight) * 100;
      setProgress(progressPercent);
    };

    window.addEventListener('scroll', updateProgress);
    updateProgress();

    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-slate-900/50 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 transition-all duration-150 ease-out shadow-lg shadow-cyan-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}




