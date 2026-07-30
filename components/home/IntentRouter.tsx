'use client';

import Link from "next/link";
import { BOOKING_URL, externalLinkProps, inquiryRoutes } from "@/lib/routes";
import { useLanguage } from "@/components/i18n/LanguageProvider";

const intents = [
  {
    titleKey: "home.intent.engineer.title" as const,
    href: BOOKING_URL,
    external: true,
    descriptionKey: "home.intent.engineer.description" as const,
  },
  {
    titleKey: "home.intent.rental.title" as const,
    href: BOOKING_URL,
    external: true,
    descriptionKey: "home.intent.rental.description" as const,
  },
  {
    titleKey: "home.intent.podcast.title" as const,
    href: inquiryRoutes.custom,
    external: false,
    descriptionKey: "home.intent.podcast.description" as const,
  },
];

export function IntentRouter() {
  const { t } = useLanguage();
  return (
    <section className="container border-b border-border py-16 md:py-24">
      <h2 className="mb-2 text-3xl tracking-[-0.04em] md:text-4xl">
        {t('home.intents.title')}
      </h2>
      <p className="mb-6 max-w-2xl text-muted">
        {t('home.intents.description')}
      </p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {intents.map((intent) => (
          <Link
            key={intent.titleKey}
            href={intent.href}
            {...(intent.external ? externalLinkProps : {})}
            className="studio-card relative min-h-36 overflow-hidden rounded-lg border border-[#c0c0c0]/40 bg-card p-5 shadow-[0_8px_24px_rgba(0,0,0,0.22)] md:p-6"
          >
            <span
              className="absolute inset-x-0 top-0 flex h-1.5 items-center justify-end gap-0.5 border-b border-[#c0c0c0]/10 bg-[#c0c0c0]/[0.06] px-1.5"
              aria-hidden="true"
            >
              <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
              <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
              <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
            </span>
            <h3 className="mb-2 text-lg font-semibold">{t(intent.titleKey)}</h3>
            <p className="text-sm text-muted">{t(intent.descriptionKey)}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
