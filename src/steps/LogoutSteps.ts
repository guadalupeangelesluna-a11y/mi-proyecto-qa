import { Page } from "@playwright/test";
import { BaseSteps } from "./BaseSteps";
import { LogoutPage } from "../pages/LogoutPage";

export class LogoutSteps extends BaseSteps {
    protected logoutPage: LogoutPage;

    constructor(page: Page) {
        super(page);
        this.logoutPage = new LogoutPage(page);
    }

    async cerrarSesion(): Promise<void> {
        await this.logoutPage.hacerClickEnSalir();
        await this.logoutPage.hacerClickEnConfirmar();
    }
    async verificarCierreExitoso(): Promise<void> {
        // 1. Primero esperamos a que aparezca el cartel de despedida
        await this.logoutPage.esMensajeCierre();
        
        // 2. Luego validamos que hayamos vuelto al formulario de inicio de sesión
        await this.logoutPage.validarPantallaInicio();
    }
}