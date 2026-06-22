import { test, expect } from '@playwright/test'
import { HomePage } from '.././pages/home.page'

test('TC-01 Verify homepage UI loads successfully', async ({ page }) => {
  const homePage = new HomePage(page)

  await homePage.open()

  await expect(page).toHaveTitle(/Redmine/)
  await expect(homePage.topMenu).toBeVisible()
  await expect(homePage.navigationMenu).toBeVisible()
  await expect(homePage.sidebar).toBeVisible()
  await expect(homePage.featuresHeading).toBeVisible()
})