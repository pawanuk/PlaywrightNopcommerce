import { test as baseTest} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchPage } from '../pages/SearchPage';
import { CartPage } from '../pages/CartPage';

const test = baseTest.extend<{ homePage: HomePage, searchPage: SearchPage, cartPage: CartPage }>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },
    searchPage: async ({ page }, use) => {
        await use(new SearchPage(page));
    },
    cartPage: async ({ page }, use) => {
        await use(new CartPage(page));
    },
});

export const { expect } = test;
export default test;
