'use client';

import Link from 'next/link';
import { navigation, siteConfig } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';
import { MobileMenu } from './MobileMenu';
import { LanguageSwitcher } from '@/components/i18n/LanguageSwitcher';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { usePathname } from 'next/navigation';

const primary = navigation.filter((item) => ['Services', 'Rooms', 'More Than Rap', 'About'].includes(item.label));
const keys = { Services: 'nav.services', Rooms: 'nav.rooms', 'More Than Rap': 'nav.program', About: 'nav.about' } as const;

export function SiteHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();
  return <header className="border-b border-border bg-background text-foreground">
    <nav id="primary-navigation" className="container flex min-h-20 items-center justify-between gap-4" aria-label="Main navigation">
      <Link href="/" className="text-lg font-bold tracking-tight" aria-label={`${siteConfig.name} - ${t('nav.home')}`}>{siteConfig.name}</Link>
      <div className="hidden items-center gap-5 text-sm lg:flex">
        {primary.map((item) => <Link key={item.href} href={item.href} aria-current={pathname === item.href ? 'page' : undefined} className={pathname === item.href ? 'border-b border-accent text-foreground' : 'text-muted'}>{t(keys[item.label as keyof typeof keys])}</Link>)}
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <LanguageSwitcher />
        <Link href={BOOKING_URL} {...externalLinkProps} className="inline-flex min-h-11 items-center rounded-md bg-accent px-5 text-sm font-semibold text-accent-foreground">{t('cta.book')}</Link>
      </div>
      <MobileMenu />
    </nav>
  </header>;
}
