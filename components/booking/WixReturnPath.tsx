'use client';

import Link from 'next/link';

export function WixReturnPath() {
  return (
    <div className="border border-border bg-card p-4 rounded-lg text-sm">
      <p className="font-medium mb-2">Leaving Clickbait ENT?</p>
      <p className="text-muted mb-3">
        You are being redirected to Wix for live availability and booking. After booking, you will receive confirmation.
      </p>
      <div className="flex flex-wrap gap-3">
        <Link href="/" className="underline">Return to Clickbait ENT</Link>
        <Link href="/contact" className="underline">Contact us</Link>
        <Link href="/arrival" className="underline">Arrival details</Link>
      </div>
    </div>
  );
}