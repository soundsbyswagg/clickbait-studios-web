import { expect, test, type Locator, type Page } from '@playwright/test';

test.skip(process.env.PLAYWRIGHT_PRODUCTION !== '1', 'Runs only against the deployed production site');

const names = {
  booking: 'booking_click',
  mobileBooking: 'mobile_booking_bar_click',
  phone: 'phone_click',
  instagram: 'instagram_click',
  language: 'language_change',
  mobileMenu: 'mobile_menu_open',
  quickAction: 'quick_action_select',
  moreThanRap: 'more_than_rap_inquiry_click',
} as const;

for (const language of ['en', 'es'] as const) {
  test(`${language.toUpperCase()} production events reach Vercel intake`, async ({ page }, testInfo) => {
    await page.addInitScript((selectedLanguage) => {
      localStorage.setItem('clickbait:lang', selectedLanguage);
    }, language);
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('html')).toHaveAttribute('data-analytics-ready', 'true');

    await clickAndVerify(page, page.getByRole('link', { name: language === 'es' ? 'Reservar una Sesión' : 'Book a Session' }).first(), names.booking);
    await clickAndVerify(page, page.getByRole('link', { name: '470-621-1417' }), names.phone);
    await clickAndVerify(page, page.getByRole('link', { name: 'Instagram', exact: true }), names.instagram);
    await clickAndVerify(page, page.getByRole('link', { name: language === 'es' ? 'Pregunta sobre el programa' : 'Ask about the program' }), names.moreThanRap);

    if (testInfo.project.name.startsWith('mobile')) {
      await clickAndVerify(page, page.locator('.mobile-booking-bar a'), names.mobileBooking);
      await clickAndVerify(page, page.getByRole('button', { name: language === 'es' ? 'Abrir navegación' : 'Open navigation' }), names.mobileMenu, false);
      await page.keyboard.press('Escape');
      await page.getByRole('button', { name: language === 'es' ? 'Abrir acciones rápidas' : 'Open quick actions' }).click();
      await clickAndVerify(page, page.getByRole('link', { name: language === 'es' ? 'Llegada' : 'Arrival' }), names.quickAction);
    }

    await clickAndVerify(page, page.getByRole('button', { name: language === 'en' ? 'Español' : 'Inglés' }).first(), names.language, false);
  });
}

async function clickAndVerify(page: Page, locator: Locator, eventName: string, preventNavigation = true) {
  if (preventNavigation) {
    await locator.evaluate((element) => {
      element.addEventListener('click', (event) => event.preventDefault(), { once: true });
    });
  }

  const accepted = page.waitForResponse((response) => {
    const body = response.request().postData() ?? '';
    return response.request().method() === 'POST' && body.includes(eventName) && response.ok();
  }, { timeout: 15_000 });

  await locator.click();
  const response = await accepted;
  expect(response.status(), `${eventName} intake response`).toBeLessThan(300);
}
