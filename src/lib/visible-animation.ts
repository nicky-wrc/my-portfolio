/** Run decorative frames only while the element and browser tab are visible. */
export function visibleAnimation(
  element: HTMLElement,
  draw: (time: number, delta: number) => void,
  maxFps?: number,
) {
  let frame: number | undefined;
  let visible = false;
  let previous = 0;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
  const tick = (time: number) => {
    const elapsed = previous ? time - previous : 1000 / 60;
    if (!maxFps || !previous || elapsed >= 1000 / maxFps - 0.5) {
      previous = time;
      draw(time, Math.min(elapsed, 50));
    }
    frame = requestAnimationFrame(tick);
  };
  const sync = () => {
    if (frame !== undefined) cancelAnimationFrame(frame);
    frame = undefined;
    previous = 0;
    if (visible && !document.hidden && !reduced.matches) {
      frame = requestAnimationFrame(tick);
    }
  };
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  });
  observer.observe(element);
  document.addEventListener("visibilitychange", sync);
  reduced.addEventListener("change", sync);
  return () => {
    observer.disconnect();
    document.removeEventListener("visibilitychange", sync);
    reduced.removeEventListener("change", sync);
    if (frame !== undefined) cancelAnimationFrame(frame);
  };
}
