import { useSceneTransition } from '../hooks/useSceneTransition';
import { CANDE_SCENE_POOL } from '../data/images';

const CUBIC_TRANSITION = 'transform 1000ms cubic-bezier(0.76,0,0.24,1)';

/**
 * The "split-curtain" cinematic scroll transition (Bungalows Cande): "La pileta climatizada" ↔
 * "Ubicación", each split into independently-animated left/right halves. See useSceneTransition
 * for the wheel/touch/keyboard-driven scroll-hijack logic.
 */
export function SceneTransition() {
  const stageRef = useSceneTransition();

  return (
    <div ref={stageRef} data-scene-stage style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#f5efe2' }}>
      {/* SCENE 0 · PILETA */}
      <div data-scene="0" style={{ position: 'absolute', inset: 0 }}>
        <div
          data-half="left"
          style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', transform: 'translateY(0)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <div style={{ width: '100%', maxWidth: 520, padding: '0 clamp(30px,4.5vw,80px)' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#3f6b3a', marginBottom: 22 }}>La pileta climatizada</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(34px,5vw,74px)', lineHeight: 1, margin: 0, color: '#22331b' }}>
              Una pileta para disfrutar en cualquier momento.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.85, color: '#3c4a34', maxWidth: 440, margin: '28px 0 0', fontWeight: 300 }}>
              El corazón del complejo: agua templada, resguardo del clima y un espacio pensado para el relax durante todo el año.
            </p>
          </div>
        </div>
        <div
          data-half="right"
          style={{ position: 'absolute', top: 0, left: '50%', width: '50%', height: '100%', transform: 'translateY(0)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 'clamp(30px,4vw,70px)' }}
        >
          <div style={{ width: '100%', maxWidth: 560, aspectRatio: '4/5', maxHeight: '78vh', position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 60px -26px rgba(20,40,15,0.5)' }}>
            <img src={CANDE_SCENE_POOL} alt="Pileta climatizada interior" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </div>

      {/* SCENE 1 · UBICACIÓN */}
      <div data-scene="1" style={{ position: 'absolute', inset: 0 }}>
        <div
          data-half="left"
          style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', transform: 'translateY(100%)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
        >
          <div style={{ width: '100%', maxWidth: 520, padding: '0 clamp(30px,4.5vw,80px)' }}>
            <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#3f6b3a', marginBottom: 20 }}>Ubicación</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(32px,4.4vw,58px)', lineHeight: 1.02, margin: 0, color: '#22331b' }}>
              Dónde nos
              <br />
              encontrás.
            </h2>
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#3c4a34', margin: '24px 0 0', maxWidth: 420, fontWeight: 300 }}>
              Bungalows Cande · [Dirección completa, localidad, Entre Ríos].
            </p>
            <a
              data-cta=""
              href="https://maps.google.com/?q=Bungalows+Cande+Entre+Rios"
              target="_blank"
              rel="noopener"
              style={{ display: 'inline-block', marginTop: 28, border: '1px solid rgba(63,107,58,0.55)', color: '#22331b', padding: '15px 28px', borderRadius: 40, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
            >
              Cómo llegar →
            </a>
          </div>
        </div>
        <div
          data-half="right"
          style={{ position: 'absolute', top: 0, left: '50%', width: '50%', height: '100%', transform: 'translateY(-100%)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 'clamp(30px,4vw,70px)' }}
        >
          <div data-mapanim style={{ width: '100%', maxWidth: 600, aspectRatio: '16/12', maxHeight: '72vh', position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(20,40,15,0.5)' }}>
            <iframe
              title="Ubicación Bungalows Cande"
              src="https://www.google.com/maps?q=Bungalows%20Cande%20Entre%20Rios&output=embed"
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* indicador de scroll */}
      <div
        data-scene-hint
        style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#3f6b3a', pointerEvents: 'none', transition: 'opacity .5s ease' }}
      >
        <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Scroll</span>
        <span style={{ width: 1, height: 26, background: 'currentColor', opacity: 0.5 }} />
      </div>
    </div>
  );
}
