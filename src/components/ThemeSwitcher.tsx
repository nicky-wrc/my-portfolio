'use client';

import React, { useState, useEffect, useCallback, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light' | 'default';

function subscribe() {
  return () => {};
}

function getSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'default';
  const saved = localStorage.getItem('theme') as Theme;
  return saved && ['dark', 'light', 'default'].includes(saved) ? saved : 'default';
}

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<Theme>('default');
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const applyTheme = useCallback((theme: Theme) => {
    const body = document.body;
    body.classList.remove('dark', 'light', 'default-theme');

    if (theme === 'dark') {
      body.classList.add('dark');
    } else if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.add('default-theme');
    }

    localStorage.setItem('theme', theme);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const initialTheme = getInitialTheme();
    if (initialTheme !== currentTheme) {
      setCurrentTheme(initialTheme);
    }
    applyTheme(initialTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted, applyTheme]);

  const handleThemeChange = (newTheme: Theme) => {
    setCurrentTheme(newTheme);
    applyTheme(newTheme);
    setIsOpen(false);
  };

  const themes = [
    { 
      value: 'default' as const, 
      label: 'Default', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18" />
        </svg>
      )
    },
    { 
      value: 'dark' as const, 
      label: 'Dark', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          <circle cx="17" cy="7" r="1" fill="currentColor" />
          <circle cx="19" cy="10" r="0.5" fill="currentColor" />
        </svg>
      )
    },
    { 
      value: 'light' as const, 
      label: 'Light', 
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 1v3m0 16v3M5.636 5.636l2.121 2.121m10.606 10.606l2.121 2.121M1 12h3m16 0h3M5.636 18.364l2.121-2.121m10.606-10.606l2.121-2.121" />
        </svg>
      )
    },
  ];

  const currentThemeInfo = themes.find(t => t.value === currentTheme) || themes[0];

  if (!mounted) {
    return (
      <div className="w-12 h-12 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 flex items-center justify-center">
        <svg className="w-6 h-6 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v18" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-lg bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center hover:shadow-lg hover:shadow-cyan-500/20 group"
        aria-label="Toggle theme"
      >
        <span className="text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300">
          {currentThemeInfo.icon}
        </span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-14 z-50 bg-slate-800/95 backdrop-blur-xl rounded-xl border border-slate-700/50 shadow-2xl min-w-[160px] overflow-hidden">
            {themes.map((t) => (
              <button
                key={t.value}
                onClick={() => handleThemeChange(t.value)}
                className={`w-full px-4 py-3 flex items-center gap-3 transition-all duration-200 ${
                  currentTheme === t.value
                    ? 'bg-cyan-500/20 text-cyan-400 border-l-4 border-cyan-400'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
                }`}
              >
                <span className={`${currentTheme === t.value ? 'text-cyan-400' : 'text-slate-400'}`}>
                  {t.icon}
                </span>
                <span className="font-medium">{t.label}</span>
                {currentTheme === t.value && (
                  <svg className="w-4 h-4 ml-auto text-cyan-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
