import { useSyncExternalStore } from 'react';

function subscribe(listener: () => void): () => void {
  window.addEventListener('resize', listener);
  return () => window.removeEventListener('resize', listener);
}

function getSnapshot(): number {
  return window.innerWidth;
}

/** Live viewport width, matching the original's `state.w` (updated on window resize). */
export function useViewportWidth(): number {
  return useSyncExternalStore(subscribe, getSnapshot, () => 1280);
}

/** Nav switches to the hamburger menu below 1120px (see original `isMobile = state.w < 1120`). */
export function useIsNavMobile(): boolean {
  return useViewportWidth() < 1120;
}
