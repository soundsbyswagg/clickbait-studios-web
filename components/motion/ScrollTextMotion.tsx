'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function ScrollTextMotion({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const lines = ref.current.querySelectorAll('.motion-line');

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
  }, []);

  return (
    <div ref={ref} className="overflow-hidden py-12 text-6xl font-semibold tracking-[-2px] text-neutral-200">
      {children}
    </div>
  );
}
