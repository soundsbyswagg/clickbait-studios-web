import type { Metadata } from 'next';
import Link from 'next/link';
import { Manrope, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { siteConfig, navigation } from '@/content/site';
import { SmoothScroll } from '@/components/motion/SmoothScroll';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const primaryNavigation = navigation.filter((item) =>
  ['Services', 'Rooms', 'More Than Rap', 'About'].includes(item.label),
);

const footerNavigation = navigation.filter((item) =>
  ['Work', 'Creators Club', 'FAQ', 'Contact'].includes(item.label),
);

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable}`}>
        <a href="#main" className="skip-link">Skip to content</a>
        <header className="border-b">
          <nav className="container flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
            <Link href="/" className="font-semibold tracking-tight" aria-label={`${siteConfig.name} - Home`}>
              {siteConfig.name}
            </Link>
            <div className="hidden md:flex gap-6 text-sm">
              {primaryNavigation.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Book a Session
            </Link>
          </nav>
        </header>
        <SmoothScroll>
          <main id="main">{children}</main>
        </SmoothScroll>
        <footer className="border-t py-8 text-sm text-neutral-500" role="contentinfo">
          <div className="container grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p>{siteConfig.address} • {siteConfig.links.phone} • <a href={siteConfig.links.instagram} className="hover:underline" target="_blank" rel="noopener noreferrer">Instagram</a></p>
              <p className="mt-1">© {new Date().getFullYear()} Clickbait ENT. All rights reserved.</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Footer navigation">
              {footerNavigation.map((item) => (
                <Link className="hover:text-black hover:underline" href={item.href} key={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </footer>
      </body>
    </html>
  );
}
