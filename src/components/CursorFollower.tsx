"use client";

import { useEffect, useRef, useState } from "react";

/** Elements that should expand / recolor the cursor */
const INTERACTIVE =
  'a,button,textarea,input,select,summary,[role="button"],[data-cursor-hover],label[for],.cursor-pointer';

function isInteractiveTarget(target: EventTarget | null): boolean {
  if (!(target instanceof Element)) return false;
  return !!target.closest(INTERACTIVE);
}

export default function CursorFollower() {
  const [on, setOn] = useState(false);
  const [hover, setHover] = useState(false);
  const [pressed, setPressed] = useState(false);

  const innerRef = useRef<HTMLDivElement>(null);
  const outerRef = useRef<HTMLDivElement>(null);
  const target = useRef({ x: -100, y: -100 });
  const outer = useRef({ x: -100, y: -100 });
  const rafId = useRef(0);
  const moved = useRef(false);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!fine || reduce) return;

    setOn(true);
    document.body.classList.add("using-custom-cursor");

    const LERP = 0.14;

    const tick = () => {
      outer.current.x += (target.current.x - outer.current.x) * LERP;
      outer.current.y += (target.current.y - outer.current.y) * LERP;
      const { x, y } = outer.current;
      if (outerRef.current) {
        outerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    const applyInner = (x: number, y: number) => {
      if (innerRef.current) {
        innerRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    const onMove = (e: MouseEvent) => {
      if (!moved.current) {
        moved.current = true;
        outer.current = { x: e.clientX, y: e.clientY };
        if (outerRef.current) {
          outerRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
        }
      }
      target.current = { x: e.clientX, y: e.clientY };
      applyInner(e.clientX, e.clientY);
      setHover(isInteractiveTarget(e.target));
    };

    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);
    const onLeave = () => setHover(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("blur", onLeave);

    return () => {
      document.body.classList.remove("using-custom-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("blur", onLeave);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!on) return null;

  return (
    <>
      {/* Lagging ring — “scanner” */}
      <div
        ref={outerRef}
        className="fixed left-0 top-0 z-[9997] pointer-events-none will-change-transform motion-reduce:hidden"
      >
        <div
          className={`relative flex h-10 w-10 items-center justify-center transition-transform duration-200 ease-out ${
            pressed ? "scale-95" : hover ? "scale-[1.2]" : "scale-100"
          }`}
        >
          <div
            className={`absolute inset-0 rounded-full border-2 transition-[border-color,box-shadow] duration-200 ${
              hover
                ? "border-fuchsia-400/85 shadow-[0_0_24px_rgba(255,46,209,0.38)]"
                : "border-cyan-400/65 shadow-[0_0_18px_rgba(0,229,255,0.3)]"
            }`}
            aria-hidden
          />
          <div
            className="absolute inset-[-4px] rounded-full border border-dashed border-cyan-300/30 animate-[spin_16s_linear_infinite] motion-reduce:animate-none"
            aria-hidden
          />
          <div
            className="absolute inset-[-1px] rounded-full bg-gradient-to-br from-cyan-500/10 via-transparent to-fuchsia-500/10 opacity-70"
            aria-hidden
          />
        </div>
      </div>

      {/* Solid round dot — must stay square (no h-px wrapper) or it renders as a line */}
      <div
        ref={innerRef}
        className="fixed left-0 top-0 z-[9999] pointer-events-none will-change-transform motion-reduce:hidden"
      >
        <div
          aria-hidden
          className={`pointer-events-none block aspect-square shrink-0 rounded-full border-0 bg-cyan-300 transition-[width,height,background-color,transform] duration-200 ease-out shadow-[0_0_10px_2px_rgba(0,229,255,0.55),0_0_18px_rgba(255,46,209,0.18)] ${
            hover
              ? "h-3 w-3 min-h-3 min-w-3 bg-fuchsia-300 shadow-[0_0_12px_2px_rgba(255,46,209,0.55),0_0_20px_rgba(0,229,255,0.12)]"
              : "h-2.5 w-2.5 min-h-2.5 min-w-2.5"
          } ${pressed ? "scale-[0.88]" : "scale-100"}`}
        />
      </div>
    </>
  );
}
