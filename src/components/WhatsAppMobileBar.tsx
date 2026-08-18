import { useIsNavMobile } from '../hooks/useViewportWidth';
import { openWhatsApp, waMessages } from '../utils/whatsapp';

/** Fixed bottom bar shown only on mobile (replaces the floating button there). */
export function WhatsAppMobileBar() {
  const isMobile = useIsNavMobile();
  if (!isMobile) return null;

  return (
    <button
      onClick={openWhatsApp(waMessages.general)}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 55,
        border: 'none',
        background: '#7c8a4e',
        color: '#f5f3e8',
        padding: 17,
        fontSize: 12,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        cursor: 'pointer',
      }}
    >
      ✆ Consultar por WhatsApp
    </button>
  );
}
