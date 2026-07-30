'use client';

import { createContext, useCallback, useContext, useMemo, useState } from 'react';
const AnnouncerContext = createContext<(message: string) => void>(() => undefined);

export function AnnouncerProvider({ children }: { children: React.ReactNode }) {
  const [message, setMessage] = useState('');
  const announce = useCallback((next: string) => { setMessage(''); requestAnimationFrame(() => setMessage(next)); }, []);
  const value = useMemo(() => announce, [announce]);
  return <AnnouncerContext.Provider value={value}>{children}<div className="sr-only" aria-live="polite" aria-atomic="true">{message}</div></AnnouncerContext.Provider>;
}
export const useAnnouncer = () => useContext(AnnouncerContext);
