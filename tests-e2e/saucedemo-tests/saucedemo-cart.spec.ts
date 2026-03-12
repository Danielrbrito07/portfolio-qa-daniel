import { test } from "@playwright/test";
import {
  loginFlow,
  assertUserLogin,
  addToCartFlow,
  removeFromCartFlow,
  continueShoppingFlow,
  successfulCheckoutFlow,
  incompleteCheckoutFlow
} from "../flows/saucedemo-flow";

test.describe("Saucedemo inventory and cart Tests", () => {
  test.beforeEach(async ({ page }) => {
    await loginFlow(page);
    await assertUserLogin(page);
  });

  test("CART-001 - Add item to cart @critical @smoke @happy-path", async ({ page }) => {
    await addToCartFlow(page);
  });

  test("CART-002 - Remove item from cart @happy-path", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Removing item from cart", async () => {
      await removeFromCartFlow(page);
    });
  });

  test("CART-003 - Continue shopping from cart @happy-path", async ({ page }) => {
    await continueShoppingFlow(page);
  });

  test("CART-004 - Add item then continue shopping from cart @happy-path", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Continuing shopping from cart", async () => {
      await continueShoppingFlow(page);
    });
  });

  test("CHECKOUT-005 - Successful checkout flow @critical @smoke @happy-path", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Performing successful checkout", async () => {
      await successfulCheckoutFlow(page);
    });
  });

  test("CHECKOUT-006 - Incomplete checkout flow @negative", async ({ page }) => {
    await test.step("Inserting items into cart", async () => {
      await addToCartFlow(page);
    });

    await test.step("Attempting checkout with missing user information", async () => {
      await incompleteCheckoutFlow(page);
    });
  });

});
