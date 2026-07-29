'use client';

import Link from 'next/link';
import { services } from '@/content/site';

export function BookingGuard() {
  const unverified = services.find((s) => !s.wixUrl);

  if (!unverified) return null;

  return (
    <div className="border border-border bg-card p-4 rounded-lg text-sm" role="alert">
      <p className="font-medium mb-2">Booking Notice</p>
      <p className="text-muted mb-3">
        {unverified.title} requires manual confirmation. Please contact us directly to book.
      </p>
      <Link href="/contact" className="text-sm font-medium underline">Go to contact page</Link>
    </div>
  );
}