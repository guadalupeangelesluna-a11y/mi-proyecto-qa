import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LoginPage extends BasePage {
    //locators
    private readonly usernameInput = this.page.getByRole('textbox', { name: 'Usuario' });
    private readonly passwordInput = this.page.getByRole('textbox', { name: 'Contraseña' });
    private readonly botonIngresar = this.page.getByRole('button', { name: 'Ingresar' });

    constructor(page: Page) {
        super(page);
    }
    async escribirUsuario(usuario: string) {
        await this.fillData(this.usernameInput, usuario);
    }
    async escribirPassword(password: string) {
        await this.fillData(this.passwordInput, password);
    }
    async hacerClickIngresar() {
        await this.clickElement(this.botonIngresar);
    }
}