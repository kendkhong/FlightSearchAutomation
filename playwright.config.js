// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries: 0,
  workers: 2,
  /* Maximum time one test can run for */
  timeout: 80 * 1000,
  expect: {
    timeout: 5000
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: {
        //browserName: 'webkit',
        headless: true,
        screenshot: 'on',
        video: 'retain-on-failure', // record video
        ignoreHTTPSErrors: true,
        trace: 'on',   // 'retain-on-failure'   // Logs
        ...devices['Desktop Chrome'],

      }
    }

  ],

});

