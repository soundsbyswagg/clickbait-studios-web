import Link from 'next/link';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/about');

export default function AboutPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <p className="mb-3 text-sm uppercase tracking-widest text-muted"><PageText id="about.eyebrow" /></p>
      <h1 className="mb-6 text-5xl tracking-tight md:text-6xl">Clickbait ENT</h1>
      <p className="text-xl leading-relaxed text-muted"><PageText id="about.body" /></p>
      <div className="mt-10 flex flex-wrap gap-4">
        <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground"><PageText id="home.book" /></Link>
        <Link href="/contact" className="inline-flex min-h-11 items-center font-semibold underline"><PageText id="about.project" /></Link>
      </div>
    </div>
  );
}
