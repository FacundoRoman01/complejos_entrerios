/** Centralized TypeScript interfaces for Complejos Entre Ríos. */

export type PageId =
  | 'home'
  | 'laloma'
  | 'cande'
  | 'arandu'
  | 'alojamiento'
  | 'promociones';

export type ComplejoId = 'laloma' | 'cande' | 'arandu';

export interface ComplejoSummary {
  id: ComplejoId;
  name: string;
  cabinCountLabel: string;
  images: string[];
  accentTextColor: string;
  gradientFrom: string;
  gradientMid: string;
  cardBg: string;
  shadowColor: string;
}

export interface CabinBase {
  name: string;
  eyebrow: string;
  img: string;
  gallery: string[];
  pin: string;
  capacidad: string;
  ambientes: string;
  dormitorios: string;
  banos: string;
  desc: string;
  distintivo: string[];
  comodidades: string[];
  dormir: string;
}

export interface LomaCabin extends CabinBase {
  specs: string;
  tags: string[];
}

export interface CandeUnit extends CabinBase {
  cap: string;
}

export interface Testimonial {
  title: string;
  content: string;
  tag: string;
  name: string;
  role: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface FaqItem {
  q: string;
  a: string;
}

/** Shared shape consumed by <CabinModal> for both La Loma and Bungalows Cande. */
export interface ModalCabinData {
  name: string;
  eyebrow: string;
  pin: string;
  capacidad: string;
  ambientes: string;
  dormitorios: string;
  banos: string;
  desc: string;
  distintivo: string[];
  comodidades: string[];
  dormir: string;
  gallery: string[];
}

export type CabinModalTheme = 'loma' | 'cande';

/** currentSection in the split-curtain scene transition (Bungalows Cande). */
export type SceneIndex = 0 | 1;
