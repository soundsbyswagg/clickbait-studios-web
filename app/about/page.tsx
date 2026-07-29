import Link from 'next/link';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <p className="mb-3 text-sm uppercase tracking-widest text-muted">Clickbait Enterprise</p>
      <h1 className="mb-6 text-5xl tracking-tight md:text-6xl">Clickbait ENT</h1>
      <p className="text-xl leading-relaxed text-muted">An Atlanta creative space for recording artists, producers, podcasters, and record labels. The studio offers professional space, engineering support, and creative services built around the work.</p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground">Book a Session</Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center font-semibold underline">Ask about a project</Link>
      </div>
    </div>
  );
}
