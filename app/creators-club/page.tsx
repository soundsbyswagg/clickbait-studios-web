import Link from 'next/link';

export default function CreatorsClubPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">Creators Club</h1>
      <p className="text-xl text-muted mb-4">Loyalty program for repeat clients.</p>
      <p className="text-sm text-muted mb-4">Earn rewards on every session. Redeem for studio time, mixing, and production services.</p>
      <Link href="/contact" className="underline">Join or inquire</Link>
    </main>
  );
}