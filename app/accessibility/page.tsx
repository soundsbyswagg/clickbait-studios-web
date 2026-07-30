import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/accessibility');

export default function AccessibilityPage() {
  return <div className="container max-w-3xl py-12 md:py-20">
    <h1 className="type-h1 mb-8"><PageText id="accessibility.title" /></h1>
    <div className="space-y-6 text-muted">
      <p><PageText id="accessibility.body1" /></p>
      <p><PageText id="accessibility.body2" /></p>
      <p><PageText id="accessibility.barrier" /> <a className="underline" href={`tel:${siteConfig.links.phone}`}>{siteConfig.links.phone}</a> <PageText id="accessibility.orMessage" /> <a className="underline" href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">@clickbait.ent</a>.</p>
    </div>
    <Link href="/" className="mt-8 inline-flex items-center font-semibold underline"><PageText id="common.returnHome" /></Link>
  </div>;
}
