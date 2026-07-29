'use client';

import { useState } from 'react';
import Link from 'next/link';

const faqGroups = [
  {
    intent: 'First-Time Artist',
    icon: '🎤',
    questions: [
      { q: 'What should I bring to my first session?', a: 'Bring reference tracks in WAV or MP3, any required gear, and a valid ID. Arrive 15 minutes early.' },
      { q: 'Do I need an engineer?', a: 'Engineer-assisted sessions are available. Solo sessions are self-serve.' },
    ],
  },
  {
    intent: 'Podcast Creator',
    icon: '🎙️',
    questions: [
      { q: 'What equipment is in the podcast room?', a: 'Professional microphones, headphones, and a dedicated content room for recording.' },
      { q: 'Can I bring guests?', a: 'Yes, subject to room capacity. Podcast room holds up to 3 guests.' },
    ],
  },
  {
    intent: 'More Than Rap',
    icon: '🎓',
    questions: [
      { q: 'What is More Than Rap?', a: 'A curriculum-based youth creative program. Contact us for age eligibility and enrollment details.' },
      { q: 'When does it meet?', a: 'Monday through Wednesday, 10:00 AM to 4:00 PM.' },
    ],
  },
];

function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-border rounded-lg">
          <button
            type="button"
            className="w-full flex items-center justify-between p-4 text-left"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span className="font-medium text-sm">{item.q}</span>
            <span className="text-muted text-xs">{openIndex === i ? '−' : '+'}</span>
          </button>
          {openIndex === i && (
            <div className="px-4 pb-4 text-sm text-muted" role="region">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function FaqByIntent() {
  return (
    <section className="container py-20 md:py-28">
      <h2 className="text-4xl md:text-6xl tracking-[-0.04em] mb-10">Frequently Asked Questions</h2>
      <div className="space-y-12">
        {faqGroups.map((group) => (
          <div key={group.intent}>
            <h3 className="text-xl font-semibold mb-1">{group.icon} {group.intent}</h3>
            <FaqAccordion items={group.questions} />
          </div>
        ))}
      </div>
      <div className="mt-10 text-sm">
        <Link href="/contact" className="underline">Still have questions? Contact us</Link>
      </div>
    </section>
  );
}