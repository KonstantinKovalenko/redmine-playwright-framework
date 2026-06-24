import { Locator, Page } from '@playwright/test'
import { BasePage } from './base.page'

export class IssuesPage extends BasePage {

    readonly clearBtn: Locator
    readonly applyBtn: Locator

    readonly statusSelect: Locator
    readonly addFilterSelect: Locator
    readonly categorySelect: Locator

    readonly statusCells: Locator
    readonly categoryCells: Locator

    constructor(page: Page) {
        super(page)

        this.clearBtn = page.getByRole('link', { name: 'Clear' })
        this.applyBtn = page.getByRole('link', { name: 'Apply' })

        this.statusSelect = page.locator('#operators_status_id')
        this.addFilterSelect = page.locator('#add_filter_select')
        this.categorySelect = page.locator('#values_category_id_1')

        this.statusCells = page.locator('td.status')
        this.categoryCells = page.locator('td.category')
    }

    async clickOnClearBtn(){
        await this.clearBtn.click()
    }

    async clickOnApplyBtn(){
        await this.applyBtn.click()
    }

    async addFilterByOption (option: string){
        await this.addFilterSelect.selectOption(option)
    }

    async selectCategory (option: string){
        await this.categorySelect.selectOption(option)
    }
}