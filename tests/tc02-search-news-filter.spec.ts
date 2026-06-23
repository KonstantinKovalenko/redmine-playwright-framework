import { test, expect } from '@playwright/test'
import { HomePage } from '.././pages/home.page'
import { SearchPage } from '.././pages/search.page'
import { SearchData } from '../data/search.data'
import { UrlData } from '../data/url.data'


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/');
})

test('TC-02 Verify search returns results using News filter', async ({ page }) => {
    const homePage = new HomePage(page)
    const searchPage = new SearchPage(page)

    await expect(homePage.searchLink).toBeVisible()
    await expect(homePage.searchLink).toBeEnabled()
    await homePage.clickOnSearchLink()
  
    await searchPage.clickOnNewsFilter()
    await searchPage.inputSearchQuery(SearchData.query)
    await searchPage.clickOnSearchBtn()

    await expect(page).toHaveURL(new RegExp(UrlData.urlPartSearch))
    await expect(searchPage.searchResultsList).toBeVisible()
    await expect(searchPage.searchResultsDetailsList.first()).toContainText(SearchData.query)
    await expect(searchPage.resultsWithoutNewsIcons).toHaveCount(0)
})