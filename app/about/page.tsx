import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-4">About Clickbait ENT</h1>

      <div className="space-y-6 text-muted">
        <p>
          Clickbait ENT is an Atlanta-based recording studio and creative program focused on
          helping artists finish records from first idea to release.
        </p>

        <div>
          <h2 className="font-medium text-foreground mb-2">Team</h2>
          <ul className="space-y-1">
            <li><strong className="text-foreground">Prince Ali</strong> — Master Engineer, Producer, Musician, DJ, Artist</li>
            <li><strong className="text-foreground">ACEKXLD</strong> — Master Engineer, Producer, Musician, Lead Technician</li>
            <li><strong className="text-foreground">Swagg</strong> — Musician, Lead Consultant, Artist, Manager, Producer</li>
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="underline">Work with us</Link>
      </div>
    </main>
  );
}