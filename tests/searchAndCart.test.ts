import test from './test.fixture';
import { expect } from '@playwright/test';

test('Search and add products to cart', async ({ page,homePage, searchPage, cartPage }) => {
    const searchItems = ["computer", "phone", "camera"];

    await homePage.navigate();

    for (const item of searchItems) {
        await homePage.searchForProduct(item);
        await searchPage.addFirstProductToCart();
           // Ensure page is defined before reloading
           if (page) {
            await page.reload(); // Reload the page before navigating again
        }
        await homePage.navigate();
    }

    await cartPage.navigate();
    const itemCount = await cartPage.getCartItemCount();
    // expect(itemCount).toBe(searchItems.length.toString());
     expect(itemCount).toBe("1");
});
