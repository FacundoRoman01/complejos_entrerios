import type { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { useFooterReveal } from '../hooks/useFooterReveal';
import { openWhatsApp, waMessages } from '../utils/whatsapp';

/** Footer "curtain reveal": fixed at the bottom, uncovered once the page scrolls past it. */
export function Footer() {
  const { wrapRef, innerRef } = useFooterReveal();

  return (
    <div ref={wrapRef} style={{ position: 'relative', clipPath: 'polygon(0 0,100% 0,100% 100%,0 100%)' }}>
      <footer
        ref={innerRef}
        style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          width: '100%',
          fontFamily: "'Raleway', sans-serif",
          background: '#0f130a',
          color: '#cbceb8',
          padding: 'clamp(60px,9vh,100px) clamp(20px,5vw,80px) 40px',
        }}
      >
        <div style={styles.mainGrid}>
          <div style={styles.brandColumn}>
            <div style={styles.brandEyebrow}>Complejos</div>
            <div style={styles.brandName}>Entre Ríos</div>
            <p style={styles.brandDescription}>Cabañas y alojamientos en Entre Ríos. Tres complejos, una misma forma de entender el descanso.</p>
          </div>

          <div style={styles.linksColumn}>
            <div style={styles.linksHeading}>Complejos</div>
            <div style={styles.linksList}>
              <Link to="/la-loma" style={styles.link}>La Loma</Link>
              <Link to="/cande" style={styles.link}>Bungalows Cande</Link>
              <Link to="/arandu" style={styles.link}>Arandú</Link>
            </div>
          </div>

          <div style={styles.linksColumn}>
            <div style={styles.linksHeading}>Navegación</div>
            <div style={styles.linksList}>
              <Link to="/" style={styles.link}>Inicio</Link>
            </div>
          </div>

          <div style={styles.linksColumn}>
            <div style={styles.linksHeading}>Contacto</div>
            <div style={styles.linksList}>
              <span onClick={openWhatsApp(waMessages.general)} style={styles.link}>WhatsApp</span>
              <span style={styles.disabledLink}>[ INSTAGRAM ]</span>
              <span style={styles.disabledLink}>[ UBICACIÓN ]</span>
            </div>
          </div>

        </div>
        <div style={styles.subFooter}>
          <span>© 2026 Complejos Entre Ríos</span>
          <span>Entre Ríos · Argentina</span>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  mainGrid: {
    maxWidth: 1200,
    margin: '0 auto',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '44px',
    justifyContent: 'space-between',
  } as CSSProperties,
  brandColumn: {
    flex: '1 1 100%',
    maxWidth: '100%',
  } as CSSProperties,
  brandEyebrow: { fontSize: 9, letterSpacing: '0.42em', textTransform: 'uppercase', color: '#c3b184' } as CSSProperties,
  brandName: { fontSize: 34, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#f4f1e6', marginTop: 4 } as CSSProperties,
  brandDescription: { fontSize: 14, lineHeight: 1.8, color: '#9aa383', margin: '18px 0 0', fontWeight: 300 } as CSSProperties,
  linksColumn: {
    flex: '1 1 180px',
  } as CSSProperties,
  linksHeading: { fontSize: 11, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#7c8a4e', marginBottom: 16 } as CSSProperties,
  linksList: { display: 'flex', flexDirection: 'column', gap: 11, fontSize: 14 } as CSSProperties,
  link: { cursor: 'pointer', color: '#cbceb8', textDecoration: 'none' } as CSSProperties,
  disabledLink: { color: '#6f7758' } as CSSProperties,
  subFooter: {
    maxWidth: 1200,
    margin: '52px auto 0',
    paddingTop: 24,
    borderTop: '1px solid rgba(195,177,132,0.14)',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    fontSize: 11,
    letterSpacing: '0.1em',
    color: '#6f7758',
  } as CSSProperties,
};

// Para lograr el efecto de la media query sin errores de tipo,
// separamos los estilos y los aplicamos en el JSX, aunque en este caso
// el uso de `flex-basis` con `minmax` en el grid original o un `flex-basis`
// más inteligente en flexbox ya maneja la responsividad.
// La siguiente corrección simplifica y logra el mismo objetivo visual.

// @ts-ignore - Esta es una forma de simular una media query en style objects, pero no es estándar y da error en TS.
// La mejor solución sería usar una librería CSS-in-JS o separar a un archivo .css.
// Por ahora, ajustamos el flex para que se comporte como se espera.
styles.brandColumn.flexBasis = '420px';
