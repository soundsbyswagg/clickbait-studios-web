'use client';

import { useEffect, useRef } from 'react';
import { ReactLenis, LenisRef } from 'lenis/react';
import { useReducedMotion } from '@/lib/motion';
import 'lenis/dist/lenis.css';

export function SmoothScroll({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const lenisRef = useRef<LenisRef | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const lenis = lenisRef.current?.lenis;
    if (!lenis || !reduceMotion) return;

    const disableSmoothWheel = () => {
      lenis.options.smoothWheel = false;
    };

    const enableSmoothWheel = () => {
      lenis.options.smoothWheel = true;
    };

    disableSmoothWheel();

    const interactiveSelectors = 'textarea, input, select, [contenteditable="true"]';
    document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((el) => {
      el.addEventListener('mouseenter', enableSmoothWheel);
      el.addEventListener('mouseleave', disableSmoothWheel);
      el.addEventListener('focusin', enableSmoothWheel);
      el.addEventListener('focusout', disableSmoothWheel);
    });

    return () => {
      document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((el) => {
        el.removeEventListener('mouseenter', enableSmoothWheel);
        el.removeEventListener('mouseleave', disableSmoothWheel);
        el.removeEventListener('focusin', enableSmoothWheel);
        el.removeEventListener('focusout', disableSmoothWheel);
      });
      lenis.options.smoothWheel = true;
    };
  }, [reduceMotion]);

  return (
    <ReactLenis
      ref={lenisRef}
      root
      options={{
        lerp: 0.09,
        smoothWheel: !reduceMotion,
        syncTouch: false,
        duration: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}