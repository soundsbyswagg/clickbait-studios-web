'use client';

import { useLanguage } from './LanguageProvider';
import { pageMessages, type PageMessageKey } from '@/content/translations/pages';

export function PageText({ id }: { id: PageMessageKey }) {
  const { language } = useLanguage();
  return <>{pageMessages[id][language]}</>;
}

export function usePageText() {
  const { language } = useLanguage();
  return (id: PageMessageKey) => pageMessages[id][language];
}
