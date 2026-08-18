import { useReveal } from '../hooks/useReveal';
import { useCabinModal } from '../hooks/useCabinModal';
import { motion } from 'framer-motion';
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

export function LaLoma() {
  const presentacion = useReveal<HTMLDivElement>();
  const alojHeader = useReveal<HTMLDivElement>();
  const espaciosHeading = useReveal<HTMLDivElement>();
  const tile1 = useReveal<HTMLDivElement>();
  const tile2 = useReveal<HTMLDivElement>();
  const tile3 = useReveal<HTMLDivElement>();
  const ubicacionText = useReveal<HTMLDivElement>();
  const ubicacionMap = useReveal<HTMLDivElement>();
  const ctaFinal = useReveal<HTMLDivElement>();

  const modal = useCabinModal(lomaCabins);

  const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeIn' } },
  } as const;

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="animate"
      exit="exit"
      data-page
      style={{ position: 'relative', zIndex: 1, background: '#20291a' }}
    >
      {/* HERO */}
      <section style={{ ...stackSection(1), minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <KenBurnsImage src={LOMA_HERO_BG} alt="La Loma · pileta y parque" durationS={24} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(100deg, rgba(24,34,16,0.9) 0%, rgba(24,34,16,0.45) 50%, rgba(24,34,16,0.15) 100%)' }} />
        <div style={{ position: 'relative', padding: '0 clamp(20px,5vw,80px)', maxWidth: 820 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c3d19a', marginBottom: 22 }}>Cabañas La Loma</div>
          <WordReveal as="h1" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(44px,7.5vw,110px)', lineHeight: 0.95, letterSpacing: '-0.015em', margin: 0, color: '#f6f3ea' }}>
            {'Naturaleza,'}
            <br />
            {'espacio y'}
            <br />
            {'descanso'}
          </WordReveal>
          <p style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(24px,3vw,40px)', color: '#c3d19a', margin: '16px 0 0' }}>para respirar un poco más lento.</p>
          <div style={{ width: 70, height: 1, background: '#c3d19a', margin: '34px 0' }} />
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#dbe0ca', maxWidth: 480, fontWeight: 300 }}>
            Cinco cabañas rodeadas de verde, con dos piletas —una al aire libre y una climatizada cubierta— para que vivas una experiencia inolvidable en familia o con amigos.
          </p>
          <button
            onClick={() => scrollToId('alojamientos-loma')}
            style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: '16px 30px', borderRadius: 40, marginTop: 34, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}
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
        <section style={{ background: 'transparent', color: '#26331d', padding: 'clamp(70px,12vh,150px) clamp(20px,5vw,80px)' }}>
          <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
            <div ref={presentacion.ref} style={presentacion.style}>
              <WordReveal as="h2" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4.6vw,60px)', lineHeight: 1.02, margin: 0, color: '#26331d' }}>
                {'Cinco cabañas.'}
                <br />
                {'Un entorno para'}
                <br />
                {'compartir y disfrutar.'}
              </WordReveal>
            </div>
          </div>
        </section>

        <section id="alojamientos-loma" style={{ background: 'transparent', padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,80px)' }}>
          <div ref={alojHeader.ref} style={{ ...alojHeader.style, maxWidth: 1240, margin: '0 auto clamp(40px,6vh,64px)' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#7c8a4e', marginBottom: 20 }}>Alojamientos</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1, margin: 0, color: '#26331d' }}>Elegí tu lugar en La Loma</h2>
            <p style={{ fontSize: 15, color: '#4c563c', maxWidth: 520, margin: '18px 0 0', fontWeight: 300 }}>
              Cinco cabañas únicas, pensadas para que encuentres el espacio perfecto según tus necesidades.
            </p>
          </div>
          <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: 'clamp(24px,3vw,40px)' }}>
            {lomaCabins.map((cabin, i) => (
              <LomaCabinCard key={cabin.name} cabin={cabin} onOpenDetail={() => modal.open(i)} />
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
              Todo lo que se disfruta afuera de la cabaña.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 16 }}>
            {[
              { ref: tile1, img: LOMA_TILE_PILETA_CLIMATIZADA, alt: 'Pileta al aire libre', caption: 'Pileta climatizada' },
              { ref: tile2, img: LOMA_TILE_PILETA_AIRE_LIBRE, alt: 'Pileta climatizada', caption: 'Pileta al aire libre' },
              { ref: tile3, img: LOMA_TILE_ESPACIOS_VERDES, alt: 'Espacios verdes', caption: 'Espacios verdes' },
            ].map((tile) => (
              <div key={tile.caption} ref={tile.ref.ref} style={{ ...tile.ref.style, position: 'relative', aspectRatio: '4/5', overflow: 'hidden' }}>
                <img src={tile.img} alt={tile.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, background: 'linear-gradient(transparent,rgba(10,14,8,0.85))' }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 26, color: '#f4f1e6' }}>{tile.caption}</div>
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
              Cabañas La Loma · [Dirección completa, localidad, Entre Ríos].
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
              title="Ubicación Cabañas La Loma"
              src="https://www.google.com/maps?q=La%20Loma%20Entre%20Rios&output=embed"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
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
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,6vw,92px)', lineHeight: 0.98, margin: 0, color: '#f6f3ea' }}>
            Tu lugar en La Loma
            <br />
            te está esperando.
          </h2>
          <button
            onClick={openWhatsApp(waMessages.loma)}
            style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: 'clamp(13px,3.4vw,18px) clamp(26px,6vw,40px)', borderRadius: 40, marginTop: 34, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Consultar disponibilidad
          </button>
        </div>
      </section>

      {modal.cabin && (
        <CabinModal
          cabin={modal.cabin}
          gallery={modal.gallery}
          activeSlide={modal.activeSlide}
          onClose={modal.close}
          onPrev={modal.prev}
          onNext={modal.next}
          onGoTo={modal.goTo}
          onWhatsApp={openWhatsApp(waMessages.loma)}
        />
      )}
    </motion.div>
  );
}
