import Link from 'next/link';
import { BOOKING_URL, externalLinkProps, inquiryRoutes } from '@/lib/routes';

const intents = [
  { label: 'Engineer-Assisted Session', href: BOOKING_URL, external: true, description: 'Record with standard in-session engineering support.' },
  { label: 'Studio Rental', href: BOOKING_URL, external: true, description: 'Book studio time without an engineer.' },
  { label: 'Podcast or Content Project', href: inquiryRoutes.custom, external: false, description: 'Start a custom project inquiry.' },
  { label: 'More Than Rap', href: inquiryRoutes.moreThanRap, external: false, description: 'Ask about the youth creative-development program.' },
  { label: 'Consultation', href: inquiryRoutes.consultation, external: false, description: 'Discuss strategy, production, or artist development.' },
];

export function IntentRouter() {
  return (
    <section className="container border-b border-border py-20 md:py-28">
      <h2 className="mb-3 text-3xl tracking-[-0.04em] md:text-4xl">What do you want to create?</h2>
      <p className="mb-8 max-w-2xl text-muted">Choose the path that matches your project.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intents.map((intent) => (
          <Link key={intent.label} href={intent.href} {...(intent.external ? externalLinkProps : {})} className="studio-card rounded-lg border border-border bg-card p-6">
            <h3 className="mb-2 text-lg font-semibold">{intent.label}</h3>
            <p className="text-sm text-muted">{intent.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
