// @ts-check
import { test, expect } from '@playwright/test';

test('Login com sucesso', async ({ page }) => {
  //ABRIR
  await page.goto('https://automationpratice.com.br/login');
  //LOGAR
  await page.locator('#user').fill('qazando@gmail.com');
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  //VERIFICAR
  await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
});

test('Login com email vazio', async ({ page }) => {
  //ABRIR
  await page.goto('https://automationpratice.com.br/login');
  //LOGAR COM EMAIL VAZIO
  await page.locator('#password').fill('123456');
  await page.getByRole('button', { name: 'login' }).click();
  //VALIDAR MENSAGEM DE EMAIL INVAALIDO
  await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
});

test('Login com senha vazia', async ({ page }) => {
  //ABRIR
  await page.goto('https://automationpratice.com.br/login');
  //LOGAR COM SENHA VAZIA
  await page.locator('#user').fill('herrbert@gmail.com');
  await page.getByRole('button', { name: 'login' }).click();
  //VALIDAR MENSAGEM DE SENHA INVAALIDO
  await expect(page.getByText('Senha inválida.')).toBeVisible();
});