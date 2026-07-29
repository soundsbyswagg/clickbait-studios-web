import { siteConfig } from '@/content/site';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/services',
    '/rooms',
    '/portfolio',
    '/more-than-rap',
    '/about',
    '/faq',
    '/contact',
    '/creators-club',
    '/policies/booking',
    '/policies/privacy',
    '/policies/terms',
  ];

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date('2026-07-29'),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));
}