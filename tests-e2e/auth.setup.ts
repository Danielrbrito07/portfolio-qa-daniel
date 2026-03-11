import { test as setup, expect } from "@playwright/test";

setup("authenticate", async ({ page }) => {
  await page.goto("/");

  await page
    .locator('[data-test="username"]')
    .fill(process.env.SAUCEDEMO_STANDARD_USERNAME!);
  await page
    .locator('[data-test="password"]')
    .fill(process.env.SAUCEDEMO_PASSWORD!);
  await page.locator('[data-test="login-button"]').click();

  await expect(page).toHaveURL(/inventory/);
  await expect(page.getByText("Products")).toBeVisible();

  await page.context().storageState({
    path: "playwright/.auth/user.json",
  });
});
