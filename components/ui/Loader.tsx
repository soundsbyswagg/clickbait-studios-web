'use client';

import { useEffect, useState } from 'react';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHidden(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="loader" data-state={hidden ? 'hidden' : 'visible'}>
      <span className="loader__word">{new Array(8).fill('·').join(' ')}</span>
    </div>
  );
}