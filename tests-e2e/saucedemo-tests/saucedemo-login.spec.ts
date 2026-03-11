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
    test("T001 - Successful Login", async ({ page }) => {
      await loginFlow(page);
      await assertUserLogin(page);
    });
  });

  test.describe("Negative Login Scenarios", () => {
    test("T002 - Invalid Login", async ({ page }) => {
      await invalidLoginFlow(page);
    });

    test("T003 - Locked Out User Login", async ({ page }) => {
      await lockedOutLoginFlow(page);
    });

    test("T004 - Empty Username Login", async ({ page }) => {
      await emptyUsernameFlow(page);
    });

    test("T005 - Empty Password Login", async ({ page }) => {
      await emptyPasswordFlow(page);
    });
  });
});
