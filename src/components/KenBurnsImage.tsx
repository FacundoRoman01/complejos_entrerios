interface KenBurnsImageProps {
  src: string;
  alt: string;
  durationS: number;
}

/** Single background image with a slow, looping Ken Burns zoom — used by the resort page heroes. */
export function KenBurnsImage({ src, alt, durationS }: KenBurnsImageProps) {
  return (
    <div style={{ position: 'absolute', inset: 0, animation: `kenburns ${durationS}s ease-in-out infinite alternate` }}>
      <img src={src} alt={alt} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}
