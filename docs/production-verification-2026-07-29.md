# Production Verification — 2026-07-29

Production target: `https://clickbait-studios-web.vercel.app`

## Analytics event matrix

Each PASS required an accepted 2xx response from the deployed Vercel Web Analytics event intake. Tests ran in desktop Chrome and a Pixel 7 profile with both saved English and Spanish preferences.

| Event | Desktop | Mobile | EN | ES | Result |
|---|---|---|---|---|---|
| `booking_click` | PASS | PASS | PASS | PASS | VERIFIED |
| `mobile_booking_bar_click` | N/A | PASS | PASS | PASS | VERIFIED |
| `phone_click` | PASS | PASS | PASS | PASS | VERIFIED |
| `instagram_click` | PASS | PASS | PASS | PASS | VERIFIED |
| `language_change` | PASS | PASS | PASS | PASS | VERIFIED |
| `mobile_menu_open` | N/A | PASS | PASS | PASS | VERIFIED |
| `quick_action_select` | N/A | PASS | PASS | PASS | VERIFIED |
| `portfolio_open` | BLOCKED | BLOCKED | BLOCKED | BLOCKED | NOT VERIFIED — no approved portfolio item is currently rendered |
| `more_than_rap_inquiry_click` | PASS | PASS | PASS | PASS | VERIFIED |

No portfolio placeholder was added. `portfolio_open` is instrumented and covered by the event map, but production verification requires the client to publish at least one approved portfolio item.

## CSP nonce gate

| Gate | Result |
|---|---|
| `NONCE_CSP` | FAIL |
| `BUILD` | PASS |
| `PLAYWRIGHT` | PASS |
| `ANALYTICS` | PASS under the retained static CSP |
| `NO_INLINE_SCRIPT_BREAKAGE` | N/A — nonce policy was not promoted |

Decision: do not implement nonce CSP under the current rendering model. Next.js requires nonce-bearing pages to render dynamically per request, which disables the current static optimization and CDN caching. The existing CSP remains in force and was not weakened.

## Bundle and route budgets

The baseline was captured from the successful production build after analytics instrumentation. Route JavaScript is measured as raw emitted first-load JavaScript. Route regression allowance is 10%.

| Budget | Baseline | Maximum |
|---|---:|---:|
| Home first-load JS | 1,026,535 B | 1,129,189 B |
| Services first-load JS | 1,024,925 B | 1,127,418 B |
| Rooms first-load JS | 1,020,615 B | 1,122,677 B |
| Contact first-load JS | 1,020,930 B | 1,123,023 B |
| Largest individual JS chunk | 292,001 B | 321,202 B |
| Total emitted CSS | 35,368 B | 38,905 B |
| Translation catalogs | 26,630 B | 29,293 B |
| Runtime dependencies | 9 | 9 |

CI also fails if GSAP is reintroduced as a dependency or source import.

## Verification commands

- `npm run lint`
- `npm test`
- `npm run build`
- `npm run test:budgets`
- `npm run test:e2e`
- `npm run test:analytics:production`
