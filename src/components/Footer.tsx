'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTopButton =
    mounted && showScrollTop ? (
      <button
        type="button"
        onClick={scrollToTop}
        className="pointer-events-auto fixed z-[9999] flex h-14 w-14 items-center justify-center rounded-full border border-cyan-400/50 bg-[#02030a]/92 text-cyan-200 shadow-[0_0_28px_rgba(0,229,255,0.45)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-fuchsia-400/60 hover:text-white hover:shadow-[0_0_32px_rgba(255,46,209,0.4)] group"
        style={{
          bottom: 'max(1.25rem, env(safe-area-inset-bottom, 0px))',
          right: 'max(1.25rem, env(safe-area-inset-right, 0px))',
          left: 'auto',
          top: 'auto',
        }}
        aria-label="Scroll to top"
      >
        <svg
          className="h-6 w-6 group-hover:-translate-y-0.5 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    ) : null;

  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/nick.worachatz',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/nicky_wrc/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/nicky-wrc',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {scrollTopButton && createPortal(scrollTopButton, document.body)}

      <footer className="relative z-10 mt-12 border-t border-cyan-400/15 backdrop-blur-xl bg-[#050816]/70 py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <p className="font-script text-xl text-cyan-200/90 mb-1">— signing off —</p>
            <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wider mb-2">
              <span className="text-white">Worachat</span>
              <span className="text-holo-pink">.dev</span>
            </h3>
            <p className="text-slate-400 text-sm font-mono tracking-wider">
              {'<'} backend / ai / full-stack {'/>'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 max-w-2xl mx-auto">
            <a
              href="mailto:nick.worachatz@gmail.com"
              className="cyber-card p-5 flex items-center gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg flex items-center justify-center cyber-border bg-[#050816]/60">
                <svg className="w-5 h-5 text-cyan-300 group-hover:text-fuchsia-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <div>
                <p className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400">Email</p>
                <p className="text-white font-medium group-hover:text-holo-cyan transition-colors text-sm">
                  nick.worachatz@gmail.com
                </p>
              </div>
            </a>
            <a
              href="tel:0828814470"
              className="cyber-card p-5 flex items-center gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg flex items-center justify-center cyber-border bg-[#050816]/60">
                <svg className="w-5 h-5 text-cyan-300 group-hover:text-fuchsia-300 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <div>
                <p className="text-[0.65rem] tracking-[0.22em] uppercase font-display text-slate-400">Phone</p>
                <p className="text-white font-medium group-hover:text-holo-cyan transition-colors text-sm">
                  082-8814470
                </p>
              </div>
            </a>
          </div>

          <div className="flex justify-center gap-3 mb-10">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 flex items-center justify-center cyber-border rounded-xl bg-[#050816]/40 hover:scale-110 transition-all duration-300"
                aria-label={social.name}
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-br from-cyan-400/0 via-fuchsia-400/0 to-violet-400/0 group-hover:from-cyan-400/15 group-hover:via-fuchsia-400/15 group-hover:to-violet-400/15 transition-all duration-300" />
                <span className="relative text-cyan-200 group-hover:text-white transition-colors drop-shadow-[0_0_6px_rgba(0,229,255,0.55)]">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>

          <div className="text-center border-t border-cyan-400/10 pt-6">
            <p className="text-slate-400 text-sm font-mono">
              © 2025 — Designed &amp; Built by{' '}
              <span className="text-holo-pink font-bold">Worachat Paranya</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
