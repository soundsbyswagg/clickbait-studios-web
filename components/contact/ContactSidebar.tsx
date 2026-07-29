import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

export function ContactSidebar() {
  return (
    <aside className="space-y-5">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="mb-4 text-xl font-semibold">Contact us now</h2>
        <div className="flex flex-col gap-3">
          <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-semibold text-accent-foreground">Book a Session</Link>
          <a href={`tel:${siteConfig.links.phone}`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-border font-semibold">Call {siteConfig.links.phone}</a>
          <a href={siteConfig.links.instagram} {...externalLinkProps} className="inline-flex min-h-11 items-center justify-center rounded-md border border-border font-semibold">Message @clickbait.ent</a>
        </div>
      </div>
      <div className="rounded-lg border border-border bg-card p-6 text-sm">
        <h2 className="mb-3 text-xl font-semibold">Visit</h2>
        <p>{siteConfig.address}</p>
        <p className="mt-2 text-muted">Free parking</p>
        <p className="mt-2 text-muted">{siteConfig.hours}</p>
        <p className="mt-2 text-muted">Automated arrival instructions are sent by text after booking.</p>
      </div>
    </aside>
  );
}
