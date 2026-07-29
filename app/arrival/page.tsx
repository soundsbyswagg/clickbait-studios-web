import { siteConfig } from '@/content/site';

export const metadata = {
  title: 'Arrival | Clickbait ENT',
  description: 'Verified location and arrival information for Clickbait ENT.',
};

export default function ArrivalPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight">Arrival</h1>
      <div className="space-y-7">
        <section><h2 className="mb-2 text-xl font-semibold">Location</h2><p className="text-muted">{siteConfig.address}</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Parking</h2><p className="text-muted">Free parking is available.</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Access</h2><p className="text-muted">Automated arrival instructions are sent by text after booking.</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Availability</h2><p className="text-muted">{siteConfig.hours}</p></section>
        <section><h2 className="mb-2 text-xl font-semibold">Late arrival</h2><p className="text-muted">Call {siteConfig.links.phone}. The 15-minute lateness window does not extend the booked end time.</p></section>
      </div>
    </div>
  );
}
