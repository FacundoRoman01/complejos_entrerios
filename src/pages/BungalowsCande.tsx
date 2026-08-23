import { useRef } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useModal } from '../context/ModalContext'; // <-- 1. Importamos el contexto global
import { candeUnits, testimonialsCande } from '../data/mockData';
import { CANDE_CTA_BG, CANDE_HERO_BG } from '../data/images';
import { KenBurnsImage } from '../components/KenBurnsImage';
import { CandeUnitCard } from '../components/CandeUnitCard';
import { CabinModal } from '../components/CabinModal';
import { SceneTransition } from '../components/SceneTransition';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { WordReveal } from '../components/WordReveal';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { scrollToId } from '../utils/scroll';
import { stackSection } from '../utils/stack';
import { useState } from 'react'; // Asegúrate de tener useState importado

export function BungalowsCande() {
  const alojHeader = useReveal<HTMLDivElement>();
  const ctaFinal = useReveal<HTMLDivElement>();
  const trackRef = useRef<HTMLDivElement>(null);
  
  // 2. Extraemos activeCabin, openModal y closeModal del contexto
  const { activeCabin, openModal, closeModal } = useModal();
  
  // Estado local para el control de las fotos de la galería (carrusel del modal)
  const [slide, setSlide] = useState(0);

  // Cálculos para la galería basados en activeCabin
  const gallery = activeCabin ? (activeCabin.gallery.length ? activeCabin.gallery : [activeCabin.img]) : [];
  const activeSlide = gallery.length ? Math.min(slide, gallery.length - 1) : 0;

  const scrollCarousel = (dir: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(':scope > div');
    const step = card ? card.getBoundingClientRect().width + 28 : track.clientWidth * 0.8;
    track.scrollBy({ left: dir * step, behavior: 'smooth' });
  };

  return (
    <div data-page style={{ position: 'relative', zIndex: 1, background: '#f5efe2' }}>
      {/* HERO */}
      <section 
        style={{ 
          ...stackSection(1), 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          overflow: 'hidden' 
        }}
      >
        <KenBurnsImage src={CANDE_HERO_BG} alt="Bungalows Cande · sendero entre palmeras" durationS={24} />
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(100deg, rgba(28,35,20,0.92) 0%, rgba(28,35,20,0.5) 50%, rgba(28,35,20,0.15) 100%)' 
          }} 
        />

        <div 
          style={{ 
            position: 'relative', 
            padding: 'clamp(110px, 14vh, 150px) clamp(20px,5vw,80px) clamp(40px, 6vh, 60px)', 
            maxWidth: 780 
          }}
        >
          <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#b7c48a', marginBottom: 24 }}>
            Bungalows Cande
          </div>
          
          <WordReveal 
            as="h1" 
            style={{ 
              fontFamily: "'Raleway',sans-serif", 
              fontWeight: 700, 
              fontSize: 'clamp(44px,7.5vw,104px)', 
              lineHeight: 0.97, 
              margin: 0, 
              color: '#eef4f2' 
            }}
          >
            {'Tu descanso'}
            <br />
            {'cerca, de'}
            <br />
            <span style={{ fontStyle: 'italic', color: '#a7d0d2' }}>las termas.</span>
          </WordReveal>

          <div style={{ width: 70, height: 1, background: '#8a9a55', margin: '32px 0' }} />

          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#d3dab9', maxWidth: 460, fontWeight: 300 }}>
            Bienestar, servicios y una pileta climatizada interior compartida para disfrutar del agua en cualquier momento del año.
          </p>

          <button
            onClick={() => scrollToId('alojamientos-cande')}
            style={{ 
              cursor: 'pointer', 
              border: 'none', 
              background: '#7c8a4e', 
              color: '#f5f3e8', 
              padding: '16px 30px', 
              borderRadius: 40, 
              marginTop: 34, 
              fontSize: 12, 
              letterSpacing: '0.18em', 
              textTransform: 'uppercase' 
            }}
          >
            Descubrir complejos
          </button>
        </div>
      </section>

      {/* ALOJAMIENTOS */}
      <section id="alojamientos-cande" style={{ ...stackSection(2), background: '#f5efe2', color: '#22331b', padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div ref={alojHeader.ref} style={{ ...alojHeader.style, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginBottom: 'clamp(40px,6vh,60px)' }}>
            <div style={{ maxWidth: 520 }}>
              <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#7c8a4e', marginBottom: 20 }}>Alojamientos</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1, margin: 0 }}>Unidades pensadas para el confort.</h2>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <button
                onClick={() => scrollCarousel(-1)}
                aria-label="Anterior"
                style={{ cursor: 'pointer', width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(43,51,32,0.3)', background: 'none', color: '#2b3320', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ‹
              </button>
              <button
                onClick={() => scrollCarousel(1)}
                aria-label="Siguiente"
                style={{ cursor: 'pointer', width: 52, height: 52, borderRadius: '50%', border: '1px solid rgba(43,51,32,0.3)', background: 'none', color: '#2b3320', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                ›
              </button>
            </div>
          </div>
          <div
            ref={trackRef}
            style={{ display: 'flex', gap: 'clamp(20px,2.4vw,32px)', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', padding: '6px 0 14px', margin: '0 -6px', scrollbarWidth: 'none' }}
          >
            {candeUnits.map((unit) => (
              <CandeUnitCard 
                key={unit.name} 
                unit={unit} 
                onOpenDetail={() => {
                  openModal(unit); // 3. Abrimos el modal globalmente
                  setSlide(0);      // Reseteamos el slide al abrir
                }} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* ESCENAS CINEMÁTICAS: PILETA → UBICACIÓN */}
      <div style={stackSection(3)}>
        <SceneTransition />
      </div>

      <TestimonialsMarquee testimonials={testimonialsCande} variant="light" eyebrowColor="#7c8a4e" style={stackSection(4)} />

      {/* CTA FINAL */}
      <section style={{ ...stackSection(5), position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <img src={CANDE_CTA_BG} alt="Cande · patio con parrilla y jardín" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,26,12,0.66)' }} />
        <div ref={ctaFinal.ref} style={{ ...ctaFinal.style, position: 'relative', padding: 40, maxWidth: 820 }}>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.5vw,84px)', lineHeight: 1, margin: 0, color: '#eef4f2' }}>
            Todo lo que necesitás
            <br />
            para disfrutar tu estadía.
          </h2>
          <button
            onClick={openWhatsApp(waMessages.cande)}
            style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: 'clamp(13px,3.4vw,18px) clamp(26px,6vw,40px)', borderRadius: 40, marginTop: 34, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Consultar disponibilidad
          </button>
        </div>
      </section>

      {/* 4. Renderizamos el Modal con los datos del contexto */}
      {activeCabin && (
        <CabinModal
          cabin={activeCabin}
          gallery={gallery}
          activeSlide={activeSlide}
          onClose={closeModal}
          onPrev={() => setSlide((s) => (gallery.length ? (s - 1 + gallery.length) % gallery.length : 0))}
          onNext={() => setSlide((s) => (gallery.length ? (s + 1) % gallery.length : 0))}
          onGoTo={(i) => setSlide(i)}
          onWhatsApp={openWhatsApp(waMessages.cande)}
        />
      )}
    </div>
  );
}