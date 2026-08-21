"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navLinks, siteConfig } from "@/data/site";

const sectionIds = navLinks.map((item) => item.href.split("#")[1]);
type SectionId = (typeof sectionIds)[number];

function getSectionId(href: string) {
  return href.split("#")[1] as SectionId;
}

export default function Navigation() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const scrolledRef = useRef(false);
  const activeSectionRef = useRef<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  useEffect(() => {
    let frame = 0;
    const sections =
      pathname === "/"
        ? sectionIds
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => Boolean(section))
        : [];

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const isScrolled = window.scrollY > 24;
        let nextSection: SectionId | undefined;

        if (pathname === "/" && sections.length) {
          const activationLine = Math.min(window.innerHeight * 0.38, 360);
          nextSection = sections[0].id as SectionId;

          sections.forEach((section) => {
            if (section.getBoundingClientRect().top <= activationLine) {
              nextSection = section.id as SectionId;
            }
          });

          const atPageEnd =
            window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight - 4;
          if (atPageEnd) nextSection = "contact";
        }

        if (scrolledRef.current !== isScrolled) {
          scrolledRef.current = isScrolled;
          headerRef.current?.toggleAttribute("data-scrolled", isScrolled);
        }

        if (nextSection && activeSectionRef.current !== nextSection) {
          activeSectionRef.current = nextSection;
          setActiveSection(nextSection);
        }

        frame = 0;
      });
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      window.removeEventListener("hashchange", update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMenuOpen(false);
    };

    desktopQuery.addEventListener("change", closeOnDesktop);
    return () => desktopQuery.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  const getAriaCurrent = (href: string): "location" | "page" | undefined => {
    const sectionId = getSectionId(href);

    if (pathname === "/") {
      return activeSection === sectionId ? "location" : undefined;
    }

    if (sectionId === "projects" && pathname.startsWith("/projects")) {
      return "page";
    }
    if (sectionId === "contact" && pathname === "/contact") return "page";
    return undefined;
  };

  return (
    <header ref={headerRef} className="site-header">
      <div className="nav-shell">
        <Link
          href="/"
          className="brand"
          aria-label={`${siteConfig.name}, home`}
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            WP
          </span>
          <span className="brand-name">Worachat Paranya</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={getAriaCurrent(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        className="mobile-nav"
        data-open={menuOpen || undefined}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
        aria-label="Mobile navigation"
      >
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            tabIndex={menuOpen ? undefined : -1}
            aria-current={getAriaCurrent(item.href)}
          >
            <span>{item.label}</span>
            <span aria-hidden="true">↗</span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
