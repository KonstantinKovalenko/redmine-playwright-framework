import { Page } from '@playwright/test';
import { BasePage } from './base.page'

export class IssuesPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    get #clearBtn () {return this.page.getByRole('link', { name: 'Clear' })}
    get #applyBtn () {return this.page.getByRole('link', { name: 'Apply' })}

    get statusSelect () {return this.page.locator('#operators_status_id')}
    get #addFilterSelect () {return this.page.locator('#add_filter_select')}
    get #categorySelect () {return this.page.locator('#values_category_id_1')}

    get statusCells() {return this.page.locator('td.status')}
    get categoryCells() {return this.page.locator('td.category')}

    async clickOnClearBtn(){
        await this.#clearBtn.click()
    }

    async clickOnApplyBtn(){
        await this.#applyBtn.click()
    }

    async addFilterByOption (option: string){
        await this.#addFilterSelect.selectOption(option)
    }

    async selectCategory (option: string){
        await this.#categorySelect.selectOption(option)
    }
}