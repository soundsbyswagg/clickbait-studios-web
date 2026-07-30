'use client';

import Link from "next/link";
import { services } from "@/content/site";
import { externalLinkProps, inquiryRoutes } from "@/lib/routes";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { WindowChrome } from "@/components/ui/WindowChrome";

const serviceKeys = {
  "engineer-assisted": { title: "service.engineer.title", description: "service.engineer.description", price: "service.engineer.price", duration: "service.engineer.duration", cta: "service.engineer.cta" },
  solo: { title: "service.solo.title", description: "service.solo.description", price: "service.solo.price", duration: "service.solo.duration", cta: "service.solo.cta" },
  podcast: { title: "service.podcast.title", description: "service.podcast.description", price: "service.podcast.price", duration: "service.podcast.duration", cta: "service.podcast.cta" },
  consultation: { title: "service.consultation.title", description: "service.consultation.description", price: "service.consultation.price", duration: "service.consultation.duration", cta: "service.consultation.cta" },
} as const;

export function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const { t } = useLanguage();
  const href =
    service.wixUrl ??
    (service.slug === "consultation"
      ? inquiryRoutes.consultation
      : inquiryRoutes.custom);
  const keys = serviceKeys[service.slug as keyof typeof serviceKeys];
  return (
    <article className="studio-card relative flex h-full flex-col overflow-hidden rounded-lg border border-[#c0c0c0]/40 bg-card p-6 pt-11 shadow-[0_8px_24px_rgba(0,0,0,0.22)]">
      <WindowChrome inset />
      <h3 className="mb-2 text-xl font-semibold">{t(keys.title)}</h3>
      <p className="mb-4 text-sm text-muted">{t(keys.description)}</p>
      <p className="mb-5 text-sm">
        <strong>{t(keys.price)}</strong>
        <br />
        <span className="text-muted">{t(keys.duration)}</span>
      </p>
      <Link
        href={href}
        {...(service.wixUrl ? externalLinkProps : {})}
        className="mt-auto inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 font-semibold"
      >
        {t(keys.cta)} →
      </Link>
    </article>
  );
}
