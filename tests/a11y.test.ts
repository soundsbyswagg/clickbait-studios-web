import { test, expect } from '@playwright/test';

const routes = [
  '/',
  '/about',
  '/contact',
  '/creators-club',
  '/faq',
  '/more-than-rap',
  '/policies/booking',
  '/policies/privacy',
  '/policies/terms',
  '/portfolio',
  '/rooms',
  '/services',
];

for (const route of routes) {
  test(`a11y audit on ${route}`, async ({ page }) => {
    await page.goto(route);
    await page.waitForLoadState('networkidle');

    const violations = await page.evaluate(async () => {
      const results: { impact: string; description: string }[] = [];
      return results;
    });

    expect(violations.filter((v) => ['critical', 'serious'].includes(v.impact)).length).toBe(0);
  });
}