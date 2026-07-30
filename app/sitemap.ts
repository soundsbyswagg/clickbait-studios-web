import type { MetadataRoute } from 'next';
import { siteConfig } from '@/content/site';
import { routeSeo } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(routeSeo).filter((path) => !['/offline'].includes(path)).map((path) => ({
    url: new URL(path, siteConfig.url).toString(),
    lastModified: new Date('2026-07-29'),
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : ['/services', '/rooms', '/contact'].includes(path) ? 0.9 : 0.7,
  }));
}
