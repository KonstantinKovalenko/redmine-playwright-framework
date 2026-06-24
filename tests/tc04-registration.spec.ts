import { test, expect } from '@playwright/test'
import { HomePage } from '../pages/home.page'
import { RegisterPage } from '../pages/register.page'
import { LoginPage } from '../pages/login.page'
import { UrlData } from '../data/url.data'
import { createRegisterUser } from '../data/register-user.data'


test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test('TC-04 Verify registration works using valid data', async ({ page }) => {
    const homePage = new HomePage(page)
    const registerPage = new RegisterPage(page)
    const loginPage = new LoginPage(page)

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