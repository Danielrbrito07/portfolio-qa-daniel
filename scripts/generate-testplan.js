const fs = require('fs');
const path = require('path');

const docName = process.argv[2];

if (!docName) {
  console.log('Please provide a document name.');
  console.log('Example: npm run generate:testplan login-valid-user');
  process.exit(1);
}

const docsDir = path.join(__dirname, '..', 'test-documentation', '01-test-plans');
const fileName = `${docName}.md`;
const filePath = path.join(docsDir, fileName);

const content = `# ${docName}

# Test Plan

**System:** Your system name here  

**QA Engineer:** Your name here

**Date:** March 15, 2024

---

## 1. Introduction
This Test Plan was created to define the objectives, scope, strategy, environment,  
and criteria for the tests that will be performed to validate the system  
<your system> as well as information regarding deliverables and  
the testing schedule.

---

## 2. Test Objectives
## Test Objectives

The main objective of this test plan is to validate the core functionalities of the <your system> application and ensure the system behaves as expected from an end-user perspective.

The testing activities aim to achieve the following goals:

- Present goals here, for example:
- Validate the login functionality with valid and invalid credentials.
- Ensure the product inventory page displays correctly and allows sorting.
- Verify that users can add and remove products from the shopping cart.
- Confirm that the checkout process works correctly, including form validation and order completion.
- Identify and report any critical defects that impact the main user flows.
---

## 3. Test Scope

This section defines the functionalities and areas of the application that will be included and excluded from the testing activities.

### In Scope

The following functionalities will be tested:

- Present the functionalities that will be tested, for example:
- User authentication (login and logout)
- Validation of login scenarios including valid and invalid credentials

### Out of Scope

The following areas are not included in the current testing scope:

- Present the functionalities that will not be tested, for example:
- API testing
- Performance testing
- Security testing
- Database validation

---

## 4. Test Strategy
## Test Strategy

Present the overall approach and methodologies that will be used to conduct the testing activities. 
This may include the types of testing (manual, automated, regression), tools, and techniques that will be employed.

---

## 5. Test Environment

Present the details of the test environment that will be used for executing the test cases. 
This includes hardware, software, browsers, and any other relevant information about the environment setup. For example:

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
Present the test data that will be used for executing the test cases. 
This may include specific user accounts, input values, and any other relevant data required for testing. For example:

| Username | Scenario | Password |
|----------|----------|----------|
| standard_user | Valid login scenario | valid_password |
| user_2 | Invalid login scenario | wrong_password |


### Application URL
https://www.saucedemo.com/

---

## 6. Test Criteria

### 6.1 Entry Criteria

Present the conditions that must be met before testing activities can begin. For example:

Testing activities may begin when the following conditions are met:

- The test environment is properly configured and accessible.
- The application build has been successfully deployed to the test environment.
- Test cases and test scenarios have been created and reviewed.
- Required test data and test accounts are available.
- The testing scope and objectives have been defined and approved.
- Access to required tools and resources (test framework, documentation, and repositories) is available.

### 6.2 Exit Criteria

Present the conditions that must be met for testing activities to be considered complete. For example:

Testing activities will be considered complete when the following conditions are met:

- At least 95% of planned test cases have been executed.
- All critical and high severity defects have been resolved or mitigated.
- Remaining medium or low severity defects have been documented and accepted by the team.
- Core end-to-end user flows (Login → Product Selection → Cart → Checkout) have been successfully validated.
- Test execution results and defect reports have been documented.
- Test documentation, including test cases and execution reports, has been finalized and reviewed.

### 6.3 Acceptance Criteria

Present the specific criteria that will be used to determine whether the application meets the requirements and is ready for release. For example:

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

Present the potential risks that may impact the testing activities and the strategies that will be implemented to mitigate those risks. For example:


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

Present the testing artifacts that will be produced during the execution of the testing activities. For example:

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

Present the schedule for the testing activities, including key milestones and deadlines. For example:

### Test Phases

**Phase 1: Test Planning and Test Case Design (3 days)**  
- Days 1-3: Creation and review of test scenarios and test cases for all features within scope (Login, Cart, Checkout).
- Definition of testing scope, strategy, and environment.

**Phase 2: Test Execution and Documentation (7 days)**  
- Days 4-10: Execution of manual and automated test cases in the test environment.
- Days 4-10: (parallel): Documentation of test results and reporting of defects found during testing.

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

`;

if (!fs.existsSync(docsDir)) {
  fs.mkdirSync(docsDir, { recursive: true });
}

if (fs.existsSync(filePath)) {
  console.log(`File already exists: ${filePath}`);
} else {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Markdown file created successfully: ${filePath}`);
}