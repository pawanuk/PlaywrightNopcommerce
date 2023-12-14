import { Page } from '@playwright/test';

export class SearchPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async addFirstProductToCart() {
        await this.page.click('button[type="button"][class*="add-to-cart-button"]:nth-of-type(1)');
    }
}
