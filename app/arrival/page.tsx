import { siteConfig } from '@/content/site';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/arrival');

export default function ArrivalPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight"><PageText id="arrival.title" /></h1>
      <div className="space-y-7">
        <section><h2 className="mb-2 text-xl font-semibold"><PageText id="arrival.location" /></h2><p className="text-muted">{siteConfig.address}</p></section>
        <section><h2 className="mb-2 text-xl font-semibold"><PageText id="arrival.parking" /></h2><p className="text-muted"><PageText id="arrival.parkingBody" /></p></section>
        <section><h2 className="mb-2 text-xl font-semibold"><PageText id="arrival.access" /></h2><p className="text-muted"><PageText id="arrival.accessBody" /></p></section>
        <section><h2 className="mb-2 text-xl font-semibold"><PageText id="arrival.availability" /></h2><p className="text-muted"><PageText id="footer.hours" /></p></section>
        <section><h2 className="mb-2 text-xl font-semibold"><PageText id="arrival.late" /></h2><p className="text-muted"><PageText id="contact.call" /> {siteConfig.links.phone}. <PageText id="arrival.lateBody" /></p></section>
      </div>
    </div>
  );
}
