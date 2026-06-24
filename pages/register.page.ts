import { Locator, Page } from '@playwright/test'
import { BasePage } from './base.page'
import { RegisterUser } from '../models/register-user.interface'

export class RegisterPage extends BasePage {

    readonly loginInput: Locator
    readonly passwordInput: Locator
    readonly confirmPasswordInput: Locator
    readonly firstnameInput: Locator
    readonly lastnameInput: Locator
    readonly emailInput: Locator

    readonly submitBtn: Locator

    constructor(page: Page) {
        super(page)

        this.loginInput = page.locator('#user_login')
        this.passwordInput = page.locator('#user_password')
        this.confirmPasswordInput = page.locator('#user_password_confirmation')
        this.firstnameInput = page.locator('#user_firstname')
        this.lastnameInput = page.locator('#user_lastname')
        this.emailInput = page.locator('#user_mail')

        this.submitBtn = page.getByRole('button', { name: 'Submit' })
    }

    async clickOnSubmitBtn(){
        await this.submitBtn.click()
    }

    async fillRegistrationForm (user: RegisterUser){
        await this.loginInput.fill(user.login)
        await this.passwordInput.fill(user.password)
        await this.confirmPasswordInput.fill(user.password)
        await this.firstnameInput.fill(user.firstName)
        await this.lastnameInput.fill(user.lastName)
        await this.emailInput.fill(user.email)
    }
}