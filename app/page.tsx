'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import HeroMedia from '@/components/hero/HeroMedia';
import { SplitText } from '@/components/hero/SplitText';
import { services, rooms, moreThanRap } from '@/content/site';
import { MOTION } from '@/lib/motion';
import { ServiceCard } from '@/components/services/ServiceCard';
import { NavIndicator } from '@/components/navigation/NavIndicator';

const tickerItems = [
  'Record in Atlanta',
  'Engineer-assisted sessions',
  'Solo room access',
  'Podcast and content',
  'Finish the record',
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroMedia />

      <section className="relative min-h-[78vh] flex items-center border-b py-20 md:py-28">
        <div className="container">
          <div className="max-w-4xl">
            <SplitText delay={0.4} className="text-sm uppercase tracking-[3px] text-muted mb-5">
              Atlanta • 24/7 Booking
            </SplitText>

            <div className="overflow-hidden">
              <motion.h1
                className="text-[clamp(3.75rem,11vw,7.5rem)] font-semibold tracking-[-0.065em] leading-[0.82] mb-8"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: MOTION.slow, ease: MOTION.easing }}
              >
                <SplitText delay={0.55} duration={1} stagger={0.06}>
                  BOOK THE ROOM.<br />FINISH THE RECORD.
                </SplitText>
              </motion.h1>
            </div>

            <motion.p
              className="text-lg md:text-xl text-muted max-w-xl mb-9 leading-relaxed"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.12, duration: MOTION.normal, ease: MOTION.easing }}
            >
              Engineer-assisted sessions. Solo rooms. Podcast and video. The More Than Rap program.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ y: 24 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.2, duration: MOTION.normal, ease: MOTION.easing }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-base font-medium text-white hover:bg-card hover:-translate-y-1 motion-normal"
              >
                Book a Session
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-border px-8 py-4 text-base font-medium hover:border-black hover:-translate-y-1 motion-normal"
              >
                Explore Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-4">
        <div className="container">
          <NavIndicator />
        </div>
      </section>

      <section className="ticker" aria-label="Studio highlights">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1} key={group}>
              {tickerItems.map((item) => (
                <span className="contents" key={item}>
                  <span>{item}</span>
                  <span className="ticker-dot" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b py-6 bg-card text-foreground">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {['24-hour booking by advance reservation', 'Engineer or solo options', 'Podcast & content room', 'Free parking • Atlanta'].map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1 w-1 bg-black rounded-full" />
              {text}
            </div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28 border-b">
        <motion.h2
          className="text-4xl md:text-6xl tracking-[-0.04em] mb-10"
          initial={{ y: 28 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: MOTION.normal, ease: MOTION.easing }}
        >
          Choose your room
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              className="studio-card border border-border p-7 md:p-10 rounded-lg"
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: index * MOTION.stagger, duration: MOTION.normal }}
            >
              <div className="text-xs uppercase tracking-widest text-muted mb-2">{room.name.toUpperCase()}</div>
              <h3 className="text-3xl tracking-tight mb-2">{room.capacity}</h3>
              <p className="text-muted mb-6">{room.note}</p>
              <Link href="/contact" className="text-sm font-medium underline">Book {room.name}</Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <motion.h2
          className="text-4xl md:text-6xl tracking-[-0.04em] mb-10"
          initial={{ y: 28 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: MOTION.normal, ease: MOTION.easing }}
        >
          Priority services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-sm underline">See all services</Link>
        </div>
      </section>

      <section className="bg-black text-white py-20 md:py-28">
        <div className="container">
          <motion.div
            className="max-w-2xl"
            initial={{ x: -36 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: MOTION.slow, ease: MOTION.easing }}
          >
            <div className="uppercase text-xs tracking-[2px] mb-2 text-white/60">Curriculum Program</div>
            <h2 className="text-5xl md:text-7xl tracking-[-0.055em] mb-6">{moreThanRap.name}</h2>
            <p className="text-white/80 mb-4">{moreThanRap.schedule}</p>
            <p className="mb-4">Instructors: {moreThanRap.instructors.join(' + ')}</p>
            <ul className="mb-6 text-sm space-y-1">
              {moreThanRap.deliverables.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
            <Link href="/more-than-rap" className="inline-block bg-white text-black px-6 py-3 text-sm font-medium rounded">Learn about the program</Link>
          </motion.div>
        </div>
      </section>

      <section className="border-y bg-card text-white py-10 md:py-16 overflow-hidden" aria-hidden="true">
        <motion.div
          className="text-[clamp(4rem,13vw,12rem)] whitespace-nowrap leading-none font-semibold tracking-[-0.07em] opacity-20"
          initial={{ x: '8%' }}
          whileInView={{ x: '-18%' }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1.4, ease: MOTION.easing }}
        >
          RECORD. CREATE. RELEASE. RECORD.
        </motion.div>
      </section>

      <section className="container py-24 md:py-32 text-center">
        <motion.h2
          className="text-5xl md:text-7xl tracking-[-0.055em] mb-6"
          initial={{ scale: 0.96 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: MOTION.normal, ease: MOTION.easing }}
        >
          Ready to record?
        </motion.h2>
        <Link href="/contact" className="text-lg underline">Book a Session →</Link>
      </section>
    </main>
  );
}
