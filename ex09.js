const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado de um Número Inteiro ---");

let N1 = Number(prompt("Insira um valor númerico inteiro: "));
let quadrado = (N1 * N1);

console.log(`O valor do número ${N1} elevado ao quadrado é: ${quadrado}`);