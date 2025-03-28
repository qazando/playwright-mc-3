const { expect } = require('@playwright/test');

const abrirSiteV2 = async (page) => {
    await page.goto('https://automationpratice.com.br/login');
};

const logarV2 = async (page) => {
    await page.locator('#user').fill('qazando@gmail.com');
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
};

const verificarLogadoV2 = async (page) => {
    await expect(page.getByRole('heading', { name: 'Login realizado' })).toBeVisible();
};

const logarEmailVazioV2 = async (page) => {
    await page.locator('#password').fill('123456');
    await page.getByRole('button', { name: 'login' }).click();
};

const verificarTextoEmailInvalidoV2 = async (page) => {
    await expect(page.getByText('E-mail inválido.')).toBeVisible({ timeout: 10000 });
};

module.exports = {
    abrirSiteV2,
    logarV2,
    verificarLogadoV2,
    logarEmailVazioV2,
    verificarTextoEmailInvalidoV2
}