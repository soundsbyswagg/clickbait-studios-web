import { siteConfig, services } from '@/content/site';

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.links.phone,
  sameAs: [siteConfig.links.instagram],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1587 Phoenix Boulevard, Suite 5',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30349',
    addressCountry: 'US',
  },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '08:00',
    closes: '17:00',
    description: 'Walk-in hours. Sessions outside walk-in hours require advance booking.',
  }],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Clickbait ENT services',
    itemListElement: services.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export function StructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />;
}
