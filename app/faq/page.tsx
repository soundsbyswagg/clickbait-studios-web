import { FaqByIntent } from '@/components/faq/FaqAccordion';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/faq');

export default function FAQPage() {
  return <FaqByIntent />;
}
