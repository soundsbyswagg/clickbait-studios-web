import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Arrival | Clickbait ENT',
  description: 'Parking, building entrance, and arrival instructions for Clickbait ENT in Atlanta.',
};

export default function ArrivalPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-4">Arrival</h1>
      <p className="text-xl text-muted mb-10 max-w-2xl">
        Everything you need to find us, park, and get inside.
      </p>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-2">Location</h2>
          <p className="text-muted">{siteConfig.address}</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Parking</h2>
          <p className="text-muted">Free parking is available on-site. Use the designated visitor spots near the studio entrance.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Building entrance</h2>
          <p className="text-muted">Enter through the main lobby. The studio is on the ground floor. Look for Clickbait ENT signage.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Hours and access</h2>
          <p className="text-muted">{siteConfig.hours}</p>
          <p className="text-muted mt-2">24-hour bookings require advance reservation. After-hours access is granted via keypad code provided at booking.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">Late arrival</h2>
          <p className="text-muted">If you are running late, text or call {siteConfig.links.phone}. Sessions end on schedule to keep the next booking on time.</p>
        </section>
      </div>
    </main>
  );
}