import Link from 'next/link';

export default function CreatorsClubPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">Creators Club</h1>
      <p className="text-xl text-muted">Loyalty program for repeat clients.</p>
      <p className="mt-4 text-sm text-muted">Details and earn/redeem rules pending final client simplification.</p>
      <Link href="/contact" className="underline mt-4 inline-block">Join or inquire</Link>
    </main>
  );
}
