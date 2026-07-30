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
  const words = children.split(' ');

  return <span className={`split-text ${className}`}>
    <span className="sr-only">{children}</span>
    <span aria-hidden="true">
      {words.map((word, wordIndex) => {
        const characterOffset = words.slice(0, wordIndex).reduce((total, item) => total + item.length + 1, 0);
        return <span className="inline-block whitespace-nowrap" key={`${word}-${wordIndex}`}>
          {Array.from(word).map((character, characterIndex) => {
            const index = characterOffset + characterIndex;
            return <motion.span
              key={`${character}-${index}`}
              className="split-character"
              initial={false}
              animate={{ y: [0, '-0.16em', 0], opacity: [1, 0.72, 1] }}
              transition={{ delay: delay + index * stagger, duration, ease: [0.22, 1, 0.36, 1] }}
              style={{ willChange: animating ? 'transform' : 'auto' }}
              onAnimationComplete={index === children.length - 1 ? () => setAnimating(false) : undefined}
            >
              {character}
            </motion.span>;
          })}
          {wordIndex < words.length - 1 ? '\u00A0' : null}
        </span>;
      })}
    </span>
  </span>;
}
