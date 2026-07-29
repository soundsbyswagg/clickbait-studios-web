import { SiteSchema } from '@/lib/schemas';

export const siteConfig = {
  name: 'Clickbait ENT',
  description: 'Atlanta recording built around the session. Engineer-assisted sessions, solo rooms, podcast/video, and the More Than Rap program.',
  url: 'https://clickbaitent.com',
  ogImage: '/og.jpg',
  links: {
    instagram: 'https://www.instagram.com/clickbait.ent/',
    phone: '470-621-1417',
  },
  address: '1587 Phoenix Boulevard, Suite 5, Atlanta, Georgia 30349',
  hours: 'Walk-ins 8:00 AM – 5:00 PM. 24-hour booking by advance reservation.',
  bookingBaseUrl: 'https://www.clickbaitent.com/book-online',
  email: 'bookings@clickbaitent.com', // LAUNCH BLOCKER - verify domain email exists
};

export const services = [
  {
    slug: 'engineer-assisted',
    title: 'Engineer-Assisted Recording Sessions',
    description: 'Professional engineer support in A or B Room.',
    startingPrice: 'From $100 (3hr min)',
    duration: '2-8 hours',
    cta: 'Book Engineer Session',
    wixUrl: 'https://www.clickbaitent.com/book-online',
  },
  {
    slug: 'solo',
    title: 'Solo Session (No Engineer)',
    description: 'Self-serve studio time.',
    startingPrice: 'From $100 (3hr min)',
    duration: '2-8 hours',
    cta: 'Book Solo Session',
    wixUrl: 'https://www.clickbaitent.com/book-online',
  },
  {
    slug: 'podcast',
    title: 'Podcast / Content Room',
    description: 'Dedicated room for podcasts and content creation.',
    startingPrice: 'From $100 (3hr min)',
    duration: '1-8 hours',
    cta: 'Book Podcast Room',
    wixUrl: 'https://www.clickbaitent.com/book-online',
  },
  {
    slug: 'consultation',
    title: 'Consultation',
    description: 'Strategy, production planning, or artist development.',
    startingPrice: 'From $50',
    duration: '1 hour',
    cta: 'Book Consultation',
    wixUrl: undefined,
  },
];

export const rooms = [
  {
    name: 'A Room' as const,
    capacity: 'Up to 6 guests',
    note: 'Larger space for teams and group sessions. Same equipment as B Room. VERIFY exact differences with client.',
    equipment: 'Same equipment' as const,
  },
  {
    name: 'B Room' as const,
    capacity: 'Up to 3 guests',
    note: 'Intimate room. Same equipment as A Room. VERIFY exact differences with client.',
    equipment: 'Same equipment' as const,
  },
];

export const moreThanRap = {
  name: 'More Than Rap' as const,
  schedule: 'Monday through Wednesday, 10:00 AM to 4:00 PM',
  instructors: ['The Clickbait founder', 'Arielle Long'],
  deliverables: ['A completed beat', 'A completed song', 'A larger completed body of work'],
  award: 'The program leader or highest-performing participant may receive a three-hour recording block.',
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
  brand: { name: 'Clickbait ENT' as const, description: siteConfig.description },
  contact: { phone: siteConfig.links.phone, instagram: siteConfig.links.instagram, address: siteConfig.address, email: siteConfig.email },
  services,
  rooms,
  moreThanRap,
  bookingBaseUrl: siteConfig.bookingBaseUrl,
};

SiteSchema.parse(site); // Runtime validation at import time
