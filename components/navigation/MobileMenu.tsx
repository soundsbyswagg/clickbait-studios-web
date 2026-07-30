'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { navigation, siteConfig } from '@/content/site';
import { Icon } from '@/components/ui/Icon';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { useAnnouncer } from '@/components/a11y/Announcer';

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const touchStart = useRef(0);
  const { t } = useLanguage();
  const announce = useAnnouncer();

  const closeMenu = useCallback(() => { setOpen(false); setExpanded(false); announce(t('nav.close')); }, [announce, t]);
  const openMenu = useCallback(() => { setOpen(true); announce(t('nav.open')); }, [announce, t]);

  useEffect(() => {
    const onOpen = () => openMenu();
    window.addEventListener('clickbait:open-menu', onOpen);
    return () => window.removeEventListener('clickbait:open-menu', onOpen);
  }, [openMenu]);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    if (!panel) return;
    const focusable = [...panel.querySelectorAll<HTMLElement>('a, button:not([disabled])')];
    const first = focusable[0];
    const last = focusable.at(-1);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); closeMenu(); }
      if (event.key === 'Tab' && focusable.length) {
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    const onPopState = () => closeMenu();
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('popstate', onPopState);
    document.body.style.overflow = 'hidden';
    first?.focus();
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('popstate', onPopState);
      document.body.style.overflow = '';
      trigger?.focus();
    };
  }, [closeMenu, open]);

  return <>
    <button ref={triggerRef} type="button" className="icon-button md:hidden" onClick={openMenu} aria-expanded={open} aria-controls="mobile-menu-panel" aria-label={t('nav.open')}>
      <Icon name="menu" />
    </button>
    {open ? <div className="mobile-sheet-backdrop" role="presentation" onPointerDown={(event) => { if (event.currentTarget === event.target) closeMenu(); }}>
      <div
        ref={panelRef}
        id="mobile-menu-panel"
        className={`mobile-sheet ${expanded ? 'mobile-sheet--expanded' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t('nav.open')}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientY; }}
        onTouchEnd={(event) => {
          const delta = event.changedTouches[0].clientY - touchStart.current;
          if (delta > 80) closeMenu();
          if (delta < -70) setExpanded(true);
        }}
      >
        <button type="button" className="sheet-handle" onClick={() => setExpanded((value) => !value)} aria-label={expanded ? 'Collapse navigation sheet' : 'Expand navigation sheet'} />
        <div className="flex items-center justify-between border-b border-border px-5 pb-4">
          <strong>{siteConfig.name}</strong>
          <button type="button" className="icon-button" onClick={closeMenu} aria-label={t('nav.close')}><Icon name="close" /></button>
        </div>
        <nav className="mobile-sheet-links" aria-label="Mobile navigation">
          {navigation.map((item) => <Link key={item.href} href={item.href} onClick={closeMenu}>{t(navKey(item.label))}<Icon name="arrow-right" size={20} /></Link>)}
        </nav>
        <div className="px-5 pb-6"><LanguageSwitcher /></div>
      </div>
    </div> : null}
  </>;
}

function navKey(label: string) {
  const keys: Record<string, Parameters<ReturnType<typeof useLanguage>['t']>[0]> = {
    Home: 'nav.home', Services: 'nav.services', Rooms: 'nav.rooms', Work: 'nav.work',
    'More Than Rap': 'nav.program', 'Creators Club': 'nav.club', About: 'nav.about', FAQ: 'nav.faq', Contact: 'nav.contact',
  };
  return keys[label] ?? 'nav.home';
}
