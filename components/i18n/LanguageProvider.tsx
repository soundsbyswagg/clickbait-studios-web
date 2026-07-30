'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useSyncExternalStore } from 'react';
import { en } from '@/content/translations/en';
import { es } from '@/content/translations/es';
import { isLanguage, LANGUAGE_STORAGE_KEY, type Language } from '@/lib/i18n';

type TranslationKey = keyof typeof en;
type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const dictionaries = { en, es };
const LanguageContext = createContext<LanguageContextValue | null>(null);
const languageEvent = 'clickbait:language-change';

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  window.addEventListener(languageEvent, callback);
  return () => { window.removeEventListener('storage', callback); window.removeEventListener(languageEvent, callback); };
}
function getSnapshot(): Language {
  const stored = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(stored) ? stored : 'en';
}
function getServerSnapshot(): Language {
  return 'en';
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const language = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  const setLanguage = useCallback((nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(languageEvent));
  }, []);
  const value = useMemo<LanguageContextValue>(() => ({ language, setLanguage, t: (key) => dictionaries[language][key] }), [language, setLanguage]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
}
