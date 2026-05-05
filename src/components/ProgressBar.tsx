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
    <div className="fixed top-0 left-0 w-full h-[3px] bg-[#050816]/60 z-[100]">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-500 transition-all duration-150 ease-out shadow-[0_0_12px_rgba(255,46,209,0.7)]"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}






