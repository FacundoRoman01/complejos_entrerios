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
    <>
      {/* Estilos responsivos para mobile: oculta el botón y reestructura el layout */}
      <style>{`
        @media (max-width: 768px) {
          [data-scene-stage] {
            height: auto !important;
            overflow: visible !important;
          }
          [data-scene-stage] [data-scene] {
            position: relative !important;
            inset: auto !important;
            display: flex !important;
            flex-direction: column !important;
            height: auto !important;
            margin-bottom: 60px;
          }
          [data-scene-stage] [data-half] {
            position: relative !important;
            width: 100% !important;
            left: 0 !important;
            top: 0 !important;
            transform: none !important;
            height: auto !important;
            justify-content: center !important;
            padding: 24px 16px !important;
            text-align: center !important;
          }
          /* Forzamos que el botón desaparezca en mobile por más que el hook intente otra cosa */
          .desktop-only-cta {
            display: none !important;
          }
          [data-scene-hint] {
            display: none !important;
          }
        }
      `}</style>

      <div ref={stageRef} data-scene-stage style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#f5efe2' }}>
        {/* SCENE 0 · DESCRIPCIÓN Y CARACTERÍSTICAS */}
        <div data-scene="0" style={{ position: 'absolute', inset: 0 }}>
          <div
            data-half="left"
            style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', transform: 'translateY(0)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
          >
            <div style={{ width: '100%', maxWidth: 560, padding: '0 clamp(20px,4.5vw,80px)' }}>
              <div style={{ fontSize: 12, letterSpacing: '0.4em', textTransform: 'uppercase', color: '#3f6b3a', marginBottom: 18 }}>Bungalow Cande</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.2vw,62px)', lineHeight: 1.02, margin: 0, color: '#22331b' }}>
                Descansar, disfrutar y sentirte como en casa.
              </h2>
              <p style={{ fontSize: 14, lineHeight: 1.75, color: '#3c4a34', maxWidth: 480, margin: '22px 0 0', fontWeight: 300 }}>
                Un complejo de tres bungalows con capacidad para hasta 4 personas cada uno, ideales para disfrutar en pareja, en familia o con amigos. Ubicado camino a las Termas, combinan comodidad y tranquilidad en espacios cálidos, completos y preparados para una estadía confortable. Su principal atractivo: una pileta climatizada por caldera para disfrutar durante todo el año, sin importar el clima ni la época.
              </p>

              {/* Características con íconos */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px 24px', marginTop: 24, fontSize: 12, color: '#3c4a34', fontWeight: 500 }}>
                <span>🏡 3 bungalows</span>
                <span>👥 Hasta 4 personas c/u</span>
                <span>🏊 Pileta climatizada por caldera</span>
                <span>📍 Camino a las Termas</span>
              </div>
            </div>
          </div>
          <div
            data-half="right"
            style={{ position: 'absolute', top: 0, left: '50%', width: '50%', height: '100%', transform: 'translateY(0)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 'clamp(20px,4vw,70px)' }}
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
            <div style={{ width: '100%', maxWidth: 520, padding: '0 clamp(20px,4.5vw,80px)' }}>
              <div style={{ fontSize: 12, letterSpacing: '0.36em', textTransform: 'uppercase', color: '#3f6b3a', marginBottom: 20 }}>Ubicación</div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(28px,4.4vw,58px)', lineHeight: 1.02, margin: 0, color: '#22331b' }}>
                Dónde nos
                <br />
                encontrás.
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: '#3c4a34', margin: '24px 0 0', maxWidth: 420, fontWeight: 300 }}>
                Bungalows Cande · Camino a las Termas, Villa Elisa, Entre Ríos.
              </p>
              
              {/* Botón con clase dedicada para control estricto en mobile */}
              <a
                className="desktop-only-cta"
                href="https://maps.google.com/?q=Bungalows+Cande+Villa+Elisa+Entre+Rios"
                target="_blank"
                rel="noopener"
                style={{ display: 'inline-block', marginTop: 28, border: '1px solid rgba(63,107,58,0.55)', color: '#22331b', padding: '15px 28px', borderRadius: 40, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', textDecoration: 'none' }}
              >
                Cómo llegar &rarr;
              </a>
            </div>
          </div>

          <div
            data-half="right"
            style={{ position: 'absolute', top: 0, left: '50%', width: '50%', height: '100%', transform: 'translateY(-100%)', transition: CUBIC_TRANSITION, background: '#f5efe2', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', padding: 'clamp(20px,4vw,70px)' }}
          >
            <div data-mapanim style={{ width: '100%', maxWidth: 600, aspectRatio: '16/12', maxHeight: '72vh', position: 'relative', borderRadius: 14, overflow: 'hidden', boxShadow: '0 24px 50px -24px rgba(20,40,15,0.5)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3377.968020841436!2d-58.41232180000001!3d-32.151161599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b1d9d3248bc527%3A0x5e7ca30bbce1700f!2s%22Bungalows%20Cande%20Alojamientos%22!5e0!3m2!1ses-419!2sar!4v1787500407482!5m2!1ses-419!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0, width: '100%', height: '100%' }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        {/* Indicador de scroll */}
        <div
          data-scene-hint
          style={{ position: 'absolute', bottom: 26, left: '50%', transform: 'translateX(-50%)', zIndex: 6, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8, color: '#3f6b3a', pointerEvents: 'none', transition: 'opacity .5s ease' }}
        >
          <span style={{ fontSize: 10, letterSpacing: '0.28em', textTransform: 'uppercase' }}>Scroll</span>
          <span style={{ width: 1, height: 26, background: 'currentColor', opacity: 0.5 }} />
        </div>
      </div>
    </>
  );
}