import Link from 'next/link';

const policies = [
  ['Advance booking', 'Book at least four hours before the requested start time.'],
  ['Arrival', 'Automated arrival instructions are sent by text after booking. A 15-minute lateness window applies.'],
  ['Session timing', 'Booked time is not extended for lateness. A five-minute end-of-session grace period applies.'],
  ['Conduct', 'No smoking, weapons, or illegal activity. The booking client is responsible for damage caused by the client or guests.'],
];

export function PolicySummary() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {policies.map(([title, body]) => <article key={title} className="rounded-lg border border-border bg-card p-5"><h3 className="mb-2 font-semibold">{title}</h3><p className="text-sm text-muted">{body}</p></article>)}
      <Link href="/policies/booking" className="inline-flex min-h-11 items-center font-semibold underline">Read the complete booking policy</Link>
    </div>
  );
}
