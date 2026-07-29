import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <main className="container py-12 max-w-3xl">
      <h1 className="text-5xl tracking-tight mb-8">Privacy Policy</h1>
      <p className="text-neutral-600">
        Clickbait ENT respects your privacy. We collect only the information necessary to book sessions and communicate with you.
        Full policy text is pending legal review and client approval.
      </p>
      <p className="mt-4 text-sm">
        <Link href="/contact" className="underline">Contact us for the current policy</Link>
      </p>
    </main>
  );
}
