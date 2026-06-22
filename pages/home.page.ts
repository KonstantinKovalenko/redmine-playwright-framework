import { Page } from '@playwright/test';
import { BasePage } from './base.page'

export class HomePage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get topMenu () {return this.page.locator('#top-menu')}
    get navigationMenu () {return this.page.locator('#main-menu')}
    get sidebar () {return this.page.locator('#sidebar')}
    get featuresHeading () {return this.page.getByRole('heading', { name: 'Features' });}
    get searchLink () {return this.page.locator('a[href="/projects/redmine/search?scope=subprojects"]', {hasText: 'Search'})}

    async open() {
        await this.page.goto('/');
    }

    async clickOnSearchLink(){
        await this.searchLink.click()
    }
}