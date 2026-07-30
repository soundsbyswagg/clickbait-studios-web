'use client';

import { usePageText } from '@/components/i18n/PageText';

export function BookingPolicySections() {
  const t = usePageText();
  return <div className="space-y-7">{t('policy.bookingSections').split('||').map((section) => {
    const [title, body] = section.split('::');
    return <section key={title}><h2 className="mb-2 text-xl font-semibold">{title}</h2><p className="text-muted">{body}</p></section>;
  })}</div>;
}
