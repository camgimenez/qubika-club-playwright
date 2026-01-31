import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;
  // readonly logoutButton: Locator;
  readonly logoutIcon: Locator;

  constructor(page: Page) {
    this.page = page;
    //    this.logoutButton = page.getByRole('link', { name: /Salir/i });
    this.logoutIcon = page.locator('i.ni-button-power');
  }

  async validateIsLoggedIn() {
    // Point 5: Validate that the user is logged in
    await expect(this.logoutIcon).toBeVisible({ timeout: 10000 });
  }
}
