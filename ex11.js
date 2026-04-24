const prompt = require('prompt-sync')();

console.log("--- Conversão de Dólar para Real ---");

let Dolar = Number(prompt("Insira o valor em dolars: "));
let Real = Dolar * 5.6;

console.log(`O resultado da conversão é de: ${Real}`);