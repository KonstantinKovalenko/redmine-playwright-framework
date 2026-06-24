import { test, expect } from '@playwright/test'
import { HomePage } from '.././pages/home.page'
import { FiltersData } from '../data/filters.data'
import { UrlData } from '../data/url.data'
import { IssuesPage } from '.././pages/issues.page'


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.redmine.org/')
})

test('TC-03 Verify Issues page filtering by Status and Category', async ({ page }) => {
    const homePage = new HomePage(page)
    const issuesPage = new IssuesPage(page)

    await expect(homePage.issuesLink).toBeVisible()
    await expect(homePage.issuesLink).toBeEnabled()
    await homePage.clickOnIssuesLink()
  
    await expect(page).toHaveURL(new RegExp(UrlData.urlPartIssues))
  
    await issuesPage.clickOnClearBtn()
    await expect(issuesPage.statusSelect).toHaveValue(FiltersData.openStatusValue)

    await issuesPage.addFilterByOption(FiltersData.categoryFilterValue)
    await issuesPage.selectCategory(FiltersData.emailReceivingCategory)
    await issuesPage.clickOnApplyBtn()

    await expect(issuesPage.statusCells.first()).toBeVisible()

    const categories = issuesPage.categoryCells
    for (const category of await categories.all()) {
        await expect(category).toHaveText(FiltersData.emailReceivingCategory)
    }

    const statuses = issuesPage.statusCells
    for (const status of await statuses.all()) {
        await expect(status).not.toHaveText(FiltersData.closedStatusText)
    }
})