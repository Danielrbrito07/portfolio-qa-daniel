# saucedemo

# Test Results

**Software:** Saucedemo  

**QA Responsible:** Daniel Brito 

**Test Execution Period:** March 1, 2024 - March 15, 2024

---

## 1. Summary

During the testing period, [XXX] test cases were executed across the main functionalities of the XYZ System. The objective was to validate the essential flows of the customer journey (navigation, purchase, payment, and shipping).  
Throughout the execution, [XXX] bugs were identified, of which [XXX] were critical. The fixes were applied within the same sprint, and new testing cycles were executed on the impacted functionalities.

---

## 2. Overview

| Metric                                      | Quantity |
| -------------------------------------------- | -------- |
| Total Test Cases Created                    | 10       |
| Total Test Cases Executed                   | 10       |
| Total Test Cases Passed (initial)           | 5       |
| Total Test Cases Failed (initial)           | 5        |
| Total Bugs Detected in the Sprint           | 5        |
| Total Bugs Fixed in the Sprint              | 5        |
| Total Test Cases Re-executed                | 5        |
| Total Test Cases Passed (final)             | 5        |
| Total Test Cases Passed (total)             | 10       |
| Feature Coverage                            | 100%     |

---

## 3. Evaluated Functionalities

| Module              | Status   | Notes                                                     |
| ------------------- | -------- | --------------------------------------------------------- |
| Authentication      | Approved | No issues identified.                                     |
| Inventory screen | Approved | Inventory filters works as intended.                         |
| Cart       | Approved | Fix applied to the “Quantity” selector (BUG-002).                  |
| Checkout            | Approved | Checkout completion fixed (BUG-001).  |
| Invoice Confirmation| Approved | Tax invoice is sent correctly to the user e-mail.         |

---

## 4. Identified Bugs

| ID      | Description                        | Severity | Status    | Retested and Approved? |
| ------- | ---------------------------------- | -------- | --------- | ---------------------- |
| BUG-001 | Checkout error with multiple itens          | Critical   | Fixed     | Yes         |
| BUG-002 | Error in item quantity in cart screen     | Critical | Fixed     | Yes             |

---

## 5. Conclusion

### Example 1 (with pending issues):

The system was partially approved in the executed tests.  
To ensure a satisfactory user experience and minimize business impact, it is recommended to immediately fix the critical bugs and re-execute the failed test cases.

### Example 2 (fully approved):

The system was fully tested with 100% coverage of the main functionalities.  
The issues found during execution were resolved within the same sprint, successfully revalidated, and no new critical errors were identified. Therefore, the system is approved for production.

---

## 6. Attachments

Examples of what can be included in this section:

- Screenshots before/after fixes.
- Automated test execution tracers and reports.
- Bug history and resolutions in Jira.

