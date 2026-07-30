'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { pageThemes } from '@/content/site';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const theme = pageThemes[pathname as keyof typeof pageThemes] ?? 'studio';
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    return () => { delete document.documentElement.dataset.theme; };
  }, [theme]);
  return children;
}
