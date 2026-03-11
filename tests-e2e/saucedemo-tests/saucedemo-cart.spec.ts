import { test } from "@playwright/test";
import {
  loginFlow,
  assertUserLogin,
  addToCartFlow,
  removeFromCartFlow,
  continueShoppingFlow,
  successfulCheckoutFlow,
  incompleteCheckoutFlow
} from "../resources/saucedemo-flow";

test.describe("Saucedemo inventory and cart Tests", () => {
  test.beforeEach(async ({ page }) => {
    await loginFlow(page);
    await assertUserLogin(page);
  });

  test("Test001 - Add item to cart", async ({ page }) => {
    await addToCartFlow(page);
  });

  test("Test002 - Remove item from cart", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Removing item from cart", async () => {
      await removeFromCartFlow(page);
    });
  });

  test("Test003 - Continue shopping from cart", async ({ page }) => {
    await continueShoppingFlow(page);
  });

  test("Test004 - Add item then continue shopping from cart", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Continuing shopping from cart", async () => {
      await continueShoppingFlow(page);
    });
  });

  test("Test005 - Successful checkout flow", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Performing successful checkout", async () => {
      await successfulCheckoutFlow(page);
    });
  });

  test("Test006 - Incomplete checkout flow", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Attempting checkout with missing user information", async () => {
      await incompleteCheckoutFlow(page);
    });
  });

});
