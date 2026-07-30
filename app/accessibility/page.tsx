import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/accessibility');

export default function AccessibilityPage() {
  return <div className="container max-w-3xl py-12 md:py-20">
    <h1 className="type-h1 mb-8">Accessibility</h1>
    <div className="space-y-6 text-muted">
      <p>Clickbait ENT is working to make this website usable with keyboards, screen readers, reduced-motion preferences, high-contrast settings, and adjustable text sizes.</p>
      <p>The site includes skip links, visible focus indicators, semantic landmarks, reduced-motion behavior, contrast controls, and text-size controls. Accessibility is reviewed through automated checks and manual testing remains ongoing.</p>
      <p>If you encounter an accessibility barrier, call <a className="underline" href={`tel:${siteConfig.links.phone}`}>{siteConfig.links.phone}</a> or message <a className="underline" href={siteConfig.links.instagram} target="_blank" rel="noopener noreferrer">@clickbait.ent</a>.</p>
    </div>
    <Link href="/" className="mt-8 inline-flex items-center font-semibold underline">Return home</Link>
  </div>;
}
