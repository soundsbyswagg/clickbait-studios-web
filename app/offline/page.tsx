import { metadataFor } from '@/lib/seo';
import { OfflineRetry } from '@/components/pwa/OfflineRetry';

export const metadata = metadataFor('/offline');

export default function OfflinePage() {
  return <div className="container grid min-h-[65svh] max-w-2xl place-content-center py-16 text-center">
    <h1 className="type-h1 mb-5">You&apos;re offline</h1>
    <p className="mb-8 text-muted">Previously visited pages may still be available. Reconnect to check live booking availability.</p>
    <OfflineRetry />
  </div>;
}
