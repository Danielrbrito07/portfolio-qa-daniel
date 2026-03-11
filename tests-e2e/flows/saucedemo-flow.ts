import { type Page } from "@playwright/test";
import {
  SaucedemoPage,
  login,
  assertLogin,
  incorrectLogin,
  lockedOutLogin,
  emptyUsername,
  emptyPassword,
  addFirstInventoryItemToCart,
  removeItemFromCart,
  continueShopping,
  successfulCheckout,
  incompleteCheckout
} from "../pages/saucedemoPage";

export async function loginFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await saucedemoPage.visitLogin();
  await login(saucedemoPage);
}

export async function assertUserLogin(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await assertLogin(saucedemoPage);
}

export async function invalidLoginFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await saucedemoPage.visitLogin();
  await incorrectLogin(saucedemoPage);
}

export async function lockedOutLoginFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await saucedemoPage.visitLogin();
  await lockedOutLogin(saucedemoPage);
}

export async function emptyUsernameFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await saucedemoPage.visitLogin();
  await emptyUsername(saucedemoPage);
}

export async function emptyPasswordFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await saucedemoPage.visitLogin();
  await emptyPassword(saucedemoPage);
}

export async function addToCartFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await addFirstInventoryItemToCart(saucedemoPage);
}

export async function removeFromCartFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await removeItemFromCart(saucedemoPage);
}

export async function continueShoppingFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await continueShopping(saucedemoPage);
}

export async function successfulCheckoutFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await successfulCheckout(saucedemoPage);
}

export async function incompleteCheckoutFlow(page: Page) {
  const saucedemoPage = new SaucedemoPage(page);
  await incompleteCheckout(saucedemoPage);
}
