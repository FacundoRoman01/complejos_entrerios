/** WhatsApp helpers. Número configurado para Complejos Entre Ríos. */

const WHATSAPP_NUMBER = '5493442580767';

/** Placeholder link used by the always-visible floating WhatsApp button (no prefilled text). */
export const WHATSAPP_PLACEHOLDER_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

/** Builds a click handler that opens WhatsApp with a prefilled, context-specific message. */
export function openWhatsApp(message: string): () => void {
  return () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
  };
}

/** Helper específico para generar el mensaje dinámico de una cabaña concreta */
export function openWhatsAppForCabin(cabinName: string, complexName: string): () => void {
  const message = `Hola, quisiera consultar disponibilidad para ${cabinName} de ${complexName}.`;
  return openWhatsApp(message);
}

export const waMessages = {
  general: 'Hola, quería consultar disponibilidad en Complejos Entre Ríos.',
  promo: 'Hola, quería consultar por las promociones disponibles en Complejos Entre Ríos.',
  loma: 'Hola, quisiera consultar disponibilidad para Cabañas La Loma.',
  lomaPromo: 'Hola, quería consultar promociones de Cabañas La Loma.',
  arandu: 'Hola, quisiera consultar disponibilidad para Arandú.',
  aranduPromo: 'Hola, quería consultar promociones de Arandú.',
  cande: 'Hola, quisiera consultar disponibilidad para Bungalows Cande.',
  candePromo: 'Hola, quería consultar promociones de Bungalows Cande.',
} as const;