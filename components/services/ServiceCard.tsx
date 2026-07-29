'use client';

import Link from 'next/link';
import { services } from '@/content/site';

export function ServiceCard({ service }: { service: typeof services[0] }) {
  if (!service.wixUrl) {
    return (
      <div className="studio-card border border-border p-7 rounded-lg group">
        <h3 className="font-medium text-xl mb-2 group-hover:underline">{service.title}</h3>
        <p className="text-sm text-muted mb-4">{service.description}</p>
        <div className="text-xs text-muted mb-4">{service.duration} • {service.startingPrice}</div>
        <Link href="/contact" className="text-sm font-medium">Contact for booking →</Link>
      </div>
    );
  }

  return (
    <div className="studio-card border border-border p-7 rounded-lg group">
      <h3 className="font-medium text-xl mb-2 group-hover:underline">{service.title}</h3>
      <p className="text-sm text-muted mb-4">{service.description}</p>
      <div className="text-xs text-muted mb-4">{service.duration} • {service.startingPrice}</div>
      <Link href={service.wixUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-medium">
        Book now →
      </Link>
    </div>
  );
}