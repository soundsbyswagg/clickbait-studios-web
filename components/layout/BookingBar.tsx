'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export function BookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-background/90 backdrop-blur-md transition-transform duration-300 md:hidden ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="container flex items-center justify-between py-3">
        <span className="text-sm text-muted truncate pr-4">24/7 Booking • Atlanta</span>
        <Link href="/contact" className="magnetic-btn magnetic-btn--primary text-sm whitespace-nowrap">
          Book a Session
        </Link>
      </div>
    </div>
  );
}