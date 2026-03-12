const fs = require('fs');
const path = require('path');

const docName = process.argv[2];

if (!docName) {
  console.log('Please provide a document name.');
  console.log('Example: npm run generate:testresult login-valid-user');
  process.exit(1);
}

const docsDir = path.join(__dirname, '..', 'test-documentation', '04-test-results');
const fileName = `${docName}.md`;
const filePath = path.join(docsDir, fileName);

const content = `# ${docName}

## Test Case ID
TBD

## Title
Describe the test objective

## Preconditions
- Add preconditions here

## Test Steps
1. Step one
2. Step two
3. Step three

## Expected Result
- Describe the expected result

## Priority
Medium

## Type
Positive / Negative / Edge Case
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