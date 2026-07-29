'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

export function BookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`mobile-booking-bar fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/95 backdrop-blur-md transition-transform duration-300 md:hidden ${visible ? 'translate-y-0' : 'translate-y-full'}`}>
      <div className="container flex items-center justify-between pt-3">
        <span className="truncate pr-4 text-sm text-muted">Advance booking • Atlanta</span>
        <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground whitespace-nowrap">
          Book a Session
        </Link>
      </div>
    </div>
  );
}
