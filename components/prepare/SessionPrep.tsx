'use client';

import { motion } from 'framer-motion';
import { MOTION } from '@/lib/motion';

const prepItems = [
  'Arrive 15 minutes early for check-in.',
  'Bring reference tracks in WAV or MP3 format.',
  'Confirm engineer needs at booking.',
  'Guest limits: A Room up to 6, B Room up to 3.',
  'Payment is due at session start.',
];

export function SessionPrep() {
  return (
    <section className="container py-20 md:py-28 border-b">
      <motion.h2
        className="text-3xl md:text-4xl tracking-[-0.04em] mb-3"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: MOTION.normal }}
      >
        Prepare for your session
      </motion.h2>
      <p className="text-muted max-w-2xl mb-8">Show up ready so we can focus on the record.</p>
      <ul className="grid md:grid-cols-2 gap-4">
        {prepItems.map((item, i) => (
          <motion.li
            key={i}
            className="studio-card border border-border p-5 rounded-lg text-sm"
            initial={{ y: 16 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * MOTION.stagger, duration: MOTION.normal }}
          >
            {item}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}