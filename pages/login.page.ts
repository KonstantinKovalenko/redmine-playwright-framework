import { Locator, Page } from '@playwright/test'
import { BasePage } from './base.page'

export class LoginPage extends BasePage {

    readonly accountCreatedNotice: Locator
    readonly loginBtn: Locator
    readonly errorMsg: Locator

    constructor(page: Page) {
        super(page)
    
        this.accountCreatedNotice = page.locator('#flash_notice')
        this.loginBtn = page.locator('#login-submit')
        this.errorMsg = page.locator('#flash_error')
    }

    async submitLoginForm(){
        await this.loginBtn.click()
    }
}