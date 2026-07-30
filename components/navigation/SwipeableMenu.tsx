'use client';

import { useEffect } from 'react';
export function SwipeableMenu() {
  useEffect(() => {
    let startX = 0;
    let startY = 0;
    const onStart = (event: TouchEvent) => { startX = event.touches[0].clientX; startY = event.touches[0].clientY; };
    const onEnd = (event: TouchEvent) => {
      const deltaX = event.changedTouches[0].clientX - startX;
      if (startY < window.innerHeight * 0.2 && startX < 48 && deltaX > 75) window.dispatchEvent(new Event('clickbait:open-menu'));
    };
    window.addEventListener('touchstart', onStart, { passive: true });
    window.addEventListener('touchend', onEnd, { passive: true });
    return () => { window.removeEventListener('touchstart', onStart); window.removeEventListener('touchend', onEnd); };
  }, []);
  return null;
}
