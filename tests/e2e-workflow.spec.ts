import { test } from '../utils/fixtures';
import { generateUserData, categoryData } from '../utils/TestData';

test.describe('Qubika Club E2E Workflow', () => {
  test('Should complete the full registration, login and category flow', async ({
    apiController,
    loginPage,
    dashboardPage,
    categoryPage,
  }) => {
    const user = generateUserData();

    // 1. Create user via API
    await apiController.createUser(user);

    // 2 & 3. Navigate and validate login page
    await loginPage.navigate();
    await loginPage.validatePageLayout();

    // 4 & 5. Login and validate dashboard
    await loginPage.login(user.email, user.password);
    await dashboardPage.validateIsLoggedIn();

    // 6. Categories flow
    await categoryPage.navigate();
    await categoryPage.createCategory(categoryData.parentName);
    await categoryPage.createSubCategory(categoryData.subCategoryName, categoryData.parentName);
  });
});
