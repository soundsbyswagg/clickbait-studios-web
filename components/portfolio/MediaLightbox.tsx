'use client';

import Image from 'next/image';

type MediaLightboxProps = {
  src: string;
  caption: string;
  onClose: () => void;
};

export function MediaLightbox({ src, caption, onClose }: MediaLightboxProps) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 p-4"
      onClick={onClose}
    >
      <div className="max-w-4xl w-full">
        <div className="relative aspect-video bg-neutral-900">
          <Image src={src} alt={caption} fill className="object-contain" />
        </div>
        <p className="text-center mt-4 text-sm text-muted">{caption}</p>
      </div>
    </div>
  );
}