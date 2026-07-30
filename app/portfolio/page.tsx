import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/portfolio');

export default function PortfolioPage() {
  return <PortfolioGrid />;
}
