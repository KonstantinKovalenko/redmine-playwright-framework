import { devices } from '@playwright/test'
import { test, expect } from '../fixtures/pages.fixtures'
import { UrlData } from '../data/url.data'

test.use({
  ...devices['iPhone 13']
})

test('TC-05 Verify login validation in mobile navigation flow', async ({ page, homePage, loginPage }) => {
    await page.goto('/')

    await expect(homePage.redmineHeading).toBeVisible()
    await expect(homePage.hamburgerMenuBtn).toBeVisible()
    await expect(homePage.hamburgerMenuBtn).toBeEnabled()
    await homePage.tapOnHamburgerBtn()

    await expect(homePage.mobileMenu).toBeVisible()

    await expect(homePage.signInLink).toBeVisible()
    await expect(homePage.signInLink).toBeEnabled()
    await homePage.tapOnSignInBtn()

    await expect(loginPage.loginBtn).toBeVisible()

    await loginPage.submitLoginForm()   
    await expect(page).toHaveURL(new RegExp(UrlData.urlPartLogin))
    await expect(loginPage.errorMsg).toBeVisible()
    await expect(loginPage.errorMsg).toContainText('Invalid user or password')
})