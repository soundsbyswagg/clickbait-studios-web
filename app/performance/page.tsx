import { PerformanceSnapshot } from '@/components/performance/PerformanceSnapshot';

export const metadata = {
  title: 'Performance Snapshot | Clickbait ENT',
  robots: { index: false, follow: false },
};

export default function PerformancePage() {
  return <div className="container py-12 md:py-20">
    <h1 className="type-h1 mb-6">Performance snapshot</h1>
    <p className="mb-8 max-w-2xl text-muted">A local snapshot for this browser session. Production field metrics are collected through Vercel Speed Insights.</p>
    <PerformanceSnapshot />
  </div>;
}
