'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { Icon } from '@/components/ui/Icon';

type MediaLightboxProps = {
  src: string;
  caption: string;
  onClose: () => void;
};

export function MediaLightbox({ src, caption, onClose }: MediaLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();
  useEffect(() => {
    const previousFocus = document.activeElement as HTMLElement | null;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'Tab') {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    closeRef.current?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [onClose]);
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t('media.dialog')}
      onClick={onClose}
    >
      <div className="relative max-w-4xl w-full" onClick={(event) => event.stopPropagation()}>
        <button ref={closeRef} type="button" className="icon-button absolute right-2 top-2 z-10" onClick={onClose} aria-label={t('media.close')}><Icon name="close" /></button>
        <div className="relative aspect-video bg-card">
          <Image src={src} alt={caption} fill className="object-contain" />
        </div>
        <p className="text-center mt-4 text-sm text-muted">{caption}</p>
      </div>
    </div>
  );
}
