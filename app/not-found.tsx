import Link from 'next/link';
import { PageText } from '@/components/i18n/PageText';

export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <h1 className="text-6xl tracking-tight mb-4">404</h1>
      <p className="text-xl text-muted mb-8"><PageText id="notFound.title" /></p>
      <p className="text-muted mb-8 max-w-md mx-auto">
        <PageText id="notFound.body" />
      </p>
      <Link href="/" className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3 text-base font-medium text-accent-foreground">
        <PageText id="notFound.back" />
      </Link>
    </div>
  );
}
