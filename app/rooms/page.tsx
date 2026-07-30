import Link from "next/link";
import { rooms } from "@/content/site";
import { BOOKING_URL, externalLinkProps } from "@/lib/routes";
import { metadataFor } from "@/lib/seo";
import { PageText } from "@/components/i18n/PageText";
import { TranslatedText } from "@/components/i18n/TranslatedText";

export const metadata = metadataFor("/rooms");

export default function RoomsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="mb-4 text-5xl tracking-tight md:text-6xl">
        <PageText id="rooms.title" />
      </h1>
      <p className="mb-10 max-w-2xl text-xl text-muted">
        <PageText id="rooms.intro" />
      </p>
      <div className="grid gap-6 md:grid-cols-2">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="studio-card relative overflow-hidden rounded-lg border border-[#c0c0c0]/40 bg-card p-8 shadow-[0_8px_24px_rgba(0,0,0,0.22)]"
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
            <h2 className="mb-4 text-4xl tracking-tight"><TranslatedText textKey={room.name === "A Room" ? "home.room.a.capacity" : "home.room.b.capacity"} fallback={room.capacity} /></h2>
            <p className="mb-6 text-muted"><TranslatedText textKey={room.name === "A Room" ? "home.room.a.note" : "home.room.b.note"} fallback={room.note} /></p>
            <Link
              href={BOOKING_URL}
              {...externalLinkProps}
              className="inline-flex min-h-11 items-center font-semibold underline"
            >
              <TranslatedText textKey="home.room.book" fallback="Book" /> <TranslatedText textKey={room.name === "A Room" ? "home.room.a.name" : "home.room.b.name"} fallback={room.name} /> →
            </Link>
          </article>
        ))}
      </div>
      <p className="mt-8 text-sm text-muted">
        <PageText id="rooms.notice" />
      </p>
    </div>
  );
}
