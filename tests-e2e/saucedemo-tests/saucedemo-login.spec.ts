import { test } from "@playwright/test";
import {
  loginFlow,
  assertUserLogin,
  invalidLoginFlow,
  lockedOutLoginFlow,
  emptyUsernameFlow,
  emptyPasswordFlow,
} from "../flows/saucedemo-flow";

test.describe("Saucedemo Login Tests", () => {
  test.describe("Positive Login Scenarios", () => {
    test("LOGIN -001 - Successful Login @critical @smoke", async ({ page }) => {
      await loginFlow(page);
      await assertUserLogin(page);
    });
  });

  test.describe("Negative Login Scenarios", () => {
    test("LOGIN-002 - Invalid Login @negative", async ({ page }) => {
      await invalidLoginFlow(page);
    });

    test("LOGIN-003 - Locked Out User Login @negative", async ({ page }) => {
      await lockedOutLoginFlow(page);
    });

    test("LOGIN-004 - Empty Username Login @negative", async ({ page }) => {
      await emptyUsernameFlow(page);
    });

    test("LOGIN-005 - Empty Password Login @negative", async ({ page }) => {
      await emptyPasswordFlow(page);
    });
  });
});
