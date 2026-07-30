'use client';

import { useEffect, useState } from 'react';
import { usePageText } from '@/components/i18n/PageText';

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };
export function InstallPrompt() {
  const text = usePageText();
  const [event, setEvent] = useState<InstallEvent | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onPrompt = (nextEvent: Event) => { nextEvent.preventDefault(); setEvent(nextEvent as InstallEvent); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    const timer = window.setTimeout(() => setVisible(true), 30000);
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.clearTimeout(timer); };
  }, []);
  if (!visible || !event) return null;
  return <aside className="fixed bottom-24 left-4 z-[4400] max-w-sm rounded-lg border border-border bg-card p-5 shadow-lg" aria-label={text('install.label')}>
    <p className="mb-3 font-semibold">{text('install.body')}</p>
    <div className="flex gap-2">
      <button type="button" className="rounded-md bg-accent px-4 text-accent-foreground" onClick={async () => { await event.prompt(); await event.userChoice; setVisible(false); }}>{text('install.action')}</button>
      <button type="button" className="rounded-md border border-border px-4" onClick={() => setVisible(false)}>{text('install.dismiss')}</button>
    </div>
  </aside>;
}
