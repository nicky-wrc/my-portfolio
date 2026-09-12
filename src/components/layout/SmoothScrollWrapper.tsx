"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useIntroAnimation } from "@/context/IntroAnimationContext";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrollWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { isIntroComplete } = useIntroAnimation();
  useEffect(() => {
    if (!isIntroComplete) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
      lerp: 0.1,
      syncTouch: false,
    });
    const ticker = (time: number) => lenis.raf(time * 1000);
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add(ticker);
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
      const anchor = (event.target as Element).closest<HTMLAnchorElement>(
        'a[href*="#"]',
      );
      if (!anchor || anchor.target === "_blank") return;
      const url = new URL(anchor.href);
      if (
        url.origin !== location.origin ||
        url.pathname !== location.pathname ||
        !url.hash
      )
        return;
      const target = document.getElementById(
        decodeURIComponent(url.hash.slice(1)),
      );
      if (!target) return;
      event.preventDefault();
      history.pushState(null, "", url.hash);
      lenis.scrollTo(target, { offset: -80, duration: 1.4 });
    };
    document.addEventListener("click", anchorClick);
    const refresh = window.setTimeout(() => {
      ScrollTrigger.refresh();
      const target =
        location.hash && document.getElementById(location.hash.slice(1));
      if (target) lenis.scrollTo(target, { offset: -80, immediate: true });
    }, 250);
    return () => {
      clearTimeout(refresh);
      document.removeEventListener("click", anchorClick);
      gsap.ticker.remove(ticker);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, [pathname, isIntroComplete]);
  return children;
}
