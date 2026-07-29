'use client';

import { motion } from 'framer-motion';
import { MOTION } from '@/lib/motion';

const processSteps = [
  { step: '01', title: 'Book', desc: 'Choose a service and reserve your time through Wix.' },
  { step: '02', title: 'Arrive', desc: 'Check in at the studio. We will confirm session details.' },
  { step: '03', title: 'Record', desc: 'Work with your engineer or run the session solo.' },
  { step: '04', title: 'Deliver', desc: 'Receive files via email, AirDrop, or WeTransfer.' },
];

export function ProcessWalkthrough() {
  return (
    <section className="container py-20 md:py-28 border-b">
      <h2 className="text-3xl md:text-4xl tracking-[-0.04em] mb-3">How sessions work</h2>
      <p className="text-muted max-w-2xl mb-8">A clear path from booking to finished files.</p>
      <div className="grid md:grid-cols-4 gap-4">
        {processSteps.map((item, i) => (
          <motion.div
            key={item.step}
            className="studio-card border border-border p-6 rounded-lg"
            initial={{ y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * MOTION.stagger, duration: MOTION.normal }}
          >
            <div className="text-xs text-muted mb-2">{item.step}</div>
            <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
            <p className="text-sm text-muted">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}