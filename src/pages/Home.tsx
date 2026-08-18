import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import { complejoSummaries, faqs, heroHomeSlides } from '../data/mockData';
import { BG_FOREST_HOME, HOME_CTA_BG, HOME_PROMO_BG, TERMAS_ENTRE_RIOS } from '../data/images';
import { ImageCrossfade } from '../components/ImageCrossfade';
import { ComplejoCard } from '../components/ComplejoCard';
import { FaqAccordion } from '../components/FaqAccordion';
import { WordReveal } from '../components/WordReveal';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { scrollToId } from '../utils/scroll';
import { stackSection } from '../utils/stack';

export function Home() {
  const destino = useReveal<HTMLDivElement>();
  const promo = useReveal<HTMLDivElement>();
  const faqHeading = useReveal<HTMLDivElement>();
  const faqList = useReveal<HTMLDivElement>();
  const ctaFinal = useReveal<HTMLDivElement>();
  const svc0 = useReveal<HTMLDivElement>({ delay: 0, variant: 'card' }); // prettier-ignore
  const svc1 = useReveal<HTMLDivElement>({ delay: 0.16, variant: 'card' }); // prettier-ignore
  const svc2 = useReveal<HTMLDivElement>({ delay: 0.32, variant: 'card' }); // prettier-ignore

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
      data-page style={{ position: 'relative', zIndex: 1 }}
    >
      {/* HERO */}
      <section style={{ ...stackSection(1), minHeight: '100vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden', background: '#17140f' }}>
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <ImageCrossfade images={heroHomeSlides} alt="Complejos Entre Ríos" fadeMs={1300} kenBurns />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(18,22,12,0.55) 0%, rgba(18,22,12,0.15) 40%, rgba(15,18,10,0.85) 100%)' }} />
        </div>
        <div style={{ position: 'relative', padding: '0 clamp(20px,5vw,80px) clamp(60px,9vh,110px)', maxWidth: 1000 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#c3b184', marginBottom: 26 }}>Cabañas &amp; alojamientos · Entre Ríos</div>
          <WordReveal as="h1" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(46px,8.5vw,120px)', lineHeight: 0.94, letterSpacing: '-0.015em', margin: 0, color: '#f6f3ea' }}>
            {'Un lugar para'}
            <br />
            {'bajar el ritmo.'}
          </WordReveal>
          <p style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(20px,2.4vw,30px)', color: '#d8dcc4', margin: '22px 0 0', maxWidth: 560 }}>
            Tres complejos, tres formas de habitar el paisaje entrerriano.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginTop: 40 }}>
            <button onClick={() => scrollToId('los-complejos')} style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: '16px 30px', borderRadius: 40, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Descubrir los complejos
            </button>
            <button onClick={openWhatsApp(waMessages.general)} style={{ cursor: 'pointer', background: 'none', border: '1px solid rgba(242,238,226,0.45)', color: '#f2eee2', padding: '16px 30px', borderRadius: 40, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* FONDO BOSQUE: complejos + intro marca */}
      <div
        style={{
          ...stackSection(2),
          background: `linear-gradient(180deg, rgba(245,244,236,0.3) 0%, rgba(32,41,26,0.28) 45%, rgba(23,20,15,0.55) 100%), url('${BG_FOREST_HOME}')`,
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <section id="los-complejos" style={{ background: 'transparent', padding: 'clamp(70px,12vh,150px) 0' }}>
          <div style={{ textAlign: 'center', padding: '0 24px', marginBottom: 'clamp(50px,7vh,90px)' }}>
            <WordReveal as="div" style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#26331d', marginBottom: 22 }}>
              Los complejos
            </WordReveal>
            <WordReveal as="h2" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(38px,6vw,82px)', lineHeight: 1, margin: 0, color: '#1f2914' }}>
              {'Elegí dónde'}
              <br />
              {'querés quedarte.'}
            </WordReveal>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(20px,3vw,40px)', maxWidth: 1240, margin: '0 auto', padding: '0 clamp(20px,5vw,80px)' }}>
            {complejoSummaries.map((c, i) => (
              <ComplejoCard key={c.id} complejo={c} delay={i * 0.14} />
            ))}
          </div>
        </section>
      </div>

      {/* ENTRE RÍOS DESTINO */}
      <section style={{ ...stackSection(3), minHeight: '70vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#17140f' }}>
        <img src={TERMAS_ENTRE_RIOS} alt="Termas de Entre Ríos · vista aérea del parque termal" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(15,18,10,0.9), rgba(15,18,10,0.3))' }} />
        <div ref={destino.ref} style={{ ...destino.style, position: 'relative', padding: 'clamp(50px,7vw,110px)', maxWidth: 640 }}>
          <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#c3b184', marginBottom: 22 }}>El destino</div>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,5vw,68px)', lineHeight: 1.02, margin: 0, color: '#f4f1e6' }}>
            Hospedate con nosotros
            <br />
            y disfrutá las termas
            <br />
            <span style={{ fontStyle: 'italic', color: '#c3b184' }}>con descuento.</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.85, color: '#c7cdb4', maxWidth: 440, margin: '24px 0 0', fontWeight: 300 }}>
            Alojándote en cualquiera de nuestros complejos accedés a un descuento exclusivo en la entrada a las termas. El plan perfecto para completar tu escapada.
          </p>
        </div>
      </section>

      {/* SERVICIOS EDITORIAL */}
      <section style={{ ...stackSection(4), background: '#20291a', padding: 'clamp(70px,12vh,150px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'clamp(16px,2vw,26px)' }}>
            {[
              { ref: svc0, title: 'Descansar.', text: 'Silencio, verde y espacio para no hacer nada. El primer lujo es el tiempo.' },
              { ref: svc1, title: 'Disfrutar.', text: 'Piletas, asados, tardes largas y noches tranquilas. Todo a tu ritmo.' },
              { ref: svc2, title: 'Conectar.', text: 'Con la naturaleza, con los tuyos y con vos mismo. Sin apuro.' },
            ].map((s) => (
              <div key={s.title} ref={s.ref.ref} style={{ ...s.ref.style, padding: 'clamp(34px,4vw,52px) clamp(28px,3vw,40px)', background: '#20291a', border: '1px solid rgba(195,177,132,0.18)', borderRadius: 16 }}>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(30px,3.4vw,46px)', color: '#f4f1e6' }}>{s.title}</div>
                <p style={{ fontSize: 14, lineHeight: 1.8, color: '#a9b190', margin: '14px 0 0', fontWeight: 300 }}>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOCIONES BAND */}
      <section style={{ ...stackSection(5), background: `#7c8a4e url('${HOME_PROMO_BG}') center/cover no-repeat`, color: '#f6f3ea', padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,80px)', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg,rgba(22,32,15,0.55),rgba(22,32,15,0.7))' }} />
        <div ref={promo.ref} style={{ ...promo.style, position: 'relative', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#e9e4d5', opacity: 0.85, marginBottom: 20 }}>Promociones</div>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,5vw,64px)', lineHeight: 1.02, margin: 0 }}>¿Pensando en una escapada?</h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, margin: '20px auto 34px', maxWidth: 520, color: '#e2e6d5' }}>Consultanos por las promociones y beneficios disponibles para tu próxima estadía.</p>
          <button onClick={openWhatsApp(waMessages.promo)} style={{ cursor: 'pointer', border: 'none', background: '#f6f3ea', color: '#16200f', padding: '17px 36px', borderRadius: 40, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Consultar promociones
          </button>
        </div>
      </section>

      {/* PREGUNTAS FRECUENTES */}
      <section style={{ ...stackSection(6), background: '#283618', padding: 'clamp(70px,12vh,150px) clamp(20px,5vw,80px)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div ref={faqHeading.ref} style={{ ...faqHeading.style, marginBottom: 'clamp(40px,6vh,70px)', maxWidth: 520 }}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#c3b184', marginBottom: 20 }}>Preguntas frecuentes</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,60px)', lineHeight: 1.02, margin: 0, color: '#f4f1e6' }}>Todo lo que necesitás saber.</h2>
          </div>
          <div ref={faqList.ref} style={faqList.style}>
            <FaqAccordion faqs={faqs} />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ ...stackSection(7), minHeight: '90vh', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', overflow: 'hidden', background: `#0f130a url('${HOME_CTA_BG}') center/cover no-repeat` }}>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,15,8,0.6)' }} />
        <div ref={ctaFinal.ref} style={{ ...ctaFinal.style, position: 'relative', padding: 40, maxWidth: 900 }}>
          <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(40px,7vw,104px)', lineHeight: 0.98, margin: 0, color: '#f6f3ea' }}>
            ¿Dónde empieza tu
            <br />
            próxima escapada?
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', margin: '38px 0 30px' }}>
            <Link to="/la-loma" style={ctaPillStyle}>La Loma</Link>
            <Link to="/cande" style={ctaPillStyle}>Bungalows Cande</Link>
            <Link to="/arandu" style={ctaPillStyle}>Arandú</Link>
          </div>
          <button onClick={openWhatsApp(waMessages.general)} style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: '13px 28px', borderRadius: 40, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}>
            Consultar disponibilidad
          </button>
        </div>
      </section>
    </motion.div>
  );
}

const ctaPillStyle = {
  cursor: 'pointer',
  fontSize: 12,
  letterSpacing: '0.2em',
  textTransform: 'uppercase' as const,
  color: '#d8dcc4',
  border: '1px solid rgba(216,220,196,0.35)',
  padding: '12px 22px',
  textDecoration: 'none',
  borderRadius: 30,
};
