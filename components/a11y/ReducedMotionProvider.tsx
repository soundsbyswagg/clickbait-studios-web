'use client';

import { MotionConfig } from 'framer-motion';
import { createContext, useContext, useEffect, useState } from 'react';
const ReducedMotionContext = createContext(false);

export function ReducedMotionProvider({ children }: { children: React.ReactNode }) {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return <ReducedMotionContext.Provider value={reduced}><MotionConfig reducedMotion="user">{children}</MotionConfig></ReducedMotionContext.Provider>;
}
export const useReducedMotionPreference = () => useContext(ReducedMotionContext);
