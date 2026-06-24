# Redmine UI Test Automation (Playwright)

End-to-end automated testing framework for https://www.redmine.org/

✔ Playwright + TypeScript  
✔ Page Object Model architecture  
✔ CI/CD with GitHub Actions  
✔ Allure reporting with history tracking

---

## Test Coverage

The framework automates end-to-end UI scenarios for Redmine.

Covered areas include:

- Homepage UI validation
- Search functionality with filtering
- Issues page filtering (Status + Category)
- User registration flow
- Mobile navigation and login validation

All tests are:
- Fully automated
- Independent and reusable
- Executed in CI pipeline
- Reported via Allure with execution history

---

## Project Structure

```
├── .github/
│   └── workflows/
├── data/
├── models/
├── pages/
├── tests/
├── allure-results/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Install and run

### Install
```bash
npm install
npx playwright install
```
### Run all tests
```
npm run test
```
### Run tests in UI mode
```
npm run test:ui
```
### Run tests in headed mode
```
npm run test:headed
```

---

## Allure Report
Generate report locally
```
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```
CI automatically generates and publishes the report with history tracking to GitHub Pages.

---

## CI/CD Pipeline (GitHub Actions)

The project includes a fully automated CI pipeline that:

- Installs dependencies
- Installs Playwright browsers
- Executes tests
- Generates Allure report
- Preserves test history
- Publishes report to GitHub Pages

---

## Live Allure Report

[https://konstantinkovalenko.github.io/redmine-playwright-framework/](https://konstantinkovalenko.github.io/redmine-playwright-framework/)

---

## Key Features

- Scalable Page Object Model structure
- Clean separation of test data and test logic
- Cross-browser UI automation with Playwright
- Mobile testing with device emulation
- Data-driven test design approach
- Dynamic and unique test data generation for form-based scenarios
- CI execution via GitHub Actions
- Allure reporting with execution history support

---

## Author

Automation project created by Konstantin Kovalenko.

* GitHub: https://github.com/KonstantinKovalenko  
* LinkedIn: [www.linkedin.com/in/kostyantyn-kovalenko/](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Email: chvyaka.kk@gmail.com
* Telegram: @kovakost