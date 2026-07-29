'use client';

import { moreThanRap } from '@/content/site';
import { motion } from 'framer-motion';
import { MOTION } from '@/lib/motion';

export function InstructorCard() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {moreThanRap.instructors.map((name, index) => (
        <motion.div
          key={name}
          className="studio-card border border-border p-7 rounded-lg"
          initial={{ y: 20 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: index * MOTION.stagger, duration: MOTION.normal }}
        >
          <div className="text-xs uppercase tracking-widest text-muted mb-3">Instructor</div>
          <h3 className="text-2xl font-semibold tracking-tight mb-2">{name}</h3>
          <p className="text-sm text-muted">More Than Rap curriculum lead</p>
        </motion.div>
      ))}
    </div>
  );
}