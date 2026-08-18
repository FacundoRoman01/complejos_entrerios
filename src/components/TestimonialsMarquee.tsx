import type { CSSProperties } from 'react';
import { useReveal } from '../hooks/useReveal';
import type { Testimonial } from '../types';
import { WordReveal } from './WordReveal';

interface TestimonialsMarqueeProps {
  testimonials: Testimonial[];
  /** 'loma' = cream card on cream section; 'light' = white cards on cream section (Arandú/Cande). */
  variant: 'loma' | 'light';
  eyebrowColor: string;
  style?: CSSProperties;
}

const THEMES = {
  loma: { sectionBg: '#efe9db', sectionColor: '#26331d', cardBorder: 'rgba(38,51,29,0.1)', title: '#3a4a28', content: '#5b6349', star: '#e0a800', tagBorder: 'rgba(38,51,29,0.2)', tagText: '#5b6349', name: '#26331d', role: '#8a9270' },
  light: { sectionBg: '#f5efe2', sectionColor: '#3b3322', cardBorder: 'rgba(120,100,50,0.18)', title: '#332c1d', content: '#6b6046', star: '#c1a877', tagBorder: 'rgba(120,100,50,0.3)', tagText: '#8a7a52', name: '#332c1d', role: '#a2946e' },
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
      <div className="marqueeWrap" style={{ position: 'relative' }}>
        <div className="marqueeTrack" style={{ display: 'flex', gap: 16, width: 'max-content' }}>
          {testimonials.map((item, i) => (
            <div
              key={i}
              style={{
                flex: '0 0 auto',
                width: 'clamp(238px,72vw,340px)',
                background: '#fff',
                border: `1px solid ${t.cardBorder}`,
                borderRadius: 22,
                padding: 'clamp(20px,5.5vw,28px)',
                boxShadow: '0 18px 40px -26px rgba(38,51,29,0.4)',
              }}
            >
              <h4 style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(20px,5.4vw,26px)', lineHeight: 1.12, margin: 0, color: t.title }}>{item.title}</h4>
              <p style={{ fontSize: 14, lineHeight: 1.7, color: t.content, margin: '14px 0 0', fontWeight: 300 }}>{item.content}</p>
              <div style={{ color: t.star, fontSize: 15, letterSpacing: 2, marginTop: 18 }}>★★★★★</div>
              <span style={{ display: 'inline-block', marginTop: 16, fontSize: 11, letterSpacing: '0.06em', color: t.tagText, border: `1px solid ${t.tagBorder}`, borderRadius: 30, padding: '6px 14px' }}>
                {item.tag}
              </span>
              <div style={{ marginTop: 20 }}>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 500, fontSize: 15, color: t.name }}>{item.name}</div>
                <div style={{ fontSize: 13, color: t.role, marginTop: 2 }}>{item.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
