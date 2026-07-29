'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/content/site';

type PageTheme = {
  accent: string;
  media: string;
};

const defaultTheme: PageTheme = { accent: 'accent', media: 'default' };

export function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const theme = site.pageThemes?.[pathname as keyof typeof site.pageThemes] || defaultTheme;

  return (
    <div
      data-theme={theme.media}
      data-accent={theme.accent}
      className="min-h-screen"
    >
      {children}
    </div>
  );
}