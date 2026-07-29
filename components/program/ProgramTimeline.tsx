'use client';

import { motion } from 'framer-motion';
import { MOTION } from '@/lib/motion';

export function ProgramTimeline() {
  const days = [
    { day: 'Mon', label: 'Session 1' },
    { day: 'Tue', label: 'Session 2' },
    { day: 'Wed', label: 'Session 3' },
  ];

  return (
    <div className="flex flex-col gap-6 md:flex-row">
      {days.map((item, index) => (
        <motion.div
          key={item.day}
          className="studio-card border border-border p-6 rounded-lg flex-1"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: index * MOTION.stagger, duration: MOTION.normal }}
        >
          <div className="text-xs uppercase tracking-widest text-muted mb-2">{item.day}</div>
          <div className="text-2xl font-semibold tracking-tight">{item.label}</div>
        </motion.div>
      ))}
    </div>
  );
}