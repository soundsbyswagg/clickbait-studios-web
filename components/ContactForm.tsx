'use client';

import { useState } from 'react';

export function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState('submitting');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);

    const payload = {
      name: (data.get('name') as string ?? '').trim(),
      email: (data.get('email') as string ?? '').trim(),
      topic: (data.get('topic') as string ?? '').trim(),
      message: (data.get('message') as string ?? '').trim(),
    };

    // For phase 1: mailto fallback or placeholder. Replace with real endpoint later.
    try {
      // Placeholder: open mailto with prefill
      const subject = encodeURIComponent(`Clickbait ENT Inquiry: ${payload.topic}`);
      const body = encodeURIComponent(`Name: ${payload.name}\nEmail: ${payload.email}\n\n${payload.message}`);
      window.location.href = `mailto:bookings@clickbaitent.com?subject=${subject}&body=${body}`;
      setFormState('success');
    } catch {
      setFormState('error');
      setErrorMsg('Please email us directly at bookings@clickbaitent.com');
    }
  }

  if (formState === 'success') {
    return <div>Thanks — we will follow up shortly. (Email client opened as placeholder.)</div>;
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name *</label>
      <input id="name" name="name" type="text" required />

      <label htmlFor="email">Email *</label>
      <input id="email" name="email" type="email" required />

      <label htmlFor="topic">Topic</label>
      <select id="topic" name="topic">
        <option value="">Select...</option>
        <option value="Booking">Booking a session</option>
        <option value="More Than Rap">More Than Rap program</option>
        <option value="Production">Production / mixing</option>
        <option value="Other">Other</option>
      </select>

      <label htmlFor="message">Message *</label>
      <textarea id="message" name="message" required />

      <button type="submit" disabled={formState === 'submitting'}>
        {formState === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>

      {errorMsg && <p>{errorMsg}</p>}
    </form>
  );
}
