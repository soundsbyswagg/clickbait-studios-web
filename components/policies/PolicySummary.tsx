'use client';

import Link from 'next/link';

const policies = [
  {
    title: 'Booking window',
    body: 'Sessions must normally be booked at least 4 hours before the requested start time. Late requests are subject to availability.',
  },
  {
    title: 'Cancellation and rescheduling',
    body: 'Cancellations or reschedules require advance notice. Same-day changes may incur fees. Contact us as early as possible.',
  },
  {
    title: 'Guest limits',
    body: 'A Room holds up to 6 guests. B Room holds up to 3 guests. Extra guests require prior approval and may affect rates.',
  },
  {
    title: 'Payment',
    body: 'Payment is due at session start. Accepted methods are confirmed at booking. Exact engineer rates and add-ons are billed at checkout.',
  },
  {
    title: 'Studio conduct',
    body: 'Respect the space, equipment, and other sessions. No external recording without permission. Follow engineer instructions during sessions.',
  },
];

export function PolicySummary() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      {policies.map((policy) => (
        <div key={policy.title} className="studio-card border border-border p-5 rounded-lg">
          <h3 className="text-sm font-semibold mb-2">{policy.title}</h3>
          <p className="text-sm text-muted mb-3">{policy.body}</p>
          <Link href="/policies/booking" className="text-xs underline">Full booking policy</Link>
        </div>
      ))}
    </div>
  );
}