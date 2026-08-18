import type { GalleryImage } from '../types';

interface GalleryItemProps {
  image: GalleryImage;
  onClick: () => void;
}

/** One clickable Arandú gallery thumbnail with a hover zoom + "open" icon overlay. */
export function GalleryItem({ image, onClick }: GalleryItemProps) {
  return (
    <div
      onClick={onClick}
      className="galItem"
      style={{ cursor: 'pointer', position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 14, boxShadow: '0 14px 34px -20px rgba(40,30,10,0.5)' }}
    >
      <img src={image.src} alt={image.alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', background: '#141c0e' }} />
      <div className="galOverlay" style={{ position: 'absolute', inset: 0, background: 'rgba(30,24,10,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background .35s ease' }}>
        <span
          className="galIcon"
          style={{ width: 46, height: 46, borderRadius: '50%', background: 'rgba(245,239,226,0.92)', color: '#332c1d', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, opacity: 0, transform: 'scale(.85)', transition: 'opacity .35s ease, transform .35s ease' }}
        >
          ⤢
        </span>
      </div>
    </div>
  );
}
