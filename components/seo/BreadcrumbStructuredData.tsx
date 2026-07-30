'use client';

import { usePathname } from 'next/navigation';
import { siteConfig } from '@/content/site';

export function BreadcrumbStructuredData() {
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const items = [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    ...segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 2,
      name: segment.replaceAll('-', ' ').replace(/\b\w/g, (letter) => letter.toUpperCase()),
      item: new URL(`/${segments.slice(0, index + 1).join('/')}`, siteConfig.url).toString(),
    })),
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: items }) }} />;
}
