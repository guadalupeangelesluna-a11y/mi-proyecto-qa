import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/LoginSteps";
import { PrestamosSteps } from '../steps/PrestamosSteps';

let loginSteps: LoginSteps;

test.beforeEach(async ({ page }) => {
    loginSteps = new LoginSteps(page);
    await loginSteps.navegarWeb("https://homebanking-demo-tests.netlify.app/");
    await loginSteps.IniciarSesion("demo", "demo123");
});

test('Solicitud de préstamo exitosa', async ({ page }) => {
    const prestamosSteps = new PrestamosSteps(page);

    // 1. Entramos a la sección
    await prestamosSteps.ingresarASeccionPrestamos();

    // 2. Llenamos los datos dinámicamente
    await prestamosSteps.solicitarPrestamoNuevo('ACC002', 1000, '24');

    // 3. Validamos el resultado final
    const esExitoso = await prestamosSteps.verificarPrestamoAcreditado();
    expect(esExitoso).toBe(true);
});