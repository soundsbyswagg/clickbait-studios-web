import Link from 'next/link';
import { moreThanRap } from '@/content/site';
import { inquiryRoutes } from '@/lib/routes';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';
import { LocalizedProgramLists } from '@/components/program/LocalizedProgramLists';
import { analyticsEvents } from '@/lib/analytics';

export const metadata = metadataFor('/more-than-rap');

export default function MoreThanRapPage() {
  return (
    <div className="container py-12 md:py-20">
      <p className="mb-3 text-sm uppercase tracking-widest text-muted"><PageText id="program.eyebrow" /></p>
      <h1 className="mb-4 text-5xl tracking-tight md:text-7xl">{moreThanRap.name}</h1>
      <p className="mb-10 max-w-2xl text-xl text-muted"><PageText id="program.intro" /></p>
      <div className="grid gap-6 md:grid-cols-2">
        <LocalizedProgramLists />
      </div>
      <Link href={inquiryRoutes.moreThanRap} data-analytics-event={analyticsEvents.moreThanRapInquiryClick} data-analytics-location="program_page" className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground"><PageText id="program.cta" /></Link>
    </div>
  );
}
