'use client';

import type { en } from '@/content/translations/en';
import { useLanguage } from './LanguageProvider';
import { SplitText } from '@/components/hero/SplitText';

export function TranslatedText({ textKey, fallback }: { textKey: keyof typeof en; fallback: string }) {
  const { language, t } = useLanguage();
  return <>{language === 'en' ? fallback : t(textKey)}</>;
}

export function TranslatedSplitText({ textKey, fallback }: { textKey: keyof typeof en; fallback: string }) {
  const { language, t } = useLanguage();
  return <SplitText delay={0.2}>{language === 'en' ? fallback : t(textKey)}</SplitText>;
}
