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
    // 1. Damos clic al campo para posicionar el cursor ahí
    await locator.click();
    
    // 2. Simulamos presionar Control + A (o Command + A en Mac) para seleccionar todo el texto existente
    await this.page.keyboard.press('Control+A');
    
    // 3. Presionamos Borrar para limpiar la selección por completo
    await this.page.keyboard.press('Backspace');
    
    // 4. Escribimos el nuevo dato letra por letra (esto rompe el autocompletado del navegador)
    await locator.pressSequentially(String(data), { delay: 50 });
}
    async elementVisible(locator: Locator): Promise<void> {
        await expect(locator).toBeVisible();
    }
    async validarText(locator: Locator, texto: string): Promise<void> {
        await expect(locator).toHaveText(texto);
    }
}