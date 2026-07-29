import type { Metadata } from 'next';
import Link from 'next/link';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { MobileMenu } from '@/components/navigation/MobileMenu';
import { PageShell } from '@/components/layout/PageShell';
import { StructuredData } from '@/components/seo/StructuredData';
import Cursor from '@/components/ui/Cursor';
import Loader from '@/components/ui/Loader';
import { ContactStrip } from '@/components/layout/ContactStrip';
import { BookingBar } from '@/components/layout/BookingBar';
import './globals.css';
import { siteConfig, navigation } from '@/content/site';
import { BOOKING_URL, externalLinkProps } from '@/lib/routes';

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
  },
  twitter: {
    card: 'summary',
    title: siteConfig.name,
    description: siteConfig.description,
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
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <Loader />
        <Cursor />
        <div className="grain" aria-hidden="true" />
        <a href="#main" className="skip-link">Skip to content</a>
        <StructuredData />
        <header className="border-b border-border bg-background text-foreground">
          <nav className="container flex items-center justify-between py-4" role="navigation" aria-label="Main navigation">
            <Link href="/" className="text-lg font-bold tracking-tight text-foreground" aria-label={`${siteConfig.name} - Home`}>
              {siteConfig.name}
            </Link>
            <div className="hidden md:flex gap-6 text-sm">
              {primaryNavigation.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </div>
            <MobileMenu />
            <Link
              href={BOOKING_URL}
              {...externalLinkProps}
              className="hidden min-h-11 md:inline-flex items-center justify-center rounded-md bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground"
            >
              Book a Session
            </Link>
          </nav>
        </header>
        <SmoothScroll>
          <MotionProvider>
            <PageShell>
              <main id="main">{children}</main>
            </PageShell>
          </MotionProvider>
        </SmoothScroll>
        <BookingBar />
        <ContactStrip />
      </body>
    </html>
  );
}
