import { PerformanceSnapshot } from '@/components/performance/PerformanceSnapshot';
import { PageText } from '@/components/i18n/PageText';

export const metadata = {
  title: 'Performance Snapshot | Clickbait ENT',
  robots: { index: false, follow: false },
};

export default function PerformancePage() {
  return <div className="container py-12 md:py-20">
    <h1 className="type-h1 mb-6"><PageText id="performance.title" /></h1>
    <p className="mb-8 max-w-2xl text-muted"><PageText id="performance.body" /></p>
    <PerformanceSnapshot />
  </div>;
}
