'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqGroups = [
  {
    intent: 'Studio sessions',
    questions: [
      { q: 'How far ahead should I book?', a: 'Book at least four hours before your requested start time. Sessions are available around the clock with advance booking.' },
      { q: 'What happens if I arrive late?', a: 'Customers have a 15-minute lateness window. Booked time is not automatically extended because of late arrival.' },
      { q: 'What is included in the base session?', a: 'The $100 base session has a three-hour minimum and includes standard in-session engineering support.' },
    ],
  },
  {
    intent: 'Rooms and access',
    questions: [
      { q: 'What is the difference between the rooms?', a: 'A Room holds up to 6 guests and offers more space. B Room holds up to 3 guests. Both use the same core equipment.' },
      { q: 'Is parking available?', a: 'Yes. Free parking is available.' },
      { q: 'Can I walk in?', a: 'Walk-ins are accepted from 8:00 AM to 5:00 PM.' },
    ],
  },
  {
    intent: 'More Than Rap',
    questions: [
      { q: 'Who is the program for?', a: 'More Than Rap is a supervised youth creative-development curriculum for ages 4 through 15.' },
      { q: 'When does it meet?', a: 'Monday through Wednesday from 10:00 AM to 4:00 PM, with early-arrival and late-departure options.' },
    ],
  },
];

export function FaqByIntent() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section className="container py-12 md:py-20">
      <h1 className="mb-10 text-5xl tracking-tight md:text-6xl">Frequently Asked Questions</h1>
      <div className="space-y-12">
        {faqGroups.map((group) => (
          <section key={group.intent}>
            <h2 className="mb-4 text-2xl font-semibold">{group.intent}</h2>
            <div className="space-y-3">
              {group.questions.map((item) => {
                const id = `${group.intent}-${item.q}`;
                return <div key={id} className="rounded-lg border border-border bg-card">
                  <button type="button" className="flex min-h-11 w-full items-center justify-between p-4 text-left" onClick={() => setOpen(open === id ? null : id)} aria-expanded={open === id}>
                    <span className="font-semibold">{item.q}</span><span aria-hidden="true">{open === id ? '−' : '+'}</span>
                  </button>
                  {open === id && <p className="px-4 pb-4 text-muted">{item.a}</p>}
                </div>;
              })}
            </div>
          </section>
        ))}
      </div>
      <Link href="/contact" className="mt-10 inline-flex min-h-11 items-center font-semibold underline">Still have a question?</Link>
    </section>
  );
}
