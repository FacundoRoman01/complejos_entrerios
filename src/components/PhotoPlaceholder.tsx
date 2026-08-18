import type { CSSProperties } from 'react';

export type PhotoTone = 'green' | 'deep' | 'dark' | 'darker' | 'aqua' | 'teal' | 'sand' | 'cream' | 'stone' | 'warm' | 'olive';

const TONE_BG: Record<PhotoTone, string> = {
  green: '#334224',
  deep: '#1f2a17',
  dark: '#181510',
  darker: '#100e0a',
  aqua: '#1c3b41',
  teal: '#12303a',
  sand: '#d6c9ae',
  cream: '#e8e2d0',
  stone: '#2c3320',
  warm: '#2a2013',
  olive: '#3a3d22',
};

interface PhotoPlaceholderProps {
  tone?: PhotoTone;
  label: string;
  style?: CSSProperties;
}

/**
 * Stand-in for the design bundle's `Foto` placeholder component — a tonal swatch with a label,
 * used wherever the source still has no real photo assigned (unit detail page, promotions page).
 */
export function PhotoPlaceholder({ tone = 'green', label, style }: PhotoPlaceholderProps) {
  const bg = TONE_BG[tone];
  const light = tone === 'sand' || tone === 'cream';
  const fg = light ? '#524a38' : '#f2eee2';
  const glow = light
    ? 'radial-gradient(120% 120% at 70% 15%, rgba(0,0,0,0.05), transparent 55%)'
    : 'radial-gradient(120% 120% at 30% 15%, rgba(255,255,255,0.07), transparent 58%)';

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', ...style }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(135deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 12px)' }} />
      <div style={{ position: 'absolute', inset: 0, background: glow }} />
      <div style={{ position: 'relative', textAlign: 'center', padding: 18, maxWidth: '82%' }}>
        <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 9, letterSpacing: '0.34em', textTransform: 'uppercase', color: fg, opacity: 0.5 }}>Foto</div>
        <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1.6, marginTop: 9, color: fg, opacity: 0.82 }}>{label}</div>
      </div>
    </div>
  );
}
