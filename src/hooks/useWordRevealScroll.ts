import { useEffect, useRef } from 'react';

/**
 * Ports the original's word-by-word scroll-linked title reveal (the "Margaux" effect):
 * each `.wr-word` span's opacity is interpolated from 0.13 → 1 as the heading rises through
 * the viewport, staggered left-to-right.
 */
export function useWordRevealScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const words = el.querySelectorAll<HTMLSpanElement>('.wr-word');
      const n = words.length;
      if (!n) return;
      const vh = window.innerHeight;
      const r = el.getBoundingClientRect();
      const start = vh * 0.9;
      const end = vh * 0.4;
      let p = (start - r.top) / (start - end);
      p = Math.max(0, Math.min(1, p));
      words.forEach((w, i) => {
        const ws = (i / n) * 0.75;
        const local = Math.max(0, Math.min(1, (p - ws) / 0.25));
        w.style.opacity = (0.13 + 0.87 * local).toFixed(3);
      });
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return ref;
}
