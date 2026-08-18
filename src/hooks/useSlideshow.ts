import { useSyncExternalStore } from 'react';

/**
 * Every slideshow group on the page (hero, complejo cards) shares one global 4s tick so they
 * crossfade in lockstep, matching the original's single `setInterval` in `componentDidMount`.
 */
let tick = 0;
const listeners = new Set<() => void>();
let intervalId: ReturnType<typeof setInterval> | undefined;

function ensureRunning() {
  if (intervalId != null) return;
  intervalId = setInterval(() => {
    tick += 1;
    listeners.forEach((l) => l());
  }, 4000);
}

function subscribe(listener: () => void) {
  ensureRunning();
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0 && intervalId != null) {
      clearInterval(intervalId);
      intervalId = undefined;
    }
  };
}

function getSnapshot() {
  return tick;
}

function useSlideTick(): number {
  return useSyncExternalStore(subscribe, getSnapshot, () => 0);
}

/** Returns the active slide index for a group of `count` images, cycling every 4s. */
export function useSlideshow(count: number): number {
  const t = useSlideTick();
  return count > 0 ? t % count : 0;
}
