'use client';

import Link from 'next/link';
import { inquiryRoutes } from '@/lib/routes';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const copy = {
  en: {
    label: 'Pricing and service terms',
    base: 'Base studio session', baseTitle: '$100 base session',
    baseItems: ['Three-hour minimum', 'Standard in-session engineering support included', '50% deposit or full payment', 'Website processing fees apply'],
    extra: 'Additional production work', extraTitle: 'After the session',
    extraItems: ['Additional engineering: $50/hour or selected engineer’s professional rate', 'Rough mixing: $50/hour', 'Final mixing: $50/hour', 'Mastering and revisions are paid add-ons; maximum two revisions', 'Files stored for 30 days; typical turnaround is 24–72 hours based on the project'],
    custom: 'Custom services', customTitle: 'Custom quote — start with a consultation.',
    customBody: 'For private events, recurring bookings, creator packages, ongoing podcast production, branding, marketing, video, label, or group projects.',
    cta: 'Submit an inquiry',
  },
  es: {
    label: 'Precios y términos del servicio',
    base: 'Sesión base de estudio', baseTitle: 'Sesión base: $100',
    baseItems: ['Mínimo de tres horas', 'Incluye apoyo estándar de ingeniería durante la sesión', 'Depósito del 50% o pago completo', 'Se aplican cargos de procesamiento del sitio'],
    extra: 'Trabajo de producción adicional', extraTitle: 'Después de la sesión',
    extraItems: ['Ingeniería adicional: $50 por hora o la tarifa profesional del ingeniero seleccionado', 'Mezcla preliminar: $50 por hora', 'Mezcla final: $50 por hora', 'La masterización y las revisiones tienen costo adicional; máximo de dos revisiones', 'Los archivos se guardan durante 30 días; entrega habitual de 24 a 72 horas según el proyecto'],
    custom: 'Servicios personalizados', customTitle: 'Cotización personalizada: comienza con una consulta.',
    customBody: 'Para eventos privados, reservas recurrentes, paquetes para creadores, producción continua de podcast, marca, marketing, video, sellos o proyectos grupales.',
    cta: 'Enviar una consulta',
  },
} as const;

export function PricingDetails() {
  const { language } = useLanguage();
  const t = copy[language];
  return (
    <section className="mt-16 grid gap-5 lg:grid-cols-3" aria-labelledby="pricing-heading">
      <h2 id="pricing-heading" className="sr-only">{t.label}</h2>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">{t.base}</p>
        <h3 className="mb-4 text-2xl font-semibold">{t.baseTitle}</h3>
        <ul className="space-y-2 text-sm text-muted">{t.baseItems.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">{t.extra}</p>
        <h3 className="mb-4 text-2xl font-semibold">{t.extraTitle}</h3>
        <ul className="space-y-2 text-sm text-muted">{t.extraItems.map((item) => <li key={item}>{item}</li>)}</ul>
      </article>
      <article className="rounded-lg border border-border bg-card p-6">
        <p className="mb-2 text-xs uppercase tracking-widest text-muted">{t.custom}</p>
        <h3 className="mb-4 text-2xl font-semibold">{t.customTitle}</h3>
        <p className="mb-5 text-sm text-muted">{t.customBody}</p>
        <Link href={inquiryRoutes.consultation} className="font-semibold underline">{t.cta}</Link>
      </article>
    </section>
  );
}
