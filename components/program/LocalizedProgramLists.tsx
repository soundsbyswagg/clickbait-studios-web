'use client';

import { PageText, usePageText } from '@/components/i18n/PageText';

export function LocalizedProgramLists() {
  const t = usePageText();
  const list = (id: 'program.instructors' | 'program.curriculum' | 'program.deliverables') => t(id).split('|');
  return <>
    <section className="rounded-lg border border-border bg-card p-7"><h2 className="mb-4 text-2xl font-semibold"><PageText id="program.leaders" /></h2><ul className="space-y-2 text-muted">{list('program.instructors').map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="rounded-lg border border-border bg-card p-7"><h2 className="mb-4 text-2xl font-semibold"><PageText id="program.exposure" /></h2><ul className="grid grid-cols-2 gap-2 text-muted">{list('program.curriculum').map((item) => <li key={item}>{item}</li>)}</ul></section>
    <section className="rounded-lg border border-border bg-card p-7 md:col-span-2"><h2 className="mb-4 text-2xl font-semibold"><PageText id="program.outcomes" /></h2><ul className="space-y-2 text-muted">{list('program.deliverables').map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-5 border-t border-border pt-5"><PageText id="program.award" /></p></section>
  </>;
}
