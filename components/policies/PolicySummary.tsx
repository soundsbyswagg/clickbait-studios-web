'use client';

import Link from 'next/link';
import { useLanguage } from '@/components/i18n/LanguageProvider';

const policies = {
  en: [
    ['Advance booking', 'Book at least four hours before the requested start time.'],
    ['Arrival', 'Automated arrival instructions are sent by text after booking. A 15-minute lateness window applies.'],
    ['Session timing', 'Booked time is not extended for lateness. A five-minute end-of-session grace period applies.'],
    ['Conduct', 'No smoking, weapons, or illegal activity. The booking client is responsible for damage caused by the client or guests.'],
  ],
  es: [
    ['Reserva anticipada', 'Reserva al menos cuatro horas antes del horario solicitado.'],
    ['Llegada', 'Las instrucciones de llegada se envían por mensaje de texto después de reservar. Hay un margen de 15 minutos por llegada tarde.'],
    ['Duración de la sesión', 'El tiempo reservado no se extiende por llegada tarde. Hay cinco minutos de gracia al final.'],
    ['Conducta', 'No se permite fumar, portar armas ni realizar actividades ilegales. El cliente que reserva es responsable por daños causados por él o sus invitados.'],
  ],
} as const;

export function PolicySummary() {
  const { language } = useLanguage();
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {policies[language].map(([title, body]) => <article key={title} className="rounded-lg border border-border bg-card p-5"><h3 className="mb-2 font-semibold">{title}</h3><p className="text-sm text-muted">{body}</p></article>)}
      <Link href="/policies/booking" className="inline-flex min-h-11 items-center font-semibold underline">{language === 'es' ? 'Leer la política de reservas completa' : 'Read the complete booking policy'}</Link>
    </div>
  );
}
