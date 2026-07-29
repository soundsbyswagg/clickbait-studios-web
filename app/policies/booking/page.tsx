import Link from 'next/link';

export default function BookingPolicyPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-8">Booking & Cancellation Policy</h1>

      <div className="space-y-6 text-muted">
        <div>
          <h2 className="font-medium mb-2">Deposits & No-Shows</h2>
          <p>Deposits are non-refundable for no-shows.</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">Lateness & Grace Periods</h2>
          <p>Clients receive a 15-minute lateness window. Sessions have a 5-minute end-of-session grace period.</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">Extensions</h2>
          <p>Any session extension must be communicated to the engineer, approved, and confirmed in-house.</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">Age & Responsibility</h2>
          <p>Minimum booking age: 18. The client is financially responsible for any damage caused during the booking.</p>
        </div>

        <div>
          <h2 className="font-medium mb-2">Prohibited Conduct</h2>
          <ul className="list-disc pl-5">
            <li>Smoking</li>
            <li>Guns or weapons</li>
            <li>Illegal activity</li>
          </ul>
        </div>
      </div>

      <p className="mt-8 text-sm text-muted">
        Full policy details (cancellation windows, refunds, guests, file liability, etc.) are pending final client confirmation.
      </p>

      <div className="mt-6">
        <Link href="/contact" className="underline">Questions? Contact us</Link>
      </div>
    </main>
  );
}
