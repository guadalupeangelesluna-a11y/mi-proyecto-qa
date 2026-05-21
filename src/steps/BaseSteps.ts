import { Page } from "@playwright/test";

export class BaseSteps {
    protected page: Page;
    constructor(page: Page) {
        this.page = page
    }
    async navegarWeb(url: string) {
        await this.page.goto(url)
    }
    async waitFor(time: number) {
        await this.page.waitForTimeout(time);
    }
}