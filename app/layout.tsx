import type { Metadata } from 'next';
import { Manrope, Space_Grotesk } from 'next/font/google';
import { SmoothScroll } from '@/components/motion/SmoothScroll';
import { MotionProvider } from '@/components/motion/MotionProvider';
import { PageShell } from '@/components/layout/PageShell';
import { StructuredData } from '@/components/seo/StructuredData';
import Cursor from '@/components/ui/Cursor';
import { ContactStrip } from '@/components/layout/ContactStrip';
import { BookingBar } from '@/components/layout/BookingBar';
import { SiteHeader } from '@/components/navigation/SiteHeader';
import { SwipeableMenu } from '@/components/navigation/SwipeableMenu';
import { QuickActions } from '@/components/mobile/QuickActions';
import { LanguageProvider } from '@/components/i18n/LanguageProvider';
import { ThemeProvider } from '@/components/theme/ThemeProvider';
import { ReducedMotionProvider } from '@/components/a11y/ReducedMotionProvider';
import { AnnouncerProvider } from '@/components/a11y/Announcer';
import { SkipLinks } from '@/components/a11y/SkipLinks';
import { BreadcrumbStructuredData } from '@/components/seo/BreadcrumbStructuredData';
import { ServiceWorkerRegistration } from '@/components/pwa/ServiceWorkerRegistration';
import { InstallPrompt } from '@/components/pwa/InstallPrompt';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { WebVitals } from '@/components/performance/WebVitals';
import './globals.css';
import { siteConfig } from '@/content/site';

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

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
    languages: { 'en-US': siteConfig.url, 'es-US': siteConfig.url },
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
  const isVercelBuild = process.env.VERCEL === '1';

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${spaceGrotesk.variable} antialiased`}>
        <LanguageProvider>
          <AnnouncerProvider>
            <ReducedMotionProvider>
              <ThemeProvider>
                <Cursor />
                <div className="grain" aria-hidden="true" />
                <SkipLinks />
                <StructuredData />
                <BreadcrumbStructuredData />
                <SiteHeader />
                <SwipeableMenu />
                <SmoothScroll>
                  <MotionProvider>
                    <PageShell><main id="main">{children}</main></PageShell>
                  </MotionProvider>
                </SmoothScroll>
                <BookingBar />
                <QuickActions />
                <ServiceWorkerRegistration />
                <InstallPrompt />
                <ContactStrip />
                <WebVitals />
                {isVercelBuild ? <Analytics /> : null}
                {isVercelBuild ? <SpeedInsights /> : null}
              </ThemeProvider>
            </ReducedMotionProvider>
          </AnnouncerProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
