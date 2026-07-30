'use client';

import { useState } from 'react';
import Image from 'next/image';
import { site } from '@/content/site';
import { MediaLightbox } from './MediaLightbox';
import { usePageText } from '@/components/i18n/PageText';

const approvedItems = (site.portfolioItems ?? []).filter((item) => item.permission);

export function PortfolioGrid() {
  const t = usePageText();
  const [lightbox, setLightbox] = useState<{ src: string; caption: string } | null>(null);

  if (approvedItems.length === 0) {
    return (
      <div className="container py-20 md:py-28 text-center">
        <h1 className="text-5xl md:text-6xl tracking-[-0.04em] mb-6">{t('portfolio.title')}</h1>
        <p className="text-muted max-w-2xl mx-auto mb-8">
          {t('portfolio.empty')}
        </p>
        <a href="https://www.instagram.com/clickbait.ent/" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center font-semibold underline">{t('portfolio.instagram')}</a>
      </div>
    );
  }

  return (
    <div className="container py-20 md:py-28">
      <h1 className="text-5xl md:text-6xl tracking-[-0.04em] mb-6">{t('portfolio.title')}</h1>
      <p className="text-muted max-w-2xl mb-10">{t('portfolio.intro')}</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {approvedItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="studio-card group relative overflow-hidden rounded-lg border border-border bg-card p-0 text-left"
            onClick={() => setLightbox({ src: item.src, caption: item.caption })}
          >
            <div className="aspect-video relative bg-card">
              {item.type === 'image' ? (
                <Image src={item.src} alt={item.caption} fill className="object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center text-sm text-muted">{t('portfolio.video')}</div>
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
