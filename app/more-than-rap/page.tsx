import Link from 'next/link';
import { moreThanRap } from '@/content/site';

export default function MoreThanRapPage() {
  return (
    <main className="container py-12">
      <h1 className="text-5xl tracking-tight mb-4">{moreThanRap.name}</h1>
      <p className="text-xl text-neutral-600 mb-8">Curriculum-based youth creative program</p>

      <div className="max-w-2xl space-y-6 text-neutral-700">
        <div>
          <h3 className="font-medium mb-1">Schedule</h3>
          <p>{moreThanRap.schedule}</p>
        </div>

        <div>
          <h3 className="font-medium mb-1">Instructors</h3>
          <ul className="list-disc pl-5">
            {moreThanRap.instructors.map((i, idx) => <li key={idx}>{i}</li>)}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-1">Deliverables</h3>
          <ul className="list-disc pl-5">
            {moreThanRap.deliverables.map((d, idx) => <li key={idx}>{d}</li>)}
          </ul>
        </div>

        {moreThanRap.award && (
          <div>
            <h3 className="font-medium mb-1">Award</h3>
            <p>{moreThanRap.award}</p>
          </div>
        )}
      </div>

      <div className="mt-10">
        <Link href="/contact" className="inline-flex bg-black text-white px-6 py-3 rounded text-sm font-medium">Inquire about enrollment</Link>
      </div>

      <p className="mt-8 text-sm text-neutral-500">
        Age range, exact duration, pricing, and minor policies are pending client verification.
      </p>
    </main>
  );
}
