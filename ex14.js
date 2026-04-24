const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado da Soma de Três Números ---");

let N1 = Number(prompt("Insira um número: "));
let N2 = Number(prompt("Insira um número: "));
let N3 = Number(prompt("Insira um numero: "));

let soma = (N1 + N2 + N3);
let quadrado = (soma * soma);

console.log(`O resultado do quadrado da soma dos números ${N1}, ${N2} e ${N3} é: ${quadrado}`);