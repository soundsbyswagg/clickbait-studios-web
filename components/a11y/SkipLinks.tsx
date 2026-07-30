'use client';

import { useLanguage } from '@/components/i18n/LanguageProvider';

export function SkipLinks() {
  const { t } = useLanguage();
  return <div className="skip-links">
    <a href="#main">{t('a11y.main')}</a>
    <a href="#primary-navigation">{t('a11y.navigation')}</a>
    <a href="#site-footer">{t('a11y.footer')}</a>
  </div>;
}
