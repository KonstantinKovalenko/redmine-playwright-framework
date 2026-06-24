import { Locator, Page } from '@playwright/test'
import { BasePage } from './base.page'

export class SearchPage extends BasePage {

    readonly newsFilterLink: Locator
    readonly searchInput: Locator
    readonly searchBtn: Locator

    readonly searchResultsList: Locator
    readonly resultsWithoutNewsIcons: Locator
    readonly searchResultsDetailsList: Locator

    constructor(page: Page) {
        super(page)

        this.newsFilterLink = page.locator('#search-types').getByRole('link', { name: 'News' })
        this.searchInput = page.locator('#search-input')
        this.searchBtn = page.getByRole('button', { name: 'Search' })

        this.searchResultsList = page.locator('#search-results')
        this.resultsWithoutNewsIcons = page.locator('dl dt:not(.icon-news)')
        this.searchResultsDetailsList = page.locator('dl dd')
    }

    async clickOnNewsFilter(){
        await this.newsFilterLink.click()
    }

    async clickOnSearchBtn (){
        await this.searchBtn.click()
    }

    async inputSearchQuery (query: string){
        await this.searchInput.fill(query)
    }
}