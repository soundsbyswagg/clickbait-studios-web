import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight">Studio Terms</h1>
      <p className="text-muted">By booking studio time, the booking client agrees to the published booking, payment, arrival, timing, age, responsibility, and conduct rules.</p>
      <Link href="/policies/booking" className="mt-6 inline-flex min-h-11 items-center font-semibold underline">Read the booking policy</Link>
    </div>
  );
}
