import { test as baseTest } from '@playwright/test';
import { APIController } from '../api/apiController';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/DashboardPage';
import { CategoryPage } from '../pages/CategoryPage';

type TestFixtures = {
  apiController: APIController;
  loginPage: LoginPage;
  dashboardPage: DashboardPage;
  categoryPage: CategoryPage;
};

export const test = baseTest.extend<TestFixtures>({
  apiController: async ({ request }, use) => {
    const apiController = new APIController(request);
    await use(apiController);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  dashboardPage: async ({ page }, use) => {
    const dashboardPage = new DashboardPage(page);
    await use(dashboardPage);
  },

  categoryPage: async ({ page }, use) => {
    const categoryPage = new CategoryPage(page);
    await use(categoryPage);
  },
});

export { expect } from '@playwright/test';
