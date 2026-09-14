"use client";
import Link from "next/link";
import PersonalMark from "@/components/PersonalMark";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";
import { navLinks } from "@/data/site";
import { useIntroAnimation } from "@/context/IntroAnimationContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

const navIcons = [Home, User, Code2, Briefcase, Mail];

export default function Navigation() {
  const pathname = usePathname();
  const { isIntroComplete } = useIntroAnimation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("home");
  const [hovered, setHovered] = useState<string | null>(null);
  const [focused, setFocused] = useState(false);
  const [navigating, setNavigating] = useState(false);
  const reduced = usePrefersReducedMotion();
  useEffect(() => {
    const change = (event: Event) =>
      setNavigating((event as CustomEvent<boolean>).detail);
    window.addEventListener("portfolio-navigation-scroll", change);
    return () =>
      window.removeEventListener("portfolio-navigation-scroll", change);
  }, []);
  useEffect(() => {
    let last = window.scrollY;
    let frame: number | undefined;
    let lastVisible: boolean | undefined;
    let lastActive: string | undefined;
    const update = () => {
      frame = undefined;
      const y = window.scrollY;
      const nextVisible = y < 80 || y < last;
      if (nextVisible !== lastVisible) {
        setVisible(nextVisible);
        lastVisible = nextVisible;
      }
      last = y;
      if (pathname !== "/") return;
      let current = "home";
      for (const link of navLinks) {
        const id = link.href.split("#")[1];
        if (
          (document.getElementById(id)?.getBoundingClientRect().top ??
            Infinity) <
          window.innerHeight * 0.4
        )
          current = id;
      }
      if (current !== lastActive) {
        setActive(current);
        lastActive = current;
      }
    };
    const schedule = () => {
      if (frame === undefined) frame = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      if (frame !== undefined) cancelAnimationFrame(frame);
    };
  }, [pathname]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);
  const current = pathname.startsWith("/projects")
    ? "projects"
    : pathname === "/contact"
      ? "contact"
      : active;
  return (
    <motion.header
      inert={!isIntroComplete}
      className="portfolio-navigation"
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setFocused(false);
      }}
      initial={{ opacity: 0, y: -35 }}
      animate={{
        opacity: isIntroComplete ? 1 : 0,
        y:
          isIntroComplete &&
          (visible || open || focused || navigating || hovered)
            ? 0
            : -110,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
    >
      <Link
        href="/#home"
        scroll={false}
        className="portfolio-brand"
        aria-label="Worachat Paranya home"
        onClick={() => setOpen(false)}
      >
        <PersonalMark />
      </Link>
      <nav className="desktop-pill" aria-label="Primary navigation">
        <span className="nav-border-light" aria-hidden="true" />
        {navLinks.map((link, index) => {
          const Icon = navIcons[index];
          return (
            <Link
              key={link.label}
              href={link.href}
              scroll={false}
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
              aria-current={
                current === link.href.split("#")[1] ? "location" : undefined
              }
            >
              {hovered === link.label &&
                current !== link.href.split("#")[1] && (
                  <motion.span
                    layoutId="nav-hover"
                    className="nav-hover"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              {current === link.href.split("#")[1] && (
                <motion.span
                  layoutId="nav-pill"
                  className="nav-active"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <motion.span
                className="nav-link-content"
                whileHover={reduced ? undefined : { scale: 1.05, y: -1 }}
                whileTap={reduced ? undefined : { scale: 0.93 }}
              >
                <Icon size={16} aria-hidden="true" />
                <span>{link.label}</span>
              </motion.span>
            </Link>
          );
        })}
      </nav>
      <Link href="/contact" className="nav-contact">
        Let’s talk <ArrowUpRight size={14} />
      </Link>
      <button
        className="mobile-toggle"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <Menu />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-navigation"
            className="mobile-panel"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                scroll={false}
                aria-current={
                  current === link.href.split("#")[1] ? "location" : undefined
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
                <ArrowUpRight size={18} />
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
