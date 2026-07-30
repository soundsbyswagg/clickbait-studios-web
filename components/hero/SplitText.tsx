'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { useReducedMotionPreference } from '@/components/a11y/ReducedMotionProvider';

export function SplitText({ children, className = '', delay = 0, stagger = 0.025, duration = 0.55 }: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  easing?: string;
}) {
  const [animating, setAnimating] = useState(true);
  const reducedMotion = useReducedMotionPreference();
  if (typeof children !== 'string' || reducedMotion) return <span className={className}>{children}</span>;

  return <span className={`split-text ${className}`} aria-label={children}>
    {Array.from(children).map((character, index) => (
      <motion.span
        key={`${character}-${index}`}
        aria-hidden="true"
        className="split-character"
        initial={false}
        animate={{ y: [0, '-0.16em', 0], opacity: [1, 0.72, 1] }}
        transition={{ delay: delay + index * stagger, duration, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: animating ? 'transform' : 'auto' }}
        onAnimationComplete={index === children.length - 1 ? () => setAnimating(false) : undefined}
      >
        {character === ' ' ? '\u00A0' : character}
      </motion.span>
    ))}
  </span>;
}
