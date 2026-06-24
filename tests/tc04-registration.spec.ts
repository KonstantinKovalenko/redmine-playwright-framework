import { test, expect } from '../fixtures/pages.fixtures'
import { UrlData } from '../data/url.data'
import { createRegisterUser } from '../data/register-user.data'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('TC-04 Verify registration works using valid data', async ({ page, homePage, registerPage, loginPage }) => {
    await expect(homePage.registerLink).toBeVisible()
    await expect(homePage.registerLink).toBeEnabled()
    await homePage.clickOnRegisterLink()

    await expect(page).toHaveURL(new RegExp(UrlData.urlPartRegister))

    const user = createRegisterUser()
    
    await registerPage.fillRegistrationForm(user)
    await registerPage.clickOnSubmitBtn()

    await expect(page).toHaveURL(new RegExp(UrlData.urlPartLogin))
    await expect(loginPage.accountCreatedNotice).toContainText('Account was successfully created')
})