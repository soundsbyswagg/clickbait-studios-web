import fs from 'node:fs';
import { describe, expect, it } from 'vitest';
import { en } from '@/content/translations/en';
import { es } from '@/content/translations/es';
import { LANGUAGE_STORAGE_KEY } from '@/lib/i18n';
import { routeSeo } from '@/lib/seo';

describe('experience system contracts', () => {
  it('uses a Clickbait-specific persistent language namespace', () => {
    expect(LANGUAGE_STORAGE_KEY).toBe('clickbait:lang');
    expect(LANGUAGE_STORAGE_KEY).not.toBe('portfolio:lang');
  });

  it('keeps English and Spanish dictionaries structurally identical', () => {
    expect(Object.keys(es).sort()).toEqual(Object.keys(en).sort());
  });

  it('keeps both dictionaries free of internal or unsupported claims', () => {
    const text = JSON.stringify({ en, es });
    expect(text).not.toMatch(/VERIFY|PENDING|cheapest rates|over 50 sessions|award-winning|partnership/i);
  });

  it('uses real SVG flags and accessible pressed state', () => {
    const source = fs.readFileSync('components/i18n/LanguageSwitcher.tsx', 'utf8');
    expect(source).toContain('<svg');
    expect(source).toContain('aria-pressed');
    expect(source).not.toMatch(/🇺🇸|🇪🇸/u);
  });

  it('defines touch targets, focus visibility, contrast, and reduced motion', () => {
    const css = fs.readFileSync('app/globals.css', 'utf8');
    expect(css).toContain('min-height: 2.75rem');
    expect(css).toContain(':focus-visible');
    expect(css).toContain('data-contrast="high"');
    expect(css).toContain('prefers-reduced-motion');
  });

  it('contains no neutral utility colors or raw image elements', () => {
    const source = readSources(['app', 'components']);
    expect(source).not.toMatch(/(?:bg|text|border)-neutral-/);
    expect(source).not.toMatch(/<img\b/);
  });

  it('provides route SEO, canonical metadata, and dynamic OG support', () => {
    expect(Object.keys(routeSeo).length).toBeGreaterThanOrEqual(15);
    expect(fs.readFileSync('lib/seo.ts', 'utf8')).toContain('alternates');
    expect(fs.existsSync('app/api/og/route.tsx')).toBe(true);
  });

  it('provides a conservative offline shell without fake form synchronization', () => {
    const worker = fs.readFileSync('public/sw.js', 'utf8');
    expect(worker).toContain("'/offline'");
    expect(worker).not.toMatch(/sync-form|pushManager|Notification\.requestPermission/);
  });

  it('keeps mobile booking immediate and menu swipe-aware', () => {
    const booking = fs.readFileSync('components/layout/BookingBar.tsx', 'utf8');
    const menu = fs.readFileSync('components/navigation/MobileMenu.tsx', 'utf8');
    expect(booking).toContain('useState(true)');
    expect(menu).toContain('onTouchStart');
    expect(menu).toContain('onTouchEnd');
  });
});

function readSources(roots: string[]): string {
  const files: string[] = [];
  const walk = (directory: string) => {
    for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
      const fullPath = `${directory}/${entry.name}`;
      if (entry.isDirectory()) walk(fullPath);
      else if (/\.(ts|tsx)$/.test(entry.name)) files.push(fullPath);
    }
  };
  roots.forEach(walk);
  return files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
}
