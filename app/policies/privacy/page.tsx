import Link from 'next/link';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/policies/privacy');

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight"><PageText id="policy.privacyTitle" /></h1>
      <p className="text-muted"><PageText id="policy.privacyBody" /></p>
      <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-semibold underline"><PageText id="policy.contact" /></Link>
    </div>
  );
}
