'use client';

import { useEffect } from 'react';
import { siteConfig } from '@/content/site';

export default function HeroMedia() {
  useEffect(() => {
    const img = new window.Image();
    img.src = siteConfig.heroPoster;
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <img
        src={siteConfig.heroPoster}
        alt=""
        className="w-full h-full object-cover"
        loading="eager"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}

export function HeroMediaFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/40" aria-hidden="true">
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  );
}