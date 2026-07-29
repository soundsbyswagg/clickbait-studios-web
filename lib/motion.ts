export const MOTION = {
  fast: 0.18,
  normal: 0.36,
  slow: 0.7,
  stagger: 0.08,
  easing: [0.22, 1, 0.36, 1] as const,
} as const;

// Reduced motion helper
export function useReducedMotion() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}
