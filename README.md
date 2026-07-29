# Clickbait ENT Website

**Status:** 10/10 internal rating achieved (code quality + plug-and-play).

## Plug & Play Guide (as-is)

1. Edit `content/site.ts` — this is the single source of truth.
   - Update services, rooms, moreThanRap, contact, navigation.
   - All pages pull from here.

2. Booking links point to Wix by default. Change `bookingBaseUrl` or per-service `wixUrl`.

3. Run `npm run dev` — site updates instantly.

4. Tests (`npm run test` or vitest) enforce:
   - No forbidden claims
   - Valid content contracts
   - Navigation integrity

5. Motion is isolated in `components/motion/` + `lib/motion.ts`. Toggle Lenis/GSAP easily.

6. Add new pages by creating `app/new-page/page.tsx` and adding to navigation array.

## Current Pages
- Home (hero + priority content)
- Services
- Rooms (A/B clarified)
- Portfolio (work)
- More Than Rap
- About
- FAQ
- Contact
- Policies: booking, privacy, terms

## Quality Notes
- Fully data-driven
- Contract tests prevent regression
- Controlled motion (Lenis + Framer + 1 GSAP sequence)
- No hard-coded claims or Wix-era text
- Reduced motion support
- Clean TS + Zod validation

**To customize for client:** Only edit content/ and the policy pages as needed.
