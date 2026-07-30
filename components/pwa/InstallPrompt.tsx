'use client';

import { useEffect, useState } from 'react';

type InstallEvent = Event & { prompt: () => Promise<void>; userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }> };
export function InstallPrompt() {
  const [event, setEvent] = useState<InstallEvent | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onPrompt = (nextEvent: Event) => { nextEvent.preventDefault(); setEvent(nextEvent as InstallEvent); };
    window.addEventListener('beforeinstallprompt', onPrompt);
    const timer = window.setTimeout(() => setVisible(true), 30000);
    return () => { window.removeEventListener('beforeinstallprompt', onPrompt); window.clearTimeout(timer); };
  }, []);
  if (!visible || !event) return null;
  return <aside className="fixed bottom-24 left-4 z-[4400] max-w-sm rounded-lg border border-border bg-card p-5 shadow-lg" aria-label="Install Clickbait ENT">
    <p className="mb-3 font-semibold">Install Clickbait ENT for faster access.</p>
    <div className="flex gap-2">
      <button type="button" className="rounded-md bg-accent px-4 text-accent-foreground" onClick={async () => { await event.prompt(); await event.userChoice; setVisible(false); }}>Install</button>
      <button type="button" className="rounded-md border border-border px-4" onClick={() => setVisible(false)}>Not now</button>
    </div>
  </aside>;
}
