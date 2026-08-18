import type { CSSProperties } from 'react';
import { useSlideshow } from '../hooks/useSlideshow';

interface ImageCrossfadeProps {
  images: string[];
  alt: string;
  fadeMs?: number;
  kenBurns?: boolean;
  style?: CSSProperties;
  className?: string;
}

/** A stack of absolutely-positioned images crossfading on the shared global 4s tick. */
export function ImageCrossfade({ images, alt, fadeMs = 1100, kenBurns = false, style, className }: ImageCrossfadeProps) {
  const active = useSlideshow(images.length);

  return (
    <div className={className} style={{ position: 'absolute', inset: 0, ...style }}>
      {images.map((src, i) => (
        <img
          key={src + i}
          src={src}
          alt={alt}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: `opacity ${fadeMs}ms ease`,
            opacity: i === active ? 1 : 0,
            animation: kenBurns ? 'kenburns 9s ease-in-out infinite alternate' : undefined,
          }}
        />
      ))}
    </div>
  );
}
