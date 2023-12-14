import { Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto('https://demo.nopcommerce.com/cart');
    }

    async getCartItemCount() {
        await this.page.waitForSelector('span.cart-qty', { state: 'visible' });
        const itemCount = await this.page.textContent('span.cart-qty');
        return itemCount?.replace(/[^\d]/g, '') ?? '0';
    }
}
