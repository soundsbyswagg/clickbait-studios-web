import { describe, expect, it } from 'vitest';
import { moreThanRap, rooms, services, siteConfig } from '@/content/site';
import { BOOKING_URL } from '@/lib/routes';

describe('approved client content contract', () => {
  it('uses verified contact and booking facts', () => {
    expect(siteConfig.name).toBe('Clickbait ENT');
    expect(siteConfig.address).toBe('1587 Phoenix Boulevard, Suite 5, Atlanta, GA 30349');
    expect(siteConfig.links.phone).toBe('470-621-1417');
    expect(siteConfig.bookingBaseUrl).toBe(BOOKING_URL);
    expect(siteConfig.hours).toContain('four hours');
    expect(siteConfig.hours).toContain('8:00 AM to 5:00 PM');
  });

  it('defines the approved room capacities and shared equipment', () => {
    expect(rooms[0]).toMatchObject({ name: 'A Room', capacity: 'Maximum capacity: 6 guests', equipment: 'Same core equipment' });
    expect(rooms[1]).toMatchObject({ name: 'B Room', capacity: 'Maximum capacity: 3 guests', equipment: 'Same core equipment' });
  });

  it('defines the $100 three-hour base studio session', () => {
    const standard = services.filter((service) => service.wixUrl);
    expect(standard.length).toBeGreaterThan(0);
    standard.forEach((service) => {
      expect(service.startingPrice).toBe('$100 base session');
      expect(service.duration).toBe('Three-hour minimum');
      expect(service.wixUrl).toBe(BOOKING_URL);
    });
  });

  it('keeps More Than Rap in its supervised youth lane', () => {
    expect(moreThanRap.ages).toBe('Ages 4–15');
    expect(moreThanRap.schedule).toContain('Monday through Wednesday');
    expect(JSON.stringify(moreThanRap)).not.toMatch(/18\+|at least 18/i);
  });
});
