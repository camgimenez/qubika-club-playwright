import { Page, Locator, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly submitButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.emailInput = page.locator('input[formcontrolname="email"]');
    this.passwordInput = page.locator('input[formcontrolname="password"]');
    this.submitButton = page.locator('button[type="submit"]');
  }

  async navigate() {
    await this.page.goto('/#/auth/login');
  }

  async validatePageLayout() {
    await expect(this.emailInput).toBeVisible();
    await expect(this.passwordInput).toBeVisible();
    await expect(this.submitButton).toBeVisible();
  }

  async login(email: string, pass: string) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(pass);
    await this.submitButton.click();

    await this.page.waitForURL((url) => !url.href.includes('login'));
  }

  async getToken(): Promise<string | null> {
    const cookies = await this.page.context().cookies();
    const tokenCookie = cookies.find(c => c.name === 'token' || c.name === 'authToken' || c.name === 'access_token');
    return tokenCookie ? tokenCookie.value : null;
  }
}
