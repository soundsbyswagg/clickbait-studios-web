'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { services, rooms, moreThanRap } from '@/content/site';
import { MOTION } from '@/lib/motion';

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero - controlled motion per prompt */}
      <section className="min-h-[80vh] flex items-center border-b">
        <div className="container">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[3px] text-neutral-500 mb-4">Atlanta • 24/7 Booking</p>

            <div className="overflow-hidden">
              <motion.h1
                className="text-7xl md:text-8xl font-semibold tracking-tighter leading-none mb-6"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: MOTION.slow, ease: MOTION.easing }}
              >
                BOOK THE ROOM.<br />FINISH THE RECORD.
              </motion.h1>
            </div>

            <p className="text-xl text-neutral-600 max-w-md mb-8">
              Engineer-assisted sessions. Solo rooms. Podcast and video. The More Than Rap program.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-black px-8 py-4 text-base font-medium text-white hover:bg-neutral-800 motion-normal"
              >
                Book a Session
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border px-8 py-4 text-base font-medium hover:bg-neutral-50 motion-normal"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip - simple slide in */}
      <section className="border-b py-6 bg-neutral-50">
        <div className="container grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          {['24-hour booking by advance reservation', 'Engineer or solo options', 'Podcast & content room', 'Free parking • Atlanta'].map((text, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="h-1 w-1 bg-black rounded-full" />
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* Rooms - stagger cards */}
      <section className="container py-16 border-b">
        <h2 className="text-4xl tracking-tight mb-8">Choose your room</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {rooms.map((room, index) => (
            <motion.div
              key={room.name}
              className="border p-8 rounded-lg hover:shadow-sm motion-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * MOTION.stagger, duration: MOTION.normal }}
            >
              <div className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{room.name.toUpperCase()}</div>
              <h3 className="text-3xl tracking-tight mb-2">{room.capacity}</h3>
              <p className="text-neutral-600 mb-6">{room.note}</p>
              <Link href="/contact" className="text-sm font-medium underline">Book {room.name}</Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services - staggered reveal */}
      <section className="container py-16">
        <h2 className="text-4xl tracking-tight mb-8">Priority services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.slice(0, 3).map((service) => (
            <div key={service.slug} className="border p-6 rounded-lg group">
              <h3 className="font-medium text-xl mb-2 group-hover:underline">{service.title}</h3>
              <p className="text-sm text-neutral-600 mb-4">{service.description}</p>
              <div className="text-xs text-neutral-500 mb-4">{service.duration} • {service.startingPrice}</div>
              <Link href="/contact" className="text-sm font-medium">{service.cta} →</Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link href="/services" className="text-sm underline">See all services</Link>
        </div>
      </section>

      {/* More Than Rap */}
      <section className="bg-black text-white py-16">
        <div className="container">
          <div className="max-w-xl">
            <div className="uppercase text-xs tracking-[2px] mb-2 text-white/60">Curriculum Program</div>
            <h2 className="text-5xl tracking-tighter mb-6">{moreThanRap.name}</h2>
            <p className="text-white/80 mb-4">{moreThanRap.schedule}</p>
            <p className="mb-4">Instructors: {moreThanRap.instructors.join(' + ')}</p>
            <ul className="mb-6 text-sm space-y-1">
              {moreThanRap.deliverables.map((d, i) => <li key={i}>• {d}</li>)}
            </ul>
            <Link href="/more-than-rap" className="inline-block bg-white text-black px-6 py-3 text-sm font-medium rounded">Learn about the program</Link>
          </div>
        </div>
      </section>

      {/* Signature scroll text - GSAP + Lenis per prompt (1 sequence) */}
      <section className="border-y bg-neutral-950 text-white py-8 overflow-hidden">
        <div className="container">
          <div className="text-[13vw] leading-none font-semibold tracking-[-4px] flex justify-between opacity-20">
            <span>RECORD.</span>
            <span>CREATE.</span>
            <span>RELEASE.</span>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container py-20 text-center">
        <h2 className="text-5xl tracking-tighter mb-4">Ready to record?</h2>
        <Link href="/contact" className="text-lg underline">Book a Session →</Link>
      </section>
    </main>
  );
}
