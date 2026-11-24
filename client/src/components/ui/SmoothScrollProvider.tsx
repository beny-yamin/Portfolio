import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { setLenisInstance } from '../../lib/lenisInstance';

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 1.25,
    });

    setLenisInstance(lenis);

    let rafId: number;
    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    // Smooth Automatic Section Settling Controller
    const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];
    let lastScrollY = window.scrollY;
    let scrollDirection = 0;
    let snapTimer: number | undefined;
    let isSnapping = false;
    let userInteracting = false;
    let userGestureTimer: number | undefined;

    const onUserGesture = () => {
      userInteracting = true;
      if (isSnapping) {
        isSnapping = false;
      }
      clearTimeout(userGestureTimer);
      userGestureTimer = window.setTimeout(() => {
        userInteracting = false;
      }, 160);
    };

    window.addEventListener('wheel', onUserGesture, { passive: true });
    window.addEventListener('touchstart', onUserGesture, { passive: true });

    lenis.on('scroll', (e: { scroll: number }) => {
      if (isSnapping) return;

      const currentY = e.scroll;
      const diff = currentY - lastScrollY;
      if (Math.abs(diff) > 1.5) {
        scrollDirection = diff > 0 ? 1 : -1;
      }
      lastScrollY = currentY;

      clearTimeout(snapTimer);

      snapTimer = window.setTimeout(() => {
        if (isSnapping || userInteracting) return;

        const sections = SECTION_IDS.map((id) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return {
            id,
            el,
            top: rect.top + window.scrollY,
            bottom: rect.top + window.scrollY + el.offsetHeight,
            height: el.offsetHeight,
          };
        }).filter(Boolean) as { id: string; el: HTMLElement; top: number; bottom: number; height: number }[];

        if (sections.length < 2) return;

        const vh = window.innerHeight;
        const currentScroll = window.scrollY;

        for (let i = 0; i < sections.length; i++) {
          const sec = sections[i];
          const nextSec = sections[i + 1];

          if (Math.abs(currentScroll - sec.top) < 25) {
            return;
          }

          if (nextSec && currentScroll >= sec.top - 10 && currentScroll < nextSec.top) {
            if (sec.height > vh * 1.3 && currentScroll > sec.top + 120 && currentScroll + vh < sec.bottom - 120) {
              return;
            }

            const distFromCurrent = currentScroll - sec.top;
            const distToNext = nextSec.top - currentScroll;

            let targetSec: HTMLElement | null = null;

            if (scrollDirection === 1 && distFromCurrent > 45) {
              targetSec = nextSec.el;
            } else if (scrollDirection === -1 && distToNext > 45) {
              targetSec = sec.el;
            } else if (distFromCurrent > distToNext) {
              targetSec = nextSec.el;
            } else {
              targetSec = sec.el;
            }

            if (targetSec && Math.abs(currentScroll - targetSec.offsetTop) > 20) {
              isSnapping = true;
              lenis.scrollTo(targetSec, {
                duration: 1.1,
                easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                onComplete: () => {
                  isSnapping = false;
                  lastScrollY = window.scrollY;
                },
              });
            }
            break;
          }
        }
      }, 140);
    });

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(snapTimer);
      clearTimeout(userGestureTimer);
      window.removeEventListener('wheel', onUserGesture);
      window.removeEventListener('touchstart', onUserGesture);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []);

  return <>{children}</>;
};
