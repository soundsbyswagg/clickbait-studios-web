'use client';

import { useState } from 'react';
import { siteConfig } from '@/content/site';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setState('submitting');

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError('Please complete all required fields.');
      setState('error');
      return;
    }

    const subject = encodeURIComponent(`Clickbait ENT Inquiry: ${topic || 'General'}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n${message}`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
    setState('success');
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">Name *</label>
        <input
          id="name"
          name="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
        <input
          id="email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <div>
        <label htmlFor="topic" className="block text-sm font-medium mb-1">Topic</label>
        <select
          id="topic"
          name="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        >
          <option value="">Select...</option>
          <option value="Booking">Booking a session</option>
          <option value="More Than Rap">More Than Rap program</option>
          <option value="Production">Production / mixing</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">Message *</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent"
        />
      </div>

      <button
        type="submit"
        disabled={state === 'submitting' || state === 'success'}
        className="magnetic-btn magnetic-btn--primary"
      >
        {state === 'submitting' ? 'Sending...' : 'Send Inquiry'}
      </button>

      <p className="text-xs text-muted">
        Your email client will open on submission. We typically follow up within one business day.
      </p>

      {error && <p className="text-sm text-red-400" role="alert">{error}</p>}
      {state === 'success' && !error && (
        <p className="text-sm text-green-400" role="status">Thanks — we will follow up shortly.</p>
      )}
    </form>
  );
}