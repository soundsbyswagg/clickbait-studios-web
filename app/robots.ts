import { siteConfig } from '@/content/site';
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/policies/'],
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}