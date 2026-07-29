# Clickbait ENT — Analytics Event Map

This document defines the events to track once a privacy-conscious analytics provider is chosen.

## Events

| Event | Route | Trigger | Properties |
|---|---|---|---|
| `hero_cta_click` | `/` | User clicks primary CTA | `label`, `destination` |
| `room_select` | `/rooms` | User clicks a room booking link | `room` |
| `service_select` | `/services` | User clicks a service CTA | `service`, `wix_url_present` |
| `wix_handoff` | `/services` | User clicks external Wix link | `service` |
| `contact_start` | `/contact` | User opens contact form | `topic` |
| `contact_submit` | `/contact` | User submits contact form | `topic`, `success` |
| `phone_click` | `/contact` | User taps phone link | `phone` |
| `instagram_click` | footer | User taps Instagram link | `url` |
| `more_than_rap_inquiry` | `/more-than-rap` | User clicks enrollment CTA | `program` |

## Consent boundary

No script is injected until the client approves a provider and data policy.

## Approved providers

- Vercel Analytics (preferred)
- Plausible (alternative)

## Next step

Client chooses provider and approves data policy, then engineering wires events.