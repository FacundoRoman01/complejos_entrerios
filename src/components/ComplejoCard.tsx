import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import type { ComplejoSummary } from '../types';
import { ImageCrossfade } from './ImageCrossfade';

interface ComplejoCardProps {
  complejo: ComplejoSummary;
  delay: number;
  onOpenModal?: () => void; // Agregamos la función del modal de forma opcional
}

// Diccionario actualizado con los IDs reales de cada complejo
const complejoLocations: Record<string, string> = {
  'la-loma': 'Villa Elisa, Entre Ríos',
  'cande': 'Villa Elisa, Entre Ríos',
  'arandu': 'Pueblo Liebig, Entre Ríos',
};

export function ComplejoCard({ complejo, delay, onOpenModal }: ComplejoCardProps) {
  const { ref, style } = useReveal<HTMLAnchorElement>({ delay, variant: 'card' });
  const locationText = complejoLocations[complejo.id] || 'Entre Ríos';

  return (
    <Link
      to={`/${complejo.id.replace('laloma', 'la-loma')}`}
      onClick={(e) => {
        if (onOpenModal) {
          e.preventDefault(); // Evita que navegue a otra página si querés que abra el modal
          onOpenModal();
        }
      }}
      ref={ref}
      className="compCard"
      style={{
        ...style,
        cursor: 'pointer',
        position: 'relative',
        aspectRatio: '3/4',
        borderRadius: 18,
        overflow: 'hidden',
        background: complejo.cardBg,
        boxShadow: `0 20px 45px -18px ${complejo.shadowColor}`,
        textDecoration: 'none',
      }}
    >
      <ImageCrossfade className="compImg" images={complejo.images} alt={complejo.name} fadeMs={1100} />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(to top, ${complejo.gradientFrom} 0%, ${complejo.gradientMid} 50%, transparent 80%)`,
        }}
      />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(22px,2.4vw,30px)', color: '#f4f1e6' }}>
        
        {/* Título */}
        <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, margin: 0 }}>
          {complejo.name}
        </h3>

        {/* Ubicación */}
        <div style={{ fontFamily: "'Raleway',sans-serif", fontSize: 'clamp(14px, 1.2vw, 16px)', color: 'rgba(244,241,230,0.85)', marginTop: 8 }}>
          {locationText}
        </div>

        {/* Conteo de alojamientos */}
        <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: complejo.accentTextColor, marginTop: 14 }}>
          {complejo.cabinCountLabel}
        </div>

        {/* Botón / Enlace "Ver alojamiento" con flecha */}
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f4f1e6', marginTop: 18, borderTop: '1px solid rgba(244,241,230,0.25)', paddingTop: 14, width: 'fit-content' }}>
          Ver alojamiento <span style={{ transition: 'transform 0.3s' }}>→</span>
        </div>

      </div>
    </Link>
  );
}