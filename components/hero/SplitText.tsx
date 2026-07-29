'use client';

import { useState, useEffect } from 'react';

export function SplitText({
  children,
  className = '',
  delay = 0,
  stagger = 0.08,
  duration = 0.8,
  easing = 'cubic-bezier(0.22, 1, 0.36, 1)',
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  easing?: string;
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  const text = typeof children === 'string' ? children : '';
  const lines = text.split('<br />').filter((line) => line.trim() !== '');

  return (
    <span className={`split-text ${className}`} style={{ display: 'inline-block' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} className="line-reveal" style={{ display: 'block', overflow: 'hidden' }}>
          <span
            style={{
              display: 'inline-block',
              transform: visible ? 'translateY(0%)' : 'translateY(110%)',
              opacity: visible ? 1 : 0,
              transition: `transform ${duration}s ${easing} ${lineIndex * stagger}s, opacity ${duration}s ease ${lineIndex * stagger}s`,
            }}
          >
            {line}
          </span>
        </span>
      ))}
    </span>
  );
}