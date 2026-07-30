import Link from 'next/link';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/creators-club');

export default function CreatorsClubPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl"><PageText id="club.title" /></h1>
      <p className="mb-10 text-2xl"><PageText id="club.tagline" /></p>
      <ol className="grid gap-5 md:grid-cols-3">
        {(['club.step1', 'club.step2', 'club.step3'] as const).map((step, index) => (
          <li key={step} className="rounded-lg border border-border bg-card p-7"><span className="mb-3 block text-sm text-muted">0{index + 1}</span><span className="text-xl font-semibold"><PageText id={step} /></span></li>
        ))}
      </ol>
      <Link href="/contact?topic=Creators%20Club" className="mt-8 inline-flex min-h-11 items-center font-semibold underline"><PageText id="club.cta" /></Link>
    </div>
  );
}
