'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useReducedMotion } from '@/lib/motion';

gsap.registerPlugin(ScrollTrigger);

export function KineticType({
  children,
  text,
}: {
  children?: React.ReactNode;
  text?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!ref.current || reduceMotion) return;

    const chars = ref.current.querySelectorAll('.kinetic-char');

    gsap.fromTo(
      chars,
      { scale: 1, opacity: 0.5, letterSpacing: '0.02em' },
      {
        scale: 1,
        opacity: 1,
        letterSpacing: '0em',
        ease: 'none',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        },
      }
    );
  }, [reduceMotion]);

  const source = typeof children === 'string' ? children : text || '';

  return (
    <div ref={ref} className="overflow-hidden py-12 text-6xl font-semibold tracking-[-2px] text-neutral-200">
      {source.split('').map((char, i) => (
        <span key={i} className="kinetic-char inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
}