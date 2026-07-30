import { defineConfig, devices } from '@playwright/test';

const productionVerification = process.env.PLAYWRIGHT_PRODUCTION === '1';
const baseURL = productionVerification
  ? process.env.PRODUCTION_BASE_URL ?? 'https://clickbait-studios-web.vercel.app'
  : 'http://localhost:3000';

export default defineConfig({
  testDir: './e2e',
  outputDir: './test-results',
  workers: 2,
  timeout: 60_000,
  reporter: process.env.CI ? 'github' : 'list',
  use: {
    baseURL,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    launchOptions: productionVerification
      ? { args: ['--disable-blink-features=AutomationControlled'] }
      : undefined,
  },
  projects: [
    { name: 'desktop-chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'mobile-chromium', use: { ...devices['Pixel 7'] } },
  ],
  webServer: productionVerification ? undefined : {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
