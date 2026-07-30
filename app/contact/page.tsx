import { ContactSidebar } from '@/components/contact/ContactSidebar';
import { PolicySummary } from '@/components/policies/PolicySummary';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/contact');

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">Contact Clickbait ENT</h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">
        {topic ? `Ask us about ${topic}. ` : ''}For custom work, call or message us on Instagram with your project type, preferred timing, and group size.
      </p>
      <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
        <section className="rounded-lg border border-border bg-card p-7">
          <h2 className="mb-4 text-3xl font-semibold">Custom project inquiry</h2>
          <p className="mb-5 text-muted">There is no online inquiry form at this time. Use phone or Instagram for an honest, direct conversation about consultations, mixing and mastering, branding and marketing, video, private events, recurring bookings, label work, or More Than Rap.</p>
          <p className="text-sm text-muted">Standard studio sessions remain available through the booking system.</p>
        </section>
        <ContactSidebar />
      </div>
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold">Before you book</h2>
        <PolicySummary />
      </section>
    </div>
  );
}
