'use client';

import { ReactLenis } from 'lenis/react';
import 'lenis/dist/lenis.css';

export function SmoothScroll({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.09,
        smoothWheel: true,
        syncTouch: false,
        duration: 1.2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
