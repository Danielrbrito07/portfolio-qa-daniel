# QA Portfolio – Daniel Rodrigues

This repository contains examples of my work as a **Quality Assurance Engineer**, including both **test documentation artifacts** and **automated end-to-end tests**.

The goal of this project is to demonstrate a complete QA workflow, covering both **test strategy and execution** as well as **test automation practices**.

# Goals of This Portfolio

This repository was created to demonstrate:

- Structured QA documentation
- Test case design practices
- Automated testing architecture
- Maintainable Playwright automation
- End-to-end validation of user flows

---

# Project Overview

This portfolio is divided into two main sections:

1. **Test Documentation**
2. **Automated E2E Tests**

Together, they represent how QA activities are performed throughout the Software Development Lifecycle (SDLC).

---

# Test Documentation

The `test-documentation` folder contains examples of key QA artifacts used during the testing process.

These artifacts demonstrate how testing activities are planned, documented, and reported.

## Structure

test-documentation/
│
├── 01-test-plans/
│   Example of structured Test Plans
│
├── 02-test-cases/
│   Detailed test case documentation
│
├── 03-test-reports/
│   Test execution reports and summaries
│
└── 04-test-results/
    Test execution evidence and results

    
These documents showcase QA practices such as:

- Test planning
- Test case design
- Risk-based testing
- Test execution reporting
- Traceability between requirements and tests

---

# Automated E2E Tests

The `tests-e2e` folder contains automated end-to-end tests implemented using **Playwright and TypeScript**.

The automation framework follows a modular structure designed to improve **readability, maintainability, and reusability**.

## Tech Stack

- Playwright
- TypeScript
- Node.js

---

# Test Automation Architecture

The automation framework is structured using principles such as:

- **Page Object Model (POM)**
- **Reusable test flows**
- **Utility helpers**
- **Typed constants and enums**

## Folder Structure
tests-e2e/
│
├── pages/
│   Page Object classes containing locators and page interactions
│
├── flows/
│   Reusable business flows (login, cart actions, checkout)
│
└── saucedemo-tests/
    Automated test scenarios

    
---

# Example Automated Scenarios

The automated tests cover important user flows of the **Saucedemo application**, including:

- User login
- Adding items to the cart
- Removing items from the cart
- Continuing shopping
- Checkout process
- Validation of incomplete checkout scenarios

These tests demonstrate how E2E automation can validate critical user journeys.

---

# Running the Automation Tests

### Install dependencies
- npm install


### Install Playwright browsers
- npx playwright install


### Run all tests
- npx playwright test

### Run tests in UI mode
- npx playwright test --ui

---

# Test Reports

Playwright automatically generates execution reports.

To open the HTML report:

- npx playwright show-report


The report includes:

- Test results
- Execution steps
- Error details
- Screenshots and traces (on failure)

---

# Environment Configuration

Environment variables are managed through `.env` files.

Example:
- .env.example


These files allow different test configurations without modifying the test code.

---

# Author

Daniel Rodrigues  
QA Engineer  
Test Automation | API Testing | Playwright | Software Quality
