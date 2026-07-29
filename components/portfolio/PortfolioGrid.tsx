'use client';

import { useState } from 'react';
import Image from 'next/image';
import { site } from '@/content/site';
import { MediaLightbox } from './MediaLightbox';

const approvedItems = (site.portfolioItems ?? []).filter((item) => item.permission);

export function PortfolioGrid() {
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  if (approvedItems.length === 0) {
    return (
      <div className="container py-20 md:py-28 text-center">
        <h1 className="text-5xl md:text-6xl tracking-[-0.04em] mb-6">Work</h1>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          Portfolio content is drawn from approved social media and client work. All items require explicit permission before publication.
        </p>
        <p className="text-sm text-muted">Current status: Inventory in progress. Community playlist available via Instagram @clickbait.ent.</p>
      </div>
    );
  }

  return (
    <div className="container py-20 md:py-28">
      <h1 className="text-5xl md:text-6xl tracking-[-0.04em] mb-6">Work</h1>
      <p className="text-muted max-w-2xl mb-10">Artist sessions, completed tracks, BTS, and community playlist.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {approvedItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="studio-card group relative overflow-hidden rounded-lg border border-border bg-card p-0 text-left"
            onClick={() => setLightbox({ src: item.src, caption: item.caption })}
          >
            <div className="aspect-video relative bg-neutral-900">
              {item.type === 'image' ? (
                <Image src={item.src} alt={item.caption} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted">Video preview</div>
              )}
            </div>
            <div className="p-5">
              <p className="text-sm font-medium">{item.caption}</p>
              {item.clientName && <p className="text-xs text-muted mt-1">{item.clientName}</p>}
              {item.serviceProvided && <p className="text-xs text-muted">{item.serviceProvided}</p>}
            </div>
          </button>
        ))}
      </div>

      {lightbox && (
        <MediaLightbox
          src={lightbox.src}
          caption={lightbox.caption}
          onClose={() => setLightbox(null)}
        />
      )}
    </div>
  );
}