import { useReveal } from '../hooks/useReveal';
import { useModal } from '../context/ModalContext'; 
import { lomaCabins, testimonialsLoma } from '../data/mockData';
import { LOMA_CTA_BG, LOMA_HERO_BG, LOMA_RIVER_BG, LOMA_TILE_ESPACIOS_VERDES, LOMA_TILE_PILETA_AIRE_LIBRE, LOMA_TILE_PILETA_CLIMATIZADA } from '../data/images';
import { KenBurnsImage } from '../components/KenBurnsImage';
import { LomaCabinCard } from '../components/LomaCabinCard';
import { CabinModal } from '../components/CabinModal';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { WordReveal } from '../components/WordReveal';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { scrollToId } from '../utils/scroll';
import { stackSection } from '../utils/stack';
import { useState } from 'react';

export function LaLoma() {
  const presentacion = useReveal<HTMLDivElement>();
  // const alojHeader = useReveal<HTMLDivElement>();
  const espaciosHeading = useReveal<HTMLDivElement>();
  const tile1 = useReveal<HTMLDivElement>();
  const tile2 = useReveal<HTMLDivElement>();
  const tile3 = useReveal<HTMLDivElement>();
  const ubicacionText = useReveal<HTMLDivElement>();
  const ubicacionMap = useReveal<HTMLDivElement>();
  const ctaFinal = useReveal<HTMLDivElement>();

  // Contexto global del modal
  const { activeCabin, openModal, closeModal } = useModal();
  
  // Estado local para el carrusel de fotos dentro del modal
  const [slide, setSlide] = useState(0);

  // Cálculos para la galería de la cabaña activa
  const gallery = activeCabin ? (activeCabin.gallery.length ? activeCabin.gallery : [activeCabin.img]) : [];
  const activeSlide = gallery.length ? Math.min(slide, gallery.length - 1) : 0;

  return (
    <div data-page style={{ position: 'relative', zIndex: 1, background: '#20291a' }}>
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
        <KenBurnsImage src={LOMA_HERO_BG} alt="La Loma · pileta y parque" durationS={24} />
        <div 
          style={{ 
            position: 'absolute', 
            inset: 0, 
            background: 'linear-gradient(100deg, rgba(24,34,16,0.9) 0%, rgba(24,34,16,0.45) 50%, rgba(24,34,16,0.15) 100%)' 
          }} 
        />

        <div 
          style={{ 
            position: 'relative', 
            padding: 'clamp(110px, 14vh, 150px) clamp(20px,5vw,80px) clamp(40px, 6vh, 60px)', 
            maxWidth: 820 
          }}
        >
          <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c3d19a', marginBottom: 22 }}>Cabañas La Loma</div>
          <WordReveal 
            as="h1" 
            style={{ 
              fontFamily: "'Raleway',sans-serif", 
              fontWeight: 700, 
              fontSize: 'clamp(44px,7.5vw,110px)', 
              lineHeight: 0.95, 
              letterSpacing: '-0.015em', 
              margin: 0, 
              color: '#f6f3ea' 
            }}
          >
            {'Un complejo'}
            <br />
            {'pensado para'}
            <br />
            {'disfrutar.'}
          </WordReveal>

          <div style={{ width: 70, height: 1, background: '#c3d19a', margin: '34px 0' }} />

          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#dbe0ca', maxWidth: 480, fontWeight: 300 }}>
            Cinco cabañas rodeadas de verde, con dos piletas —una al aire libre y una climatizada cubierta— para que vivas una experiencia inolvidable en familia o con amigos.
          </p>

          <button
            onClick={() => scrollToId('alojamientos-loma')}
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

      {/* FONDO RIO: presentacion + alojamientos */}
      <div
        style={{
          ...stackSection(2),
          background: `linear-gradient(180deg, rgba(240,236,224,0.35) 0%, rgba(240,236,224,0.35) 100%), url('${LOMA_RIVER_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* PRESENTACIÓN */}
        <section style={{ background: 'transparent', color: '#26331d', padding: 'clamp(70px,12vh,150px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <div ref={presentacion.ref} style={presentacion.style}>
              <div style={{ fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#687848', marginBottom: 16, fontWeight: 600 }}>
                Alojamientos
              </div>
              <WordReveal as="h2" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.05, margin: 0, color: '#26331d' }}>
                {'Elegí tu lugar en La Loma'}
              </WordReveal>
              <p style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(15px, 1.6vw, 18px)', color: '#4a5940', margin: '20px auto 0', maxWidth: 580, lineHeight: 1.5 }}>
                Cabañas únicas, pensadas para que encuentres el espacio perfecto según tus necesidades.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIÓN DE TARJETAS DE CABAÑAS */}
        <section id="alojamientos-loma" style={{ background: 'transparent', padding: 'clamp(30px, 6vh, 60px) clamp(20px, 5vw, 80px) clamp(80px, 14vh, 160px)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'clamp(24px, 3vw, 40px)' }}>
            {lomaCabins.map((cabin) => (
              <LomaCabinCard 
                key={cabin.name} 
                cabin={cabin} 
                onOpenDetail={() => {
                  openModal(cabin); // Abrimos el modal globalmente
                  setSlide(0);      // Reseteamos el slide al abrir
                }} 
              />
            ))}
          </div>
        </section>
      </div>

      {/* ESPACIOS COMPARTIDOS */}
      <section
        style={{
          ...stackSection(3),
          background: `linear-gradient(180deg, rgba(240,236,224,0.35) 0%, rgba(240,236,224,0.35) 100%), url('${LOMA_RIVER_BG}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: 'clamp(70px,12vh,150px) clamp(20px,5vw,80px)',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div ref={espaciosHeading.ref} style={{ ...espaciosHeading.style, maxWidth: 760, margin: '0 auto clamp(40px,6vh,64px)', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1.02, margin: 0, color: '#26331d' }}>
              Naturaleza, espacio y descanso.
            </h2>
            <p style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(14px, 1.5vw, 16px)', color: '#4a5940', margin: '18px auto 0', lineHeight: 1.5, maxWidth: 640 }}>
              Cabañas La Loma es un complejo de alojamientos turísticos rodeado de naturaleza y amplios espacios verdes, pensado para quienes buscan tranquilidad, descanso y momentos para compartir.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px 28px', marginTop: 28, fontSize: 13, color: '#4a5940', fontWeight: 500 }}>
              <span>🌿 Mucho espacio verde</span>
              <span>🏡 5 cabañas</span>
              <span>🏊 Pileta al aire libre</span>
              <span>🏊‍♂️ Pileta techada</span>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {[
              { ref: tile1, img: LOMA_TILE_PILETA_CLIMATIZADA, alt: 'Pileta climatizada', caption: 'Pileta climatizada' },
              { ref: tile2, img: LOMA_TILE_PILETA_AIRE_LIBRE, alt: 'Pileta al aire libre', caption: 'Pileta al aire libre' },
              { ref: tile3, img: LOMA_TILE_ESPACIOS_VERDES, alt: 'Espacios verdes', caption: 'Espacios verdes' },
            ].map((tile) => (
              <div key={tile.caption} ref={tile.ref.ref} style={{ ...tile.ref.style, position: 'relative', aspectRatio: '4/5', overflow: 'hidden', borderRadius: 12 }}>
                <img src={tile.img} alt={tile.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'linear-gradient(transparent,rgba(10,14,8,0.85))' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 22, color: '#f4f1e6', fontWeight: 600 }}>{tile.caption}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section style={{ ...stackSection(4), background: '#20291a', color: '#f4f1e6', padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,70px)', alignItems: 'center' }}>
          <div ref={ubicacionText.ref} style={ubicacionText.style}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#c3b184', marginBottom: 20 }}>Ubicación</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1.02, margin: 0, color: '#f4f1e6' }}>
              Dónde nos
              <br />
              encontrás.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#c7cdb4', margin: '24px 0 0', maxWidth: 420, fontWeight: 300 }}>
              Villa Elisa, Entre Ríos, a 10 cuadras del centro.
            </p>
            <a
              href="https://maps.google.com/?q=La+Loma+Entre+Rios"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-block', marginTop: 28, border: '1px solid rgba(195,177,132,0.5)', color: '#f4f1e6', padding: '15px 28px', borderRadius: 40, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Cómo llegar →
            </a>
          </div>
          <div ref={ubicacionMap.ref} style={{ ...ubicacionMap.style, position: 'relative', aspectRatio: '16/11', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(0,0,0,0.5)' }}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.138386432819!2d-58.405370700000006!3d-32.1735428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b1d7052e803105%3A0xe1369b7f48136028!2zQ2FiYcOxYSAiTGEgTG9tYSI!5e0!3m2!1ses-419!2sar!4v1787500304601!5m2!1ses-419!2sar" 
              width="600" 
              height="450" 
              style={{ border: 0, width: '100%', height: '100%' }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <TestimonialsMarquee testimonials={testimonialsLoma} variant="loma" eyebrowColor="#7c8a4e" style={stackSection(5)} />

      {/* CTA FINAL */}
      <section style={{ ...stackSection(6), position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <img src={LOMA_CTA_BG} alt="La Loma · pileta y parque al atardecer" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,28,14,0.7)' }} />
        <div ref={ctaFinal.ref} style={{ ...ctaFinal.style, position: 'relative', padding: 40, maxWidth: 800 }}>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 5.2vw, 92px)', lineHeight: 1.08, margin: 0, color: '#f6f3ea' }}>
            {'Tu lugar en la loma'}
            <br />
            {'te está esperando.'}
          </h2>
          <button
            onClick={openWhatsApp(waMessages.loma)}
            style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: 'clamp(13px,3.4vw,18px) clamp(26px,6vw,40px)', borderRadius: 40, marginTop: 34, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Consultar disponibilidad
          </button>
        </div>
      </section>

      {/* MODAL GLOBAL */}
      {activeCabin && (
  <CabinModal
    cabin={activeCabin}
    gallery={gallery}
    activeSlide={activeSlide}
    onClose={closeModal}
    onPrev={() => setSlide((s) => (gallery.length ? (s - 1 + gallery.length) % gallery.length : 0))}
    onNext={() => setSlide((s) => (gallery.length ? (s + 1) % gallery.length : 0))}
    onGoTo={(i) => setSlide(i)}
    complexName="La Loma" // <-- Le pasamos el nombre del complejo
  />
)}
    </div>
  );
}