import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function ContactStrip() {
  return (
    <footer className="border-t border-border py-16 text-sm text-muted" role="contentinfo">
      <div className="container grid gap-10 md:grid-cols-[1fr_auto] md:items-start">
        <div>
          <p className="text-foreground text-base mb-2">{siteConfig.address}</p>
          <p>
            <a href={`tel:${siteConfig.links.phone}`} className="hover:text-foreground hover:underline transition-colors">
              {siteConfig.links.phone}
            </a>
            {' • '}
            <a href={siteConfig.links.instagram} className="hover:text-foreground hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </p>
          <p className="mt-2 text-xs text-muted">{siteConfig.hours}</p>
          <p className="mt-1 text-xs text-muted">{siteConfig.email}</p>
          <p className="mt-2">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        </div>
        <div className="flex flex-col gap-3">
          <Link href="/contact" className="magnetic-btn magnetic-btn--primary text-sm">
            Request a Booking
          </Link>
          <Link href="/services" className="nav-link text-sm">
            Explore Services
          </Link>
          <Link href="/rooms" className="nav-link text-sm">
            View Rooms
          </Link>
        </div>
      </div>
    </footer>
  );
}