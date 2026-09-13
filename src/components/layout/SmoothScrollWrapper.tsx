"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntroAnimation } from "@/context/IntroAnimationContext";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isIntroComplete } = useIntroAnimation();
  const reducedMotion = usePrefersReducedMotion();
  useEffect(() => {
    if (!isIntroComplete) return;
    const lenis = reducedMotion
      ? null
      : new Lenis({
          duration: 1.2,
          smoothWheel: true,
          lerp: 0.1,
          syncTouch: false,
        });
    const ticker = (time: number) => lenis?.raf(time * 1000);
    lenis?.on("scroll", ScrollTrigger.update);
    if (lenis) gsap.ticker.add(ticker);
    let transition: gsap.core.Timeline | undefined;
    let moving = false;
    const setMoving = (value: boolean) => {
      moving = value;
      window.dispatchEvent(
        new CustomEvent("portfolio-navigation-scroll", { detail: value }),
      );
    };
    const scrollToSection = (id: string) => {
      const target = document.getElementById(id);
      if (!target) return;
      const destination = id === "home" ? 0 : target;
      transition?.kill();
      const main = document.getElementById("main-content");
      setMoving(true);
      if (main) {
        gsap.killTweensOf(main);
        if (!reducedMotion) {
          transition = gsap
            .timeline()
            .to(main, { opacity: 0.35, duration: 0.18, ease: "power2.out" })
            .to(
              main,
              {
                opacity: 1,
                duration: 0.65,
                clearProps: "opacity",
                ease: "power2.out",
              },
              "+=0.05",
            );
        } else gsap.set(main, { clearProps: "opacity" });
      }
      if (lenis) {
        lenis.scrollTo(destination, {
          offset: id === "home" ? 0 : -95,
          duration: 1.4,
          easing: (t: number) => 1 - Math.pow(1 - t, 4),
          onComplete: () => {
            // Fonts and animated sections can settle while a long scroll runs.
            // Resolve the final element position again instead of retaining a stale offset.
            lenis.resize();
            lenis.scrollTo(destination, {
              offset: id === "home" ? 0 : -95,
              immediate: true,
            });
            ScrollTrigger.update();
            setMoving(false);
          },
        });
      } else {
        window.scrollTo({
          top:
            id === "home"
              ? 0
              : Math.max(
                  0,
                  target.getBoundingClientRect().top + window.scrollY - 95,
                ),
          behavior: "instant",
        });
        ScrollTrigger.update();
        setMoving(false);
      }
    };
    const anchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const anchor = (
        event.target instanceof Element ? event.target : null
      )?.closest<HTMLAnchorElement>('a[href*="#"]');
      if (
        !anchor ||
        anchor.target === "_blank" ||
        anchor.hasAttribute("download")
      )
        return;
      const url = new URL(anchor.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        !url.hash
      )
        return;
      let id: string;
      try {
        id = decodeURIComponent(url.hash.slice(1));
      } catch {
        return;
      }
      if (!document.getElementById(id)) return;
      event.preventDefault();
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      scrollToSection(id);
    };
    // Capture before Next Link's bubbling handler performs native hash navigation.
    document.addEventListener("click", anchorClick, true);
    const refresh = window.setTimeout(() => {
      ScrollTrigger.refresh();
      const target =
        location.hash && document.getElementById(location.hash.slice(1));
      if (target) scrollToSection(target.id);
    }, 250);
    return () => {
      clearTimeout(refresh);
      document.removeEventListener("click", anchorClick, true);
      transition?.kill();
      const main = document.getElementById("main-content");
      if (main) gsap.set(main, { clearProps: "opacity" });
      if (moving) setMoving(false);
      gsap.ticker.remove(ticker);
      lenis?.off("scroll", ScrollTrigger.update);
      lenis?.destroy();
    };
  }, [pathname, isIntroComplete, reducedMotion]);
  return children;
}
