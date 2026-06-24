import { test, expect } from '../fixtures/pages.fixtures'

test('TC-01 Verify homepage UI loads successfully', async ({ page, homePage }) => {
  await homePage.open()

  await expect(page).toHaveTitle(/Redmine/)
  await expect(homePage.topMenu).toBeVisible()
  await expect(homePage.navigationMenu).toBeVisible()
  await expect(homePage.sidebar).toBeVisible()
  await expect(homePage.featuresHeading).toBeVisible()
})