# Testing Documentation

This document describes the testing infrastructure for the Flappy Bird Clone project.

## Testing Stack

- **Unit Tests**: Vitest
- **E2E Tests**: Playwright
- **Linting**: Biome + Standard
- **Git Hooks**: Husky + lint-staged
- **CI/CD**: GitHub Actions

## Running Tests

### Unit Tests

```bash
# Run all unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

### E2E Tests

```bash
# Run all E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Run E2E tests in headed mode (see browser)
npm run test:e2e:headed
```

## Linting and Formatting

### Biome

```bash
# Check and fix all issues
npm run biome:check

# Format code
npm run biome:format

# Lint code
npm run biome:lint
```

### Standard

```bash
# Run standard linter
npm run lint
```

### Prettier

```bash
# Format code with prettier
npm run format
```

## Git Hooks

This project uses Husky to run pre-commit hooks:

- **Pre-commit**: Runs `lint-staged` which:
  - Checks and formats JavaScript files with Biome
  - Runs related tests for changed files
  - Formats JSON, CSS, and Markdown files

## GitHub Actions Workflows

### CI Workflow (`.github/workflows/ci.yml`)

Runs on push and pull requests to main/master/develop:

1. **Lint Job**: Runs Biome and Standard linters
2. **Test Job**: Runs unit tests with coverage
3. **E2E Job**: Runs Playwright E2E tests
4. **Build Job**: Builds the project

### Deploy Workflow (`.github/workflows/deploy.yml`)

Deploys to GitHub Pages on push to main/master:

1. Runs tests
2. Builds the project
3. Deploys to GitHub Pages

### CodeQL Workflow (`.github/workflows/codeql.yml`)

Security analysis:

- Runs on push/PR
- Scheduled weekly on Mondays
- Analyzes JavaScript code for vulnerabilities

### Dependency Review (`.github/workflows/dependency-review.yml`)

Reviews dependencies on pull requests:

- Checks for vulnerabilities
- Comments summary in PR
- Fails on moderate+ severity issues

## Test Structure

```
tests/
├── unit/
│   ├── player.test.js
│   ├── background.test.js
│   ├── obstacles.test.js
│   ├── playScene.test.js
│   └── waitingRoom.test.js
└── e2e/
    └── game.spec.js
```

## Coverage

Coverage reports are generated in the `coverage/` directory and uploaded to Codecov in CI.

Target coverage: 80%+

## Writing Tests

### Unit Test Example

```javascript
import { describe, it, expect, beforeEach, vi } from 'vitest'

describe('MyComponent', () => {
  it('should do something', () => {
    expect(true).toBe(true)
  })
})
```

### E2E Test Example

```javascript
import { test, expect } from '@playwright/test'

test('should load page', async ({ page }) => {
  await page.goto('/')
  await expect(page).toHaveTitle(/Flappy Bird/)
})
```

## Troubleshooting

### Tests failing locally but passing in CI

- Ensure you have the latest dependencies: `npm ci`
- Clear node_modules and reinstall: `rm -rf node_modules && npm install`

### E2E tests timing out

- Increase timeout in `playwright.config.js`
- Check if dev server is running properly

### Husky hooks not running

- Reinstall Husky: `npm run prepare`
- Check hook permissions: `chmod +x .husky/pre-commit`
