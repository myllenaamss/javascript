const prompt = require('prompt-sync')();

console.log(`--- Cálculo de Potência ---`);

let base = Number(prompt("Insira um valor para a base: "));
let expoente = Number(prompt("Insira um valor para o expoente: "));

console.log(`O resultado é ${base ** expoente}`);