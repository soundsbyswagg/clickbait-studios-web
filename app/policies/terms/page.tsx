import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-8">Terms of Service</h1>
      <p className="text-neutral-600">
        By booking with Clickbait ENT you agree to our studio rules, including but not limited to the booking and cancellation policy.
        Full terms are pending client legal review.
      </p>
      <p className="mt-4 text-sm">
        <Link href="/policies/booking">View Booking Policy</Link> • <Link href="/contact" className="underline">Contact for full terms</Link>
      </p>
    </main>
  );
}
