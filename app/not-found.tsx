import Link from 'next/link';
import { siteConfig } from '@/content/site';

export default function NotFound() {
  return (
    <main className="container py-16 text-center">
      <h1 className="text-6xl tracking-tight mb-4">404</h1>
      <p className="text-xl text-muted mb-8">Page not found</p>
      <p className="text-muted mb-8 max-w-md mx-auto">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might have been moved or doesn&apos;t exist.
      </p>
      <Link href="/" className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 text-base font-medium text-white hover:bg-card">
        Back to {siteConfig.name}
      </Link>
    </main>
  );
}
