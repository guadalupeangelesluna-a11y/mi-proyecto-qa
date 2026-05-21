import { BasePage } from "./BasePage";
import { expect, Locator, Page } from "@playwright/test";

export class PrestamosPage extends BasePage {

    private readonly buscarlistaPrestamos = this.page.getByRole('list').getByText('Préstamos');
    private readonly tituloPrestamos = this.page.getByText('Préstamos').first();
    private readonly leyendaSolicitarNuevoPrestamo = this.page.getByRole('heading', { name: 'Solicitar Nuevo Préstamo' })
    private readonly listaCuentas = this.page.locator('#loan-destination-account')
    private readonly btnMontoSolicitar = this.page.getByRole('spinbutton', { name: 'Monto a solicitar' })
    private readonly listaCuotas = this.page.getByLabel('Cuotas')
    private readonly btnSolicitarPrestamo = this.page.getByRole('button', { name: 'Solicitar Préstamo' })
    private readonly btnConfirmar = this.page.getByRole('button', { name: 'Confirmar' })
    private readonly mensajeAcreditado = this.page.getByText('Préstamo acreditado')

    constructor(page: Page) {
        super(page);
    }

    async hacerClickEnPrestamos(): Promise<void> {
        await this.clickElement(this.buscarlistaPrestamos);
    }
    async validarTituloPrestamo(): Promise<void> {
        await this.elementVisible(this.tituloPrestamos);
    }
    async validarOpcionSolicitar(): Promise<void> {
        await this.elementVisible(this.leyendaSolicitarNuevoPrestamo);
    }
    async seleccionarCuentaDestino(idCuenta: string): Promise<void> {
        await this.listaCuentas.selectOption(idCuenta);
    }
    async ingresarMontoSolicitar(monto: string | number): Promise<void> {
        await this.fillData(this.btnMontoSolicitar, monto);
    }
    async seleccionarCuotas(cuotas: string): Promise<void> {
        await this.listaCuotas.selectOption(cuotas);
    }
    async hacerClickSolicitarPrestamo(): Promise<void> {
        await this.clickElement(this.btnSolicitarPrestamo);
    }
    async hacerClickConfirmar(): Promise<void> {
        await this.clickElement(this.btnConfirmar);
    }
    async esMensajeAcreditadoVisible(): Promise<boolean> {

        await this.mensajeAcreditado.waitFor({ state: 'visible', timeout: 5000 });
        return await this.mensajeAcreditado.isVisible();
    }
}