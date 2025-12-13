'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Navigation() {
  const pathname = usePathname();
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
      }
    }
  };

  return (
    <nav className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center backdrop-blur-xl border-b z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-900/90 border-slate-700/50 shadow-xl shadow-black/20' 
        : 'bg-transparent border-slate-700/30'
    }`}>
      <Link href="/">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 text-transparent bg-clip-text hover:from-cyan-300 hover:via-blue-300 hover:to-indigo-300 transition-all duration-300 gradient-text-animated">
          WorachatPortfolio
        </h1>
      </Link>
      
      {/* Desktop Navigation */}
      <ul className="hidden md:flex space-x-6 font-medium">
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

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-slate-300 hover:text-cyan-400 transition-all duration-300 relative group"
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

