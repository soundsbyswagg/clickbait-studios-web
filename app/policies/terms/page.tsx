import Link from 'next/link';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/policies/terms');

export default function TermsPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight"><PageText id="policy.termsTitle" /></h1>
      <p className="text-muted"><PageText id="policy.termsBody" /></p>
      <Link href="/policies/booking" className="mt-6 inline-flex min-h-11 items-center font-semibold underline"><PageText id="policy.read" /></Link>
    </div>
  );
}
