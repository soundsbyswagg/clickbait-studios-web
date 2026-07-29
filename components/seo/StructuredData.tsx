'use client';

import { siteConfig, services, moreThanRap } from '@/content/site';

const faqGroups = [
  {
    intent: 'First-Time Artist',
    questions: [
      { q: 'What should I bring to my first session?', a: 'Bring reference tracks in WAV or MP3, any required gear, and a valid ID. Arrive 15 minutes early.' },
      { q: 'Do I need an engineer?', a: 'Engineer-assisted sessions are available. Solo sessions are self-serve.' },
    ],
  },
  {
    intent: 'Podcast Creator',
    questions: [
      { q: 'What equipment is in the podcast room?', a: 'Professional microphones, headphones, and a dedicated content room for recording.' },
      { q: 'Can I bring guests?', a: 'Yes, subject to room capacity. Podcast room holds up to 3 guests.' },
    ],
  },
];

const organization = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.name,
  url: siteConfig.url,
  telephone: siteConfig.links.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    addressCountry: 'US',
  },
};

const localBusiness = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: siteConfig.name,
  telephone: siteConfig.links.phone,
  address: {
    '@type': 'PostalAddress',
    streetAddress: siteConfig.address,
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    addressCountry: 'US',
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '08:00',
      closes: '17:00',
    },
  ],
};

const serviceNodes = services.map((service) => ({
  '@type': 'Service',
  name: service.title,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  areaServed: 'Atlanta, GA',
}));

const programService = {
  '@type': 'Service',
  name: moreThanRap.name,
  description: 'Curriculum-based youth creative program at Clickbait ENT.',
  provider: {
    '@type': 'Organization',
    name: siteConfig.name,
  },
  areaServed: 'Atlanta, GA',
};

const faqPage = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqGroups.flatMap((group) =>
    group.questions.map((q) => ({
      '@type': 'Question',
      name: q.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.a,
      },
    }))
  ),
};

export function StructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ ...faqPage, mainEntity: faqPage.mainEntity.slice(0, 5) }) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'ItemList', itemListElement: [...serviceNodes, programService].map((s, i) => ({ '@type': 'ListItem', position: i + 1, item: s })) }) }}
      />
    </>
  );
}