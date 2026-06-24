import { Locator, Page } from '@playwright/test'
import { BasePage } from './base.page'

export class HomePage extends BasePage {

    readonly topMenu: Locator
    readonly navigationMenu: Locator
    readonly sidebar: Locator
    readonly mobileMenu: Locator

    readonly featuresHeading: Locator
    readonly redmineHeading: Locator

    readonly searchLink: Locator
    readonly issuesLink: Locator
    readonly registerLink: Locator
    readonly signInLink: Locator

    readonly hamburgerMenuBtn: Locator

    constructor(page: Page) {
        super(page)

        this.topMenu = page.locator('#top-menu')
        this.navigationMenu = page.locator('#main-menu')
        this.sidebar = page.locator('#sidebar')
        this.mobileMenu = page.locator('.flyout-menu')

        this.featuresHeading = page.getByRole('heading', { name: 'Features' })
        this.redmineHeading = page.locator('#project-jump')

        this.searchLink = page.getByRole('link', {name: 'Search'})
        this.issuesLink = page.getByRole('link', { name: 'Issues' })
        this.registerLink = page.getByRole('link', { name: 'Register' })
        this.signInLink = page.getByRole('link', { name: 'Sign in' })

        this.hamburgerMenuBtn = page.locator('.mobile-toggle-button')
    }

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