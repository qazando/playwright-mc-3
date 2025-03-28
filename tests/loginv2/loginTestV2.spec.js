const { test } = require('@playwright/test');
const {
  acessarPaginaLogin,
  preencherEmail,
  preencherSenha,
  clicarNoBotaoLogin,
  verificarLoginComSucesso,
  verificarErroDeEmail,
  verificarErroDeSenha
} = require('./usuarios');

const { usuarioValido, usuarioSemEmail, usuarioSemSenha } = require('./usuarios');

test('Login com sucesso', async ({ page }) => {
  await acessarPaginaLogin(page);
  await preencherEmail(page, usuarioValido.email);
  await preencherSenha(page, usuarioValido.senha);
  await clicarNoBotaoLogin(page);
  await verificarLoginComSucesso(page);
});

test('Login com email vazio', async ({ page }) => {
  await acessarPaginaLogin(page);
  await preencherSenha(page, usuarioSemEmail.senha);
  await clicarNoBotaoLogin(page);
  await verificarErroDeEmail(page);
});

test('Login com senha vazia', async ({ page }) => {
  await acessarPaginaLogin(page);
  await preencherEmail(page, usuarioSemSenha.email);
  await clicarNoBotaoLogin(page);
  await verificarErroDeSenha(page);
});
