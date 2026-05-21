import { test, expect } from '@playwright/test';
import { LoginSteps } from "../steps/LoginSteps";
import { LogoutSteps } from '../steps/LogoutSteps';

let loginSteps: LoginSteps;

test.beforeEach(async ({ page }) => {
    loginSteps = new LoginSteps(page);
    await loginSteps.navegarWeb("https://homebanking-demo-tests.netlify.app/");
    await loginSteps.IniciarSesion("demo", "demo123");
});
test('Cierre de sesión exitoso', async ({ page }) => {
    const logoutSteps = new LogoutSteps(page);

    await logoutSteps.cerrarSesion();
    await logoutSteps.verificarCierreExitoso();
});