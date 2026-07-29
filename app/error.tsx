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
    if (process.env.NODE_ENV === 'development') {
      console.error(error);
    }
  }, [error]);

  return (
    <div className="container py-16 text-center">
      <h1 className="text-5xl tracking-tight mb-4">Something went wrong</h1>
      <p className="text-xl text-muted mb-8">
        We&apos;re sorry, but an unexpected error occurred.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-medium"
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
    </div>
  );
}
