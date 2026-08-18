import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import type { ComplejoSummary } from '../types';
import { ImageCrossfade } from './ImageCrossfade';

interface ComplejoCardProps {
  complejo: ComplejoSummary;
  delay: number;
}

/** One of the three "Elegí dónde querés quedarte" cards on the home page. */
export function ComplejoCard({ complejo, delay }: ComplejoCardProps) {
  const { ref, style } = useReveal<HTMLAnchorElement>({ delay, variant: 'card' });

  return (
    <Link
      to={`/${complejo.id.replace('laloma', 'la-loma')}`}
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
          background: `linear-gradient(to top, ${complejo.gradientFrom} 0%, ${complejo.gradientMid} 34%, transparent 64%)`,
        }}
      />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: 'clamp(22px,2.4vw,30px)', color: '#f4f1e6' }}>
        <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,3vw,40px)', lineHeight: 1, margin: 0 }}>{complejo.name}</h3>
        <div style={{ fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: complejo.accentTextColor, marginTop: 12 }}>
          {complejo.cabinCountLabel}
        </div>
      </div>
    </Link>
  );
}