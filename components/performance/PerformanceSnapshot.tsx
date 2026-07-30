'use client';

import { useEffect, useState } from 'react';
import { usePageText } from '@/components/i18n/PageText';

type Snapshot = { domReady: number; load: number; transfer: number };
export function PerformanceSnapshot() {
  const text = usePageText();
  const [snapshot, setSnapshot] = useState<Snapshot | null>(null);
  useEffect(() => {
    const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
    const timer = window.setTimeout(() => {
      if (navigation) setSnapshot({
        domReady: Math.round(navigation.domContentLoadedEventEnd),
        load: Math.round(navigation.loadEventEnd),
        transfer: Math.round(navigation.transferSize / 1024),
      });
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  if (!snapshot) return <p className="text-muted">{text('performance.collecting')}</p>;
  return <dl className="grid gap-4 sm:grid-cols-3">
    <Metric label={text('performance.domReady')} value={`${snapshot.domReady} ms`} />
    <Metric label={text('performance.windowLoad')} value={`${snapshot.load} ms`} />
    <Metric label={text('performance.transfer')} value={`${snapshot.transfer} KB`} />
  </dl>;
}
function Metric({ label, value }: { label: string; value: string }) {
  return <div className="rounded-lg border border-border bg-card p-5"><dt className="text-sm text-muted">{label}</dt><dd className="mt-1 text-2xl font-semibold">{value}</dd></div>;
}
