import Link from "next/link";
import { services, rooms, moreThanRap, siteConfig } from "@/content/site";
import { BOOKING_URL, externalLinkProps, inquiryRoutes } from "@/lib/routes";
import { ServiceCard } from "@/components/services/ServiceCard";
import { IntentRouter } from "@/components/home/IntentRouter";
import { metadataFor } from "@/lib/seo";
import { VideoBackground } from "@/components/studio/VideoBackground";
import { AudioReactiveVisualizer } from "@/components/studio/AudioReactiveVisualizer";
import {
  TranslatedSplitText,
  TranslatedText,
} from "@/components/i18n/TranslatedText";

export const metadata = metadataFor("/");

const tickerItems = [
  "Record in Atlanta",
  "Engineering support",
  "A Room",
  "B Room",
  "Podcast and content",
  "Finish your project",
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[70svh] items-center border-b border-border py-20 md:min-h-[78vh] md:py-28">
        <VideoBackground />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm uppercase tracking-[0.2em] text-muted">
              <TranslatedText
                textKey="home.eyebrow"
                fallback="Atlanta • Advance booking"
              />
            </p>
            <h1 className="mb-7 max-w-4xl text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              <TranslatedSplitText
                textKey="home.title"
                fallback="Atlanta Studio Time Built Around Your Work"
              />
            </h1>
            <p className="mb-9 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
              <TranslatedText
                textKey="home.support"
                fallback="Record, create, and develop your next project with professional studio space, engineering support, and creative services from Clickbait ENT."
              />
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={BOOKING_URL}
                {...externalLinkProps}
                className="inline-flex min-h-11 items-center rounded-md bg-accent px-7 font-semibold text-accent-foreground"
              >
                Book a Session
              </Link>
              <Link
                href="/contact"
                className="inline-flex min-h-11 items-center rounded-md border border-border bg-card px-7 font-semibold text-foreground"
              >
                <TranslatedText
                  textKey="home.project"
                  fallback="Ask About Your Project"
                />
              </Link>
            </div>
            <div className="mt-10 max-w-xl opacity-60">
              <AudioReactiveVisualizer />
            </div>
          </div>
        </div>
      </section>

      <IntentRouter />

      <section className="ticker" aria-label="Studio highlights">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1} key={group}>
              {tickerItems.map((item) => (
                <span key={item}>{item} •</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-card py-6">
        <div className="container grid gap-4 text-sm text-foreground sm:grid-cols-2 lg:grid-cols-4">
          <p>Sessions around the clock with advance booking</p>
          <p>Book at least four hours ahead</p>
          <p>Free parking in Atlanta</p>
          <p>Walk-ins 8:00 AM–5:00 PM</p>
        </div>
      </section>

      <section className="container border-b border-border py-20 md:py-28">
        <p className="section-label mb-4 text-muted">Choose your room</p>
        <h2 className="mb-10 text-4xl tracking-[-0.04em] md:text-6xl">
          <TranslatedText
            textKey="home.rooms"
            fallback="Space that fits the session"
          />
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="studio-card relative overflow-hidden rounded-lg border border-neutral-400/40 bg-card p-7 shadow-[0_8px_24px_rgba(0,0,0,0.22)] md:p-10"
            >
              <div
                className="absolute inset-x-0 top-0 flex h-1.5 items-center justify-end gap-0.5 border-b border-neutral-400/10 bg-neutral-300/[0.06] px-1.5"
                aria-hidden="true"
              >
                <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
                <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
                <span className="h-1 w-1 rounded-[1px] border border-neutral-400/30" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-muted">
                {room.name}
              </p>
              <h3 className="mb-3 text-3xl tracking-tight">{room.capacity}</h3>
              <p className="mb-6 text-muted">{room.note}</p>
              <Link
                href={BOOKING_URL}
                {...externalLinkProps}
                className="font-semibold underline"
              >
                Book {room.name}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <h2 className="mb-10 text-4xl tracking-[-0.04em] md:text-6xl">
          <TranslatedText textKey="home.services" fallback="Choose a service" />
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-card py-20 text-foreground md:py-28">
        <div className="container max-w-3xl">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">
            Youth creative development
          </p>
          <h2 className="mb-5 text-5xl tracking-[-0.055em] md:text-7xl">
            {moreThanRap.name}
          </h2>
          <p className="mb-2 text-muted">
            {moreThanRap.ages} • {moreThanRap.schedule}
          </p>
          <p className="mb-7 text-muted">
            Structured assignments and exposure to recording, production,
            performance, branding, marketing, and entrepreneurship.
          </p>
          <Link
            href={inquiryRoutes.moreThanRap}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground"
          >
            Ask about the program
          </Link>
        </div>
      </section>

      <section className="container py-24 text-center md:py-32">
        <h2 className="mb-6 text-5xl tracking-[-0.055em] md:text-7xl">
          Ready to record?
        </h2>
        <Link
          href={siteConfig.bookingBaseUrl}
          {...externalLinkProps}
          className="text-lg font-semibold underline"
        >
          Book a Session →
        </Link>
      </section>
    </div>
  );
}
