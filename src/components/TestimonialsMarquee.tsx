import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import { WordReveal } from './WordReveal';

interface ReviewImageItem {
  src: string;
  alt: string;
}

interface TestimonialsMarqueeProps {
  testimonials: ReviewImageItem[];
  variant: 'loma' | 'light';
  eyebrowColor: string;
  style?: CSSProperties;
}

const THEMES = {
  loma: { sectionBg: '#efe9db', sectionColor: '#26331d' },
  light: { sectionBg: '#f5efe2', sectionColor: '#3b3322' },
} as const;

export function TestimonialsMarquee({ testimonials, variant, eyebrowColor, style }: TestimonialsMarqueeProps) {
  const t = THEMES[variant];
  const { ref: eyebrowRef, style: eyebrowStyle } = useReveal<HTMLDivElement>();

  return (
    <section style={{ ...style, background: t.sectionBg, color: t.sectionColor, padding: 'clamp(70px,12vh,140px) 0', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto clamp(40px,6vh,60px)', textAlign: 'center', padding: '0 clamp(20px,5vw,80px)' }}>
        <div ref={eyebrowRef} style={{ ...eyebrowStyle, fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: eyebrowColor, marginBottom: 24 }}>
          Testimonios
        </div>
        <WordReveal as="h2" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1, margin: 0 }}>
          Quienes estuvieron, lo cuentan.
        </WordReveal>
      </div>
      
      {/* Contenedor del Scroll de Imágenes */}
      <div className="marqueeWrap" style={{ position: 'relative', width: '100%' }}>
        <div className="marqueeTrack" style={{ display: 'flex', gap: 20, width: 'max-content' }}>
          {testimonials.map((item, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 auto',
                width: 'clamp(280px, 80vw, 380px)',
                borderRadius: 18,
                overflow: 'hidden',
                background: '#fff',
                boxShadow: '0 18px 40px -26px rgba(38,51,29,0.4)',
                border: '1px solid rgba(0,0,0,0.08)'
              }}
            >
              <img 
                src={item.src} 
                alt={item.alt} 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  display: 'block',
                  objectFit: 'cover' 
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}