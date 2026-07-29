'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="container py-16 text-center">
      <h1 className="text-5xl tracking-tight mb-4">Something went wrong</h1>
      <p className="text-xl text-muted mb-8">
        We&apos;re sorry, but an unexpected error occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-card"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border px-6 py-3 text-base font-medium hover:bg-card"
        >
          Back to {siteConfig.name}
        </Link>
      </div>
      <p className="text-sm text-muted">
        If the problem persists,{' '}
        <Link href="/contact" className="underline">
          contact us
        </Link>
        .
      </p>
    </main>
  );
}
