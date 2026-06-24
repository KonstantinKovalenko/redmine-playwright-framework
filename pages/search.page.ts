import { Page } from '@playwright/test'
import { BasePage } from './base.page'

export class SearchPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get #newsFilterLink () {return this.page.locator('#search-types').getByRole('link', { name: 'News' })}
    get #searchInput () {return this.page.locator('#search-input')}
    get #searchBtn () {return this.page.getByRole('button', { name: 'Search' })}

    get searchResultsList () {return this.page.locator('#search-results')}
    get resultsWithoutNewsIcons () {return this.page.locator('dl dt:not(.icon-news)')}
    get searchResultsDetailsList () {return this.page.locator('dl dd')}
    

    async clickOnNewsFilter(){
        await this.#newsFilterLink.click()
    }

    async clickOnSearchBtn (){
        await this.#searchBtn.click()
    }

    async inputSearchQuery (query: string){
        await this.#searchInput.fill(query)
    }
}