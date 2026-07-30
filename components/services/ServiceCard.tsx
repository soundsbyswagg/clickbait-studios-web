import Link from 'next/link';
import { services } from '@/content/site';
import { externalLinkProps, inquiryRoutes } from '@/lib/routes';

export function ServiceCard({ service }: { service: (typeof services)[number] }) {
  const href = service.wixUrl ?? (service.slug === 'consultation' ? inquiryRoutes.consultation : inquiryRoutes.custom);
  return (
    <article className="studio-card relative overflow-hidden rounded-lg border border-neutral-400/40 bg-card p-7 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
      <div className="absolute inset-x-0 top-0 flex h-1.5 items-center justify-end gap-0.5 border-b border-neutral-400/10 bg-neutral-300/[0.06] px-1.5" aria-hidden="true">
        <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
        <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
        <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
      <p className="mb-4 text-sm text-muted">{service.description}</p>
      <p className="mb-5 text-sm"><strong>{service.startingPrice}</strong><br /><span className="text-muted">{service.duration}</span></p>
      <Link href={href} {...(service.wixUrl ? externalLinkProps : {})} className="inline-flex min-h-11 items-center font-semibold underline">
        {service.cta} →
      </Link>
    </article>
  );
}
