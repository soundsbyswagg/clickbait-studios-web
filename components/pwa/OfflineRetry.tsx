'use client';
import { usePageText } from '@/components/i18n/PageText';
export function OfflineRetry() {
  const t = usePageText();
  return <button type="button" className="rounded-md bg-accent px-6 font-semibold text-accent-foreground" onClick={() => window.location.reload()}>{t('offline.retry')}</button>;
}
