import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { navigation } from '@/content/site';
import { BOOKING_URL } from '@/lib/routes';

describe('navigation and booking contract', () => {
  it('keeps the core routes available', () => {
    const hrefs = navigation.map((item) => item.href);
    ['/services', '/rooms', '/portfolio', '/more-than-rap', '/creators-club', '/about', '/faq', '/contact'].forEach((route) => expect(hrefs).toContain(route));
  });

  it('uses one canonical verified booking URL', () => {
    expect(BOOKING_URL).toBe('https://www.clickbaitent.com/book-online');
    const source = ['app', 'components'].flatMap((root) => readTree(root)).join('\n');
    expect(source).not.toMatch(/href=["'{/]*contact[^>]*>[^<]*Book a Session/i);
  });

  it('provides an accessible visual hamburger', () => {
    const source = fs.readFileSync('components/navigation/MobileMenu.tsx', 'utf8');
    expect(source).toContain('aria-label="Open navigation"');
    expect(source).toContain('aria-expanded={open}');
    expect(source).toMatch(/flex w-6 flex-col/);
    expect(source).not.toMatch(/>\s*Menu\s*</);
  });
});

function readTree(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = `${directory}/${entry.name}`;
    if (entry.isDirectory()) return readTree(fullPath);
    return /\.(ts|tsx)$/.test(entry.name) ? [fs.readFileSync(fullPath, 'utf8')] : [];
  });
}
