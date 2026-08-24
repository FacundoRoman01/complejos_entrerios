import type { ModalCabinData } from '../types';
import { openWhatsAppForCabin } from '../utils/whatsapp';

interface CabinModalProps {
  cabin: ModalCabinData | null;
  gallery: string[];
  activeSlide: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  onGoTo: (i: number) => void;
  complexName: string;
}

export function CabinModal({ cabin, gallery, activeSlide, onClose, onPrev, onNext, onGoTo, complexName }: CabinModalProps) {
  if (!cabin) return null;
  const activeImg = gallery[activeSlide] ?? gallery[0];

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 200,
        background: 'rgba(15,18,10,0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        overflowY: 'auto',
        padding: 'clamp(20px, 5vh, 60px) clamp(12px, 3vw, 30px) clamp(30px, 5vh, 60px)',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[min(1140px,98%)] max-md:w-full"
        style={{ 
          position: 'relative', 
          height: 'max-content', 
          background: '#232b18', 
          borderRadius: 20, 
          overflow: 'hidden', 
          boxShadow: '0 50px 100px -30px rgba(0,0,0,0.8)',
          marginBottom: '30px' 
        }}
      >
        <button
          onClick={onClose}
          style={{ 
            position: 'absolute', 
            top: 16, 
            right: 16, 
            zIndex: 20, 
            width: 42, 
            height: 42, 
            borderRadius: '50%', 
            border: 'none', 
            background: 'rgba(20,25,12,0.75)', 
            color: '#f4f1e6', 
            fontSize: 16, 
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          ✕
        </button>

        {/* Sección Superior: Imagen y Datos Principales */}
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1.3fr] items-stretch">
          {/* Carrusel de imágenes */}
          <div style={{ position: 'relative', minHeight: 300, background: '#141c0e' }} className="h-[280px] md:h-auto">
            <img src={activeImg} alt={cabin.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <button
              onClick={onPrev}
              style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(20,25,12,0.6)', color: '#f4f1e6', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ‹
            </button>
            <button
              onClick={onNext}
              style={{ position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)', width: 40, height: 40, borderRadius: '50%', border: 'none', background: 'rgba(20,25,12,0.6)', color: '#f4f1e6', fontSize: 20, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ›
            </button>
            <div style={{ position: 'absolute', bottom: 16, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 6 }}>
              {gallery.map((_, i) => (
                <button
                  key={i}
                  onClick={() => onGoTo(i)}
                  style={{ width: 8, height: 8, borderRadius: '50%', cursor: 'pointer', padding: 0, border: 'none', background: i === activeSlide ? '#eef4f2' : 'rgba(238,244,242,0.4)' }}
                />
              ))}
            </div>
          </div>

          {/* Información principal */}
          <div style={{ padding: 'clamp(24px, 4vw, 56px) clamp(20px, 3.5vw, 50px)', color: '#e9ecdd', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px, 4.2vw, 56px)', lineHeight: 1.05, color: '#f4f1e6' }}>{cabin.name}</div>
            <div style={{ fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginTop: 10 }}>{cabin.eyebrow}</div>
            
            {/* PIN Y BOTÓN DE UBICACIÓN */}
            <div style={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 10 }}>
              <div style={{ fontSize: 13, color: '#c7cdb4' }}>📍 {cabin.pin}</div>
              {cabin.mapUrl && (
                <a
                  href={cabin.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'none',
                    border: '1px solid rgba(167,179,120,0.5)',
                    color: '#e9ecdd',
                    padding: '8px 18px',
                    borderRadius: 30,
                    fontFamily: "'Raleway',sans-serif",
                    fontSize: 10,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Ver ubicación
                </a>
              )}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(195,209,154,0.22)', borderRadius: 14, marginTop: 20, overflow: 'hidden' }}>
              <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(195,209,154,0.15)', borderBottom: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Capacidad</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 18, color: '#f4f1e6', marginTop: 4 }}>{cabin.capacidad}</div>
              </div>
              <div style={{ padding: '14px 16px', borderBottom: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Ambientes</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 18, color: '#f4f1e6', marginTop: 4 }}>{cabin.ambientes}</div>
              </div>
              <div style={{ padding: '14px 16px', borderRight: '1px solid rgba(195,209,154,0.15)' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Dormitorios</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 18, color: '#f4f1e6', marginTop: 4 }}>{cabin.dormitorios}</div>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <div style={{ fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#a7b378' }}>Baños</div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 18, color: '#f4f1e6', marginTop: 4 }}>{cabin.banos}</div>
              </div>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.7, color: '#cdd3ba', margin: '20px 0 0', fontWeight: 300 }}>{cabin.desc}</p>
          </div>
        </div>

        {/* Sección Inferior: Comodidades y CTA */}
        <div style={{ padding: 'clamp(24px, 4vw, 56px)', paddingTop: 'clamp(16px, 2.5vw, 32px)', color: '#e9ecdd', background: 'rgba(25,31,18,0.5)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'clamp(24px, 4vw, 40px)' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginBottom: 12 }}>Comodidades</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 16px' }}>
                {cabin.comodidades.map((co, i) => (
                  <div key={i} style={{ fontSize: 13, color: '#cdd3ba' }}>✓ {co}</div>
                ))}
              </div>
            </div>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#a7b378', marginBottom: 12 }}>Beneficios</div>
              <div style={{ border: '1px solid rgba(195,209,154,0.2)', borderRadius: 14, padding: '18px 22px', fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontSize: 17, lineHeight: 1.4, color: '#dfe4cf', background: 'rgba(35,43,24,0.4)' }}>
                {cabin.dormir}
              </div>
            </div>
          </div>

          <div style={{ border: '1px solid rgba(195,209,154,0.22)', borderRadius: 16, padding: 'clamp(20px, 3.5vw, 36px)', marginTop: 30, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, background: 'rgba(20,26,13,0.6)' }}>
            <div>
              <div style={{ fontFamily: "'Raleway',sans-serif", fontStyle: 'italic', fontWeight: 600, fontSize: 'clamp(20px, 3vw, 30px)', color: '#f4f1e6' }}>
                ¿Te quedás con {cabin.name}?
              </div>
              <p style={{ fontSize: 13, color: '#c7cdb4', margin: '6px 0 0', fontWeight: 300 }}>Consultá disponibilidad — respondemos en menos de 2 horas.</p>
            </div>
            <button
              onClick={openWhatsAppForCabin(cabin.name, complexName)}
              style={{
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: '#7c8a4e',
                border: 'none',
                color: '#f5f3e8',
                padding: '14px 28px',
                borderRadius: 40,
                fontFamily: "'Raleway',sans-serif",
                fontSize: 12,
                letterSpacing: '0.18em',
                textTransform: 'uppercase'
              }}
            >
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}