import { useReveal } from '../hooks/useReveal';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { WordReveal } from '../components/WordReveal';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { stackSection } from '../utils/stack';

export function Promotions() {
  const eyebrow = useReveal<HTMLDivElement>();
  const para = useReveal<HTMLParagraphElement>();
  const card0 = useReveal<HTMLDivElement>();
  const card1 = useReveal<HTMLDivElement>();
  const card2 = useReveal<HTMLDivElement>();
  const closing = useReveal<HTMLDivElement>();

  return (
    <div data-page style={{ position: 'relative', zIndex: 1, background: '#17140f' }}>
      <section style={{ ...stackSection(1), padding: 'clamp(120px,20vh,220px) clamp(20px,5vw,80px) clamp(50px,8vh,90px)', textAlign: 'center' }}>
        <div ref={eyebrow.ref} style={{ ...eyebrow.style, fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#c3b184', marginBottom: 24 }}>
          Promociones
        </div>
        <WordReveal as="h1" style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(40px,6.5vw,96px)', lineHeight: 0.98, margin: 0, color: '#f6f3ea' }}>
          {'¿Pensando en'}
          <br />
          {'una escapada?'}
        </WordReveal>
        <p ref={para.ref} style={{ ...para.style, fontSize: 16, lineHeight: 1.8, color: '#c7cdb4', maxWidth: 520, margin: '24px auto 0', fontWeight: 300 }}>
          Consultanos por promociones y beneficios disponibles para tu próxima estadía en cualquiera de los tres complejos.
        </p>
      </section>

      <section style={{ ...stackSection(2), padding: '0 clamp(20px,5vw,80px) clamp(70px,12vh,150px)', background: '#17140f' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 20 }}>
          {[
            { ref: card0, tone: 'green' as const, name: 'La Loma', desc: 'Naturaleza, espacio y dos piletas.', color: '#f4f1e6', descColor: '#c3d19a', btnBg: '#7c8a4e', btnColor: '#f5f3e8', bg: 'rgba(20,28,14,0.92)', msg: waMessages.lomaPromo },
            { ref: card1, tone: 'teal' as const, name: 'Bungalows Cande', desc: 'Confort y pileta climatizada interior.', color: '#eef4f2', descColor: '#a7d0d2', btnBg: '#6fa0a4', btnColor: '#0f272e', bg: 'rgba(12,32,38,0.92)', msg: waMessages.candePromo },
            { ref: card2, tone: 'warm' as const, name: 'Arandú', desc: 'Privacidad, arroyo y río Uruguay.', color: '#efe7d4', descColor: '#d4c9b0', btnBg: '#c1a877', btnColor: '#17140f', bg: 'rgba(18,15,10,0.92)', msg: waMessages.aranduPromo },
          ].map((c) => (
            <div key={c.name} ref={c.ref.ref} style={{ ...c.ref.style, position: 'relative', overflow: 'hidden', minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 34 }}>
              <PhotoPlaceholder tone={c.tone} label={c.name} />
              <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(transparent,${c.bg})` }} />
              <div style={{ position: 'relative' }}>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 34, color: c.color }}>{c.name}</div>
                <p style={{ fontSize: 13, color: c.descColor, margin: '8px 0 22px' }}>{c.desc}</p>
                <button
                  onClick={openWhatsApp(c.msg)}
                  style={{ cursor: 'pointer', border: 'none', background: c.btnBg, color: c.btnColor, padding: '14px 24px', borderRadius: 40, fontSize: 11, letterSpacing: '0.16em', textTransform: 'uppercase' }}
                >
                  Consultar promociones
                </button>
              </div>
            </div>
          ))}
        </div>
        <div ref={closing.ref} style={{ ...closing.style, textAlign: 'center', marginTop: 'clamp(50px,8vh,90px)' }}>
          <p style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(22px,3vw,34px)', color: '#cbceb8', margin: '0 0 24px' }}>
            ¿No sabés cuál elegir? Escribinos y te ayudamos.
          </p>
          <button
            onClick={openWhatsApp(waMessages.promo)}
            style={{ cursor: 'pointer', border: '1px solid rgba(195,177,132,0.5)', background: 'none', color: '#f2eee2', padding: '16px 34px', borderRadius: 40, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Consultar por WhatsApp
          </button>
        </div>
      </section>
    </div>
  );
}
