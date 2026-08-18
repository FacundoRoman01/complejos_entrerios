import type { CandeUnit } from '../types';
import { openWhatsApp, waMessages } from '../utils/whatsapp';

interface CandeUnitCardProps {
  unit: CandeUnit;
  onOpenDetail: () => void;
}

export function CandeUnitCard({ unit, onOpenDetail }: CandeUnitCardProps) {
  return (
    <div
      style={{
        flex: '0 0 clamp(300px,80vw,380px)',
        scrollSnapAlign: 'start',
        background: '#fff',
        borderRadius: 16,
        overflow: 'hidden',
        boxShadow: '0 24px 50px -28px rgba(20,49,58,0.35)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden', background: '#dfe7e2' }}>
        <img src={unit.img} alt={unit.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: 'clamp(24px,2.6vw,34px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(34px,3.4vw,46px)', lineHeight: 1, color: '#2b3320' }}>{unit.name}</div>
        <div style={{ fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#7c8a4e', marginTop: 12 }}>{unit.cap}</div>
        <div style={{ height: 1, background: 'rgba(20,49,58,0.12)', margin: '22px 0' }} />
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#4a5a5c', margin: 0, fontWeight: 300 }}>{unit.desc}</p>
        <div style={{ height: 1, background: 'rgba(20,49,58,0.12)', margin: '24px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 'auto' }}>
          <button
            onClick={onOpenDetail}
            style={{ cursor: 'pointer', border: 'none', background: '#2b3320', color: '#f5f3e8', padding: '14px 26px', borderRadius: 40, fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Ver detalle →
          </button>
          <button
            onClick={openWhatsApp(waMessages.cande)}
            style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c8a4e' }}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
