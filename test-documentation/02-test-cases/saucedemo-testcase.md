# Test Scenarios and Test Cases

**Software:** Saucedemo

**QA Responsible:** Daniel Brito

**Date:** March 15, 2024

## Scenario 01: Login and user authentication scenarios

**Description**: Validate login and logout scenarios.

### Test Case 01: Login with valid credentials
| ID | Description |
| :--------- | :---------- |
| SC01-T01 | The login will be successful when the user inserts valid information. |

| **Preconditions** |
| :--------- |
| The user must be registered. |
| The user must provide a valid username and password. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the login page |
| **AND** I enter a valid credential|
| **WHEN** I click the "Login" button |
| **THEN** I am redirected to Saucedemo inventory page |

| **Acceptance Criteria** |
| :--------- |
| User is logged in and sees the inventory page. |

### Test Case 02: Login with invalid / incorrect credentials
| ID | Description |
| :--------- | :---------- |
| SC01-T02 | The login will be unsuccessful when the user inserts invalid information. |

| **Preconditions** |
| :--------- |
| The user must be registered. |
| The user must provide an invalid username or password. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the login page |
| **AND** I enter a invalid credential |
| **WHEN** I click the "Login" button |
| **THEN** I see an error message on the login page|

| **Acceptance Criteria** |
| :--------- |
| User sees an error message: "Username and password do not match any user in this service". |

### Test Case 03: Login with locked out credentials
| ID | Description |
| :--------- | :---------- |
| SC01-T03 | The login will be unsuccessful when the user inserts a locked out user credential. |

| **Preconditions** |
| :--------- |
| The user must be registered. |
| The user must provide an locked out user and password. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the login page |
| **AND** I enter a locked out user credential |
| **WHEN** I click the "Login" button |
| **THEN** I see an error message in the login page|

| **Acceptance Criteria** |
| :--------- |
| User sees an error message: "Sorry, this user has been locked out". |

### Test Case 04: Login with empty username
| ID | Description |
| :--------- | :---------- |
| SC01-T04 | The login will be unsuccessful when the user attempts to log in with an empty username field. |

| **Preconditions** |
| :--------- |
| The user must be registered. |
| The user must leave the user field empty. |
| The user must provide a valid password. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the login page |
| **AND** I leave the username field empty and insert a valid password |
| **WHEN** I click the "Login" button |
| **THEN** I see an error message in the login page|

| **Acceptance Criteria** |
| :--------- |
| User sees an error message: "Username is required". |

### Test Case 05: Login with empty password
| ID | Description |
| :--------- | :---------- |
| SC01-T05 | The login will be unsuccessful when the user attempts to log in with an empty password field. |

| **Preconditions** |
| :--------- |
| The user must be registered. |
| The user must leave the user field empty. |
| The user must provide a valid username. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the login page |
| **AND** I leave the password field empty and insert a valid username |
| **WHEN** I click the "Login" button |
| **THEN** I see an error message in the login page|

| **Acceptance Criteria** |
| :--------- |
| User sees an error message: "Password is required". |

---

## Scenario 02: Cart scenarios

**Description**: Validate inventory and cart scenarios.

### Test Case 01: Adding an item to the shopping cart
| ID | Description |
| :--------- | :---------- |
| SC02-T01 | The item is successfully added to the shopping cart and appears in the cart list. |

| **Preconditions** |
| :--------- |
| The user must be logged in. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the inventory page |
| **WHEN** I click the "Add to cart" button for a available product |
| **THEN** The item is added to the shopping cart |

| **Acceptance Criteria** |
| :--------- |
| The item is added to the cart and listed correctly on the cart page. |

### Test Case 02: Removing an item from the shopping cart
| ID | Description |
| :--------- | :---------- |
| SC02-T02 | The item is successfully removed from the shopping cart. |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The cart contains at least one item. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Remove" button for an item in the cart |
| **THEN** The item is removed from the shopping cart |

| **Acceptance Criteria** |
| :--------- |
| The item is removed from the cart. |

### Test Case 03: Continue shopping from cart
| ID | Description |
| :--------- | :---------- |
| SC02-T03 | The user continues shopping from cart |

| **Preconditions** |
| :--------- |
| The user is logged in. |
| The user is on the cart page. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Continue Shopping" button |
| **THEN** I am redirected to the inventory page |


| **Acceptance Criteria** |
| :--------- |
| The user is redirected to the inventory page. |

### Test Case 04: Continue shopping from the cart
| ID | Description |
| :--------- | :---------- |
| SC02-T04 | The user adds an item to the cart, navigates to the cart page, and clicks "Continue Shopping" to return to the inventory page. |

| **Preconditions** |
| :--------- |
|  The user is logged in. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the inventory page |
| **AND** I add an item and open the cart page |
| **WHEN** I click the "Continue Shopping" button |
| **THEN** I am redirected to the inventory page |
| **AND** the item remains in the shopping cart |

| **Acceptance Criteria** |
| :--------- |
| |The user is redirected to the inventory page and the cart badge correctly displays the number of items in the cart. |

## Scenario 03: Checkout scenarios

**Description**: Validate checkout scenarios.

### Test Case 01: Successfull checkout
| ID | Description |
| :--------- | :---------- |
| SC03-T01 | The user successfully performs a product checkout. |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The cart contains at least one item. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Checkout" button |
| **AND** I enter valid first name, last name, and postal code |
| **AND** I click the "Continue" button |
| **AND** I click the "Finish" button |
| **THEN** the order confirmation page is displayed |
| **AND** the message "Thank you for your order!" is shown |

| **Acceptance Criteria** |
| :--------- |
| User sees the message: "Thank you for your order!" |

### Test Case 02: Checkout attempt without first name
| ID | Description |
| :--------- | :---------- |
| SC03-T02 | The checkout attempt fails when the user submits the checkout form without entering a first name.  |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The cart contains at least one item. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Checkout" button |
| **AND** I leave the first name field empty |
| **AND** I enter a valid last name and postal code |
| **AND** I click the "Continue" button |
| **THEN** an error message is displayed |

| **Acceptance Criteria** |
| :--------- |
| The user sees the error message: "Error: First Name is required". |

### Test Case 03: Checkout attempt without last name
| ID | Description |
| :--------- | :---------- |
| SC03-T03 | The checkout attempt fails when the user submits the checkout form without entering a last name.  |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The cart contains at least one item. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Checkout" button |
| **AND** I leave the last name field empty |
| **AND** I enter a valid first name and postal code |
| **AND** I click the "Continue" button |
| **THEN** an error message is displayed |

| **Acceptance Criteria** |
| :--------- |
| The user sees the error message: "Error: Last name is required". |

### Test Case 04: Checkout attempt without postal code
| ID | Description |
| :--------- | :---------- |
| SC03-T03 | The checkout attempt fails when the user submits the checkout form without entering a postal code.  |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The cart contains at least one item. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the cart page |
| **WHEN** I click the "Checkout" button |
| **AND** I leave the postal code empty |
| **AND** I enter a valid first name and last name |
| **AND** I click the "Continue" button |
| **THEN** an error message is displayed |

| **Acceptance Criteria** |
| :--------- |
| The user sees the error message: "Error: Postal code is required". |