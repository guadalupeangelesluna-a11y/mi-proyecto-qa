import { Page } from "@playwright/test";
import { BaseSteps } from "./BaseSteps";
import { PrestamosPage } from "../pages/PrestamosPage";

export class PrestamosSteps extends BaseSteps {
    protected prestamosPage: PrestamosPage;

    constructor(page: Page) {
        super(page);
        this.prestamosPage = new PrestamosPage(page);
    }

    /**
     * Paso para entrar a la sección de préstamos y verificar que cargó bien
     */
    async ingresarASeccionPrestamos(): Promise<void> {
        await this.prestamosPage.hacerClickEnPrestamos();
        await this.prestamosPage.validarTituloPrestamo();
    }

    /**
     * Paso lógico que completa todo el formulario y confirma la solicitud
     */
    async solicitarPrestamoNuevo(cuenta: string, monto: string | number, cuotas: string): Promise<void> {
        await this.prestamosPage.validarOpcionSolicitar();
        await this.prestamosPage.seleccionarCuentaDestino(cuenta);
        await this.prestamosPage.ingresarMontoSolicitar(monto);
        await this.prestamosPage.seleccionarCuotas(cuotas);
        await this.prestamosPage.hacerClickSolicitarPrestamo();
        await this.prestamosPage.hacerClickConfirmar();
    }

 async verificarPrestamoAcreditado(): Promise<boolean> {
        return await this.prestamosPage.esMensajeAcreditadoVisible();
    }
}