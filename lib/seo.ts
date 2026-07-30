import type { Metadata } from 'next';
import { siteConfig } from '@/content/site';

export const routeSeo = {
  '/': ['Atlanta Studio Time Built Around Your Work', siteConfig.description, ['Atlanta recording studio', 'studio sessions']],
  '/services': ['Studio Services', 'Recording sessions, studio rental, podcast projects, and creative services in Atlanta.', ['recording services', 'audio engineering']],
  '/rooms': ['Recording Rooms', 'Choose A Room or B Room for your Clickbait ENT studio session.', ['recording rooms Atlanta', 'studio rental']],
  '/portfolio': ['Current Work', 'View current sessions and project work from Clickbait ENT.', ['Atlanta artists', 'studio work']],
  '/more-than-rap': ['More Than Rap', 'Youth creative-development curriculum for ages 4 through 15.', ['youth music program', 'creative development']],
  '/creators-club': ['Creators Club', 'Book, earn CLICKS, and redeem studio rewards.', ['studio rewards', 'Creators Club']],
  '/about': ['About Clickbait ENT', 'Professional studio space, engineering support, and creative services in Atlanta.', ['Clickbait ENT', 'Atlanta studio']],
  '/faq': ['Frequently Asked Questions', 'Answers about booking, rooms, arrival, sessions, and More Than Rap.', ['studio FAQ', 'booking questions']],
  '/contact': ['Contact Clickbait ENT', 'Book a session or contact Clickbait ENT by phone or Instagram.', ['Clickbait ENT contact', 'book studio Atlanta']],
  '/arrival': ['Arrival Information', 'Verified location, parking, and arrival information for Clickbait ENT.', ['studio directions', 'Atlanta parking']],
  '/policies/booking': ['Booking Policy', 'Booking, arrival, payment, timing, age, file, and conduct rules.', ['studio booking policy']],
  '/policies/privacy': ['Privacy', 'Privacy information for the Clickbait ENT website and linked booking experience.', ['privacy']],
  '/policies/terms': ['Studio Terms', 'Published studio booking and conduct terms for Clickbait ENT.', ['studio terms']],
  '/offline': ['Offline', 'Reconnect to continue using the Clickbait ENT website.', ['offline']],
  '/accessibility': ['Accessibility', 'Accessibility features and support information for the Clickbait ENT website.', ['website accessibility']],
} as const;

export type RoutePath = keyof typeof routeSeo;

export function metadataFor(path: RoutePath): Metadata {
  const [title, description, keywords] = routeSeo[path];
  const canonical = new URL(path, siteConfig.url).toString();
  const ogImage = `/api/og?path=${encodeURIComponent(path)}&title=${encodeURIComponent(title)}`;
  return {
    title,
    description,
    keywords: [...keywords],
    alternates: { canonical },
    openGraph: { title, description, url: canonical, images: [{ url: ogImage, width: 1200, height: 630, alt: title }] },
    twitter: { card: 'summary_large_image', title, description, images: [ogImage] },
  };
}
