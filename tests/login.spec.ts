import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page'

test('Login page is accessible', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await expect(page).toHaveURL(/login/);
  await expect(page.locator('#username')).toBeVisible();
});