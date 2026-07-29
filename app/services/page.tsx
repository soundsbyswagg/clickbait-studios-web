import { BookingGuard } from '@/components/booking/BookingGuard';
import { WixReturnPath } from '@/components/booking/WixReturnPath';
import { LeadQualifier } from '@/components/booking/LeadQualifier';
import { ServiceCard } from '@/components/services/ServiceCard';
import { services } from '@/content/site';

export const metadata = {
  title: 'Services | Clickbait ENT',
  description: 'Engineer-assisted sessions, solo recording, podcast and content room, and consultation at Clickbait ENT.',
};

export default function ServicesPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">Services</h1>
      <p className="text-xl text-muted mb-10 max-w-2xl">
        Priority offerings for recording artists, producers, podcasters, and labels.
        All sessions book through our Wix system for real-time availability.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.slug} service={service} />
        ))}
      </div>

      <BookingGuard />
      <WixReturnPath />
      <LeadQualifier />

      <div className="mt-12 text-sm text-muted">
        Note: Exact pricing, engineer rates, and add-ons (mixing, mastering, revisions) are confirmed at booking.
        See client baseline for full details.
      </div>
    </main>
  );
}