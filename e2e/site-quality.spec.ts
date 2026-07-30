import { expect, test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const coreRoutes = ['/', '/services', '/rooms', '/contact'];

for (const route of coreRoutes) {
  test(`${route} renders and has no serious accessibility violations`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    await page.waitForLoadState('networkidle');
    await expect(page.locator('main')).toBeVisible();
    const results = await new AxeBuilder({ page }).exclude('.custom-cursor').analyze();
    expect(results.violations.filter((violation) => ['serious', 'critical'].includes(violation.impact ?? ''))).toEqual([]);
  });
}

test('mobile navigation and quick actions support keyboard dismissal', async ({ page }, testInfo) => {
  test.skip(!testInfo.project.name.startsWith('mobile'), 'Mobile-only interaction');
  await page.goto('/');
  const menuButton = page.getByRole('button', { name: 'Open navigation' });
  await menuButton.click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toBeHidden();

  const quickActions = page.getByRole('button', { name: 'Open quick actions' });
  await quickActions.click();
  await expect(page.getByRole('navigation', { name: 'Quick actions' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(quickActions).toBeFocused();
});

test('Spanish preference localizes representative public routes and assistive labels', async ({ page }) => {
  await page.addInitScript(() => localStorage.setItem('clickbait:lang', 'es'));
  await page.goto('/services');
  await expect(page.getByRole('heading', { name: 'Servicios' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Sesión de Grabación con Ingeniero' })).toBeVisible();
  await page.goto('/rooms');
  await expect(page.getByRole('heading', { name: 'Elige tu sala' })).toBeVisible();
  await page.goto('/contact');
  await expect(page.getByRole('heading', { name: 'Contacta a Clickbait ENT' })).toBeVisible();
  await expect(page.locator('html')).toHaveAttribute('lang', 'es');
});

test('production security policy is configured in response headers', async ({ request }) => {
  const response = await request.get('/');
  expect(response.headers()['content-security-policy']).toContain("default-src 'self'");
  expect(response.headers()['strict-transport-security']).toContain('max-age=63072000');
  expect(response.headers()['x-xss-protection']).toBeUndefined();
});
