import { test } from "@playwright/test";
import {
  loginFlow,
  assertUserLogin,
  addToCartFlow,
  successfulCheckoutFlow,
  incompleteCheckoutFlow
} from "../flows/saucedemo-flow";

test.describe("Saucedemo Checkout Tests", () => {
  test.beforeEach(async ({ page }) => {
    await loginFlow(page);
    await assertUserLogin(page);
  });

  test("CHECKOUT-001 - Successful checkout flow @critical @smoke @happy-path", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Performing successful checkout", async () => {
      await successfulCheckoutFlow(page);
    });
  });

  test("CHECKOUT-002 - Incomplete checkout flow @negative", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Attempting checkout with missing user information", async () => {
      await incompleteCheckoutFlow(page);
    });
  });

});
