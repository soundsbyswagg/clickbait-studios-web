'use client';

import Link from 'next/link';

export function LeadQualifier() {
  return (
    <section className="container py-20 md:py-28 border-b">
      <h2 className="text-3xl md:text-4xl tracking-[-0.04em] mb-3">Large or recurring sessions</h2>
      <p className="text-muted max-w-2xl mb-8">Private events, multi-hour blocks, creator packages, and ongoing production are handled directly.</p>
      <div className="grid md:grid-cols-2 gap-4">
        <Link href="/contact?topic=Private Event" className="studio-card border border-border p-6 rounded-lg text-left">
          <h3 className="font-medium text-lg mb-2">Private event</h3>
          <p className="text-sm text-muted">Launch parties, listening events, and group sessions.</p>
        </Link>
        <Link href="/contact?topic=Recurring Booking" className="studio-card border border-border p-6 rounded-lg text-left">
          <h3 className="font-medium text-lg mb-2">Recurring booking</h3>
          <p className="text-sm text-muted">Weekly or monthly studio blocks for artists and producers.</p>
        </Link>
        <Link href="/contact?topic=Creator Package" className="studio-card border border-border p-6 rounded-lg text-left">
          <h3 className="font-medium text-lg mb-2">Creator package</h3>
          <p className="text-sm text-muted">Bundled recording, mixing, and content deliverables.</p>
        </Link>
        <Link href="/contact?topic=Podcast Production" className="studio-card border border-border p-6 rounded-lg text-left">
          <h3 className="font-medium text-lg mb-2">Ongoing podcast production</h3>
          <p className="text-sm text-muted">Series recording, editing, and distribution support.</p>
        </Link>
      </div>
    </section>
  );
}