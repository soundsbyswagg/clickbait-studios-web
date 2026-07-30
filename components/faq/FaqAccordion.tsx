'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';
import { PageText } from '@/components/i18n/PageText';

const faqGroups = { en: [
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
], es: [
  { intent: 'Sesiones de estudio', questions: [
    { q: '¿Con cuánta anticipación debo reservar?', a: 'Reserva al menos cuatro horas antes del horario solicitado. Hay sesiones disponibles a cualquier hora con reserva anticipada.' },
    { q: '¿Qué ocurre si llego tarde?', a: 'Hay un margen de 15 minutos. El tiempo reservado no se extiende automáticamente por una llegada tarde.' },
    { q: '¿Qué incluye la sesión base?', a: 'La sesión base de $100 tiene un mínimo de tres horas e incluye apoyo estándar de ingeniería durante la sesión.' },
  ] },
  { intent: 'Salas y acceso', questions: [
    { q: '¿Cuál es la diferencia entre las salas?', a: 'La Sala A admite hasta 6 personas y ofrece más espacio. La Sala B admite hasta 3. Ambas usan el mismo equipo principal.' },
    { q: '¿Hay estacionamiento?', a: 'Sí. Hay estacionamiento gratuito.' },
    { q: '¿Puedo llegar sin cita?', a: 'Se aceptan clientes sin cita de 8:00 a. m. a 5:00 p. m.' },
  ] },
  { intent: 'Más Que Rap', questions: [
    { q: '¿Para quién es el programa?', a: 'Más Que Rap es un programa supervisado de desarrollo creativo juvenil para edades de 4 a 15 años.' },
    { q: '¿Cuándo se reúne?', a: 'De lunes a miércoles, de 10:00 a. m. a 4:00 p. m., con opciones de llegada temprana y salida tarde.' },
  ] },
] } as const;

export function FaqByIntent() {
  const [open, setOpen] = useState<string | null>(null);
  const { language } = useLanguage();
  const groups = faqGroups[language];
  return (
    <section className="container py-12 md:py-20">
      <h1 className="mb-10 text-5xl tracking-tight md:text-6xl"><PageText id="faq.title" /></h1>
      <div className="space-y-12">
        {groups.map((group) => (
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
      <Link href="/contact" className="mt-10 inline-flex min-h-11 items-center font-semibold underline"><PageText id="faq.more" /></Link>
    </section>
  );
}
