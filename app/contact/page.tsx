import { ContactSidebar } from '@/components/contact/ContactSidebar';
import { PolicySummary } from '@/components/policies/PolicySummary';
import { metadataFor } from '@/lib/seo';
import { PageText } from '@/components/i18n/PageText';

export const metadata = metadataFor('/contact');

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const { topic } = await searchParams;
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl"><PageText id="contact.title" /></h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">
        {topic ? `${topic}. ` : ''}<PageText id="contact.intro" />
      </p>
      <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
        <section className="rounded-lg border border-border bg-card p-7">
          <h2 className="mb-4 text-3xl font-semibold"><PageText id="contact.inquiry" /></h2>
          <p className="mb-5 text-muted"><PageText id="contact.inquiryBody" /></p>
          <p className="text-sm text-muted"><PageText id="contact.standard" /></p>
        </section>
        <ContactSidebar />
      </div>
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold"><PageText id="contact.before" /></h2>
        <PolicySummary />
      </section>
    </div>
  );
}
