# Clickbait ENT — Content Operator Guide

## Where to edit

- `content/site.ts` — single source of truth for every public-facing value.
- `content/site.ts` exports `siteConfig`, `services`, `rooms`, `moreThanRap`, `navigation`, and `site`.
- Zod schema validation runs at import time in `content/site.ts` via `SiteSchema.parse(site)`.

## What you can change

- Service titles, descriptions, prices, durations, CTAs, and Wix URLs.
- Room names, capacities, and notes.
- More Than Rap schedule, instructors, deliverables, and award copy.
- Navigation labels and routes.
- Contact phone, Instagram, address, hours, Booking URL, and email.
- Portfolio items by editing `site.portfolioItems`.

## What not to touch

- Do not hard-code values inside `app/` or `components/`.
- Do not remove `SiteSchema.parse(site);` from the bottom of `content/site.ts`.
- Do not invent client claims, ratings, or social proof without approval.

## How to validate

1. Run `npm run lint` — no new ESLint errors.
2. Run `npm run build` — TypeScript and Zod validation must pass.
3. Run `npm run test` — content contract tests must remain green.

## How to roll back

- Revert `content/site.ts` to an earlier commit.
- Redeploy via your hosting provider.