import { expect, type Locator, type Page } from "@playwright/test";

export class SaucedemoPage {
  readonly page: Page;

  // Login page locators
  readonly mainTitle: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly loginErrorMessage: Locator;

  // Inventory page locators
  readonly inventoryTitle: Locator;
  readonly inventoryItems: Locator;
  readonly inventoryItemNames: Locator;
  readonly addToCartButton: Locator;

  // Cart page locators
  readonly cartBadge: Locator;
  readonly cartIcon: Locator;
  readonly cartTitle: Locator;
  readonly cartItemName: Locator;
  readonly cartRemoveButton: Locator;
  readonly continueShoppingButton: Locator;
  readonly checkoutButton: Locator;

  // Checkout page locators
  readonly firstNameInput: Locator
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueCheckoutButton: Locator;
  readonly finishCheckoutButton: Locator;
  readonly checkoutErrorMessage: Locator;
  readonly homeButton: Locator;

  constructor(page: Page) {
    this.page = page;

    // Login page
    this.mainTitle = page.getByText("Swag Labs");
    this.usernameInput = page.locator('[data-test="username"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-button"]');
    this.loginErrorMessage = page.locator('[data-test="error"]');

    // Inventory page
    this.inventoryTitle = page.getByText("Products");
    this.inventoryItems = page.locator(".inventory_item");
    this.inventoryItemNames = page.locator('[data-test="inventory-item-name"]');
    this.addToCartButton = page.getByRole("button", { name: "Add to cart" });


    // Cart page
    this.cartBadge = page.locator(".shopping_cart_badge");
    this.cartIcon = page.locator(".shopping_cart_link");
    this.cartTitle = page.getByText("Your Cart");
    this.cartItemName = page.locator(".cart_item .inventory_item_name");
    this.cartRemoveButton = page.getByRole("button", { name: "Remove" });
    this.continueShoppingButton = page.locator('[data-test="continue-shopping"]');
    this.checkoutButton = page.locator('[data-test="checkout"]');

    // Checkout page
    this.firstNameInput = page.locator('[data-test="firstName"]');
    this.lastNameInput = page.locator('[data-test="lastName"]');
    this.postalCodeInput = page.locator('[data-test="postalCode"]')
    this.continueCheckoutButton = page.locator('[data-test="continue"]');
    this.finishCheckoutButton = page.locator('[data-test="finish"]');
    this.checkoutErrorMessage = page.locator('[data-test="error"]');
    this.homeButton = page.locator('[data-test="back-to-products"]');
  }

  // Navigate to homepage
  async visitLogin() {
    await this.page.goto("/");
  }
  // Helper method to get cart badge count. Useful for assertions after adding/removing items from cart
  async getCartBadgeCount(): Promise<number> {
    const badgeVisible = await this.cartBadge.isVisible().catch(() => false);

    if (!badgeVisible) {
      return 0;
    }

    const badgeText = (await this.cartBadge.textContent())?.trim() ?? "0";
    return Number(badgeText);
  }
}



// Perform login action
export async function login(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.mainTitle).toBeVisible();
  const username = process.env.SAUCEDEMO_STANDARD_USERNAME!;
  const password = process.env.SAUCEDEMO_PASSWORD!;
  await saucedemoPage.usernameInput.fill(username);
  await saucedemoPage.passwordInput.fill(password!);
  await saucedemoPage.loginButton.click();
}

// Assert successful login
export async function assertLogin(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.page).toHaveURL(/inventory/);
}

// Perform incorrect login action
export async function incorrectLogin(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.mainTitle).toBeVisible();
  const username = process.env.SAUCEDEMO_INVALID_USERNAME!;
  const password = process.env.SAUCEDEMO_PASSWORD!;
  await saucedemoPage.usernameInput.fill(username);
  await saucedemoPage.passwordInput.fill(password!);
  await saucedemoPage.loginButton.click();
  await expect(saucedemoPage.loginErrorMessage).toBeVisible();
  await expect(saucedemoPage.loginErrorMessage).toContainText(
    "Username and password do not match any user in this service",
  );
}

// Perform locked out user login action
export async function lockedOutLogin(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.mainTitle).toBeVisible();
  const username = process.env.SAUCEDEMO_LOCKED_OUT_USERNAME!;
  const password = process.env.SAUCEDEMO_PASSWORD!;
  await saucedemoPage.usernameInput.fill(username);
  await saucedemoPage.passwordInput.fill(password);
  await saucedemoPage.loginButton.click();
  await expect(saucedemoPage.loginErrorMessage).toBeVisible();
  await expect(saucedemoPage.loginErrorMessage).toContainText(
    "Sorry, this user has been locked out.",
  );
}

// Perform login action without filling username
export async function emptyUsername(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.mainTitle).toBeVisible();
  const password = process.env.SAUCEDEMO_PASSWORD!;
  await saucedemoPage.passwordInput.fill(password!);
  await saucedemoPage.loginButton.click();
  await expect(saucedemoPage.loginErrorMessage).toBeVisible();
  await expect(saucedemoPage.loginErrorMessage).toContainText(
    "Username is required",
  );
}

// Perform login action without filling password
export async function emptyPassword(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.mainTitle).toBeVisible();
  const username = process.env.SAUCEDEMO_STANDARD_USERNAME!;
  await saucedemoPage.usernameInput.fill(username);
  await saucedemoPage.loginButton.click();
  await expect(saucedemoPage.loginErrorMessage).toBeVisible();
  await expect(saucedemoPage.loginErrorMessage).toContainText(
    "Password is required",
  );
}

// Add first available product from inventory to cart
export async function addFirstInventoryItemToCart(saucedemoPage: SaucedemoPage,) {
  await expect(saucedemoPage.inventoryTitle).toBeVisible();
  const previousCartCount = await saucedemoPage.getCartBadgeCount();
  const firstItemName =
    (await saucedemoPage.inventoryItemNames.first().textContent())?.trim() ?? "";
  await saucedemoPage.addToCartButton.first().click();
  await expect(saucedemoPage.cartBadge).toHaveText(
    String(previousCartCount + 1),
  );
  await saucedemoPage.cartIcon.click();
  await expect(saucedemoPage.cartTitle).toBeVisible();
  await expect(saucedemoPage.cartItemName.first()).toHaveText(firstItemName);
}

// Remove item from cart
export async function removeItemFromCart(saucedemoPage: SaucedemoPage) {
  const itemName =
    (await saucedemoPage.cartItemName.first().textContent())?.trim() ?? "";
  const initialCount = await saucedemoPage.cartItemName.count();
  await expect(saucedemoPage.cartTitle).toBeVisible();
  await saucedemoPage.cartRemoveButton.first().click();
  await expect(
    saucedemoPage.cartItemName.filter({ hasText: itemName }),
  ).toHaveCount(0);
  await expect(saucedemoPage.cartItemName).toHaveCount(initialCount - 1);
}

// Continue shopping from cart page
export async function continueShopping(saucedemoPage: SaucedemoPage) {
  await saucedemoPage.cartIcon.click();
  await expect(saucedemoPage.cartTitle).toBeVisible();
  await saucedemoPage.continueShoppingButton.click();
  await expect(saucedemoPage.inventoryTitle).toBeVisible();
}

// Perform successful checkout
export async function successfulCheckout(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.checkoutButton).toBeVisible();
  await saucedemoPage.checkoutButton.click();
  const firstName = process.env.SAUCEDEMO_FIRST_NAME!;
  const lastName = process.env.SAUCEDEMO_LAST_NAME!;
  const postalCode = process.env.SAUCEDEMO_POSTAL_CODE!;
  await saucedemoPage.firstNameInput.fill(firstName);
  await saucedemoPage.lastNameInput.fill(lastName);
  await saucedemoPage.postalCodeInput.fill(postalCode);
  await saucedemoPage.continueCheckoutButton.click();
  await expect(saucedemoPage.finishCheckoutButton).toBeVisible();
  await saucedemoPage.finishCheckoutButton.click();
  await expect(saucedemoPage.homeButton).toBeVisible();
  await saucedemoPage.homeButton.click();
  await expect(saucedemoPage.inventoryTitle).toBeVisible();
}

// Perform checkout with missing information
export async function incompleteCheckout(saucedemoPage: SaucedemoPage) {
  await expect(saucedemoPage.checkoutButton).toBeVisible();
  await saucedemoPage.checkoutButton.click();
  const lastName = process.env.SAUCEDEMO_LAST_NAME!;
  const postalCode = process.env.SAUCEDEMO_POSTAL_CODE!;
  await saucedemoPage.lastNameInput.fill(lastName);
  await saucedemoPage.postalCodeInput.fill(postalCode);
  await saucedemoPage.continueCheckoutButton.click();
  await expect(saucedemoPage.checkoutErrorMessage).toBeVisible();
  await expect(saucedemoPage.checkoutErrorMessage).toContainText(
    "Error: First Name is required",
  );
}
