import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://demo.nopcommerce.com/');
    }

    async searchForProduct(productName: string) {
        await this.page.fill('input#small-searchterms', productName);
        await this.page.press('input#small-searchterms', 'Enter');
    }
}
