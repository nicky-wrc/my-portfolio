'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'dark' | 'light' | 'default';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load theme from localStorage
    const savedTheme = localStorage.getItem('theme') as Theme;
    if (savedTheme && ['dark', 'light', 'default'].includes(savedTheme)) {
      setTheme(savedTheme);
      // Apply theme immediately
      const body = document.body;
      body.classList.remove('dark', 'light', 'default-theme');
      if (savedTheme === 'dark') {
        body.classList.add('dark');
      } else if (savedTheme === 'light') {
        body.classList.add('light');
      } else {
        body.classList.add('default-theme');
      }
    } else {
      // Ensure default theme is applied
      const body = document.body;
      if (!body.classList.contains('dark') && !body.classList.contains('light') && !body.classList.contains('default-theme')) {
        body.classList.add('default-theme');
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Save theme to localStorage
    localStorage.setItem('theme', theme);

    // Apply theme to body (not html)
    const body = document.body;
    body.classList.remove('dark', 'light', 'default-theme');

    if (theme === 'dark') {
      body.classList.add('dark');
    } else if (theme === 'light') {
      body.classList.add('light');
    } else {
      body.classList.add('default-theme');
    }
  }, [theme, mounted]);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

