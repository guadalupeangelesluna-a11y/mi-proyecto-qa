import { Page, Locator, expect } from "@playwright/test";

export class BasePage {
    protected page: Page

    constructor(page: Page) {
        this.page = page
    }

    async navigateTo(url: string) {
        await this.page.goto(url)
    }
    async clickElement(locator: Locator): Promise<void> {
        await locator.click();

    }
    async fillData(locator: Locator, data: string | number) {
        await locator.fill(String(data));
    }
    async elementVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }
    async validarText(locator: Locator, texto: string): Promise<void> {
        await expect(locator).toHaveText(texto);
    }
}