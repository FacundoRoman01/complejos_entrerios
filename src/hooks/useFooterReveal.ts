import { useEffect, useRef } from 'react';

/**
 * Footer curtain reveal: the footer sits `position: fixed` at the bottom of the viewport, and a
 * spacer reserves exactly its height in normal flow so it's uncovered only once the page has
 * scrolled all the way past the stacked sections above it (matches the original's
 * `_syncFooter`, ported from a polling interval to a ResizeObserver).
 */
export function useFooterReveal() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sync = () => {
      if (wrapRef.current && innerRef.current) {
        wrapRef.current.style.height = `${innerRef.current.offsetHeight}px`;
      }
    };
    sync();
    const ro = new ResizeObserver(sync);
    if (innerRef.current) ro.observe(innerRef.current);
    window.addEventListener('resize', sync);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', sync);
    };
  }, []);

  return { wrapRef, innerRef };
}
