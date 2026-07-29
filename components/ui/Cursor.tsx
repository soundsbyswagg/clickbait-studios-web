'use client';

import { useEffect, useState } from 'react';

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: 8,
        height: 8,
        borderRadius: '100%',
        background: 'var(--color-accent)',
        pointerEvents: 'none',
        zIndex: 10002,
        transform: `translate(${position.x - 4}px, ${position.y - 4}px)`,
        transition: 'transform 0.15s ease-out',
        mixBlendMode: 'difference',
      }}
    />
  );
}