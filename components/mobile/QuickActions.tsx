'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';
import { Icon } from '@/components/ui/Icon';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { analyticsEvents } from '@/lib/analytics';

export function QuickActions() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const { t } = useLanguage();
  const actions = [
    { label: t('quick.call'), href: `tel:${siteConfig.links.phone}`, icon: 'phone' as const },
    { label: t('cta.book'), href: BOOKING_URL, icon: 'calendar' as const, external: true },
    { label: t('quick.instagram'), href: siteConfig.links.instagram, icon: 'instagram' as const, external: true },
    { label: t('quick.arrival'), href: '/arrival', icon: 'map-pin' as const },
  ];
  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent | PointerEvent) => {
      if (event instanceof KeyboardEvent && event.key !== 'Escape') return;
      if (event instanceof PointerEvent && rootRef.current?.contains(event.target as Node)) return;
      setOpen(false);
      if (event instanceof KeyboardEvent) triggerRef.current?.focus();
    };
    document.addEventListener('keydown', close);
    document.addEventListener('pointerdown', close);
    return () => {
      document.removeEventListener('keydown', close);
      document.removeEventListener('pointerdown', close);
    };
  }, [open]);
  return <div ref={rootRef} className={`quick-actions md:hidden ${open ? 'quick-actions--open' : ''}`}>
    <nav id="quick-actions-list" className="quick-actions-list" aria-label={t('quick.label')} aria-hidden={!open}>
      {actions.map((action) => <Link key={action.label} href={action.href} {...(action.external ? externalLinkProps : {})} tabIndex={open ? 0 : -1} aria-label={action.label} data-analytics-event={analyticsEvents.quickActionSelect} data-analytics-value={action.icon} onClick={() => setOpen(false)}><Icon name={action.icon} /><span>{action.label}</span></Link>)}
    </nav>
    <button ref={triggerRef} type="button" className="quick-actions-trigger" aria-expanded={open} aria-controls="quick-actions-list" aria-label={t('quick.open')} onClick={() => setOpen((value) => !value)}><Icon name={open ? 'close' : 'plus'} /></button>
  </div>;
}
