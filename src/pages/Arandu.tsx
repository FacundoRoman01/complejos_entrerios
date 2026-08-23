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
<section 
  style={{ 
    ...stackSection(1), 
    minHeight: '100vh', 
    display: 'flex', 
    alignItems: 'center', 
    overflow: 'hidden' 
  }}
>
  <KenBurnsImage src={ARANDU_HERO_BG} alt="Arandú · pileta en el parque junto al agua" durationS={26} />
  <div 
    style={{ 
      position: 'absolute', 
      inset: 0, 
      background: 'linear-gradient(90deg, rgba(18,15,10,0.92) 0%, rgba(18,15,10,0.5) 45%, rgba(18,15,10,0.2) 100%)' 
    }} 
  />

  {/* Contenedor con padding superior dinámico para salvar el header */}
  <div 
    style={{ 
      position: 'relative', 
      padding: 'clamp(110px, 14vh, 150px) clamp(20px,5vw,80px) clamp(40px, 6vh, 60px)', 
      maxWidth: 760 
    }}
  >
    <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c1a877', marginBottom: 24 }}>
      Cabaña Arandú
    </div>

    <WordReveal 
      as="h1" 
      style={{ 
        fontFamily: "'Raleway',sans-serif", 
        fontWeight: 700, 
        fontSize: 'clamp(44px,7.5vw,108px)', 
        lineHeight: 0.96, 
        margin: 0, 
        color: '#efe7d4' 
      }}
    >
      {'Un lugar para'}
      <br />
      <span style={{ fontStyle: 'italic', color: '#d8c8a5' }}>desconectar.</span>
    </WordReveal>

    <div style={{ width: 70, height: 1, background: '#c1a877', margin: '32px 0' }} />

    <p style={{ fontSize: 16, lineHeight: 1.85, color: '#d4c9b0', maxWidth: 480, fontWeight: 300 }}>
    Un lugar exclusivo para desconectar del mundo y reconectar con lo esencial. 
    </p>

    <button
      onClick={openWhatsApp(waMessages.arandu)}
      style={{ 
        cursor: 'pointer', 
        border: '1px solid rgba(193,168,119,0.6)', 
        background: 'none', 
        color: '#efe7d4', 
        padding: '16px 30px', 
        borderRadius: 40, 
        marginTop: 34, 
        fontSize: 12, 
        letterSpacing: '0.18em', 
        textTransform: 'uppercase' 
      }}
    >
      Ver alojamiento
    </button>
  </div>
</section>
{/* SOBRE LA CABAÑA */}
<section style={{ ...stackSection(2), background: '#f5efe2', padding: 'clamp(50px,10vh,140px) clamp(16px,4vw,80px)' }}>
  {/* TÍTULO SUPERIOR CENTRADO */}
  <div style={{ textAlign: 'center', maxWidth: 800, margin: '0 auto clamp(30px,5vh,64px)' }}>
    <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#a2823a' }}>La cabaña</div>
  </div>

  <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 'clamp(30px,5vw,80px)', alignItems: 'start' }}>
    
    {/* COLUMNA IZQUIERDA: CARRUSEL DE IMÁGENES */}
    <div ref={cabana.ref} style={cabana.style} className="w-full">
      <div className="galItem" style={{ position: 'relative', aspectRatio: '4/5', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(40,30,10,0.4)' }}>
        <img
          onClick={() => {
            // Solo abre el lightbox si la pantalla es mediana o superior (desktop)
            if (window.innerWidth >= 768) {
              lightbox.open(aranduGallery, mainIndex);
            }
          }}
          src={mainImage.src}
          alt={mainImage.alt}
          className="cursor-default md:cursor-pointer"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <button
          onClick={() => setMainIndex((i) => (i - 1 + aranduGallery.length) % aranduGallery.length)}
          aria-label="Anterior"
          style={{ cursor: 'pointer', position: 'absolute', top: '50%', left: 10, transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(23,20,15,0.6)', color: '#fff', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
        >
          ‹
        </button>
        <button
          onClick={() => setMainIndex((i) => (i + 1) % aranduGallery.length)}
          aria-label="Siguiente"
          style={{ cursor: 'pointer', position: 'absolute', top: '50%', right: 10, transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(23,20,15,0.6)', color: '#fff', fontSize: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
        >
          ›
        </button>
      </div>
    </div>

    {/* COLUMNA DERECHA: ESPECIFICACIONES, DESCRIPCIÓN Y COMODIDADES */}
    <div ref={cabanaData.ref} style={{ ...cabanaData.style }} className="w-full overflow-hidden">
      
      {/* GRILLA DE ESPECIFICACIONES (2x2) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(120,100,50,0.25)', borderRadius: 16, overflow: 'hidden' }}>
        {[
          { label: 'Capacidad', value: 'Hasta 6 personas', borderRight: true, borderBottom: true },
          { label: 'Dormitorios', value: '2', borderRight: false, borderBottom: true },
          { label: 'Baño', value: '1', borderRight: true, borderBottom: false },
          { label: 'Ambientes', value: '3', borderRight: false, borderBottom: false },
        ].map((cell) => (
          <div
            key={cell.label}
            style={{
              padding: 'clamp(14px,3.5vw,24px) clamp(14px,3.5vw,26px)',
              borderRight: cell.borderRight ? '1px solid rgba(120,100,50,0.18)' : undefined,
              borderBottom: cell.borderBottom ? '1px solid rgba(120,100,50,0.18)' : undefined,
            }}
          >
            <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a2823a' }}>{cell.label}</div>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(18px,3.5vw,28px)', color: '#332c1d', marginTop: 6 }}>{cell.value}</div>
          </div>
        ))}
      </div>

      {/* DESCRIPCIÓN */}
      <p style={{ margin: '20px 0 0', fontSize: 'clamp(14px, 1.5vw, 16px)', lineHeight: 1.7, color: '#5b5138', fontWeight: 300 }}>
        Cabaña Arandú es una cabaña exclusiva para hasta 6 personas, ubicada en Pueblo Liebig, a solo 5 minutos de Colón. Cuenta con dos dormitorios y amplios espacios verdes para disfrutar de una estadía tranquila y en contacto con la naturaleza. Su arroyo con desembocadura en el río Uruguay, el muelle habilitado para pesca, la mini pileta de uso exclusivo y los espacios de sombra hacen de Arandú un lugar ideal para descansar, compartir y disfrutar al aire libre.
      </p>

      {/* COMODIDADES */}
      <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a2823a', margin: '24px 0 14px' }}>Comodidades</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px clamp(12px,3vw,20px)' }}>
        {aranduBeneficios.map((b) => (
          <div key={b} style={{ fontSize: 13, color: '#4a4230', display: 'flex', gap: 8, alignItems: 'baseline' }}>
            <span style={{ color: '#a2823a' }}>✓</span> {b}
          </div>
        ))}
      </div>

      {/* BOTÓN DE CONSULTA */}
      <button
        onClick={openWhatsApp(waMessages.arandu)}
        style={{ cursor: 'pointer', border: 'none', background: '#a2823a', color: '#f5efe2', padding: 'clamp(12px,3vw,16px) clamp(24px,5vw,34px)', borderRadius: 40, marginTop: 28, fontSize: 'clamp(11px,2.5vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
      >
        Consultar disponibilidad
      </button>

    </div>
  </div>

  {/* BARRA INFERIOR DE CARACTERÍSTICAS / ÍCONOS */}
  <div style={{ maxWidth: 1200, margin: '40px auto 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px 24px', fontSize: 13, color: '#5b5138', fontWeight: 500, borderTop: '1px solid rgba(120,100,50,0.2)', paddingTop: '24px', textAlign: 'center' }}>
    <span>🌿 Mucho espacio verde</span>
    <span>🏡 Cabaña exclusiva</span>
    <span>🌊 Arroyo con desembocadura en el río Uruguay</span>
    <span>🎣 Muelle habilitado para pesca</span>
    <span>🌳 Sector con mucha sombra</span>
    <span>🧉 Mesa de patio y hamacas paraguayas</span>
    <span>🏊 Mini pileta de uso exclusivo</span>
    <span>📍 Pueblo Liebig, a 5 minutos de Colón</span>
  </div>
</section>

      {/* GALERÍA */}
      <section className="hidden md:block" style={{ ...stackSection(3), background: '#f5efe2', padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,80px)' }}>
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
<section className="max-md:items-center max-md:justify-center max-md:text-center" style={{ ...stackSection(4), position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
  <img src={ARANDU_ARROYO_BG} alt="El arroyo · vista al agua desde el deck" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
  
  {/* Gradiente ajustado para cubrir toda la pantalla uniformemente en mobile */}
  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,15,10,0.7) 0%, rgba(18,15,10,0.5) 50%, rgba(18,15,10,0.9) 100%)' }} />
  
  <div ref={arroyo.ref} className="max-md:mx-auto max-md:p-4" style={{ ...arroyo.style, position: 'relative', padding: 'clamp(50px,7vw,110px)', maxWidth: 640 }}>
    {/* <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c1a877', marginBottom: 22 }}>Un arroyo</div> */}
    <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 500, fontStyle: 'italic', fontSize: 'clamp(36px,5.5vw,82px)', lineHeight: 1, margin: 0, color: '#efe7d4' }}>
      Un arroyo para mirar,
      <br />
      disfrutar y recordar
    </h2>
    <p className="max-md:mx-auto" style={{ fontSize: 15, lineHeight: 1.85, color: '#c4b998', maxWidth: 440, margin: '26px 0 0', fontWeight: 300 }}>
      Uno de sus principales atractivos es su ubicación privilegiada: el fondo del complejo se encuentra junto a un arroyo que desemboca en el río Uruguay, creando un entorno especial para relajarse y conectar con el paisaje. 
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
              Cabañas Arandú se encuentra en Pueblo Liebig, Entre Ríos, a tan solo 5 minutos de Colón, en un entorno natural único, rodeado de mucho espacio verde y la tranquilidad característica de este hermoso pueblo.
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
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.5160953887594!2d-58.203737!3d-32.163354999999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95ae2f6a8c26db99%3A0x78f5554c736cf4d5!2sCaba%C3%B1as%20Arandu!5e0!3m2!1ses!2sar!4v1787499957109!5m2!1ses!2sar" 
    width="600" 
    height="450" 
    style={{ border: 0 }} 
    allowFullScreen 
    loading="lazy" 
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>
        </div>
      </section>
      

      <TestimonialsMarquee testimonials={testimonialsArandu} variant="light" eyebrowColor="#a2823a" style={stackSection(6)} />

     {/* CTA FINAL */}
<section style={{ ...stackSection(7), position: 'relative', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden' }}>
  
  {/* Imagen de fondo desde Cloudinary */}
  <img 
    src="https://res.cloudinary.com/gdsp19ht/image/upload/v1787182489/cabana_arandu20.webp" 
    alt="Arandú · cierre, atardecer sobre el río" 
    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} 
  />

  {/* Capa oscura superpuesta para proteger la lectura del texto */}
  <div style={{ position: 'absolute', inset: 0, background: 'rgba(16,13,9,0.72)' }} />

  <div ref={ctaFinal.ref} style={{ ...ctaFinal.style, position: 'relative', padding: 40, maxWidth: 820 }}>
    <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(36px,5.5vw,84px)', lineHeight: 1, margin: 0, color: '#efe7d4' }}>
      Una cabaña.
      <br /> Un río.
      <span style={{ fontStyle: 'italic' }}> <br /> Unos días para vos.</span>
    </h2>
    <button
      onClick={openWhatsApp(waMessages.arandu)}
      style={{ cursor: 'pointer', border: 'none', background: '#c1a877', color: '#17140f', padding: 'clamp(13px,3.4vw,18px) clamp(26px,6vw,40px)', borderRadius: 40, marginTop: 34, fontSize: 'clamp(11px,2.6vw,12px)', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 600 }}
    >
      Consultar disponibilidad
    </button>
  </div>
</section>
    </motion.div>
  );
}
