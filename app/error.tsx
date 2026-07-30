'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { PageText } from '@/components/i18n/PageText';

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
      <h1 className="text-5xl tracking-tight mb-4"><PageText id="error.title" /></h1>
      <p className="text-xl text-muted mb-8">
        <PageText id="error.body" />
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground"
        >
          <PageText id="error.retry" />
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md border border-border bg-card px-6 py-3 text-base font-medium"
        >
          <PageText id="error.back" />
        </Link>
      </div>
      <p className="text-sm text-muted">
        <PageText id="error.help" />
      </p>
    </div>
  );
}
