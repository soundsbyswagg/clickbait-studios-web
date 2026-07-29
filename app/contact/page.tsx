import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactSidebar } from '@/components/contact/ContactSidebar';
import { SessionPrep } from '@/components/prepare/SessionPrep';

export const metadata: Metadata = {
  title: 'Contact | Clickbait ENT',
  description: 'Book a session or inquire about recording, production, podcast, or the More Than Rap program at Clickbait ENT in Atlanta.',
};

export default function ContactPage() {
  return (
    <main>
      <section className="container py-12">
        <h1 className="text-5xl tracking-tight mb-4">Contact Clickbait ENT</h1>
        <p className="text-xl text-muted mb-10 max-w-2xl">
          Questions about sessions, the More Than Rap program, or studio availability.
        </p>

        <div className="grid gap-10 lg:grid-cols-[1fr_320px]">
          <ContactForm />
          <ContactSidebar />
        </div>

        <SessionPrep />
      </section>
    </main>
  );
}