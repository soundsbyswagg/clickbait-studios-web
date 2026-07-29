'use client';

import { createContext, useContext } from 'react';
import { useReducedMotion } from '@/lib/motion';

const MotionContext = createContext(false);

export function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionContext.Provider value={shouldReduceMotion}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotionSafe() {
  return useContext(MotionContext);
}