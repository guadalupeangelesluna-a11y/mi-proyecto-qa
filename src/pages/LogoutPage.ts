import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class LogoutPage extends BasePage {
    private readonly btnSalir = this.page.getByRole('button', { name: 'Salir' })
    private readonly btnConfirmar = this.page.getByRole('button', { name: 'Confirmar' })
    private readonly mensajeSesion = this.page.getByText('Sesión cerrada correctamente')
    private readonly campoUsuario = this.page.getByText('Usuario', { exact: true })

    constructor(page: Page) {
        super(page);
    }

    async hacerClickEnSalir(): Promise<void> {
        await this.clickElement(this.btnSalir);
    }
    async hacerClickEnConfirmar(): Promise<void> {
        await this.clickElement(this.btnConfirmar);
    }
    async esMensajeCierre(): Promise<boolean> {
        await this.mensajeSesion.waitFor({ state: 'visible', timeout: 5000 });
        return await this.mensajeSesion.isVisible();
    }
    async validarPantallaInicio(): Promise<void> {
        await this.elementVisible(this.campoUsuario);
    }
}