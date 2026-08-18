import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLightbox } from '../hooks/useLightbox';
import { aranduBeneficios, aranduGallery } from '../data/mockData';
import { ARANDU_ARROYO_BG, ARANDU_HERO_BG } from '../data/images';
import { motion } from 'framer-motion';
import { KenBurnsImage } from '../components/KenBurnsImage';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { GalleryItem } from '../components/GalleryItem';
import { TestimonialsMarquee } from '../components/TestimonialsMarquee';
import { WordReveal } from '../components/WordReveal';
import { testimonialsArandu } from '../data/mockData';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { stackSection } from '../utils/stack';

export function Arandu() {
  const cabana = useReveal<HTMLDivElement>();
  const cabanaData = useReveal<HTMLDivElement>();
  const galeriaHeader = useReveal<HTMLDivElement>();
  const arroyo = useReveal<HTMLDivElement>();
  const ubicacionText = useReveal<HTMLDivElement>();
  const ubicacionMap = useReveal<HTMLDivElement>();
  const ctaFinal = useReveal<HTMLDivElement>();

  const lightbox = useLightbox();
  const [mainIndex, setMainIndex] = useState(0);
  const mainImage = aranduGallery[mainIndex % aranduGallery.length];

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
      style={{ position: 'relative', zIndex: 1, background: '#f5efe2', color: '#3b3322' }}
    >
      {/* HERO */}
      <section style={{ ...stackSection(1), minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <KenBurnsImage src={ARANDU_HERO_BG} alt="Arandú · pileta en el parque junto al agua" durationS={26} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(18,15,10,0.92) 0%, rgba(18,15,10,0.5) 45%, rgba(18,15,10,0.2) 100%)' }} />
        <div style={{ position: 'relative', padding: '0 clamp(20px,5vw,80px)', maxWidth: 760 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c1a877', marginBottom: 24 }}>Cabaña Arandú</div>
          <WordReveal as="h1" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(44px,7.5vw,108px)', lineHeight: 0.96, margin: 0, color: '#efe7d4' }}>
            {'Una cabaña.'}
            <br />
            <span style={{ fontStyle: 'italic', color: '#d8c8a5' }}>Todo para vos.</span>
          </WordReveal>
          <div style={{ width: 70, height: 1, background: '#c1a877', margin: '32px 0' }} />
          <p style={{ fontSize: 16, lineHeight: 1.85, color: '#d4c9b0', maxWidth: 480, fontWeight: 300 }}>
            Un lugar exclusivo para desconectar del mundo y reconectar con lo esencial. Rodeada de naturaleza, con arroyo propio que desemboca en el río Uruguay.
          </p>
          <button
            onClick={openWhatsApp(waMessages.arandu)}
            style={{ cursor: 'pointer', border: '1px solid rgba(193,168,119,0.6)', background: 'none', color: '#efe7d4', padding: '16px 30px', borderRadius: 40, marginTop: 34, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Ver más
          </button>
        </div>
      </section>

      {/* SOBRE LA CABAÑA */}
      <section style={{ ...stackSection(2), background: '#f5efe2', padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: 'clamp(40px,5vw,80px)', alignItems: 'start' }}>
          <div ref={cabana.ref} style={cabana.style}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#a2823a', marginBottom: 16 }}>La cabaña</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4.6vw,62px)', lineHeight: 1.02, margin: '0 0 26px', color: '#332c1d' }}>Pensada para dos.</h2>
            <div className="galItem" style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(40,30,10,0.4)' }}>
              <img
                onClick={() => lightbox.open(aranduGallery, mainIndex)}
                src={mainImage.src}
                alt={mainImage.alt}
                style={{ cursor: 'pointer', position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setMainIndex((i) => (i - 1 + aranduGallery.length) % aranduGallery.length)}
                aria-label="Anterior"
                style={{ cursor: 'pointer', position: 'absolute', top: '50%', left: 14, transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(23,20,15,0.5)', color: '#fff', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
              >
                ‹
              </button>
              <button
                onClick={() => setMainIndex((i) => (i + 1) % aranduGallery.length)}
                aria-label="Siguiente"
                style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: 14, transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(23,20,15,0.5)', color: '#fff', fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
              >
                ›
              </button>
            </div>
          </div>

          <div ref={cabanaData.ref} style={{ ...cabanaData.style, marginTop: 'clamp(0px,9vw,116px)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(120,100,50,0.25)', borderRadius: 16, overflow: 'hidden' }}>
              {[
                { label: 'Capacidad', value: '2 huéspedes', borderRight: true, borderBottom: true },
                { label: 'Dormitorio', value: '1', borderRight: false, borderBottom: true },
                { label: 'Baño', value: '1', borderRight: true, borderBottom: false },
                { label: 'Modalidad', value: 'Exclusiva', borderRight: false, borderBottom: false },
              ].map((cell) => (
                <div
                  key={cell.label}
                  style={{
                    padding: 'clamp(18px,4.5vw,26px) clamp(18px,4.5vw,28px)',
                    borderRight: cell.borderRight ? '1px solid rgba(120,100,50,0.18)' : undefined,
                    borderBottom: cell.borderBottom ? '1px solid rgba(120,100,50,0.18)' : undefined,
                  }}
                >
                  <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a2823a' }}>{cell.label}</div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(22px,5.6vw,30px)', color: '#332c1d', marginTop: 8 }}>{cell.value}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a2823a', margin: '34px 0 16px' }}>Lo que incluye</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px clamp(14px,4vw,22px)' }}>
              {aranduBeneficios.map((b) => (
                <div key={b} style={{ fontSize: 14.5, color: '#4a4230', display: 'flex', gap: 9, alignItems: 'baseline' }}>
                  <span style={{ color: '#a2823a' }}>✓</span> {b}
                </div>
              ))}
            </div>
            <button
              onClick={openWhatsApp(waMessages.arandu)}
              style={{ cursor: 'pointer', border: 'none', background: '#a2823a', color: '#f5efe2', padding: 'clamp(13px,3.4vw,16px) clamp(26px,6vw,34px)', borderRadius: 40, marginTop: 36, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Consultar disponibilidad
            </button>
          </div>
        </div>
        <p style={{ maxWidth: 1200, margin: 'clamp(40px,6vh,64px) auto 0', fontSize: 'clamp(17px,2vw,22px)', lineHeight: 1.9, color: '#5b5138', fontWeight: 300 }}>
          Arandú es una única cabaña en un predio privado: tenés todo el lugar para vos. Cocina equipada, ambientes cálidos y un deck sobre el agua para tomar unos mates mientras el arroyo corre de fondo. Ideal para una escapada en pareja o para desconectar de verdad.
        </p>
      </section>

      {/* GALERÍA */}
      <section style={{ ...stackSection(3), background: '#f5efe2', padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div ref={galeriaHeader.ref} style={{ ...galeriaHeader.style, display: 'flex', flexWrap: 'wrap', gap: 18, justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'clamp(28px,4vh,44px)' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#a2823a', marginBottom: 16 }}>Galería</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(30px,4.2vw,54px)', lineHeight: 1, margin: 0, color: '#332c1d' }}>Un vistazo a Arandú.</h2>
            </div>
            <button
              onClick={() => lightbox.open(aranduGallery, mainIndex)}
              style={{ cursor: 'pointer', border: '1px solid rgba(120,100,50,0.4)', background: 'none', color: '#4a4230', padding: '14px 26px', borderRadius: 40, fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Ver todas las imágenes
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 'clamp(14px,1.8vw,22px)' }}>
            {aranduGallery.map((g, i) => (
              <GalleryItem key={i} image={g} onClick={() => lightbox.open(aranduGallery, i)} />
            ))}
          </div>
        </div>
      </section>

      {/* EL ARROYO */}
      <section style={{ ...stackSection(4), position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <img src={ARANDU_ARROYO_BG} alt="El arroyo · vista al agua desde el deck" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,15,10,0.4), rgba(18,15,10,0.9))' }} />
        <div ref={arroyo.ref} style={{ ...arroyo.style, position: 'relative', padding: 'clamp(50px,7vw,110px)', maxWidth: 640 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c1a877', marginBottom: 22 }}>El arroyo</div>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(36px,5.5vw,82px)', lineHeight: 1, margin: 0, color: '#efe7d4' }}>
            El agua también
            <br />
            encuentra su camino.
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#c4b998', maxWidth: 440, margin: '26px 0 0', fontWeight: 300 }}>
            Un arroyo propio atraviesa el entorno de Arandú y desemboca en el río Uruguay. No es un servicio más: es parte de la identidad del lugar, el sonido de fondo de cada día.
          </p>
        </div>
      </section>

      {/* UBICACIÓN */}
      <section style={{ ...stackSection(5), background: '#ece3d0', color: '#3b3322', padding: 'clamp(70px,12vh,140px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(36px,5vw,70px)', alignItems: 'center' }}>
          <div ref={ubicacionText.ref} style={ubicacionText.style}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#a2823a', marginBottom: 20 }}>Ubicación</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1.02, margin: 0, color: '#332c1d' }}>
              Dónde nos
              <br />
              encontrás.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#5b5138', margin: '24px 0 0', maxWidth: 420, fontWeight: 300 }}>
              Cabaña Arandú · [Dirección completa, localidad, Entre Ríos].
            </p>
            <a
              href="https://maps.google.com/?q=Arandu+Entre+Rios"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-block', marginTop: 28, border: '1px solid rgba(120,100,50,0.45)', color: '#3b3322', padding: '15px 28px', borderRadius: 40, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Cómo llegar →
            </a>
          </div>
          <div ref={ubicacionMap.ref} style={{ ...ubicacionMap.style, position: 'relative', aspectRatio: '16/11', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(40,30,10,0.4)' }}>
            <iframe
              title="Ubicación Cabaña Arandú"
              src="https://www.google.com/maps?q=Arandu%20Entre%20Rios&output=embed"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <TestimonialsMarquee testimonials={testimonialsArandu} variant="light" eyebrowColor="#a2823a" style={stackSection(6)} />

      {/* CTA FINAL */}
      <section style={{ ...stackSection(7), position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
        <PhotoPlaceholder tone="darker" label="Arandú · cierre, atardecer sobre el río" />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,13,9,0.72)' }} />
        <div ref={ctaFinal.ref} style={{ ...ctaFinal.style, position: 'relative', padding: 40, maxWidth: 820 }}>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.5vw,84px)', lineHeight: 1, margin: 0, color: '#efe7d4' }}>
            Una cabaña. Un río.
            <br />
            <span style={{ fontStyle: 'italic' }}>Unos días para vos.</span>
          </h2>
          <button
            onClick={openWhatsApp(waMessages.arandu)}
            style={{ cursor: 'pointer', border: 'none', background: '#c1a877', color: '#17140f', padding: 'clamp(13px,3.4vw,18px) clamp(26px,6vw,40px)', borderRadius: 40, marginTop: 34, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Consultar disponibilidad
          </button>
        </div>
      </section>
    </motion.div>
  );
}
