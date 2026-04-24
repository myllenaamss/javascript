const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma Caixa Retangular ---");

let Comprimento = Number(prompt("Insira o valor do comprimento da caixa: "));
let Largura = Number(prompt("Insira o valor da largura da caixa: "));
let Altura = Number (prompt("Insira o valor da altura da caixa: "));

let Volume = Comprimento * Largura * Altura;

console.log(`O volume da caixa é: ${Volume}`);