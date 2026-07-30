'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || !window.matchMedia('(pointer:fine)').matches) return;
    const onMove = (event: PointerEvent) => {
      cursor.style.transform = `translate3d(${event.clientX - 5}px,${event.clientY - 5}px,0)`;
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, []);
  return <div ref={cursorRef} className="custom-cursor" aria-hidden="true" />;
}
