import Link from 'next/link';
import { moreThanRap } from '@/content/site';
import { inquiryRoutes } from '@/lib/routes';
import { metadataFor } from '@/lib/seo';

export const metadata = metadataFor('/more-than-rap');

export default function MoreThanRapPage() {
  return (
    <div className="container py-12 md:py-20">
      <p className="mb-3 text-sm uppercase tracking-widest text-muted">Youth creative-development curriculum</p>
      <h1 className="mb-4 text-5xl tracking-tight md:text-7xl">{moreThanRap.name}</h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">{moreThanRap.ages}. {moreThanRap.schedule}. Early-arrival and late-departure options are available.</p>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="rounded-lg border border-border bg-card p-7">
          <h2 className="mb-4 text-2xl font-semibold">Who leads the program</h2>
          <ul className="space-y-2 text-muted">{moreThanRap.instructors.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="rounded-lg border border-border bg-card p-7">
          <h2 className="mb-4 text-2xl font-semibold">Creative exposure</h2>
          <ul className="grid grid-cols-2 gap-2 text-muted">{moreThanRap.curriculum.map((item) => <li key={item}>{item}</li>)}</ul>
        </section>
        <section className="rounded-lg border border-border bg-card p-7 md:col-span-2">
          <h2 className="mb-4 text-2xl font-semibold">Assignments and outcomes</h2>
          <ul className="space-y-2 text-muted">{moreThanRap.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
          <p className="mt-5 border-t border-border pt-5">{moreThanRap.award}</p>
        </section>
      </div>
      <Link href={inquiryRoutes.moreThanRap} className="mt-8 inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground">Submit a program inquiry</Link>
    </div>
  );
}
