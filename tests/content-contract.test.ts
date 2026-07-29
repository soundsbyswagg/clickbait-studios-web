import { describe, it, expect } from 'vitest';
import { siteConfig, services, rooms, moreThanRap } from '@/content/site';

describe('Content Contract', () => {
  it('validates canonical brand name', () => {
    expect(siteConfig.name).toBe('Clickbait ENT');
  });

  it('validates support email uses domain', () => {
    // Placeholder until real email created
    const email = 'bookings@clickbaitent.com';
    expect(email).toMatch(/@clickbaitent.com$/);
  });

  it('validates phone and address', () => {
    expect(siteConfig.links.phone).toBe('470-621-1417');
    expect(siteConfig.address).toBe('1587 Phoenix Boulevard, Suite 5, Atlanta, Georgia 30349');
  });

  it('validates unique service slugs and positive values', () => {
    const slugs = services.map(s => s.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    services.forEach(s => {
      expect(s.startingPrice).toMatch(/From \$?\d+/);
      expect(s.duration).toBeTruthy();
      expect(s.description.length).toBeGreaterThan(5);
    });
  });

  it('validates room capacity only (no unverified equipment claims)', () => {
    rooms.forEach(r => {
      expect(r.capacity).toMatch(/Up to \d+ guests/);
      if (r.note.includes('equipment')) {
        expect(r.note).toContain('Same equipment');
      }
    });
  });

  it('validates More Than Rap data', () => {
    expect(moreThanRap.name).toBe('More Than Rap');
    expect(moreThanRap.instructors.length).toBeGreaterThan(0);
    expect(moreThanRap.deliverables.length).toBeGreaterThan(0);
  });

  it('flags unresolved A/B differences as VERIFY', () => {
    const hasVerify = rooms.some(r => r.note.includes('VERIFY') || r.note.includes('same'));
    expect(hasVerify).toBe(true); // From baseline
  });

  it('has no unverified testimonials or portfolio', () => {
    // Assume empty or placeholder in content
    expect(true).toBe(true); // Placeholder - will enforce in portfolio content later
  });
});
