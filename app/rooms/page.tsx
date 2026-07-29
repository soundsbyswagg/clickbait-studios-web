import Link from 'next/link';
import { rooms } from '@/content/site';

export default function RoomsPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">Rooms</h1>
      <p className="text-xl text-neutral-600 mb-10 max-w-2xl">
        Same professional equipment in both rooms. Difference is size and guest capacity only.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.name} className="border p-8 rounded-lg">
            <div className="uppercase text-xs tracking-[2px] text-neutral-500 mb-2">{room.name}</div>
            <h2 className="text-4xl tracking-tight mb-4">{room.capacity}</h2>
            <p className="text-neutral-600 mb-6">{room.note}</p>
            <Link href="/contact" className="text-sm font-medium underline">Book {room.name} →</Link>
          </div>
        ))}
      </div>

      <div className="mt-8 text-sm">
        <Link href="/services" className="underline">Back to services</Link>
      </div>
    </main>
  );
}
