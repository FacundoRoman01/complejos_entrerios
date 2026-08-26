import type { CSSProperties } from 'react';
import { useRef } from 'react';
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
  
  // Referencia para controlar el scroll horizontal
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 350; // Cantidad de píxeles que se desplaza en cada click
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

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
      
      {/* Contenedor principal con botones de navegación */}
      <div style={{ position: 'relative', maxWidth: 1150, margin: '0 auto', padding: '0 20px' }}>
        
        {/* Botón Izquierda */}
        <button
          onClick={() => handleScroll('left')}
          aria-label="Anterior"
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: t.sectionColor,
            color: t.sectionBg,
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>

        {/* Contenedor del Scroll de Imágenes */}
        <div 
          ref={scrollRef}
          className="testimonialsScroll"
          style={{ 
            display: 'flex', 
            gap: 20, 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            scrollbarWidth: 'none', // Ocultar barra en Firefox
            msOverflowStyle: 'none', // Ocultar barra en IE/Edge antiguo
            padding: '10px 60px', // Espacio para que las flechas no pisen las tarjetas
          }}
        >
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
                border: '1px solid rgba(0,0,0,0.08)',
                scrollSnapAlign: 'center',
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

        {/* Botón Derecha */}
        <button
          onClick={() => handleScroll('right')}
          aria-label="Siguiente"
          style={{
            position: 'absolute',
            right: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: t.sectionColor,
            color: t.sectionBg,
            border: 'none',
            borderRadius: '50%',
            width: 48,
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'transform 0.2s ease, opacity 0.2s ease',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>

      </div>

      {/* Estilo para ocultar la barra de scroll en navegadores basados en Webkit (Chrome, Safari) */}
      <style>{`
        .testimonialsScroll::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}