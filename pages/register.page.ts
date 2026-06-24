import { Page } from '@playwright/test'
import { BasePage } from './base.page'
import { RegisterUser } from '../models/register-user.interface'

export class RegisterPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get #loginInput () {return this.page.locator('#user_login')}
    get #passwordInput () {return this.page.locator('#user_password')}
    get #confirmPasswordInput () {return this.page.locator('#user_password_confirmation')}
    get #firstnameInput () {return this.page.locator('#user_firstname')}
    get #lastnameInput () {return this.page.locator('#user_lastname')}
    get #emailInput () {return this.page.locator('#user_mail')}

    get #submitBtn () {return this.page.locator('input[name="commit"]')}

    async clickOnSubmitBtn(){
        await this.#submitBtn.click()
    }

    async fillRegistrationForm (user: RegisterUser){
        await this.#loginInput.fill(user.login)
        await this.#passwordInput.fill(user.password)
        await this.#confirmPasswordInput.fill(user.password)
        await this.#firstnameInput.fill(user.firstName)
        await this.#lastnameInput.fill(user.lastName)
        await this.#emailInput.fill(user.email)
    }
}