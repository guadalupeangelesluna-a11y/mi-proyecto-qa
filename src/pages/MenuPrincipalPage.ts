import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class MenuPrincipalPage extends BasePage {
    private readonly elementoVisiblePanel = this.page.getByRole('heading', { name: 'Panel Principal' })

    constructor(page: Page) {
        super(page);
    }


    async validarElementoTitulo() {
        await this.elementVisible(this.elementoVisiblePanel);
    }


}