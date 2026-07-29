import { ServiceCard } from '@/components/services/ServiceCard';
import { PricingDetails } from '@/components/services/PricingDetails';
import { services } from '@/content/site';

export const metadata = {
  title: 'Services | Clickbait ENT',
  description: 'Recording sessions, studio rental, podcast and content projects, and custom creative services at Clickbait ENT.',
};

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">Services</h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">Choose standard studio time or start a consultation for custom creative work.</p>
      <div className="grid gap-6 md:grid-cols-2">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
      <PricingDetails />
      <p className="mt-10 text-sm text-muted">Booked time is not extended for late arrival. Additional time requires engineer approval and availability. Review the complete booking policy before your session.</p>
    </div>
  );
}
