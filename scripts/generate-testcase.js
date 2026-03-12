const fs = require('fs');
const path = require('path');

const docName = process.argv[2];

if (!docName) {
  console.log('Please provide a document name.');
  console.log('Example: npm run generate:testcase login-valid-user');
  process.exit(1);
}

const docsDir = path.join(__dirname, '..', 'test-documentation', '02-test-cases');
const fileName = `${docName}.md`;
const filePath = path.join(docsDir, fileName);

const content = `# ${docName}

# Test Scenarios and Test Cases

**Software:** Example Web Application

**QA Responsible:** Your name here

**Date:** March 15, 2024

## Scenario 01: Insert a descriptive title for the test scenario here

**Description**: Validade the checkout proccess.

### Test Case 01: Name of the test case here
| ID | Description |
| :--------- | :---------- |
| SC01-T01 | The checkout will be successful when the user inserts valid information. |

| **Preconditions** |
| :--------- |
| The user must be logged in. |
| The user must provide name, email, and postal code during checkout confirmation. |

| **Steps** |
| :--------- |
| **GIVEN** that I am on the checkout page |
| **AND** I enter a valid name, email and postal code into the confirmation fields |
| **WHEN** I click the "Finish checkout" button |
| **THEN** the message "Your purchase has been confirmed" is displayed |

| **Acceptance Criteria** |
| :--------- |
| Success message displayed after completing the checkout and tax invoice sent to the user. |

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