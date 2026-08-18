import { useReveal } from '../hooks/useReveal';
import { PhotoPlaceholder } from '../components/PhotoPlaceholder';
import { openWhatsApp, waMessages } from '../utils/whatsapp';
import { stackSection } from '../utils/stack';

interface UnitDetailProps {
  goLoma: () => void;
}

/**
 * Generic alojamiento detail page. In the source this route exists but every cabin card now opens
 * the CabinModal instead — kept here for architectural parity with the original 7-view router.
 */
export function UnitDetail({ goLoma }: UnitDetailProps) {
  const info = useReveal<HTMLDivElement>();
  const img1 = useReveal<HTMLDivElement>();
  const img2 = useReveal<HTMLDivElement>();
  const img3 = useReveal<HTMLDivElement>();

  return (
    <div data-page style={{ position: 'relative', zIndex: 1, background: '#20291a' }}>
      <section style={{ ...stackSection(1), position: 'relative', minHeight: '82vh', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <PhotoPlaceholder tone="green" label="Alojamiento · fotografía principal de la unidad" />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(20,28,14,0.3), rgba(20,28,14,0.9))' }} />
        <div style={{ position: 'relative', padding: 'clamp(40px,6vw,90px)' }}>
          <div onClick={goLoma} style={{ cursor: 'pointer', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#c3d19a', marginBottom: 16 }}>
            ← Cabañas La Loma
          </div>
          <h1 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(42px,6vw,92px)', lineHeight: 0.98, margin: 0, color: '#f6f3ea' }}>[NOMBRE DEL ALOJAMIENTO]</h1>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 22, marginTop: 20 }}>
            <span style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#dbe0ca' }}>[CAPACIDAD]</span>
            <span style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#dbe0ca' }}>[HABITACIONES]</span>
            <span style={{ fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#dbe0ca' }}>[BAÑOS]</span>
          </div>
        </div>
      </section>

      <section style={{ ...stackSection(2), padding: 'clamp(60px,10vh,120px) clamp(20px,5vw,80px)', background: '#20291a' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: 'clamp(40px,6vw,80px)' }}>
          <div ref={info.ref} style={info.style}>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.1, margin: 0, color: '#f4f1e6' }}>Sobre este alojamiento</h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: '#a9b190', margin: '22px 0 0', maxWidth: 460, fontWeight: 300 }}>
              [DESCRIPCIÓN DEL ALOJAMIENTO — ambientes, vista, equipamiento y para quién es ideal. Completar con el contenido definitivo.]
            </p>
            <div style={{ marginTop: 34, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px 30px', maxWidth: 440 }}>
              {['[SERVICIO]', '[SERVICIO]', '[SERVICIO]', '[SERVICIO]'].map((s, i) => (
                <div key={i} style={{ borderTop: '1px solid rgba(195,177,132,0.2)', paddingTop: 12, fontSize: 14, color: '#cbceb8' }}>{s}</div>
              ))}
            </div>
            <button
              onClick={openWhatsApp(waMessages.loma)}
              style={{ cursor: 'pointer', border: 'none', background: '#7c8a4e', color: '#f5f3e8', padding: '16px 30px', borderRadius: 40, marginTop: 36, fontSize: 12, letterSpacing: '0.18em', textTransform: 'uppercase' }}
            >
              Consultar por esta cabaña
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <div ref={img1.ref} style={{ ...img1.style, position: 'relative', aspectRatio: '1', gridColumn: 'span 2' }}>
              <PhotoPlaceholder tone="green" label="Ambiente principal" />
            </div>
            <div ref={img2.ref} style={{ ...img2.style, position: 'relative', aspectRatio: '1' }}>
              <PhotoPlaceholder tone="warm" label="Dormitorio" />
            </div>
            <div ref={img3.ref} style={{ ...img3.style, position: 'relative', aspectRatio: '1' }}>
              <PhotoPlaceholder tone="stone" label="Detalle" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
