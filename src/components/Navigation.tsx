'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navigation() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleHashChange = () => {
      setActiveSection(window.location.hash.replace('#', '') || 'home');
    };

    handleHashChange();
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('hashchange', handleHashChange);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navItems = [
    { href: '/#home', label: 'Home' },
    { href: '/#about', label: 'About Me' },
    { href: '/#projects', label: 'Projects' },
    { href: '/#contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/#home' || href === '/') {
      return pathname === '/' && (activeSection === '' || activeSection === 'home');
    }
    const hash = href.replace('/#', '');
    return pathname === '/' && activeSection === hash;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const hash = href.replace('/#', '');
      
      // If we're not on the home page, navigate to home first
      if (pathname !== '/') {
        // Navigate to home page with hash - window.location.href will auto-scroll
        window.location.href = `/#${hash}`;
        return;
      }
      
      // If we're on the home page, scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        const offset = 80; // Navigation height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
        
        // Update URL without triggering scroll
        window.history.pushState(null, '', `#${hash}`);
        setActiveSection(hash);
      } else {
        // If element not found, navigate to home with hash
        window.location.href = `/#${hash}`;
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center backdrop-blur-xl border-b z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 dark:bg-slate-900/90 light:bg-white/90 border-slate-700/50 dark:border-slate-700/50 light:border-slate-200/50 shadow-xl shadow-black/20' 
        : 'bg-transparent border-slate-700/30 dark:border-slate-700/30 light:border-slate-200/30'
    }`}>
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text hover:from-cyan-300 hover:via-blue-300 hover:to-indigo-300 transition-all duration-300 gradient-text-animated">
          WorachatPortfolio
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        <ul className="flex space-x-6 font-medium">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive(item.href) 
                    ? 'text-cyan-400 bg-cyan-400/10 font-semibold' 
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                }`}
              >
                {item.label}
                {isActive(item.href) && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ThemeSwitcher />
      </div>

          {/* Mobile Menu Button & Theme Switcher */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeSwitcher />
            <button
              className="text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-slate-900/95 backdrop-blur-xl border-b border-slate-700/50 shadow-xl md:hidden">
          <ul className="flex flex-col p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-lg transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-cyan-400 bg-cyan-400/10 font-semibold'
                      : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/50'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

