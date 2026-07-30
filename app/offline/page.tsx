import { metadataFor } from '@/lib/seo';
import { OfflineRetry } from '@/components/pwa/OfflineRetry';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/offline');

export default function OfflinePage() {
  return <div className="container grid min-h-[65svh] max-w-2xl place-content-center py-16 text-center">
    <h1 className="type-h1 mb-5"><PageText id="offline.title" /></h1>
    <p className="mb-8 text-muted"><PageText id="offline.body" /></p>
    <OfflineRetry />
  </div>;
}
