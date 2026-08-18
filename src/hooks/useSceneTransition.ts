import { useEffect, useRef } from 'react';

const CUBIC = 'transform 1000ms cubic-bezier(0.76,0,0.24,1)';
const MOBILE_BREAKPOINT = 768;

type CtaEl = HTMLElement & { __origParent?: ParentNode | null; __origNext?: ChildNode | null };
type MapEl = HTMLElement & { __animObs?: boolean };

/**
 * The "split-curtain" cinematic scroll transition between two scenes (Bungalows Cande:
 * "La pileta climatizada" → "Ubicación"). Ported near 1:1 from the original DC component's
 * scene-stage methods, which went through many rounds of bugfixing (scroll trapping, reverse
 * micro-gesture recapture, mobile stacking) — the exact thresholds below are load-bearing.
 *
 * Desktop: each scene is split into left/right halves, absolutely positioned; scroll/wheel/touch/
 * keyboard steps between scene 0 and 1, animating both halves in opposite vertical directions.
 * Mobile (<768px): scenes stack as normal full-width sections with natural scroll.
 */
export function useSceneTransition() {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const sceneIdx = { current: 0 as 0 | 1 };
    let locked = false;
    let lockTimer: ReturnType<typeof setTimeout> | undefined;
    let stepAt: number | null = null;
    let stepDir: boolean | null = null;
    let touchY: number | null = null;
    let touchActed = false;

    const isMobile = () => window.innerWidth < MOBILE_BREAKPOINT;

    const getHalves = (sceneEl: Element) => ({
      left: sceneEl.querySelector<HTMLElement>('[data-half="left"]'),
      right: sceneEl.querySelector<HTMLElement>('[data-half="right"]'),
    });

    function layoutScenes() {
      const hint = stage!.querySelector<HTMLElement>('[data-scene-hint]');
      const scenes = Array.from(stage!.querySelectorAll<HTMLElement>('[data-scene]'));

      if (isMobile()) {
        if (hint) hint.style.display = 'none';
        stage!.style.height = 'auto';
        stage!.style.minHeight = '0';
        stage!.style.overflow = 'visible';
        scenes.forEach((sc) => {
          sc.style.position = 'relative';
          sc.style.inset = 'auto';
          sc.style.width = '100%';
          sc.style.height = 'auto';
          sc.style.transform = 'none';
          sc.style.transition = 'none';
          const { left, right } = getHalves(sc);
          [left, right].forEach((h) => {
            if (!h) return;
            h.style.position = 'relative';
            h.style.top = 'auto';
            h.style.left = 'auto';
            h.style.width = '100%';
            h.style.height = 'auto';
            h.style.transform = 'none';
            h.style.transition = 'none';
            h.style.justifyContent = 'center';
            h.style.padding = 'clamp(40px,7vh,64px) clamp(22px,6vw,40px)';
          });
          const cta = sc.querySelector<CtaEl>('[data-cta]');
          if (cta && right) {
            if (!cta.__origParent) {
              cta.__origParent = cta.parentNode;
              cta.__origNext = cta.nextSibling;
            }
            cta.style.margin = '0 0 clamp(40px,7vh,64px)';
            right.insertAdjacentElement('afterend', cta);
          }
          const map = sc.querySelector<MapEl>('[data-mapanim]');
          if (map && !map.__animObs) {
            map.__animObs = true;
            map.style.opacity = '0';
            map.style.transform = 'translateX(64px)';
            map.style.transition = 'opacity .9s cubic-bezier(0.22,1,0.36,1), transform .9s cubic-bezier(0.22,1,0.36,1)';
            const io = new IntersectionObserver(
              (entries) => {
                entries.forEach((e) => {
                  if (e.isIntersecting) {
                    map.style.opacity = '1';
                    map.style.transform = 'none';
                  }
                });
              },
              { threshold: 0.12 },
            );
            io.observe(map);
          }
        });
        return;
      }

      if (hint) hint.style.display = '';
      stage!.style.height = '100vh';
      stage!.style.overflow = 'hidden';
      scenes.forEach((sc) => {
        const cta = sc.querySelector<CtaEl>('[data-cta]');
        if (cta && cta.__origParent) {
          cta.style.margin = '28px 0 0';
          if (cta.__origNext && cta.__origNext.parentNode === cta.__origParent) {
            cta.__origParent.insertBefore(cta, cta.__origNext);
          } else {
            cta.__origParent.appendChild(cta);
          }
        }
        const map = sc.querySelector<HTMLElement>('[data-mapanim]');
        if (map) {
          map.style.opacity = '';
          map.style.transform = '';
          map.style.transition = '';
        }
      });
      scenes.forEach((sc) => {
        const { left, right } = getHalves(sc);
        if (!left || !right) return;
        sc.style.position = 'absolute';
        sc.style.inset = '0';
        sc.style.transition = 'none';
        sc.style.transform = 'none';
        left.style.position = 'absolute';
        left.style.top = '0';
        left.style.left = '0';
        left.style.width = '50%';
        left.style.height = '100%';
        left.style.transition = CUBIC;
        left.style.justifyContent = 'flex-end';
        right.style.position = 'absolute';
        right.style.top = '0';
        right.style.left = '50%';
        right.style.width = '50%';
        right.style.height = '100%';
        right.style.transition = CUBIC;
        right.style.justifyContent = 'flex-start';
      });
    }

    function applyScene(anim: boolean) {
      if (isMobile()) return;
      const idx = sceneIdx.current;
      stage!.querySelectorAll<HTMLElement>('[data-scene]').forEach((sc) => {
        const i = parseInt(sc.getAttribute('data-scene') || '0', 10);
        const { left, right } = getHalves(sc);
        if (!left || !right) return;
        const lv = i === idx ? '0' : '100%';
        const rv = i === idx ? '0' : '-100%';
        if (!anim) {
          left.style.transition = 'none';
          right.style.transition = 'none';
        }
        left.style.transform = `translateY(${lv})`;
        right.style.transform = `translateY(${rv})`;
        if (!anim) {
          void left.offsetWidth;
          left.style.transition = CUBIC;
          right.style.transition = CUBIC;
        }
      });
    }

    function lockScenes(ms: number) {
      locked = true;
      if (lockTimer) clearTimeout(lockTimer);
      lockTimer = setTimeout(() => {
        locked = false;
      }, ms);
    }

    function hideHint() {
      const h = stage!.querySelector<HTMLElement>('[data-scene-hint]');
      if (h) h.style.opacity = '0';
    }

    function engage() {
      const r = stage!.getBoundingClientRect();
      const vh = window.innerHeight;
      return { r, vh, engaged: r.top < vh * 0.5 && r.bottom > vh * 0.5 };
    }

    function step(down: boolean, e: Event | null) {
      if (isMobile()) return;
      const s = engage();
      const { r, engaged } = s;
      if (!engaged) {
        if (r.top >= s.vh * 0.5) {
          if (sceneIdx.current !== 0) {
            sceneIdx.current = 0;
            applyScene(false);
          }
        } else if (r.bottom <= s.vh * 0.5) {
          if (sceneIdx.current !== 1) {
            sceneIdx.current = 1;
            applyScene(false);
          }
        }
        return;
      }
      const canStep = (down && sceneIdx.current < 1) || (!down && sceneIdx.current > 0);
      if (!canStep) return;
      const now = Date.now();
      if (stepAt && now - stepAt < 600 && down !== stepDir) return;
      if (Math.abs(r.top) > s.vh * 0.2) return;
      if (locked) {
        e?.preventDefault();
        return;
      }
      if (Math.abs(r.top) > 8) {
        e?.preventDefault();
        window.scrollBy({ top: r.top, left: 0, behavior: 'smooth' });
        lockScenes(500);
        return;
      }
      if (down && sceneIdx.current < 1) {
        e?.preventDefault();
        sceneIdx.current = 1;
        applyScene(true);
        lockScenes(1000);
        stepAt = Date.now();
        stepDir = true;
        hideHint();
      } else if (!down && sceneIdx.current > 0) {
        e?.preventDefault();
        sceneIdx.current = 0;
        applyScene(true);
        lockScenes(1000);
        stepAt = Date.now();
        stepDir = false;
      }
    }

    function onWheel(e: WheelEvent) {
      const s = engage();
      if (!s.engaged) {
        step(e.deltaY > 0, null);
        return;
      }
      step(e.deltaY > 0, e);
    }

    function onKey(e: KeyboardEvent) {
      if (e.key !== 'ArrowDown' && e.key !== 'ArrowUp') return;
      const s = engage();
      if (!s.engaged) return;
      step(e.key === 'ArrowDown', e);
    }

    function onTouchStart(e: TouchEvent) {
      touchY = e.touches[0].clientY;
      touchActed = false;
    }

    function onTouchMove(e: TouchEvent) {
      if (isMobile()) return;
      const s = engage();
      if (!s.engaged) return;
      if (touchY == null) return;
      const dy = touchY - e.touches[0].clientY;
      if (touchActed) {
        e.preventDefault();
        return;
      }
      if (Math.abs(dy) < 18) return;
      const down = dy > 0;
      const canStep = (down && sceneIdx.current < 1) || (!down && sceneIdx.current > 0);
      if (!canStep) return;
      if (stepAt && Date.now() - stepAt < 600 && down !== stepDir) return;
      if (Math.abs(s.r.top) > s.vh * 0.2) return;
      if (locked) {
        e.preventDefault();
        return;
      }
      if (Math.abs(s.r.top) > 30) {
        e.preventDefault();
        window.scrollBy({ top: s.r.top, left: 0, behavior: 'smooth' });
        lockScenes(500);
        touchActed = true;
        return;
      }
      if (down && sceneIdx.current < 1) {
        e.preventDefault();
        sceneIdx.current = 1;
        applyScene(true);
        lockScenes(1000);
        touchActed = true;
        stepAt = Date.now();
        stepDir = true;
        hideHint();
      } else if (!down && sceneIdx.current > 0) {
        e.preventDefault();
        sceneIdx.current = 0;
        applyScene(true);
        lockScenes(1000);
        touchActed = true;
        stepAt = Date.now();
        stepDir = false;
      }
    }

    function init() {
      layoutScenes();
      applyScene(false);
    }

    init();
    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKey);
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('resize', init);

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', init);
      if (lockTimer) clearTimeout(lockTimer);
    };
  }, []);

  return stageRef;
}
