import { useState } from 'react';
import { useIsNavMobile } from '../hooks/useViewportWidth';
import { WHATSAPP_PLACEHOLDER_LINK } from '../utils/whatsapp';

/** Fixed floating WhatsApp button, hidden on mobile where the full-width bar takes over. */
export function WhatsAppFloat() {
  const isMobile = useIsNavMobile();
  const [hover, setHover] = useState(false);
  if (isMobile) return null;

  return (
    <a
      href={WHATSAPP_PLACEHOLDER_LINK}
      target="_blank"
      rel="noopener"
      aria-label="Escribinos por WhatsApp"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'fixed',
        bottom: 24,
        right: 24,
        zIndex: 90,
        width: 60,
        height: 60,
        borderRadius: '50%',
        background: hover ? '#1ebe57' : '#25d366',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 12px 30px -8px rgba(0,0,0,0.45)',
      }}
    >
      <svg viewBox="0 0 32 32" width={32} height={32} fill="#fff" aria-hidden="true">
        <path d="M16.01 3.2c-7.06 0-12.8 5.73-12.8 12.79 0 2.25.59 4.45 1.71 6.39L3.2 28.8l6.6-1.72a12.76 12.76 0 0 0 6.2 1.58h.01c7.05 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.7 12.7 0 0 0-9.04-3.61zm0 23.03h-.01c-1.86 0-3.68-.5-5.27-1.44l-.38-.22-3.92 1.03 1.05-3.82-.25-.39a10.6 10.6 0 0 1-1.63-5.66c0-5.87 4.78-10.65 10.66-10.65 2.85 0 5.52 1.11 7.53 3.12a10.58 10.58 0 0 1 3.12 7.54c0 5.87-4.78 10.65-10.65 10.65zm5.84-7.98c-.32-.16-1.89-.93-2.18-1.04-.29-.11-.5-.16-.72.16-.21.32-.82 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.59-.95-.85-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.19.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.72-1.73-.99-2.37-.26-.62-.52-.54-.72-.55l-.61-.01c-.21 0-.56.08-.85.4-.29.32-1.11 1.09-1.11 2.66 0 1.57 1.14 3.08 1.3 3.29.16.21 2.25 3.43 5.44 4.81.76.33 1.35.52 1.81.67.76.24 1.46.21 2.01.13.61-.09 1.89-.77 2.16-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37z" />
      </svg>
    </a>
  );
}
