import { expect, test, type Locator, type Page } from '@playwright/test';

const eventNames = {
  booking: 'booking_click',
  mobileBooking: 'mobile_booking_bar_click',
  phone: 'phone_click',
  instagram: 'instagram_click',
  language: 'language_change',
  mobileMenu: 'mobile_menu_open',
  quickAction: 'quick_action_select',
  moreThanRap: 'more_than_rap_inquiry_click',
} as const;

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => {
    const captured: unknown[][] = [];
    Object.assign(window, {
      __capturedAnalytics: captured,
      va: (...args: unknown[]) => captured.push(args),
    });
  });
});

for (const language of ['en', 'es'] as const) {
  test(`${language.toUpperCase()} analytics events fire through the Vercel event queue`, async ({ page }, testInfo) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem('clickbait:lang', selectedLanguage);
    }, language);
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-analytics-ready', 'true');

    await clickWithoutNavigation(page.getByRole('link', { name: language === 'es' ? 'Reservar una Sesión' : 'Book a Session' }).first());
    await expectEvent(page, eventNames.booking);

    await clickWithoutNavigation(page.getByRole('link', { name: '470-621-1417' }));
    await expectEvent(page, eventNames.phone);

    await clickWithoutNavigation(page.getByRole('link', { name: 'Instagram', exact: true }));
    await expectEvent(page, eventNames.instagram);

    await clickWithoutNavigation(page.getByRole('link', { name: language === 'es' ? 'Pregunta sobre el programa' : 'Ask about the program' }));
    await expectEvent(page, eventNames.moreThanRap);

    if (testInfo.project.name.startsWith('mobile')) {
      await clickWithoutNavigation(page.locator('.mobile-booking-bar a'));
      await expectEvent(page, eventNames.mobileBooking);

      await page.getByRole('button', { name: language === 'es' ? 'Abrir navegación' : 'Open navigation' }).click();
      await expectEvent(page, eventNames.mobileMenu);
      await page.keyboard.press('Escape');

      await page.getByRole('button', { name: language === 'es' ? 'Abrir acciones rápidas' : 'Open quick actions' }).click();
      await clickWithoutNavigation(page.getByRole('link', { name: language === 'es' ? 'Llegada' : 'Arrival' }));
      await expectEvent(page, eventNames.quickAction);
    }

    const nextLanguage = language === 'en' ? 'Español' : 'Inglés';
    await page.getByRole('button', { name: nextLanguage }).first().click();
    await expectEvent(page, eventNames.language);
  });
}

async function clickWithoutNavigation(locator: Locator) {
  await locator.evaluate((element) => {
    element.addEventListener('click', (event) => event.preventDefault(), { once: true });
  });
  await locator.click();
}

async function expectEvent(page: Page, eventName: string) {
  await expect.poll(() => page.evaluate((name) => {
    const captured = (window as typeof window & { __capturedAnalytics?: unknown[][] }).__capturedAnalytics ?? [];
    return captured.some((entry) => {
      const payload = entry[1] as { name?: string } | undefined;
      return entry[0] === 'event' && payload?.name === name;
    });
  }, eventName)).toBe(true);
}
