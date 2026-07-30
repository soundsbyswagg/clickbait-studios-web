'use client';

import { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';
import { Icon } from '@/components/ui/Icon';
import { useLanguage } from '@/components/i18n/LanguageProvider';

export function QuickActions() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const actions = [
    { label: t('quick.call'), href: `tel:${siteConfig.links.phone}`, icon: 'phone' as const },
    { label: t('cta.book'), href: BOOKING_URL, icon: 'calendar' as const, external: true },
    { label: t('quick.instagram'), href: siteConfig.links.instagram, icon: 'instagram' as const, external: true },
    { label: t('quick.arrival'), href: '/arrival', icon: 'map-pin' as const },
  ];
  return <div className={`quick-actions md:hidden ${open ? 'quick-actions--open' : ''}`}>
    <div className="quick-actions-list" aria-hidden={!open}>
      {actions.map((action) => <Link key={action.label} href={action.href} {...(action.external ? externalLinkProps : {})} tabIndex={open ? 0 : -1} aria-label={action.label}><Icon name={action.icon} /><span>{action.label}</span></Link>)}
    </div>
    <button type="button" className="quick-actions-trigger" aria-expanded={open} aria-label={t('quick.open')} onClick={() => setOpen((value) => !value)}><Icon name={open ? 'close' : 'plus'} /></button>
  </div>;
}
