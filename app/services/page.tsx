import { ServiceCard } from '@/components/services/ServiceCard';
import { PricingDetails } from '@/components/services/PricingDetails';
import { services } from '@/content/site';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/services');

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl"><PageText id="services.title" /></h1>
      <p className="mb-10 max-w-2xl text-xl text-muted"><PageText id="services.intro" /></p>
      <section aria-labelledby="service-options-heading">
        <h2 id="service-options-heading" className="sr-only"><PageText id="services.options" /></h2>
        <div className="grid gap-6 md:grid-cols-2">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
      </section>
      <PricingDetails />
      <p className="mt-10 text-sm text-muted"><PageText id="services.notice" /></p>
    </div>
  );
}
