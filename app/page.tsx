import Link from "next/link";
import { services, rooms, moreThanRap } from "@/content/site";
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
  { key: "home.ticker.record", fallback: "Record in Atlanta" },
  { key: "home.ticker.engineering", fallback: "Engineering support" },
  { key: "home.room.a.name", fallback: "A Room" },
  { key: "home.room.b.name", fallback: "B Room" },
  { key: "home.ticker.podcast", fallback: "Podcast and content" },
  { key: "home.ticker.finish", fallback: "Finish your project" },
] as const;

export default function Home() {
  return (
    <div className="overflow-hidden">
      <section className="relative flex min-h-[70svh] items-center border-b border-border py-16 md:min-h-[78vh] md:py-24">
        <VideoBackground />
        <div className="container relative z-10">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-muted">
              <TranslatedText
                textKey="home.eyebrow"
                fallback="Atlanta • Advance booking"
              />
            </p>
            <h1 className="mb-6 max-w-4xl text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.06em]">
              <TranslatedSplitText
                textKey="home.title"
                fallback="Atlanta Studio Time Built Around Your Work"
              />
            </h1>
            <p className="mb-7 max-w-2xl text-lg leading-relaxed text-muted md:text-xl">
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
                <TranslatedText textKey="home.book" fallback="Book a Session" />
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
            <div className="mt-8 w-full max-w-xl opacity-60 md:max-w-none">
              <AudioReactiveVisualizer />
            </div>
          </div>
          <aside
            className="relative mt-6 ml-auto w-full max-w-56 overflow-hidden rounded-lg border border-border bg-card shadow-lg"
            aria-labelledby="session-status-title"
          >
            <div className="flex h-6 items-center justify-between border-b border-border/60 bg-card px-2.5 text-[10px] leading-none tracking-wide text-muted">
              <span id="session-status-title"><TranslatedText textKey="home.status" fallback="Session Status" /></span>
              <span className="flex gap-1" aria-hidden="true">
                <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
                <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
                <span className="h-2 w-2 rounded-[2px] border border-border/80 bg-border/20" />
              </span>
            </div>
            <p className="p-4 text-xs text-muted/70">
              <TranslatedText textKey="home.status.available" fallback="Advance booking available" />
            </p>
          </aside>
        </div>
      </section>

      <IntentRouter />

      <section className="ticker" aria-labelledby="studio-highlights-title">
        <h2 id="studio-highlights-title" className="sr-only">
          <TranslatedText textKey="home.ticker.label" fallback="Studio highlights" />
        </h2>
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1} key={group}>
              {tickerItems.map((item) => (
                <span key={item.key}><TranslatedText textKey={item.key} fallback={item.fallback} /> •</span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-border bg-card py-5">
        <div className="container grid gap-3 text-sm text-foreground sm:grid-cols-2 lg:grid-cols-4">
          <p><TranslatedText textKey="home.facts.aroundClock" fallback="Sessions around the clock with advance booking" /></p>
          <p><TranslatedText textKey="home.facts.advance" fallback="Book at least four hours ahead" /></p>
          <p><TranslatedText textKey="home.facts.parking" fallback="Free parking in Atlanta" /></p>
          <p><TranslatedText textKey="home.facts.walkins" fallback="Walk-ins 8:00 AM–5:00 PM" /></p>
        </div>
      </section>

      <section className="container border-b border-border py-16 md:py-24">
        <p className="section-label mb-3 text-muted"><TranslatedText textKey="home.rooms.label" fallback="Choose your room" /></p>
        <h2 className="mb-8 text-4xl tracking-[-0.04em] md:text-6xl">
          <TranslatedText
            textKey="home.rooms"
            fallback="Space that fits the session"
          />
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {rooms.map((room) => (
            <article
              key={room.name}
              className="studio-card relative overflow-hidden rounded-lg border border-[#c0c0c0]/40 bg-card p-6 shadow-[0_8px_24px_rgba(0,0,0,0.22)] md:p-7"
            >
              <div
                className="absolute inset-x-0 top-0 flex h-1.5 items-center justify-end gap-0.5 border-b border-[#c0c0c0]/10 bg-[#c0c0c0]/[0.06] px-1.5"
                aria-hidden="true"
              >
                <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
                <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
                <span className="h-1 w-1 rounded-[1px] border border-[#c0c0c0]/30" />
              </div>
              <p className="mb-2 text-xs uppercase tracking-widest text-muted">
                <TranslatedText textKey={room.name === "A Room" ? "home.room.a.name" : "home.room.b.name"} fallback={room.name} />
              </p>
              <h3 className="mb-3 text-3xl tracking-tight"><TranslatedText textKey={room.name === "A Room" ? "home.room.a.capacity" : "home.room.b.capacity"} fallback={room.capacity} /></h3>
              <p className="mb-5 text-muted"><TranslatedText textKey={room.name === "A Room" ? "home.room.a.note" : "home.room.b.note"} fallback={room.note} /></p>
              <Link
                href={BOOKING_URL}
                {...externalLinkProps}
                className="inline-flex min-h-11 items-center justify-center rounded-md border border-border px-4 font-semibold"
              >
                <TranslatedText textKey="home.room.book" fallback="Book" />{" "}
                <TranslatedText textKey={room.name === "A Room" ? "home.room.a.name" : "home.room.b.name"} fallback={room.name} />
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="container py-16 md:py-24">
        <h2 className="mb-8 text-4xl tracking-[-0.04em] md:text-6xl">
          <TranslatedText textKey="home.services" fallback="Choose a service" />
        </h2>
        <div className="grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="bg-card py-16 text-foreground md:py-24">
        <div className="container max-w-3xl">
          <p className="mb-2 text-xs uppercase tracking-[0.2em] text-muted">
            <TranslatedText textKey="home.program.eyebrow" fallback="Youth creative development" />
          </p>
          <h2 className="mb-5 text-5xl tracking-[-0.055em] md:text-7xl">
            <TranslatedText textKey="home.program.name" fallback={moreThanRap.name} />
          </h2>
          <p className="mb-2 text-muted">
            <TranslatedText textKey="home.program.details" fallback={`${moreThanRap.ages} • ${moreThanRap.schedule}`} />
          </p>
          <p className="mb-7 text-muted">
            <TranslatedText textKey="home.program.description" fallback="Structured assignments and exposure to recording, production, performance, branding, marketing, and entrepreneurship." />
          </p>
          <Link
            href={inquiryRoutes.moreThanRap}
            className="inline-flex min-h-11 items-center rounded-md bg-accent px-6 font-semibold text-accent-foreground"
          >
            <TranslatedText textKey="home.program.cta" fallback="Ask about the program" />
          </Link>
        </div>
      </section>

      <section className="container py-20 text-center md:py-28">
        <h2 className="mb-6 text-5xl tracking-[-0.055em] md:text-7xl">
          <TranslatedText textKey="home.final.title" fallback="Ready to record?" />
        </h2>
        <Link
          href={BOOKING_URL}
          {...externalLinkProps}
          className="inline-flex min-h-11 items-center justify-center rounded-md bg-accent px-7 text-lg font-semibold text-accent-foreground"
        >
          <TranslatedText textKey="home.final.cta" fallback="Book a Session →" />
        </Link>
      </section>
    </div>
  );
}
