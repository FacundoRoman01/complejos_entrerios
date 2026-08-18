import type { LomaCabin } from '../types';
import { openWhatsApp, waMessages } from '../utils/whatsapp';

interface LomaCabinCardProps {
  cabin: LomaCabin;
  onOpenDetail: () => void;
}

export function LomaCabinCard({ cabin, onOpenDetail }: LomaCabinCardProps) {
  return (
    <div style={{ background: '#fff', borderRadius: 16, overflow: 'hidden', boxShadow: '0 24px 50px -28px rgba(38,51,29,0.35)', display: 'flex', flexDirection: 'column' }}>
      <div style={{ position: 'relative', aspectRatio: '16/11', overflow: 'hidden', background: '#e3ddcb' }}>
        <img src={cabin.img} alt={cabin.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div style={{ padding: 'clamp(24px,2.6vw,34px)', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#a08b52' }}>{cabin.eyebrow}</div>
        <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(34px,3.4vw,46px)', lineHeight: 1, color: '#3a4a28', marginTop: 8 }}>{cabin.name}</div>
        <div style={{ fontSize: 13, letterSpacing: '0.06em', color: '#7c8a4e', marginTop: 14 }}>{cabin.specs}</div>
        <div style={{ height: 1, background: 'rgba(38,51,29,0.12)', margin: '22px 0' }} />
        <p style={{ fontSize: 14, lineHeight: 1.75, color: '#5b6349', margin: 0, fontWeight: 300 }}>{cabin.desc}</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 20 }}>
          {cabin.tags.map((t) => (
            <span key={t} style={{ fontSize: 12, color: '#5b6349', border: '1px solid rgba(38,51,29,0.2)', borderRadius: 30, padding: '8px 16px' }}>
              {t}
            </span>
          ))}
        </div>
        <div style={{ height: 1, background: 'rgba(38,51,29,0.12)', margin: '24px 0' }} />
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginTop: 'auto' }}>
          <button
            onClick={onOpenDetail}
            style={{ cursor: 'pointer', border: 'none', background: '#3a4a28', color: '#f5f3e8', padding: '14px 26px', borderRadius: 40, fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase' }}
          >
            Ver detalle →
          </button>
          <button
            onClick={openWhatsApp(waMessages.loma)}
            style={{ cursor: 'pointer', background: 'none', border: 'none', fontFamily: "'Raleway',sans-serif", fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#7c8a4e' }}
          >
            WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
