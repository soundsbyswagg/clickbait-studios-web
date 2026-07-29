'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

export function ScrollTextMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduceMotion) return;

    const lines = ref.current.querySelectorAll('.motion-line');

    gsap.set(lines, { x: 0 });

    gsap.to(lines, {
      x: (i) => (i % 2 === 0 ? -120 : 120),
      ease: 'none',
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        end: 'bottom 20%',
        scrub: 1,
      },
    });
  }, [reduceMotion]);

  return (
    <div ref={ref} className="overflow-hidden py-12 text-6xl font-semibold tracking-[-2px] text-muted">
      {children}
    </div>
  );
}
