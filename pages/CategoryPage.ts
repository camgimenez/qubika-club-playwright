import { Page, Locator, expect } from '@playwright/test';

export class CategoryPage {
  readonly page: Page;
  readonly categoryMenuLink: Locator;
  readonly addCategoryButton: Locator;
  readonly nameInput: Locator;
  readonly submitButton: Locator;
  readonly subCategoryCheckbox: Locator;
  readonly parentCategoryDropdown: Locator;
  readonly parentCategoryInput: Locator;
  readonly dropdownOptions: Locator;

  constructor(page: Page) {
    this.page = page;
    // Robust selector based on Angular's href
    this.categoryMenuLink = page.locator('a[href*="category-type"]');
    this.addCategoryButton = page.getByRole('button', { name: /Aceptar|Add|Nuevo|Adicionar/i });
    this.nameInput = page.locator('input[formcontrolname="name"]');
    this.submitButton = page.getByRole('button', { name: /Aceptar/i });
    this.subCategoryCheckbox = page.getByText(/Es subcategoria\?/i);
    this.parentCategoryDropdown = page.locator('ng-select[formcontrolname="categoryId"]');
    this.parentCategoryInput = this.parentCategoryDropdown.locator('input[type="text"]');
    this.dropdownOptions = page.locator('ng-dropdown-panel .ng-option');
  }

  async navigate() {
    // Click lateral Menu Categories
    await this.categoryMenuLink.click();
    // Check that URL contains category-type
    await expect(this.page).toHaveURL(/category-type/);

    await this.page.waitForLoadState('networkidle');
  }

  async createCategory(name: string) {
    await this.addCategoryButton.waitFor({ state: 'visible' });
    await this.addCategoryButton.click();
    await this.nameInput.fill(name);

    // Capture the POST to confirm it now goes to the network
    const responsePromise = this.page.waitForResponse(
      (res) => res.url().includes('/api/category-type') && res.request().method() === 'POST'
    );
    await this.submitButton.click();

    const response = await responsePromise;

    // Validate creation via API status code (POST) to avoid false negatives due to pagination in the
    expect(response.ok()).toBeTruthy(); // If the API said OK, the item was created.
    console.log(`✅ Confirmación técnica: Categoría ${name} creada con éxito.`);
  }

  async createSubCategory(subName: string, parentName: string) {
    await this.addCategoryButton.waitFor({ state: 'visible' });
    await this.addCategoryButton.click();

    await this.nameInput.fill(subName);
    await this.subCategoryCheckbox.click();

    // 3. Wait for the dropdown to be visible (Angular takes a moment to render it)
    await this.parentCategoryDropdown.click();
    await this.parentCategoryInput.fill(parentName);
    const optionToSelect = this.page
      .locator('ng-dropdown-panel .ng-option', { hasText: parentName })
      .first();

    // Wait for the option to appear after filtering
    await optionToSelect.waitFor({ state: 'visible', timeout: 5000 });
    await optionToSelect.click();

    // 5. Save and validate with network
    const responsePromise = this.page.waitForResponse(
      (res) => res.url().includes('/api/category-type') && res.request().method() === 'POST'
    );

    await this.submitButton.click();
    const response = await responsePromise;

    expect(response.ok()).toBeTruthy();

    if (response.ok()) {
      console.log(`✅ Subcategoría "${subName}" creada con éxito vinculada a "${parentName}".`);
    } else {
      throw new Error(`Error al crear subcategoría: ${response.status()}`);
    }
  }
}
