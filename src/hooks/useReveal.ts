import { useEffect, useRef, useState, type CSSProperties } from 'react';

export interface UseRevealOptions {
  /** Stagger delay in seconds, applied to both opacity and transform transitions. */
  delay?: number;
  /** 'card' travels a longer distance (46px) than the default (30px), matching the original. */
  variant?: 'default' | 'card';
}

/**
 * Fade-and-rise-in-on-scroll, matching the original `[data-reveal]` behavior: observed once via
 * IntersectionObserver (threshold 0.12), then permanently revealed.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseRevealOptions = {}) {
  const { delay = 0, variant = 'default' } = options;
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRevealed(true);
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const dist = variant === 'card' ? '46px' : '30px';
  const transition = `opacity 1s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 1s cubic-bezier(0.22,1,0.36,1) ${delay}s`;
  const style: CSSProperties = revealed
    ? { opacity: 1, transform: 'none', transition }
    : { opacity: 0, transform: `translateY(${dist})`, transition };

  return { ref, style };
}
