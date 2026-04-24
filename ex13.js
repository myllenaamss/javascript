const prompt = require('prompt-sync')();

console.log("--- Cálculo da Soma dos Quadrados de Três Números ---");

let numeros = prompt("Insira 3 números separados por espaço: ")
  .split(" ")
  .map(Number);

let soma =
  (numeros[0] ** 2) +
  (numeros[1] ** 2) +
  (numeros[2] ** 2);

console.log(`A soma dos quadrados é: ${soma}`);