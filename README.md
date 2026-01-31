# Qubika Challenge - Sport Club E2E Tests

Automated end-to-end tests for the Qubika Club Administration application using Playwright.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Run Tests

```bash
# All tests
npm test

# Tests with visible browser
npm run test:headed

# Tests with Playwright UI
npm run test:ui

# Debug mode
npm run test:debug

# View report
npm run test:report
```

## 📁 Project Structure

```
├── api/                    # API Controllers
│   └── apiController.ts
├── pages/                  # Page Objects
│   ├── LoginPage.ts
│   ├── DashboardPage.ts
│   └── CategoryPage.ts
├── tests/                  # E2E Tests
│   ├── e2e-workflow.spec.ts
│   └── example.spec.ts
├── utils/                  # Utilities
│   ├── fixtures.ts
│   └── TestData.ts
├── playwright.config.ts    # Playwright Configuration
├── package.json
└── .env                    # Environment Variables
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root:

```env
BASE_URL=https://club-administration.qa.qubika.com
API_BASE_URL=https://api.club-administration.qa.qubika.com
```

### Supported Browsers

- Chromium (Chrome)
- Firefox

## 🛠️ Development

### Linting and Formatting

```bash
# Check code
npm run lint

# Auto-fix
npm run lint:fix

# Format code
npm run format
```

### Page Objects

Tests use the Page Object Model pattern to keep code organized and reusable.

### Fixtures

Custom fixtures are used to share Page Object instances between tests.

## 📊 Reports

Reports are automatically generated in `playwright-report/` after each run.

## 📝 Best Practices Implemented

- ✅ Page Object Model
- ✅ Custom Fixtures
- ✅ Environment Variables
- ✅ Linting and Formatting
- ✅ Test Parallelization
- ✅ Screenshots and videos on failure
- ✅ HTML Reports

## 🚀 Future Improvements & Technical Debt

While the current suite provides robust coverage, the following enhancements are planned to further increase the framework's maturity:

### 1. Automated Data Teardown (Cleanup Hook)
**Objective:** Implement a global `afterEach` or `afterAll` hook to perform environment cleanup.  
**Strategy:** Use Playwright's request context to delete test-generated data (e.g., categories created during tests) via API calls.  
**Benefit:** This will ensure test idempotency, preventing database pollution and ensuring that each test run starts from a pristine state without manual intervention.

### 2. Extended CI/CD Integration
**Objective:** Configure a GitHub Action to trigger the suite automatically on every Pull Request.  
**Benefit:** Ensuring a "Shift-Left" approach to quality, catching bugs before they reach higher environments.


## 📂 API Testing Artifacts

I have included an Insomnia Collection to facilitate the reproduction of the API-level bugs identified during the exploratory phase.

Location: ./docs/Insomina_Qubika_Collection.yaml 

Instructions: 1. Import the file into Insomnia. 2. Execute the Login request first to obtain a Bearer Token. 3. Update the environment variables or Auth tab with the new token to run the remaining requests. NOTE: The Insomnia collection contains dummy credentials. Please update the Login/Register body with your own data before running