# Qubika Challenge - Sport Club E2E Tests

Automated end-to-end tests for the Club Administration application using Playwright.

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
- ✅ Screenshots y videos on failure
- ✅ HTML Reports
