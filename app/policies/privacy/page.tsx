import Link from 'next/link';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/policies/privacy');

export default function PrivacyPolicyPage() {
  return (
    <div className="container max-w-3xl py-12 md:py-20">
      <h1 className="mb-8 text-5xl tracking-tight">Privacy</h1>
      <p className="text-muted">Booking is completed through the linked Wix booking experience, which processes the information needed to schedule and manage your session. For questions about information connected to a booking, contact Clickbait ENT by phone or Instagram.</p>
      <Link href="/contact" className="mt-6 inline-flex min-h-11 items-center font-semibold underline">Contact Clickbait ENT</Link>
    </div>
  );
}
