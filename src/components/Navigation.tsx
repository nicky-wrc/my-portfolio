"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { useIntroAnimation } from "@/context/IntroAnimationContext";

export default function Navigation() {
  const pathname = usePathname();
  const { isIntroComplete } = useIntroAnimation();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("home");
  useEffect(() => {
    let last = window.scrollY;
    const update = () => {
      const y = window.scrollY;
      setVisible(y < 80 || y < last);
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
      setActive(current);
    };
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
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
      initial={{ opacity: 0, y: -35 }}
      animate={{
        opacity: isIntroComplete ? 1 : 0,
        y: isIntroComplete && (visible || open) ? 0 : -110,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 24 }}
    >
      <Link
        href="/"
        className="portfolio-brand"
        aria-label="Worachat Paranya home"
        onClick={() => setOpen(false)}
      >
        <Image src="/nicky_dev.jpg" width={52} height={52} alt="" />
        <span>
          WP<span className="text-orange-400">.</span>
        </span>
      </Link>
      <nav className="desktop-pill" aria-label="Primary navigation">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            aria-current={
              current === link.href.split("#")[1] ? "location" : undefined
            }
          >
            {current === link.href.split("#")[1] && (
              <motion.span
                layoutId="nav-pill"
                className="nav-active"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.label}</span>
          </Link>
        ))}
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
