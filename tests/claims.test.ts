import fs from 'node:fs';
import path from 'node:path';
import { describe, expect, it } from 'vitest';

const roots = ['app', 'components', 'content', 'lib'];
const extensions = new Set(['.ts', '.tsx', '.css']);
const files = roots.flatMap((root) => walk(path.resolve(root)));

function walk(directory: string): string[] {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return walk(fullPath);
    return extensions.has(path.extname(entry.name)) ? [fullPath] : [];
  });
}

const source = files.map((file) => fs.readFileSync(file, 'utf8')).join('\n');
const prohibited = [
  'VER' + 'IFY',
  'PEND' + 'ING',
  'confirm with ' + 'client',
  'launch ' + 'blocker',
  'exact differences with ' + 'client',
  'bookings@' + 'clickbaitent.com',
  'mail' + 'to:',
  'one business ' + 'day',
  'Cheapest Rates in the ' + 'City',
  'Over 50 ' + 'sessions',
];

describe('customer-facing source guardrails', () => {
  for (const phrase of prohibited) {
    it(`excludes prohibited phrase: ${phrase}`, () => {
      const escaped = phrase.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      expect(source).not.toMatch(new RegExp(`\\b${escaped}\\b`, 'i'));
    });
  }

  it('does not contain unsupported awards or partnerships', () => {
    expect(source).not.toMatch(/award-winning|official partner|in partnership with/i);
  });

  it('contains no page-level main landmark', () => {
    const pageFiles = files.filter((file) => file.endsWith(`${path.sep}page.tsx`));
    for (const file of pageFiles) expect(fs.readFileSync(file, 'utf8')).not.toMatch(/<main\b/i);
  });
});
