'use client';

import Link from 'next/link';
import { services } from '@/content/site';

const intents = [
  {
    label: 'Engineer-Assisted Session',
    href: services[0].wixUrl || '/contact',
    description: 'Full engineer support in A or B Room.',
  },
  {
    label: 'Solo Session',
    href: services[1].wixUrl || '/contact',
    description: 'Self-serve studio time.',
  },
  {
    label: 'Podcast / Content',
    href: services[2].wixUrl || '/contact',
    description: 'Dedicated podcast and content room.',
  },
  {
    label: 'More Than Rap',
    href: '/more-than-rap',
    description: 'Youth creative program enrollment.',
  },
  {
    label: 'Consultation',
    href: '/contact?topic=Consultation',
    description: 'Strategy and artist development.',
  },
];

export function IntentRouter() {
  return (
    <section className="container py-20 md:py-28 border-b">
      <h2 className="text-3xl md:text-4xl tracking-[-0.04em] mb-3">What are you here to do?</h2>
      <p className="text-muted max-w-2xl mb-8">Choose your path and we’ll route you to the right booking flow.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {intents.map((intent) => (
          <Link
            key={intent.label}
            href={intent.href}
            target="_blank"
            rel="noopener noreferrer"
            className="studio-card border border-border p-6 rounded-lg group"
          >
            <h3 className="font-medium text-lg mb-2 group-hover:underline">{intent.label}</h3>
            <p className="text-sm text-muted">{intent.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}