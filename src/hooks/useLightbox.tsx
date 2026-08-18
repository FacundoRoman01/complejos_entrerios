import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import type { GalleryImage } from '../types';

interface LightboxState {
  images: GalleryImage[];
  index: number;
}

interface LightboxApi {
  state: LightboxState | null;
  open: (images: GalleryImage[], index: number) => void;
  close: () => void;
  next: () => void;
  prev: () => void;
}

const LightboxContext = createContext<LightboxApi | null>(null);

/** Global photo viewer (the "LIGHTBOX GLOBAL" from the source), reused by any gallery. */
export function LightboxProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<LightboxState | null>(null);

  const api = useMemo<LightboxApi>(
    () => ({
      state,
      open: (images, index) => setState({ images, index }),
      close: () => setState(null),
      next: () => setState((s) => (s ? { ...s, index: (s.index + 1) % s.images.length } : s)),
      prev: () => setState((s) => (s ? { ...s, index: (s.index - 1 + s.images.length) % s.images.length } : s)),
    }),
    [state],
  );

  return <LightboxContext.Provider value={api}>{children}</LightboxContext.Provider>;
}

export function useLightbox(): LightboxApi {
  const ctx = useContext(LightboxContext);
  if (!ctx) throw new Error('useLightbox must be used within a LightboxProvider');
  return ctx;
}
