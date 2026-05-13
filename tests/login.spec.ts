import { test, expect } from '@playwright/test';

test('test-login-ok', async ({ page }) => {
    await page.goto('https://homebanking-demo-tests.netlify.app/');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('demo');
    await page.getByRole('textbox', { name: 'Usuario' }).press('Tab');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('demo123');
    await page.getByText('Recordarme').click();
    await page.getByRole('button', { name: 'Ingresar' }).click();
    await page.getByRole('heading', { name: 'Panel Principal' }).click();
});


test('test-login-failed', async ({ page }) => {
    await page.goto('https://homebanking-demo-tests.netlify.app/');
    await page.getByRole('textbox', { name: 'Usuario' }).fill('demo');
    await page.getByRole('textbox', { name: 'Usuario' }).press('Tab');
    await page.getByRole('textbox', { name: 'Contraseña' }).fill('123456');
    await page.getByRole('button', { name: 'Ingresar' }).click();
    await expect(page.locator('#login-error')).toContainText('Usuario o contraseña incorrectos. Intentos restantes: 2');
});

test('test', async ({ page }) => {
  await page.goto('https://homebanking-demo-tests.netlify.app/');
  await page.getByRole('textbox', { name: 'Usuario' }).fill('demo');
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('demo123');
  await page.getByRole('button', { name: 'Ingresar' }).click();
  await page.getByRole('heading', { name: 'Panel Principal' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Plazos Fijos' }).click();
  await page.getByText('TNA: 42% Interés estimado: $').click();
  await page.getByRole('heading', { name: 'Crear Nuevo Plazo Fijo' }).click();
  await page.getByRole('spinbutton', { name: 'Monto a invertir' }).fill('1999.99');
  await page.getByRole('button', { name: 'Crear Plazo Fijo' }).click();
  await page.getByText('Confirmar Plazo Fijo ×').click();
  await page.getByRole('heading', { name: 'Confirmar Plazo Fijo' }).click();
  await page.getByRole('button', { name: 'Confirmar' }).click();
  await page.getByText('Plazo fijo creado exitosamente').click();
});