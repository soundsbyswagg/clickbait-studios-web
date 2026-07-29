import Link from 'next/link';
import { rooms } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

export const metadata = {
  title: 'Rooms | Clickbait ENT',
  description: 'A Room and B Room at Clickbait ENT in Atlanta.',
};

export default function RoomsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">Choose your room</h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">Both rooms use the same core equipment. Choose based on group size and the amount of space your session needs.</p>
      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((room) => (
          <article key={room.name} className="studio-card rounded-lg border border-border bg-card p-8">
            <p className="mb-2 text-xs uppercase tracking-widest text-muted">{room.name}</p>
            <h2 className="mb-4 text-4xl tracking-tight">{room.capacity}</h2>
            <p className="mb-6 text-muted">{room.note}</p>
            <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center font-semibold underline">Book {room.name} →</Link>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">Standard studio clients must be at least 18. Sessions require at least four hours of advance booking. See the booking policy for arrival and conduct rules.</p>
    </div>
  );
}
