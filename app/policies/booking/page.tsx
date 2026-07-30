import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';
import { BookingPolicySections } from '@/components/policies/BookingPolicySections';

export const metadata = metadataFor('/policies/booking');

export default function BookingPolicyPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight"><PageText id="policy.bookingTitle" /></h1>
      <BookingPolicySections />
    </div>
  );
}
