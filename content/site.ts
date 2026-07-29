import { z } from 'zod';
import { SiteSchema, PortfolioItemSchema } from '@/lib/schemas';
import { BOOKING_URL } from '@/lib/routes';

export const siteConfig = {
  name: 'Clickbait ENT',
  umbrellaName: 'Clickbait Enterprise',
  description: 'Professional studio space, engineering support, and creative services from Clickbait ENT in Atlanta.',
  url: 'https://clickbait-studios-web.vercel.app',
  links: {
    instagram: 'https://www.instagram.com/clickbait.ent/',
    phone: '470-621-1417',
  },
  address: '1587 Phoenix Boulevard, Suite 5, Atlanta, GA 30349',
  hours: 'Sessions are available around the clock with advance booking. Please book at least four hours before your requested start time. Walk-ins are accepted from 8:00 AM to 5:00 PM.',
  bookingBaseUrl: BOOKING_URL,
};

export const services = [
  {
    slug: 'engineer-assisted',
    title: 'Engineer-Assisted Recording Session',
    description: 'Standard in-session engineering support in A Room or B Room.',
    startingPrice: '$100 base session',
    duration: 'Three-hour minimum',
    cta: 'Book an Engineer-Assisted Session',
    wixUrl: BOOKING_URL,
  },
  {
    slug: 'solo',
    title: 'Studio Rental Without an Engineer',
    description: 'Studio time for clients who do not need in-session engineering support.',
    startingPrice: '$100 base session',
    duration: 'Three-hour minimum',
    cta: 'Book Studio Time',
    wixUrl: BOOKING_URL,
  },
  {
    slug: 'podcast',
    title: 'Podcast and Content Production',
    description: 'A custom inquiry path for podcast and content-room projects.',
    startingPrice: 'Custom quote',
    duration: 'Start with a consultation',
    cta: 'Ask About Podcast Production',
    wixUrl: undefined,
  },
  {
    slug: 'consultation',
    title: 'Consultation',
    description: 'Discuss strategy, production planning, artist development, or custom work.',
    startingPrice: 'Custom quote',
    duration: 'Start with a consultation',
    cta: 'Request a Consultation',
    wixUrl: undefined,
  },
];

export const rooms = [
  {
    name: 'A Room' as const,
    capacity: 'Maximum capacity: 6 guests',
    note: 'Large recording room with the same core equipment as B Room. Best for larger groups, collaborative sessions, teams, and clients who need more space.',
    equipment: 'Same core equipment' as const,
  },
  {
    name: 'B Room' as const,
    capacity: 'Maximum capacity: 3 guests',
    note: 'Small recording room with the same core equipment as A Room. Best for solo artists, small teams, and compact sessions.',
    equipment: 'Same core equipment' as const,
  },
];

export const moreThanRap = {
  name: 'More Than Rap' as const,
  ages: 'Ages 4–15',
  schedule: 'Monday through Wednesday, 10:00 AM to 4:00 PM',
  options: ['Early-arrival option', 'Late-departure option'],
  instructors: ['The Clickbait owner', 'Arielle Long', 'Special guest instructors and creative professionals'],
  curriculum: ['Recording', 'Production', 'Performance', 'Branding', 'Marketing', 'Entrepreneurship'],
  deliverables: ['Graded creative assignments', 'A complete beat', 'A complete song', 'A larger body of creative work'],
  award: 'The program leader or top participant receives a three-hour recording block.',
};

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Rooms', href: '/rooms' },
  { label: 'Work', href: '/portfolio' },
  { label: 'More Than Rap', href: '/more-than-rap' },
  { label: 'Creators Club', href: '/creators-club' },
  { label: 'About', href: '/about' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const site = {
  brand: { name: siteConfig.name, description: siteConfig.description },
  contact: { phone: siteConfig.links.phone, instagram: siteConfig.links.instagram, address: siteConfig.address },
  services,
  rooms,
  moreThanRap,
  bookingBaseUrl: siteConfig.bookingBaseUrl,
  portfolioItems: [] as z.infer<typeof PortfolioItemSchema>[],
};

SiteSchema.parse(site);
