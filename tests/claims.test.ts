import { describe, it, expect } from 'vitest';
import { services, rooms, moreThanRap, siteConfig } from '@/content/site';

const FORBIDDEN = [
  'CHEAPEST RATES IN THE CITY',
  'Over 50 sessions recorded per month',
  'ARE YOU HEARING THIS???',
  'Clickbait Enterprises',
  'squadgoalsentllc@gmail.com',
  'from first idea to final release',
  'guaranteed',
  'best in Atlanta',
];

describe('Prohibited Claims Guard', () => {
  const allText = JSON.stringify({ services, rooms, moreThanRap, siteConfig });

  FORBIDDEN.forEach(phrase => {
    it(`does not contain forbidden claim: "${phrase}"`, () => {
      expect(allText).not.toContain(phrase);
    });
  });

  it('uses only client-approved brand', () => {
    expect(siteConfig.name).toBe('Clickbait ENT');
    expect(allText).not.toContain('Clickbait Studios');
  });

  it('no unverified volume or price claims', () => {
    expect(allText).not.toMatch(/Over \d+ sessions/);
  });
});
