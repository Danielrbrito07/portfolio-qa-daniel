# Test Plan - SAUCEDEMO

**System:** Saucedemo 

**QA Engineer:** Daniel Brito

**Date:** 03/13/2025

---

## 1. Introduction
This Test Plan was created to define the objectives, scope, strategy, environment,  
and criteria for the tests that will be performed to validate the system  
SAUCEDEMO, as well as information regarding deliverables and  
the testing schedule.

---

## 2. Test Objectives
## Test Objectives

The main objective of this test plan is to validate the core functionalities of the SauceDemo web application and ensure the system behaves as expected from an end-user perspective.

The testing activities aim to achieve the following goals:

- Verify that the authentication mechanism allows valid users to successfully log into the application and prevents unauthorized access.
- Validate that product inventory is correctly displayed and that users can interact with available products.
- Ensure that users are able to add and remove items from the shopping cart without inconsistencies.
- Confirm that the checkout process works correctly from cart review to order completion.
- Validate that the system properly handles invalid inputs and negative scenarios, such as incorrect credentials or incomplete checkout information.
- Ensure the user interface elements behave correctly across supported browsers.
- Verify that critical user flows (Login → Product Selection → Cart → Checkout) works reliably and without errors.
- Identify potential usability issues or defects that could impact the user experience.
- Ensure that automated end-to-end tests implemented with Playwright correctly validate the main user journeys of the application.
---

## 3. Test Scope

This section defines the functionalities and areas of the application that will be included and excluded from the testing activities.

### In Scope

The following functionalities will be tested:

- User authentication (login and logout)
- Validation of login scenarios including valid and invalid credentials
- Display of the product inventory page
- Product sorting functionality (A-Z, Z-A, price low-high, high-low)
- Adding products to the shopping cart
- Removing products from the shopping cart
- Navigation between inventory page and cart page
- Cart content validation
- Checkout process including:
  - Checkout information form
  - Order overview page
  - Order completion confirmation
- Validation of error messages for invalid or incomplete user inputs
- Basic UI validations to ensure key elements are displayed correctly
- End-to-end user flow validation (Login → Product Selection → Cart → Checkout)

### Out of Scope

The following areas are not included in the current testing scope:

- Backend service validation
- API testing
- Performance testing
- Security testing
- Database validation
- Integration with external or third-party services
- Cross-device mobile testing

---

## 4. Test Strategy
## Test Strategy

The testing strategy will combine manual and automated testing approaches to ensure system reliability.

- **Automation testing** will be implemented using Playwright for end-to-end scenarios covering critical user flows such as login, cart operations, and checkout.
- **Manual testing** will focus on exploratory testing, usability validation, and edge case scenarios.
- **Regression testing** will be performed before each release to ensure existing functionality remains stable.

---

## 5. Test Environment

The following environment and tools will be used to execute the test cases.

### Hardware
- Desktop

### Operating System
- Windows 11 Pro - Build 26100.7623

### Browsers
- Google Chrome (latest version)

### Test Automation Framework
- Playwright with TypeScript

### Development Environment
- Node.js
- Visual Studio Code

### Test Management / Documentation
- Markdown documentation stored in the GitHub repository
- Additional documentation and structured test artifacts managed in Notion

### Version Control
- Git
- GitHub

### Test Data
The following test accounts will be used during testing:

| Username | Scenarios | Password |
|----------|-----------|----------|
| standard_user | Valid login scenario | secret_sauce |
| locked_out_user | Locked user scenario | secret_sauce |
| problem_user | UI validation scenario | secret_sauce |
| invalid_user | Negative login attempt scenario | secret_sauce |

### Application URL
https://www.saucedemo.com/

---

## 6. Test Criteria

### 6.1 Entry Criteria

Testing activities may begin when the following conditions are met:

- The test environment is properly configured and accessible.
- The application build has been successfully deployed to the test environment.
- Test cases and test scenarios have been created and reviewed.
- Required test data and test accounts are available.
- The testing scope and objectives have been defined and approved.
- Access to required tools and resources (test framework, documentation, and repositories) is available.

### 6.2 Exit Criteria

Testing activities will be considered complete when the following conditions are met:

- At least 95% of planned test cases have been executed.
- All critical and high severity defects have been resolved or mitigated.
- Remaining medium or low severity defects have been documented and accepted by the team.
- Core end-to-end user flows (Login → Product Selection → Cart → Checkout) have been successfully validated.
- Test execution results and defect reports have been documented.
- Test documentation, including test cases and execution reports, has been finalized and reviewed.

### 6.3 Acceptance Criteria

The application will be considered ready for release when the following conditions are met:

- All critical test cases related to core user flows (Login, Cart, and Checkout) have been successfully executed.
- No critical or high severity defects remain open.
- All blocking issues that impact the main user journey have been resolved or mitigated.
- The complete end-to-end user flow (Login → Product Selection → Cart → Checkout) executes successfully without functional failures.
- Error handling and validation messages behave as expected for invalid inputs.
- The application is stable during repeated test executions.
- Test results and execution reports have been documented and reviewed.

---

## 7. Risks | Mitigations


| Risk                                 | Mitigation                                                                                                    |
|-------------------------------------- |--------------------------------------------------------------------------------------------------------------|
| Unstable test environment             | Use a dedicated and stable test environment and verify environment availability before starting test execution |
| Critical defects discovered late      | Prioritize testing of critical user flows (Login, Cart, Checkout) and execute smoke tests early in the cycle  |
| Communication issues between teams    | Maintain regular communication through daily meetings and track issues using Jira                             |
| Requirement changes during testing    | Adopt an agile testing approach and update test cases and documentation when requirements change              |
| Low test coverage                     | Review test scenarios periodically and increase automation coverage for critical or missing flows             |
| Flaky automated tests                 | Stabilize test scripts by improving selectors, adding proper waits, and improving traceability with Playwright tools |
| Invalid or inconsistent test data     | Use predefined test accounts and maintain controlled test data for repeatable test execution                  |

---

## 8. Deliverables

The following testing artifacts will be produced during the execution of this project:

- **Test Plan**  
  Document describing the testing objectives, scope, strategy, environment, and criteria.

- **Test Scenarios and Test Cases**  
  Structured documentation describing the scenarios and detailed steps used to validate the system functionality.

- **Automated Test Scripts**  
  End-to-end automated tests implemented using Playwright and TypeScript.

- **Bug Reports**  
  Defect reports created to document identified issues, including severity, steps to reproduce, and expected vs actual results.

- **Test Execution Results**  
  Documentation containing the results of executed test cases and test runs.

- **Test Reports**  
  Summary reports describing the overall testing results, including pass/fail status, discovered defects, and testing coverage.

---

## 9. Schedule

### Test Phases

**Phase 1: Test Planning and Test Case Design (3 days)**  
- Days 1–3: Creation and review of test scenarios and test cases for all features within scope (Login, Cart, Checkout).
- Definition of testing scope, strategy, and environment.

**Phase 2: Test Execution and Documentation (7 days)**  
- Days 4–10: Execution of manual and automated test cases in the test environment.
- Days 4–10: (parallel): Documentation of test results and reporting of defects found during testing.

**Phase 3: Test Review and Reporting (2 days)**  
- Day 11: Review of executed test cases, defect analysis, and verification of test coverage.
- Day 12: Preparation of the final Test Report and completion of testing documentation. 

### Summary Table

| Phase | Start | End |
|------|------|------|
| Test Case Creation | Mar 13, 2026 | Mar 15, 2026 |
| Test Execution & Documentation | Mar 16, 2026 | Mar 22, 2026 |
| Test Review | Mar 23, 2026 | Mar 23, 2026 |
| Final Report Preparation | Mar 24, 2026 | Mar 24, 2026 |
| Complete Test Results | Mar 25, 2026 | Mar 25, 2026 |

---