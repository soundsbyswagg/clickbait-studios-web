import Link from 'next/link';

export default function CreatorsClubPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">Creators Club</h1>
      <p className="mb-10 text-2xl">Book. Earn CLICKS. Redeem studio rewards.</p>
      <ol className="grid gap-5 md:grid-cols-3">
        {['Join Creators Club', 'Earn CLICKS through eligible purchases and activities', 'Redeem CLICKS for studio rewards'].map((step, index) => (
          <li key={step} className="rounded-lg border border-border bg-card p-7"><span className="mb-3 block text-sm text-muted">0{index + 1}</span><span className="text-xl font-semibold">{step}</span></li>
        ))}
      </ol>
      <Link href="/contact?topic=Creators%20Club" className="mt-8 inline-flex min-h-11 items-center font-semibold underline">Ask about joining</Link>
    </div>
  );
}
