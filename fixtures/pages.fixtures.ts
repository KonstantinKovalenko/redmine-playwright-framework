import { test as base, expect } from '@playwright/test'

import { HomePage } from '../pages/home.page'
import { SearchPage } from '../pages/search.page'
import { IssuesPage } from '../pages/issues.page'
import { RegisterPage } from '../pages/register.page'
import { LoginPage } from '../pages/login.page'

type PageFixtures = {
    homePage: HomePage
    searchPage: SearchPage
    issuesPage: IssuesPage
    registerPage: RegisterPage
    loginPage: LoginPage
}

export const test = base.extend<PageFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page))
    },

    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page))
    },

    issuesPage: async ({ page }, use) => {
        await use(new IssuesPage(page))
    },

    registerPage: async ({ page }, use) => {
        await use(new RegisterPage(page))
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    }
})

export { expect }