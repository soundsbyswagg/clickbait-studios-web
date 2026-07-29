import Link from 'next/link';
import { inquiryRoutes } from '@/lib/routes';

export function PricingDetails() {
  return (
    <section className="mt-16 grid gap-5 lg:grid-cols-3" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="sr-only">Pricing and service terms</h2>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">Base studio session</p>
        <h3 className="mb-4 text-2xl font-semibold">$100 base session</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>Three-hour minimum</li>
          <li>Standard in-session engineering support included</li>
          <li>50% deposit or full payment</li>
          <li>Website processing fees apply</li>
        </ul>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">Additional production work</p>
        <h3 className="mb-4 text-2xl font-semibold">After the session</h3>
        <ul className="space-y-2 text-sm text-muted">
          <li>Additional engineering: $50/hour or selected engineer&apos;s professional rate</li>
          <li>Rough mixing: $50/hour</li>
          <li>Final mixing: $50/hour</li>
          <li>Mastering and revisions are paid add-ons; maximum two revisions</li>
          <li>Files stored for 30 days; typical turnaround is 24–72 hours based on the project</li>
        </ul>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">Custom services</p>
        <h3 className="mb-4 text-2xl font-semibold">Custom quote — start with a consultation.</h3>
        <p className="mb-5 text-sm text-muted">For private events, recurring bookings, creator packages, ongoing podcast production, branding, marketing, video, label, or group projects.</p>
        <Link href={inquiryRoutes.consultation} className="font-semibold underline">Submit an inquiry</Link>
      </article>
    </section>
  );
}
