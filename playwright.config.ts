import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";

dotenv.config({ path: ".env.saucedemo" });
quiet: true;

// Environment file validation
if (!process.env.BASE_URL) {
  throw new Error("BASE_URL not defined. Set it locally in .env.saucedemo or in GitHub Actions.");
}

export default defineConfig({
  testDir: "./tests-e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: process.env.CI
  ? [['dot'], ['html', { open: 'never' }]]
  : [['html', { open: 'always' }]],

  use: {
    baseURL: process.env.BASE_URL,
    trace: "on-first-retry",
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
