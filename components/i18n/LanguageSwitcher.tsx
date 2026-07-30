'use client';

import { useLanguage } from './LanguageProvider';
import type { Language } from '@/lib/i18n';

function Flag({ language }: { language: Language }) {
  if (language === 'en') {
    return (
      <svg viewBox="0 0 28 18" width="28" height="18" role="img" aria-hidden="true">
        <rect width="28" height="18" fill="#fff" />
        {[0, 4, 8, 12, 16].map((y) => <rect key={y} y={y} width="28" height="2" fill="#b22234" />)}
        <rect width="12" height="10" fill="#3c3b6e" />
        {[2, 6, 10].flatMap((x) => [2, 5, 8].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r=".55" fill="#fff" />))}
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 28 18" width="28" height="18" role="img" aria-hidden="true">
      <rect width="28" height="18" fill="#aa151b" />
      <rect y="4.5" width="28" height="9" fill="#f1bf00" />
      <rect x="7" y="7" width="2.5" height="4" rx=".4" fill="#aa151b" />
    </svg>
  );
}

export function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();
  return (
    <div className="language-switcher" role="group" aria-label={t('language.label')}>
      {(['en', 'es'] as const).map((option) => (
        <button
          key={option}
          type="button"
          className="language-option"
          aria-label={option === 'en' ? t('language.english') : t('language.spanish')}
          aria-pressed={language === option}
          onClick={() => setLanguage(option)}
        >
          <Flag language={option} />
          <span>{option.toUpperCase()}</span>
        </button>
      ))}
    </div>
  );
}
