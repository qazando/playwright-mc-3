const { test } = require('@playwright/test');
const { abrirSite, logarComSucesso, verificarSeLogado, logarEmailVazio, validarEmailInvalido, logarSenhaVazia, validarSenhaInvalida } = require('./loginPage');

test('Login com sucesso', async ({ page }) => {
    await abrirSite(page);
    await logarComSucesso(page);
    await verificarSeLogado(page);
});

test('Login com email vazio', async ({ page }) => {
    await abrirSite(page);
    await logarEmailVazio(page);
    await validarEmailInvalido(page);
});

test('Login com senha vazia', async ({ page }) => {
    await abrirSite(page);
    await logarSenhaVazia(page);
    await validarSenhaInvalida(page);
});