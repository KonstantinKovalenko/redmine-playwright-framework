import { test, expect } from '@playwright/test';

test('Redmine homepage loads', async ({ page }) => {
  await page.goto('https://www.redmine.org/');

  await expect(page).toHaveTitle(/Redmine/);
});