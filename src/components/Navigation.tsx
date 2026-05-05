'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const h = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + h) {
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
    { href: '/#about', label: 'About' },
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
      if (pathname !== '/') {
        window.location.href = `/#${hash}`;
        return;
      }
      const el = document.getElementById(hash);
      if (el) {
        const offset = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        window.history.pushState(null, '', `#${hash}`);
        setActiveSection(hash);
      } else {
        window.location.href = `/#${hash}`;
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full px-6 py-4 flex justify-between items-center backdrop-blur-xl z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/80 border-b border-cyan-400/15 shadow-[0_8px_30px_-12px_rgba(0,229,255,0.35)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      {/* Logo */}
      <Link href="/" className="group flex items-center gap-2">
        <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl cyber-border">
          <span className="font-display text-sm font-extrabold text-holo">WP</span>
        </span>
        <span className="font-script text-xl text-white/90 tracking-wide group-hover:text-holo transition-colors">
          Worachat<span className="text-holo-pink">.dev</span>
        </span>
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-8">
        <ul className="flex items-center gap-2 font-display">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative px-4 py-2 text-xs tracking-[0.22em] uppercase transition-all duration-300 rounded-md ${
                  isActive(item.href)
                    ? 'text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <span className="relative z-10">{item.label}</span>
                {isActive(item.href) && (
                  <>
                    <span className="absolute inset-0 rounded-md bg-gradient-to-r from-cyan-400/15 via-fuchsia-400/15 to-violet-400/15 border border-cyan-400/30" />
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 h-[2px] w-8 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-violet-400 shadow-[0_0_10px_rgba(255,46,209,0.7)]" />
                  </>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile */}
      <div className="md:hidden flex items-center gap-3">
        <button
          className="text-cyan-200 hover:text-white transition-all duration-300 relative w-10 h-10 rounded-md cyber-border flex items-center justify-center"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050816]/95 backdrop-blur-xl border-b border-cyan-400/20 shadow-xl md:hidden">
          <ul className="flex flex-col p-4 space-y-2 font-display">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={(e) => {
                    handleNavClick(e, item.href);
                    setIsMenuOpen(false);
                  }}
                  className={`block py-3 px-4 rounded-lg text-xs tracking-[0.22em] uppercase transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-white bg-gradient-to-r from-cyan-400/15 via-fuchsia-400/15 to-violet-400/15 border border-cyan-400/30'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
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
