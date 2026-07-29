import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

export function ContactStrip() {
  return (
    <footer className="border-t border-border py-16 text-sm text-muted">
      <div className="container grid gap-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mb-2 text-base text-foreground">{siteConfig.address}</p>
          <p><a href={`tel:${siteConfig.links.phone}`} className="underline">{siteConfig.links.phone}</a> • <a href={siteConfig.links.instagram} {...externalLinkProps} className="underline">Instagram</a></p>
          <p className="mt-2 max-w-2xl text-xs">{siteConfig.hours}</p>
          <p className="mt-3">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-5 font-semibold text-accent-foreground">Book a Session</Link>
          <Link href="/contact" className="inline-flex min-h-11 items-center">Submit an Inquiry</Link>
        </div>
      </div>
    </footer>
  );
}
