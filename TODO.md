# Clickbait ENT Website — Execution Plan

**Status:** Planning draft for review. No application source code has been modified.
**Date:** 2026-07-29
**Source:** Repository inspection, client baseline, and current route/component audit.

---

## [01] P0 Cinematic hero with split-text reveal and ambient studio media

**Outcome:**  
First-screen conversion rate increases; average hero dwell time exceeds 4 seconds on desktop and 3 seconds on mobile.

**Current evidence:**  
`app/page.tsx` hero is text-only with no media backdrop. `content/site.ts` has no poster or video asset. `public/` contains only default SVGs.

**Implementation:**  
Add poster image field to `content/site.ts`. Create `components/hero/HeroMedia.tsx` for muted background image/video with gradient overlay. Replace current `<motion.h1>` with `components/hero/SplitText.tsx` using per-character/line reveal. Integrate `magnetic-btn` hook on primary CTA.

**Reuse source:**  
`components/motion/ScrollTextMotion.tsx` GSAP pattern for text animation; `hooks/useMagneticButton.ts` for CTA interaction.

**Dependencies:**  
Client-supplied studio hero image or 8–12 second muted video; brand approval on overlay gradient.

**Acceptance gate:**  
PASS when 1440px and 390px screenshots show painted media, readable headline contrast ≥ 4.5:1, no horizontal overflow, and CTA reaches the canonical Wix booking URL.

**Proof artifact:**  
Percy/Lighthouse screenshot set and WebPageTest filmstrip.

---

## [02] P0 Premium room storytelling with image reveal and interactive A/B comparison

**Outcome:**  
Room page conversion to contact increases; user selects a room rather than defaulting to generic inquiry.

**Current evidence:**  
`app/rooms/page.tsx` renders two text cards. `content/site.ts` rooms have no image URLs and notes contain VERIFY placeholders.

**Implementation:**  
Add `image` and `equipment` fields to `RoomSchema` and `content/site.ts`. Create `components/rooms/RoomCard.tsx` with hover-reveal equipment list and image. Add `components/rooms/RoomComparison.tsx` with toggle or split view for A vs B.

**Reuse source:**  
`components/motion/SmoothScroll.tsx` for Lenis integration; `studio-card` CSS pattern.

**Dependencies:**  
Client-supplied room photos; verified equipment list and actual A/B differences.

**Acceptance gate:**  
PASS when both room cards display images, hover reveals equipment details, comparison toggle animates between rooms, and booking CTA preserves Wix URL.

**Proof artifact:**  
Visual regression snapshot of `/rooms` at desktop and mobile breakpoints.

---

## [03] P0 Unified motion choreography and reduced-motion audit

**Outcome:**  
Motion contributes to premium feel without causing performance regressions or vestibular discomfort; reduced-motion users see instant static fallback; form inputs remain usable under Lenis.

**Current evidence:**  
`lib/motion.ts` defines MOTION constants. `app/globals.css` includes reduced-motion media query. `components/motion/SmoothScroll.tsx` and `ScrollTextMotion.tsx` use Lenis/GSAP without centralized reduced-motion check. Lenis applies `smoothWheel` globally, which can hijack scroll inside form textareas on `/contact`.

**Implementation:**  
Update `lib/motion.ts` to export `useReducedMotion()` and conditionally disable Lenis `smoothWheel`, Framer `whileInView`, and GSAP `ScrollTrigger`. Create `components/motion/MotionProvider.tsx` to wrap viewport animations. Audit all `whileInView` and `ScrollTrigger` instances. Disable Lenis smooth scrolling over interactive form controls.

**Reuse source:**  
`lib/motion.ts` `useReducedMotion()` helper; existing Mason CSS `.studio-card` transitions.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when `prefers-reduced-motion: reduce` is enabled and no scroll, fade, or transform animation runs on any page; Lenis wheel interaction falls back to native scroll; Lenis does not trap or override scroll inside form textareas or select dropdowns on `/contact`.

**Proof artifact:**  
axe DevTools accessibility audit showing no motion violations; manual macOS System Settings toggle test; Playwright scroll-inside-form test.

---

## [04] P0 Mobile sticky booking control and responsive navigation

**Outcome:**  
Mobile booking conversion rate matches or exceeds desktop; no user reports of hidden CTAs or broken navigation; mobile menu behaves like a native sheet.

**Current evidence:**  
`app/layout.tsx` primary nav is hidden on mobile with no replacement menu. No sticky mobile CTA exists. Contact page CTAs are inline only. Mobile viewport has no way to reach `/services`, `/rooms`, `/about`, or `/contact` from the header.

**Implementation:**  
Create `components/navigation/MobileMenu.tsx` with full-screen overlay, focus trap, and Escape-to-close. Add sticky bottom bar on mobile (`components/layout/MobileBookingBar.tsx`) with `fixed bottom-0` CTA. Ensure mobile menu closes after any link selection, on Escape key, and on browser Back. Ensure all modals/sheets trap focus and do not scroll the page behind them.

**Reuse source:**  
`magnetic-btn` CSS for button styling; Tailwind `md:hidden` / `md:flex` pattern.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when 390px viewport shows hamburger menu, full-screen nav opens/closes, sticky booking bar persists on scroll, every interactive element meets 44×44px touch target, menu closes after link selection or Escape key, browser Back button closes the menu before navigating, and page behind menu does not scroll when menu is open.

**Proof artifact:**  
iOS and Android viewport screenshots; axe mobile audit; Playwright Escape-key and Back-button tests.

---

## [05] P0 Visual identity system: custom cursor, loader, grain, and color discipline

**Outcome:**  
Site reads as a custom-designed studio brand rather than a Tailwind template; visual consistency score exceeds 90% across all routes.

**Current evidence:**  
`components/ui/Cursor.tsx` and `Loader.tsx` exist but are not wired into layout. `app/globals.css` defines grain and loader styles but `app/layout.tsx` does not import them. Pages still use `text-neutral-500`, `bg-neutral-50`, and `border` tokens outside the design system.

**Implementation:**  
Wire `Cursor` and `Loader` into `app/layout.tsx`. Audit all pages and replace arbitrary `neutral-*` tokens with `foreground` / `muted` / `accent` / `card` / `border`. Add `components/ui/BackgroundGradient.tsx` for subtle radial glow behind hero.

**Reuse source:**  
Existing `components/ui/Cursor.tsx` and `Loader.tsx`; `app/globals.css` theme tokens.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when every route uses only theme tokens from `@theme inline`, custom cursor and loader execute without jank, and no raw `neutral-*` classes remain in `app/`, `components/`, or `content/`.

**Proof artifact:**  
grep audit report showing zero `neutral-` tokens in component code; 1440px and 390px full-page screenshots.

---

## [06] P1 Portfolio media presentation with hover-reveal and permission-aware gutter

**Outcome:**  
Portfolio surface becomes a credible work showcase; 10% of visitors click through to at least one work item.

**Current evidence:**  
`app/portfolio/page.tsx` is placeholder text only. `content/site.ts` has no portfolio array. `clickbaitent-client-baseline.md` section 11 lists inventory requirements.

**Implementation:**  
Add `portfolioItems` array to `content/site.ts` with `type`, `src`, `caption`, `permission`, `clientName`, `serviceProvided`. Build `components/portfolio/PortfolioGrid.tsx` and `components/portfolio/MediaLightbox.tsx`. Add hover-reveal overlay with client name and service.

**Reuse source:**  
`studio-card` CSS transition pattern; Next.js `Image` component.

**Dependencies:**  
Client-supplied media inventory; publication permission per baseline section 11.

**Acceptance gate:**  
PASS when portfolio renders at least 6 approved items, each item shows hover overlay with caption, click opens lightbox, and unpermissioned items are excluded from build.

**Proof artifact:**  
Portfolio route test ensuring no item with `permission: false` renders; visual regression of `/portfolio`.

---

## [07] P1 Service-selection workflow with Wix routing and pricing guardrails

**Outcome:**  
Direct booking CTA click-through to correct Wix service URL 100% of the time; zero manual email fallbacks for qualified leads; unverified services are not presented as bookable.

**Current evidence:**  
`components/ContactForm.tsx` uses `mailto:` as fallback. `content/site.ts` services have `wixUrl` but homepage and service CTAs route to `/contact`. `consultation` service has `wixUrl: undefined` but still exposes a `Book Consultation` CTA. Service prices show `From $100 (3hr min)` without explanation of what drives the range.

**Implementation:**  
Create `components/services/ServiceCard.tsx` with direct `href={service.wixUrl}` CTA when defined. Add `components/booking/BookingGuard.tsx` to warn or redirect when `wixUrl` is undefined. Update homepage and services page CTAs to deep-link. Gate `consultation` so it does not render as a bookable Wix service; route to `/contact` with `topic=Consultation` prefilled instead. Add tooltip or microcopy explaining `From` pricing.

**Reuse source:**  
`studio-card` hover pattern; existing `wixUrl` field in content.

**Dependencies:**  
Verified Wix booking URLs per service slot; confirmation that `consultation` books via contact rather than Wix.

**Acceptance gate:**  
PASS when all service CTAs with defined `wixUrl` open external Wix booking in a new tab, `consultation` CTA routes to `/contact` instead of exposing a bookable button, homepage service cards deep-link to Wix rather than `/contact`, and navigation test still passes.

**Proof artifact:**  
Playwright click test across all service CTAs; navigation contract test remains green; Playwright test confirming consultation does not expose Wix CTA.

---

## [08] P1 More Than Rap emotional storytelling with visual narrative and enrollment handoff

**Outcome:**  
Program page generates qualified inquiries; average time-on-page exceeds 90 seconds.

**Current evidence:**  
`app/more-than-rap/page.tsx` is text-only with no imagery. `content/site.ts` has schedule, instructors, deliverables, and award text.

**Implementation:**  
Create `components/program/ProgramTimeline.tsx` for schedule visualization. Add `components/program/InstructorCard.tsx` with portrait placeholders. Build `components/program/EnrollModal.tsx` or direct contact routing with program topic prefill.

**Reuse source:**  
`studio-card` CSS for instructor cards; `ScrollTextMotion` for timeline scroll animation.

**Dependencies:**  
Verified participant age range (baseline blocker); program photos or approved brand imagery; instructor portraits with permission.

**Acceptance gate:**  
PASS when page shows visual timeline, instructor cards render with imagery, enrollment CTA opens contact form with `topic=More Than Rap` prefilled, and page loads in under 2s on 4G.

**Proof artifact:**  
Web Vitals report; screenshot of scroll-animated timeline; contact form payload test.

---

## [09] P1 Trust and social proof: remove placeholders, add Instagram embed and verified client work signals

**Outcome:**  
Brand credibility increases; bounce rate decreases by at least 5% on service and room pages; no page exposes draft notes or unverified placeholders to visitors.

**Current evidence:**  
Footer links to Instagram but no feed is embedded. `app/portfolio/page.tsx` mentions community playlist is on Instagram. No client logos or verified work badges exist. `app/about/page.tsx` contains "Full bios and vision details pending client confirmation for public use." `app/creators-club/page.tsx` contains "Details and earn/redeem rules pending final client simplification." `app/faq/page.tsx` contains "Exact age range pending verification."

**Implementation:**  
Create `components/social/InstagramFeed.tsx` fetching public Instagram media. Add `components/social/ClientBadge.tsx` for verified-client display on room/service cards. Build `components/social/TestimonialMarquee.tsx` once testimonials are approved. Replace or remove placeholder copy from `app/about/page.tsx`, `app/creators-club/page.tsx`, and `app/faq/page.tsx` with verified client-facing copy or condense to a single line that does not expose draft status.

**Reuse source:**  
`ticker-track` CSS animation for marquee; existing Instagram URL in `content/site.ts`.

**Dependencies:**  
Instagram Graph API access or embedded timeline; client-approved testimonials and client names; social media permissions per baseline section 11; client-approved copy for About, Creators Club, and FAQ pages.

**Acceptance gate:**  
PASS when Instagram grid loads on `/portfolio` and footer, client badges appear on `/rooms` and `/services` only after approval, and no rendered page contains "pending client confirmation", "pending verification", "Details pending", or similar placeholder language.

**Proof artifact:**  
Visual regression of social widgets; network request log showing valid Instagram fetch; grep audit report showing zero `pending` placeholder phrases across `app/` routes.

---

## [10] P1 Contact conversion: replace prototype form with styled inputs, validation, privacy notice, and clear states

**Outcome:**  
Inquiry form completion rate exceeds 25% for started forms; zero users report broken submission flow; contact page never exposes prototype or placeholder state; external links use correct `target` and `rel` attributes.

**Current evidence:**  
`components/ContactForm.tsx` uses unstyled inputs, no validation feedback, `mailto:` fallback, and success message reads "Email client opened as placeholder." `app/contact/page.tsx` has no container, sidebar, or CTA hierarchy. Instagram link on contact page uses `target="_blank"` without `rel="noopener noreferrer"`.

**Implementation:**  
Create `components/contact/ContactForm.tsx` replacement with styled inputs, required-field enforcement, inline validation per field, field-connected error announcements, loading state, and persistent success state. Add privacy notice near submit button. Ensure form retains entered values after recoverable failure. Replace success message with verified client copy; remove all prototype exposure. Add `components/contact/ContactSidebar.tsx` for hours, phone, and Instagram. Update `app/contact/page.tsx` to use container layout and sidebar. Fix external link `rel` attributes. Upgrade gradient button to brand-safe primary color.

**Reuse source:**  
`magnetic-btn` for submit button; `motion-normal` class for transitions; `nav-link` CSS for sidebar links.

**Dependencies:**  
Real form endpoint or continued Wix/contact handoff approval; client-verified response-time SLA for copy; client-approved success and error message copy.

**Acceptance gate:**  
PASS when form validates required fields client-side, errors identify the exact field and are announced to assistive technology, loading state is visible, success state does not expose prototype language, form retains values after failure, privacy notice appears near submission, contact page uses structured layout with sidebar, all external links include correct `target` and `rel="noopener noreferrer"` attributes, and contact page does not expose prototype state.

**Proof artifact:**  
Playwright form fill test; error-state screenshot; Lighthouse best-practices score ≥ 90; axe form-label and error-announcement audit; security audit showing proper `rel` attribute usage.

---

## [11] P2 Animated navigation indicator, active-page tracking, and consistent link behavior

**Outcome:**  
Users understand their location within the site; navigation interaction feels responsive and premium; no link causes unnecessary reloads or broken destinations.

**Current evidence:**  
`app/layout.tsx` renders static nav links. No active-state indicator or scroll spy exists. Navigation map uses duplicate keys in some list renderings.

**Implementation:**  
Create `components/navigation/NavIndicator.tsx` with animated underline or background pill. Use `framer-motion` `useScroll` and `useTransform` to track active section on homepage; use `usePathname` for non-home pages. Audit all navigation `Link` components for duplicate `key` props, missing `href`, and correct external link attributes.

**Reuse source:**  
`nav-link::after` CSS transition; `MOTION` constants from `lib/motion.ts`.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when active nav link displays animated indicator, indicator moves smoothly between links, homepage links update based on scroll position within 100ms, no navigation `Link` has duplicate key warnings, and all internal links resolve to existing routes without reload.

**Proof artifact:**  
Visual regression of navigation states; Playwright scroll spy test; React key warning audit in build output.

---

## [12] P2 Scroll-linked kinetic typography for signature brand statement

**Outcome:**  
Differentiates Clickbait from generic studio sites; generates social sharing and brand recall.

**Current evidence:**  
`components/motion/ScrollTextMotion.tsx` uses GSAP `ScrollTrigger` to shift lines horizontally. Text reads `RECORD. CREATE. RELEASE. RECORD.` on homepage.

**Implementation:**  
Refactor `ScrollTextMotion` to use `ScrollTrigger` with scrubbed scale, opacity, and letter-spacing. Add `components/motion/KineticType.tsx` for per-character velocity-based movement. Restrict to max two GSAP sequences per page.

**Reuse source:**  
Existing `ScrollTextMotion.tsx`; `lib/motion.ts` easing curve.

**Dependencies:**  
Final brand tagline approval; client direction on whether sequence repeats on scroll.

**Acceptance gate:**  
PASS when text animates tied to scroll position without jank, animation pauses when reduced motion is enabled, and fps stays ≥ 55 on mid-range mobile.

**Proof artifact:**  
Chrome Performance recording; reduced-motion toggle test.

---

## [13] P2 Page transition system with route-aware entrance animations

**Outcome:**  
Site feels like a cohesive native app rather than disconnected static pages; perceived performance improves.

**Current evidence:**  
Next.js App Router uses default instant route transitions. No `template.tsx` or transition wrapper exists in `app/`.

**Implementation:**  
Add `app/template.tsx` with `Motion` wrapper for shared exit/enter transitions. Use `framer-motion` `AnimatePresence` with direction-aware slide/fade. Keep transition duration ≤ 0.4s.

**Reuse source:**  
`motion-normal` constant; existing `SmoothScroll` wrapper.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when navigation between any two routes plays a ≤ 0.4s transition, no content flashes or layout shift occurs, and reduced-motion users see instant switch.

**Proof artifact:**  
Playwright route-transition test; reduced-motion toggle test.

---

## [14] P2 Visual regression and accessibility test suite

**Outcome:**  
Design regressions and accessibility violations are caught before production; CI blocks broken builds.

**Current evidence:**  
`tests/` contains content-contract, claims, and navigation unit tests only. No visual or a11y tests exist. `vitest.config.ts` exists but no CI workflow.

**Implementation:**  
Add Playwright visual regression tests for all 15 routes at 1440px and 390px. Add `tests/a11y.test.ts` using `@axe-core/playwright`. Add GitHub Actions workflow `.github/workflows/ci.yml` running lint, test, build, and visual snapshot.

**Reuse source:**  
Existing Playwright MCP server pattern; `vitest.config.ts` alias setup.

**Dependencies:**  
Baseline screenshots reviewed and approved by client; CI secrets configured if needed.

**Acceptance gate:**  
PASS when CI runs green on every PR, visual diffs are zero against baseline, and axe reports no critical or serious violations on any route.

**Proof artifact:**  
GitHub Actions run URL; Playwright HTML report.

---

## [15] P2 Production-readiness proof: Lighthouse, Core Web Vitals, and bundle audit

**Outcome:**  
Site qualifies for premium hosting tiers and passes Vercel production checks; performance budgets are documented and enforced; all external links use proper security attributes.

**Current evidence:**  
`npm run build` succeeds but no performance metrics are tracked. `next.config.ts` sets headers but has no image or bundle optimizations. No Lighthouse CI exists. External links may lack proper `rel` attributes for security.

**Implementation:**  
Add `lighthouse-ci` config to `package.json`. Document performance budgets: LCP < 2.5s, FID < 100ms, CLS < 0.1, bundle < 200KB initial. Optimize images with `next/image` and remote patterns. Add `scripts/measure.sh` for local Lighthouse runs. Audit and fix all external `target="_blank"` links to include `rel="noopener noreferrer"`.

**Reuse source:**  
Existing `next.config.ts` headers pattern; `public/` for static assets.

**Dependencies:**  
Client approval on performance budgets; real media assets measured at production size.

**Acceptance gate:**  
PASS when all routes score ≥ 90 Performance/SEO/Best Practices/Accessibility in Lighthouse, initial JS bundle is under 200KB gzipped, all external links include `rel="noopener noreferrer"`, and CI fails if budgets are exceeded.

**Proof artifact:**  
Lighthouse CI HTML report; `webpack-bundle-analyzer` treemap; external link audit report.

---

## Recommended Execution Order

01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15

## Same-Day Live Demo Cut

01, 02, 04, 05, 08

## Deferred Until Client Evidence

- Portfolio media inventory and publication permissions (`clickbaitent-client-baseline.md` section 11)
- Verified A/B room differences and equipment lists (`clickbaitent-client-baseline.md` section 5)
- More Than Rap participant age range (`clickbaitent-client-baseline.md` section 8)
- Client-approved testimonials and verified client names (`clickbaitent-client-baseline.md` section 11)
- Final brand identity and color approval
- Real studio photography or video assets
- Confirmed Wix deep-link URLs per service slot

## Explicit Non-Goals

This phase does not replace Wix Bookings, change DNS, invent client claims or statistics, create backend infrastructure beyond Next.js static generation, or add unverified social proof. All copy and pricing display remain bound by the client-approved baseline and content contract tests.

## Production Acceptance Corrections

- PASS — Approved room definitions, capacities, pricing, booking lead time, walk-in hours, contact details, and More Than Rap facts are applied.
- PASS — Customer-visible internal notes, inactive email references, mail links, unsupported claims, and fake submission states are removed.
- PASS — Canonical Wix booking routing is used for standard sessions, room booking, header, homepage, and mobile booking controls.
- PASS — Mobile navigation uses accessible hamburger and close controls while preserving focus, Escape, link-close, scroll-lock, and Back behavior.
- PASS — Semantic dark-theme tokens, hero media fallback, skip link behavior, single root main landmark, pricing presentation, policy summaries, portfolio honesty, and structured data are corrected.
- PASS — Focused source-contract tests cover prohibited language, room capacities, shared equipment, base session pricing, booking timing, youth-program separation, canonical booking, landmarks, navigation control, and inactive contact data.
- BLOCKED — CONTACT_BACKEND_DESTINATION: no approved server-side inquiry destination or environment contract exists. Phone and Instagram provide the honest custom-inquiry path.
- PENDING MANUAL BROWSER QA — Mobile Safari, Android, responsive visual acceptance, keyboard interaction, and live production presentation.

## Experience Upgrade — Easiest to Hardest

### Completed foundations

- DONE — Expanded semantic color, typography, spacing, elevation, contrast, and motion tokens.
- DONE — Removed residual `neutral-*` utility usage from application components.
- DONE — Added shared 24px icon system for navigation, calls, booking, social, location, media, and controls.
- DONE — Added typography presets and Stack, Inline, and Cluster layout primitives.
- DONE — Restored route-aware themes through a single content map and HTML data attributes.
- DONE — Rebuilt the route loader as a sub-800ms audio-waveform transition.
- DONE — Reworked the custom cursor to use a ref and compositor transform instead of React state on every pointer move.
- DONE — Added a motion-safe per-character SplitText sequence that leaves meaningful text visible before hydration.
- DONE — Added a CSS cinematic hero fallback and media-aware video background component.
- DONE — Added a canvas waveform visualizer with optional Web Audio `AnalyserNode` support.

### Completed mobile and accessibility work

- DONE — Rebuilt mobile navigation as a 60%/90% bottom sheet.
- DONE — Added vertical swipe expansion and dismissal plus edge-swipe opening.
- DONE — Preserved focus trapping, Escape close, Back close, link close, and body scroll lock.
- DONE — Added immediate mobile booking visibility with scroll-direction hiding.
- DONE — Added expandable phone, booking, Instagram, and arrival quick actions.
- DONE — Applied global 44px minimum control height and active-state tactile feedback.
- DONE — Added main, navigation, and footer skip links.
- DONE — Added global focus-visible treatment and stronger contrast preferences.
- DONE — Added reduced-motion context for Framer Motion and CSS animation shutdown.
- DONE — Added high-contrast and 14/16/18px base font-size controls.
- DONE — Added a polite live announcer for interactive UI changes.
- DONE — Added an honest accessibility-support route without claiming unverified conformance.

### Completed language, SEO, performance, and offline work

- DONE — Added persistent English/Spanish language state under `clickbait:lang`.
- DONE — Added real SVG United States and Spain flags, language labels, and `aria-pressed` state.
- DONE — Kept English as the static/server default and updated `<html lang>` after user selection.
- DONE — Added matched EN/ES dictionaries with source-contract tests against unsupported claims.
- DONE — Added translated header, mobile navigation, calls to action, accessibility labels, and homepage hero content.
- DONE — Added canonical metadata, route descriptions, keywords, hreflang entries, dynamic OG images, and Twitter cards.
- DONE — Added route-aware BreadcrumbList data and verified LocalBusiness service catalog data.
- DONE — Added sitemap priorities and robots controls for internal/API surfaces.
- DONE — Added Vercel Analytics, Speed Insights, development Web Vitals logging, and a local performance snapshot route.
- DONE — Added bundle analysis and package-import optimization.
- DONE — Added Lighthouse configuration and a pull-request CI audit.
- DONE — Added a web manifest, SVG app icons, offline route, conservative same-origin service worker, and install prompt.

### Evidence-dependent or infrastructure-blocked

- BLOCKED — Approved hero photography, background video, BTS reels, and portfolio audio are not present; the site uses intentional fallbacks.
- BLOCKED — MusicRecording and VideoObject structured data require real published works and media.
- BLOCKED — More Than Rap Event structured data requires an approved start date.
- BLOCKED — Background form synchronization cannot exist until an approved inquiry backend exists.
- BLOCKED — Booking reminders and push delivery require a consented notification service and booking-confirmation integration.
- BLOCKED — Measured Lighthouse, Core Web Vitals, 60fps, and device-specific targets require post-deployment browser and field testing.

---

## [16] P0 Intent-based homepage entry paths

**Outcome:**  
Visitors self-serve their intent within 3 seconds; conversion from homepage to correct booking path increases.

**Current evidence:**  
`app/page.tsx` presents a single generic hero with one "Book a Session" CTA. `content/site.ts` services array lists 4 service types but homepage does not expose intent-based routing.

**Implementation:**  
Add `components/home/IntentRouter.tsx` with card-based or segmented control asking "What are you here to do?" — record with engineer, solo session, podcast/content, video/BTS, consultation, More Than Rap. Each choice deep-links to the correct Wix booking URL, `/contact?topic=...`, or `/more-than-rap`. Integrate below hero or as hero alternative layout.

**Reuse source:**  
`studio-card` CSS pattern; existing `wixUrl` and `topic` routing in content.

**Dependencies:**  
Confirmed Wix URLs for all service types; client approval on intent labels.

**Acceptance gate:**  
PASS when 1440px and 390px viewports show intent selector, every intent choice resolves to the correct destination in one click, no dead-end paths exist, and intent router does not duplicate services page content.

**Proof artifact:**  
Playwright intent-routing click test; visual regression of homepage with intent selector.

---

## [17] P0 Artist-facing session preparation workflow

**Outcome:**  
First-time visitors arrive prepared; session start time and studio efficiency improve; fewer "what do I need to bring?" emails.

**Current evidence:**  
No preparation guidance exists on any route. `content/site.ts` has no preparation content, arrival instructions, or what-to-expect copy. Contact form has no preparation checklist.

**Implementation:**  
Create `app/prepare/page.tsx` or `components/prepare/SessionPrep.tsx` covering file formats, reference tracks, arrival timing, guest limits, engineer handoff, payment readiness, and gear list. Add preparation checklist to `/contact` success or confirmation state. Link from `/contact` and Wix booking flow if possible.

**Reuse source:**  
`studio-card` CSS for checklist items; existing `siteConfig.address` and `hours` for arrival context.

**Dependencies:**  
Verified file format preferences; gear list from client; payment method preferences.

**Acceptance gate:**  
PASS when preparation page loads in under 2s, checklist is scannable on mobile, all items are verified facts from client, and no invented gear requirements appear.

**Proof artifact:**  
Web Vitals report; client review of checklist accuracy; mobile screenshot.

---

## [18] P1 Arrival and location confidence page

**Outcome:**  
Visitors who book show up on time and prepared; support tickets about parking, entrance, and access drop to near zero.

**Current evidence:**  
`app/contact/page.tsx` lists `siteConfig.address` but no parking, entrance, map, or late-arrival guidance. Footer has no map action or arrival instructions.

**Implementation:**  
Create `app/arrival/page.tsx` or expand contact sidebar with verified parking details, building entrance description, nearby landmarks, late-night arrival protocol, text-message handoff number, and map action. Add `map` field to `siteConfig` or `content/site.ts`. Keep all facts verified by client.

**Reuse source:**  
`siteConfig.address` and `links.phone`; contact sidebar pattern from #10.

**Dependencies:**  
Verified parking details; building entrance photos or description; client-approved map link; text-message handoff number agreement.

**Acceptance gate:**  
PASS when page contains no unverified parking or access claims, map action opens correct location, late-night guidance is present when applicable, and all facts match client-provided logistics.

**Proof artifact:**  
Client sign-off on arrival text; map action test; visual regression.

---

## [19] P1 Distinct page identities

**Outcome:**  
Site reads as a cohesive brand system with intentional variation rather than a template; each major route feels bespoke.

**Current evidence:**  
All major routes use identical `container py-12` layouts, `text-5xl tracking-tight` headings, and `text-neutral-600` body copy. No route-specific media treatment, accent color, or headline rhythm exists.

**Implementation:**  
Define route-level identity tokens in `content/site.ts` (e.g., `pageThemes` array with `accent`, `media`, `headlineClass`, `sectionPacing` for `/`, `/rooms`, `/services`, `/portfolio`, `/more-than-rap`, `/contact`). Create `components/layout/PageShell.tsx` consuming route theme and applying media treatment, accent color, and pacing. Audit all pages to apply consistent but distinct treatment.

**Reuse source:**  
`@theme inline` color tokens; `studio-card` CSS; existing Tailwind section spacing patterns.

**Dependencies:**  
Client approval on accent color allocation per route; media assets for route backgrounds.

**Acceptance gate:**  
PASS when every major route has a distinct visual treatment, shared navigation and footer remain consistent, no route looks identical to another at a glance, and theme values come from the content file rather than hard-coded inline styles.

**Proof artifact:**  
1440px and 390px full-page screenshots of all routes; grep audit showing zero ad-hoc inline theme values.

---

## [20] P1 Editorial homepage pacing

**Outcome:**  
Homepage narrative moves visitors from desire to booking in a logical editorial flow; bounce rate decreases and scroll depth increases.

**Current evidence:**  
`app/page.tsx` sections run hero → ticker → utility strip → rooms → services → program → marquee → final CTA. No clear narrative through-line or editorial cues guide the visitor.

**Implementation:**  
Refactor homepage section sequence to follow: desire (hero + media), trust (utility strip + social proof snippet), rooms (A/B storytelling), services (intent-based cards), flagship program (More Than Rap), proof (testimonial or recent work snippet), logistics (hours/parking snippet), booking (pinned CTA + contact strip). Add section labels and editorial transitions. Do not redesign hero (#01) or rooms (#02); reorder and annotate existing content.

**Reuse source:**  
Existing section components; `section-label` CSS; `ticker` for editorial breaks.

**Dependencies:**  
Client approval on section order; verified logistics copy for new snippets.

**Acceptance gate:**  
PASS when homepage scroll sequence reads as a coherent editorial narrative, no section feels abrupt, and heatmap-style scroll depth exceeds 60% on desktop and 45% on mobile.

**Proof artifact:**  
Visual regression of full homepage; scroll-depth Playwright test; client narrative review.

---

## [21] P1 Premium policy summaries

**Outcome:**  
Visitors understand booking, cancellation, and studio rules without reading legalese; support questions about policies decrease.

**Current evidence:**  
`app/policies/booking/page.tsx`, `terms/page.tsx`, and `privacy/page.tsx` contain full legal text. No concise customer-facing policy summary exists anywhere on the site.

**Implementation:**  
Create `components/policies/PolicySummary.tsx` rendering 4–6 sentence summaries for: booking window, cancellation/rescheduling, walk-ins, guest limits, arrival, payment, late sessions, and studio conduct. Place summary block on `/contact` sidebar and `/policies/booking` top. Keep full policy pages accessible via links. Do not invent or replace legal text.

**Reuse source:**  
`studio-card` or `section-label` CSS for summary blocks; existing policy page content.

**Dependencies:**  
Client-approved concise summaries; legal review if needed.

**Acceptance gate:**  
PASS when every major policy topic has a one-paragraph summary, summary links to full policy, no invented terms appear, and summaries are readable at 390px width without horizontal scroll.

**Proof artifact:**  
Client sign-off on summary text; mobile screenshot; link integrity test.

---

## [22] P1 Booking handoff return path and post-booking preparation

**Outcome:**  
Users who leave for Wix return with confidence; post-booking confusion and no-shows decrease.

**Current evidence:**  
Service CTAs open Wix in new tabs (`wixUrl`) with no return instruction. Contact page has no confirmation or next-step guidance after Wix handoff. No "what happens next" content exists.

**Implementation:**  
Add `components/booking/WixReturnPath.tsx` rendering a compact confirmation module: "You are being redirected to Wix for live availability. After booking, you will receive confirmation. Need to return? Click here." Add preparation checklist link and contact fallback. Apply after any Wix deep-link click or on `/contact` success state. Do not replace Wix flow.

**Reuse source:**  
`magnetic-btn` for return button; `siteConfig.bookingBaseUrl`; contact fallback from #10.

**Dependencies:**  
Confirmed Wix return behavior; client-approved next-step copy.

**Acceptance gate:**  
PASS when every external Wix link is followed by visible return-path text, no user is stranded without next steps after clicking a booking CTA, and preparation checklist is accessible from the return path.

**Proof artifact:**  
Playwright Wix-link click test; visual regression of service card hover state showing return path.

---

## [23] P1 FAQ by visitor intent

**Outcome:**  
Visitors find answers 2x faster; bounce from FAQ decreases; contact load from routine questions drops.

**Current evidence:**  
`app/faq/page.tsx` renders a flat list of 5 questions. No grouping by visitor type exists. Some answers contain pending verification notes.

**Implementation:**  
Restructure FAQ into intent groups: First-Time Artist, Experienced Artist, Podcast/Creator, Video/Content Creator, Parent/Student, More Than Rap Participant. Add `faqGroups` array to `content/site.ts` with `intent`, `icon`, `questions`. Build `components/faq/FaqAccordion.tsx` with group headers. Remove pending verification notes from answers; replace with verified copy or remove.

**Reuse source:**  
`studio-card` CSS for group containers; existing FAQ content.

**Dependencies:**  
Client-approved FAQ copy grouped by intent; verified answers for all groups.

**Acceptance gate:**  
PASS when FAQ page shows 4–6 intent groups, each group has at least 2 questions, answers contain zero pending verification notes, and accordion works on mobile touch targets ≥ 44×44px.

**Proof artifact:**  
Grep audit showing zero pending phrases in FAQ; Playwright accordion interaction test; visual regression.

---

## [24] P1 High-value lead path

**Outcome:**  
Larger bookings and recurring clients are captured with tailored guidance; revenue per inquiry increases.

**Current evidence:**  
`/contact` and `/services` treat all visitors identically. No path exists for multi-hour blocks, private events, recurring bookings, or creator packages. `content/site.ts` has no tiered service metadata.

**Implementation:**  
Create `components/booking/LeadQualifier.tsx` or dedicated `/inquire` page asking session scale (solo, group, private event, recurring), budget range, and timeline. Route qualified leads to `/contact` with prefilled topic or to Wix with pre-selected service. Keep full service catalog for general visitors. Do not invent packages.

**Reuse source:**  
`magnetic-btn` for submittal; `ContactForm` topic prefilling from #10; `wixUrl` routing from #07.

**Dependencies:**  
Client-approved lead-qualification questions; confirmed routing rules for high-value inquiries.

**Acceptance gate:**  
PASS when lead path captures scale and timeline, prefilled contact or Wix route reflects answers, no invented package names appear, and standard visitor flow remains unchanged.

**Proof artifact:**  
Playwright lead-qualifier flow test; content schema validation; client review of qualification logic.

---

## [25] P1 Studio credibility without fake claims

**Outcome:**  
Site feels trustworthy and music-industry credible using verified facts and real process rather than logos or invented stats.

**Current evidence:**  
No client logos, process walkthrough, or verified creator quotes exist. `app/about/page.tsx` has minimal team text. `app/rooms/page.tsx` lacks verified equipment details.

**Implementation:**  
Add `components/credibility/ProcessWalkthrough.tsx` showing verified session workflow (book → arrive → record → deliver). Add `components/credibility/VerifiedQuote.tsx` for client-approved creator quotes. Update `app/about/page.tsx` with verified team roles and studio history. Remove placeholder equipment notes and replace with verified facts or remove claims. Do not add fake logos or statistics.

**Reuse source:**  
`studio-card` for quote and process cards; `ScrollTextMotion` for workflow animation.

**Dependencies:**  
Client-approved creator quotes; verified equipment list; studio history facts.

**Acceptance gate:**  
PASS when about page contains zero placeholder notes, rooms page shows verified or removed equipment claims, process walkthrough uses only client-confirmed steps, and no fake logos or statistics appear.

**Proof artifact:**  
Grep audit showing zero placeholder phrases in app routes; client quote approval record; visual regression.

---

## [26] P2 Client-editable content architecture

**Outcome:**  
Owner can update prices, services, booking links, photos, social links, policies, hours, and featured work without developer handoff.

**Current evidence:**  
`content/site.ts` exists as single source of truth but lacks structured sections for policies, featured work, and per-route media. Some values like `bookingBaseUrl` and `wixUrl` are scattered. No operator guide exists for content updates.

**Implementation:**  
Document content boundaries in `CONTENT_OPERATOR_GUIDE.md` covering: where to edit services/rooms/navigation, how to change booking URLs, how to add portfolio items, how to update hours and policies. Add Zod schema comments naming editable fields. Ensure no hard-coded values exist outside `content/` and `public/`.

**Reuse source:**  
Existing `content/site.ts` and `SiteSchema`; `lib/schemas.ts` for validation.

**Dependencies:**  
None.

**Acceptance gate:**  
PASS when operator guide is complete, every runtime value editable by the owner exists in `content/site.ts` or `content/` directory, and `grep` shows zero hard-coded prices, URLs, or hours in `app/` or `components/`.

**Proof artifact:**  
`CONTENT_OPERATOR_GUIDE.md`; grep audit report; schema review.

---

## [27] P2 Visual asset manifest and media governance

**Outcome:**  
Every image, video, and audio asset has clear provenance, permission, and disposition; no unverified media reaches production.

**Current evidence:**  
`public/` contains only default SVGs. No asset manifest exists. Portfolio, rooms, hero, and instructor assets all require governance before deployment.

**Implementation:**  
Create `content/asset-manifest.ts` exporting typed records with `source`, `owner`, `permission`, `orientation`, `intendedRoute`, `altText`, `cropNotes`, `replacementNeed`. Build `scripts/audit-assets.ts` validating manifest against `public/` and `content/site.ts` references. Add build step or CI check warning on missing or unpermissioned assets.

**Reuse source:**  
`SiteSchema` pattern from `lib/schemas.ts`; `portfolioItems` fields from #06.

**Dependencies:**  
Client media inventory; publication permissions per baseline section 11.

**Acceptance gate:**  
PASS when asset manifest covers all intended routes, CI warns on missing manifest entries, no unpermissioned asset is referenced in production code, and every asset has alt text and intended route.

**Proof artifact:**  
Asset manifest file; CI audit log; grep report of undefined media references.

---

## [28] P2 Branded route-specific share cards

**Outcome:**  
Social sharing reflects route-specific content rather than generic site logo; click-through from Instagram, TikTok, and text increases.

**Current evidence:**  
`app/layout.tsx` sets a single `ogImage: '/og.jpg'` for all routes. No route-specific title, description, or image exists for `/rooms`, `/services`, `/more-than-rap`, or `/portfolio`.

**Implementation:**  
Add `share` field to route metadata exports or `siteConfig` with `title`, `description`, `image`. Generate or assign static OG images per route using `app/api/og/route.ts` or static files in `public/og/`. Update `metadata` exports in all route `page.tsx` files to use route-specific values. Do not invent client claims for share text.

**Reuse source:**  
`siteConfig.url` and `siteConfig.name`; existing `metadata` pattern in `app/layout.tsx`.

**Dependencies:**  
Approved route-specific copy for titles and descriptions; static OG image assets per route.

**Acceptance gate:**  
PASS when every public route has unique `og:title`, `og:description`, and `og:image` tags, social share previews show route-relevant text and images, and no generic site-wide OG card appears for deep routes.

**Proof artifact:**  
Social share debugger screenshots for all routes; grep audit of metadata exports.

---

## [29] P2 Conversion analytics event map

**Outcome:**  
Owner understands which CTAs and routes drive bookings without invasive tracking; data justifies future design decisions.

**Current evidence:**  
No analytics implementation exists. Event naming, consent boundary, and provider choice are undefined.

**Implementation:**  
Create `docs/analytics-event-map.md` defining events: `hero_cta_click`, `room_select`, `service_select`, `wix_handoff`, `contact_start`, `contact_submit`, `phone_click`, `instagram_click`, `more_than_rap_inquiry`. Define properties, consent boundary, and placeholder provider config (e.g., Vercel Analytics or Plausible). Do not inject analytics scripts until client chooses provider.

**Reuse source:**  
Existing component event handlers; route structure.

**Dependencies:**  
Client consent on analytics provider and data policy; provider selection.

**Acceptance gate:**  
PASS when event map is documented, every key user action has a named event with properties, no script is injected before client approval, and map is reviewed by client.

**Proof artifact:**  
`docs/analytics-event-map.md`; client sign-off record.

---

## [30] P2 Structured data for verified studio services

**Outcome:**  
Search engines understand studio services, location, and FAQ; local and service-rich results improve discoverability.

**Current evidence:**  
`app/layout.tsx` sets basic Open Graph and Twitter metadata. No JSON-LD structured data exists. `next-schema.org` or equivalent is not used.

**Implementation:**  
Add `components/seo/StructuredData.tsx` rendering `Organization`, `LocalBusiness`, `Service`, `FAQPage`, and `BreadcrumbList` JSON-LD using verified facts from `content/site.ts`. Inject via `app/layout.tsx` and relevant route pages. Do not invent services, ratings, or reviews not in content.

**Reuse source:**  
`siteConfig` fields for name, address, phone, url; `services` array for Service nodes; FAQ content for FAQPage.

**Dependencies:**  
Verified business hours and service offerings; client approval on public schema data.

**Acceptance gate:**  
PASS when Google Rich Results Test shows valid `LocalBusiness`, `Service`, and `FAQPage` markup for relevant routes, no validator errors appear, and all schema values match verified content.

**Proof artifact:**  
Rich Results Test URLs; JSON-LD validation report; grep audit of schema values.

---

## Recommended Execution Order

01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30

## Same-Day Live Demo Cut

01, 02, 04, 05, 08, 16, 17

## Deferred Until Client Evidence

- Portfolio media inventory and publication permissions (`clickbaitent-client-baseline.md` section 11)
- Verified A/B room differences and equipment lists (`clickbaitent-client-baseline.md` section 5)
- More Than Rap participant age range (`clickbaitent-client-baseline.md` section 8)
- Client-approved testimonials and verified client names (`clickbaitent-client-baseline.md` section 11)
- Final brand identity and color approval
- Real studio photography or video assets
- Confirmed Wix deep-link URLs per service slot
- Verified file format preferences and gear list for session prep
- Verified parking details and building entrance description
- Client-approved intent labels and arrival copy
- Client-approved policy summary text
- Client-approved creator quotes and studio history
- Client-approved lead-qualification questions and routing rules
- Approved route-specific copy and OG image assets
- Client consent on analytics provider and data policy
- Verified business hours and service details for structured data

## Explicit Non-Goals

This phase does not replace Wix Bookings, change DNS, invent client claims or statistics, create backend infrastructure beyond Next.js static generation, or add unverified social proof. All copy and pricing display remain bound by the client-approved baseline and content contract tests.
