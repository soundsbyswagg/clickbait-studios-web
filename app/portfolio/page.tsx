import Link from 'next/link';

export default function PortfolioPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">Work</h1>
      <p className="text-xl text-muted mb-8">Artist sessions, completed tracks, BTS, and community playlist.</p>

      <div className="prose max-w-none">
        <p>
          Portfolio content is drawn from approved social media and client work.
          All items require explicit permission before publication.
        </p>
        <p className="text-sm text-muted">
          Current status: Inventory in progress. Community playlist available via Instagram @clickbait.ent.
        </p>
      </div>

      <div className="mt-8">
        <Link href="/contact" className="underline">Request to feature your work</Link>
      </div>
    </main>
  );
}
