# Redmine UI Test Automation (Playwright)

End-to-end automated testing framework for https://www.redmine.org/

✔ Playwright + TypeScript  
✔ Page Object Model architecture  
✔ CI/CD with GitHub Actions  
✔ Allure reporting with history tracking

---

## Test Coverage

Automated UI scenarios for Redmine covering core application flows:

- Authentication and registration flows
- Issues page filtering (status and category)
- Search functionality
- Homepage UI validation
- Mobile navigation behavior

Each test is implemented using Playwright + Page Object Model and executed in CI with Allure reporting.

---

## Project Structure

```
├── .github/
│   └── workflows/
├── data/
├── fixtures/
├── models/
├── pages/
├── tests/
├── playwright.config.ts
├── package.json
└── README.md
```

---

## Getting started

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

### Generate report
```
npm run allure:generate
```
### Open generated report
```
npm run allure:open
```
### Live report (recommended for debugging)
```
npm run allure:serve
```
---

## CI/CD Pipeline (GitHub Actions)

The project includes a fully automated CI pipeline that:

- Installs dependencies
- Installs Playwright browsers
- Executes tests
- Generates Allure report
- Preserves test history
- Publishes report to GitHub Pages

CI pipeline runs automatically on every push to main branch.

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