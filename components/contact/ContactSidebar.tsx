'use client';

import Link from 'next/link';
import { siteConfig } from '@/content/site';

export function ContactSidebar() {
  return (
    <aside className="space-y-8">
      <div className="border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-4">Contact</h2>
        <div className="space-y-3 text-sm text-muted">
          <div>
            <p className="text-foreground font-medium">Phone</p>
            <a href={`tel:${siteConfig.links.phone}`} className="hover:text-foreground hover:underline transition-colors">
              {siteConfig.links.phone}
            </a>
          </div>
          <div>
            <p className="text-foreground font-medium">Instagram</p>
            <a href={siteConfig.links.instagram} className="hover:text-foreground hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
              @clickbait.ent
            </a>
          </div>
          <div>
            <p className="text-foreground font-medium">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-foreground hover:underline transition-colors">
              {siteConfig.email}
            </a>
          </div>
          <div>
            <p className="text-foreground font-medium">Location</p>
            <p>{siteConfig.address}</p>
            <p className="text-xs mt-1">{siteConfig.hours}</p>
          </div>
        </div>
      </div>

      <div className="border border-border rounded-lg p-6">
        <h2 className="text-lg font-semibold mb-2">Policies</h2>
        <p className="text-sm text-muted mb-3">Review our booking, privacy, and terms policies before your session.</p>
        <div className="flex flex-col gap-2 text-sm">
          <Link href="/policies/booking" className="underline">Booking policy</Link>
          <Link href="/policies/privacy" className="underline">Privacy policy</Link>
          <Link href="/policies/terms" className="underline">Terms</Link>
        </div>
      </div>
    </aside>
  );
}