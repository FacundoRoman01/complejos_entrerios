import { useLightbox } from '../hooks/useLightbox';

/** Global full-screen photo viewer, opened from any gallery via useLightbox(). */
export function Lightbox() {
  const { state, close, next, prev } = useLightbox();
  if (!state) return null;
  const { images, index } = state;
  const current = images[index];

  return (
    <div
      onClick={close}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 300,
        background: 'rgba(12,10,6,0.94)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(16px,4vw,60px)',
      }}
    >
      <button
        onClick={close}
        aria-label="Cerrar"
        style={{ position: 'absolute', top: 22, right: 24, width: 48, height: 48, borderRadius: '50%', border: 'none', background: 'rgba(245,239,226,0.14)', color: '#f5efe2', fontSize: 22, cursor: 'pointer' }}
      >
        ✕
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        aria-label="Anterior"
        style={{ position: 'absolute', left: 'clamp(12px,3vw,40px)', top: '50%', transform: 'translateY(-50%)', width: 52, height: 52, borderRadius: '50%', border: 'none', background: 'rgba(245,239,226,0.14)', color: '#f5efe2', fontSize: 24, cursor: 'pointer' }}
      >
        ‹
      </button>
      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        aria-label="Siguiente"
        style={{ position: 'absolute', right: 'clamp(12px,3vw,40px)', top: '50%', transform: 'translateY(-50%)', width: 52, height: 52, borderRadius: '50%', border: 'none', background: 'rgba(245,239,226,0.14)', color: '#f5efe2', fontSize: 24, cursor: 'pointer' }}
      >
        ›
      </button>
      <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative', width: 'min(1100px,92vw)', height: 'min(76vh,760px)', borderRadius: 12, overflow: 'hidden', boxShadow: '0 40px 90px -30px rgba(0,0,0,0.8)' }}>
        <img src={current.src} alt={current.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain', background: '#0c0a06' }} />
      </div>
      <div style={{ marginTop: 20, textAlign: 'center', color: '#d8cfba' }}>
        <div style={{ fontSize: 14, letterSpacing: '0.04em' }}>{current.alt}</div>
        <div style={{ fontSize: 12, letterSpacing: '0.24em', color: '#a2946e', marginTop: 6 }}>
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
