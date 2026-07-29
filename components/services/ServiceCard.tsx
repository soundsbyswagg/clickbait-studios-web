import Link from 'next/link';
import { services } from '@/content/site';
import { externalLinkProps, inquiryRoutes } from '@/lib/routes';

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const href = service.wixUrl ?? (service.slug === 'consultation' ? inquiryRoutes.consultation : inquiryRoutes.custom);
  return (
    <article className="studio-card rounded-lg border border-border bg-card p-7">
      <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
      <p className="mb-4 text-sm text-muted">{service.description}</p>
      <p className="mb-5 text-sm"><strong>{service.startingPrice}</strong><br /><span className="text-muted">{service.duration}</span></p>
      <Link href={href} {...(service.wixUrl ? externalLinkProps : {})} className="inline-flex min-h-11 items-center font-semibold underline">
        {service.cta} →
      </Link>
    </article>
  );
}
