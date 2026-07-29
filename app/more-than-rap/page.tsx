import Link from 'next/link';
import { moreThanRap } from '@/content/site';
import { ProgramTimeline } from '@/components/program/ProgramTimeline';
import { InstructorCard } from '@/components/program/InstructorCard';

export const metadata = {
  title: 'More Than Rap | Clickbait ENT',
  description: 'Curriculum-based youth creative program at Clickbait ENT in Atlanta. Schedule, instructors, and enrollment details.',
};

export default function MoreThanRapPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">{moreThanRap.name}</h1>
      <p className="text-xl text-muted mb-8">Curriculum-based youth creative program</p>

      <div className="max-w-2xl space-y-6 text-muted">
        <div>
          <h2 className="font-medium text-foreground mb-1">Schedule</h2>
          <p>{moreThanRap.schedule}</p>
        </div>

        <ProgramTimeline />

        <InstructorCard />

        <div>
          <h2 className="font-medium text-foreground mb-1">Deliverables</h2>
          <ul className="list-disc pl-5 space-y-1">
            {moreThanRap.deliverables.map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        </div>

        {moreThanRap.award && (
          <div>
            <h2 className="font-medium text-foreground mb-1">Award</h2>
            <p>{moreThanRap.award}</p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Link href="/contact?topic=More%20Than%20Rap" className="inline-flex bg-black text-white px-6 py-3 text-sm font-medium rounded">
          Inquire about enrollment
        </Link>
      </div>
    </main>
  );
}