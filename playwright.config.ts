import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: ".env.saucedemo" });
console.log("BASE_URL:", process.env.BASE_URL);

// Environment file validation
if (!process.env.BASE_URL) {
  throw new Error("BASE_URL not defined. Set it locally in .env.saucedemo or in GitHub Actions.");
}

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests-e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter:[['html', { open: 'always' }]],

  use: {
    baseURL: process.env.BASE_URL,
    trace: "on",
    screenshot: "on",
  },

  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    {
      name: "chromium",
      dependencies: ["setup"],
      testIgnore: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        // storageState: "playwright/.auth/user.json",
      },
    },

    {
      name: "firefox",
      testIgnore: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      testIgnore: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Safari"],
      },
    },
  ],
});
