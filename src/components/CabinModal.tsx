import type { ModalCabinData } from '../types';

interface CabinModalProps {
  cabin: ModalCabinData | null;
  gallery: string[];
  activeSlide: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
  onWhatsApp: () => void;
}

/** Shared cabin-detail modal, reused verbatim by both La Loma and Bungalows Cande. */
export function CabinModal({ cabin, gallery, activeSlide, onClose, onPrev, onNext, onGoTo, onWhatsApp }: CabinModalProps) {
  if (!cabin) return null;
  const activeImg = gallery[activeSlide] ?? gallery[0];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15,18,10,0.78)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        justifyContent: 'center',
        overflowY: 'auto',
        padding: 'clamp(10px,3vh,44px) clamp(10px,3vw,30px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="candeModalTop-parent"
        style={{ position: 'relative', width: 'min(920px,100%)', height: 'max-content', background: '#232b18', borderRadius: 20, overflow: 'hidden', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.7)' }}
      >
        <button
          onClick={onClose}
          style={{ position: 'absolute', top: 20, right: 20, zIndex: 5, width: 46, height: 46, borderRadius: '50%', border: 'none', background: 'rgba(20,25,12,0.55)', color: '#f4f1e6', fontSize: 18, cursor: 'pointer' }}
        >
          ✕
        </button>

        <div className="candeModalTop" style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,1fr)', alignItems: 'stretch' }}>
          <div style={{ position: 'relative', minHeight: 340, background: '#232b18' }}>
            <img src={activeImg} alt={cabin.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#141c0e' }} />
            <button
              onClick={onPrev}
              style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(20,25,12,0.5)', color: '#f4f1e6', fontSize: 22, cursor: 'pointer' }}
            >
              ‹
            </button>
            <button
              onClick={onNext}
              style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', width: 44, height: 44, borderRadius: '50%', border: 'none', background: 'rgba(20,25,12,0.5)', color: '#f4f1e6', fontSize: 22, cursor: 'pointer' }}
            >
              ›
            </button>
            <div style={{ position: 'absolute', bottom: 18, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8 }}>
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onGoTo(i)}
                  style={{ width: 9, height: 9, borderRadius: '50%', cursor: 'pointer', padding: 0, border: 'none', background: i === activeSlide ? '#eef4f2' : 'rgba(238,244,242,0.4)' }}
                />
              ))}
            </div>
          </div>

          <div style={{ padding: 'clamp(30px,3.4vw,50px) clamp(26px,3vw,44px)', color: '#e9ecdd', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,4vw,52px)', lineHeight: 1, color: '#f4f1e6' }}>{cabin.name}</div>
            <div style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginTop: 12 }}>{cabin.eyebrow}</div>
            <div style={{ fontSize: 14, color: '#c7cdb4', marginTop: 14 }}>📍 {cabin.pin}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(195,209,154,0.22)', borderRadius: 14, marginTop: 28, overflow: 'hidden' }}>
              <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(195,209,154,0.15)', borderBottom: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Capacidad</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 22, color: '#f4f1e6', marginTop: 6 }}>{cabin.capacidad}</div>
              </div>
              <div style={{ padding: '18px 20px', borderBottom: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Ambientes</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 22, color: '#f4f1e6', marginTop: 6 }}>{cabin.ambientes}</div>
              </div>
              <div style={{ padding: '18px 20px', borderRight: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Dormitorios</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 22, color: '#f4f1e6', marginTop: 6 }}>{cabin.dormitorios}</div>
              </div>
              <div style={{ padding: '18px 20px' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Baños</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 22, color: '#f4f1e6', marginTop: 6 }}>{cabin.banos}</div>
              </div>
            </div>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#cdd3ba', margin: '26px 0 0', fontWeight: 300 }}>{cabin.desc}</p>
          </div>
        </div>

        <div style={{ padding: 'clamp(26px,4vw,50px)', paddingTop: 'clamp(20px,2.4vw,30px)', color: '#e9ecdd' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378' }}>Lo distintivo</div>
          <div style={{ height: 1, background: 'rgba(195,209,154,0.2)', margin: '16px 0 4px' }} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 0 }}>
            {cabin.distintivo.map((d, i) => (
              <div key={i} style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.2, color: '#eef1e2', padding: '20px 22px 20px 0' }}>
                {d}
              </div>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 'clamp(24px,4vw,50px)', marginTop: 24 }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginBottom: 14 }}>Comodidades</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 20px' }}>
                {cabin.comodidades.map((co, i) => (
                  <div key={i} style={{ fontSize: 14, color: '#cdd3ba' }}>✓ {co}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginBottom: 14 }}>Dormir</div>
              <div style={{ border: '1px solid rgba(195,209,154,0.2)', borderRadius: 14, padding: '22px 24px', fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontSize: 20, lineHeight: 1.4, color: '#dfe4cf' }}>
                {cabin.dormir}
              </div>
            </div>
          </div>
          <div style={{ border: '1px solid rgba(195,209,154,0.22)', borderRadius: 16, padding: 'clamp(24px,3vw,36px)', marginTop: 36 }}>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(24px,3vw,34px)', color: '#f4f1e6' }}>
              ¿Te quedás con {cabin.name}?
            </div>
            <p style={{ fontSize: 14, color: '#c7cdb4', margin: '10px 0 22px', fontWeight: 300 }}>Consultá disponibilidad — respondemos en menos de 2 horas.</p>
            <button
              onClick={onWhatsApp}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'none',
                border: '1px solid rgba(195,209,154,0.5)',
                color: '#f4f1e6',
                padding: '15px 28px',
                borderRadius: 40,
                fontFamily: "'Raleway',sans-serif",
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}
            >
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
