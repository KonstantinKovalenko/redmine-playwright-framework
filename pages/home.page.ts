import { Page } from '@playwright/test'
import { BasePage } from './base.page'

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get topMenu () {return this.page.locator('#top-menu')}
    get navigationMenu () {return this.page.locator('#main-menu')}
    get sidebar () {return this.page.locator('#sidebar')}
    get featuresHeading () {return this.page.getByRole('heading', { name: 'Features' })}
    get redmineHeading () {return this.page.locator('#project-jump')}
    get searchLink () {return this.page.getByRole('link', {name: 'Search'})}
    get issuesLink () {return this.page.getByRole('link', { name: 'Issues' })}
    get registerLink () {return this.page.getByRole('link', { name: 'Register' })}
    get hamburgerMenuBtn() {return this.page.locator('.mobile-toggle-button')}
    get mobileMenu() {return this.page.locator('.flyout-menu')}
    get signInLink () {return this.page.getByRole('link', { name: 'Sign in' })}

    async open() {
        await this.page.goto('/')
    }

    async clickOnSearchLink(){
        await this.searchLink.click()
    }

    async clickOnIssuesLink(){
        await this.issuesLink.click()
    }

    async clickOnRegisterLink(){
        await this.registerLink.click()
    }

    async tapOnHamburgerBtn (){
        await this.hamburgerMenuBtn.click()
    }

    async tapOnSignInBtn() {
        await this.signInLink.click()
    }
}