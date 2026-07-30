export type Language = 'en' | 'es';

export const LANGUAGE_STORAGE_KEY = 'clickbait:lang';

export const isLanguage = (value: string | null): value is Language =>
  value === 'en' || value === 'es';
