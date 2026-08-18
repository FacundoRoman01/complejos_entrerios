import { useState } from 'react';
import type { CabinBase } from '../types';

/** Drives the "Ver detalle" modal + its photo carousel, shared by La Loma and Bungalows Cande. */
export function useCabinModal<T extends CabinBase>(items: T[]) {
  const [index, setIndex] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  const cabin = index != null ? items[index] : null;
  const gallery = cabin ? (cabin.gallery.length ? cabin.gallery : [cabin.img]) : [];
  const activeSlide = gallery.length ? Math.min(slide, gallery.length - 1) : 0;

  return {
    isOpen: index != null,
    cabin,
    gallery,
    activeSlide,
    open: (i: number) => {
      setIndex(i);
      setSlide(0);
    },
    close: () => {
      setIndex(null);
      setSlide(0);
    },
    next: () => setSlide((s) => (gallery.length ? (s + 1) % gallery.length : 0)),
    prev: () => setSlide((s) => (gallery.length ? (s - 1 + gallery.length) % gallery.length : 0)),
    goTo: (i: number) => setSlide(i),
  };
}
