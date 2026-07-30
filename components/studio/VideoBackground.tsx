'use client';

import { useReducedMotionPreference } from '@/components/a11y/ReducedMotionProvider';
import HeroMedia from '@/components/hero/HeroMedia';

export function VideoBackground({ src }: { src?: string }) {
  const reducedMotion = useReducedMotionPreference();
  if (!src || reducedMotion) return <HeroMedia />;
  return <div className="absolute inset-0" aria-hidden="true">
    <video className="size-full object-cover max-md:hidden" src={src} muted loop playsInline autoPlay preload="metadata" />
    <div className="absolute inset-0 bg-background/65" />
    <div className="md:hidden"><HeroMedia /></div>
  </div>;
}
