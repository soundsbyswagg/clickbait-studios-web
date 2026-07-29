import type { Metadata } from 'next';
import Link from 'next/link';
import { ContactForm } from '@/components/ContactForm';
import { siteConfig } from '@/content/site';

export const metadata: Metadata = {
  title: 'Contact | Clickbait ENT',
  description: 'Book a session or inquire about recording, production, podcast, or the More Than Rap program at Clickbait ENT in Atlanta.',
};

export default function ContactPage() {
  return (
    <main>
      <section>
        <p>Clickbait ENT Support</p>
        <h1>Contact Clickbait ENT</h1>
        <p>
          Questions about sessions, the More Than Rap program, or studio availability.
        </p>
      </section>

      <section aria-label="Contact options">
        <article>
          <p>Phone</p>
          <h2>{siteConfig.links.phone}</h2>
          <a href={`tel:${siteConfig.links.phone}`}>Call or text</a>
        </article>

        <article>
          <p>Instagram</p>
          <h2>{siteConfig.links.instagram}</h2>
          <a href={siteConfig.links.instagram} target="_blank">DM us</a>
        </article>

        <article>
          <p>Location</p>
          <h2>{siteConfig.address}</h2>
          <p>Free parking. Walk-ins 8 AM–5 PM. 24h booking by advance reservation.</p>
        </article>
      </section>

      <section aria-label="Send us a message">
        <ContactForm />
      </section>

      <section aria-label="Frequently asked questions">
        <h2>Common Questions</h2>
        {/* Add from site content */}
      </section>
    </main>
  );
}
