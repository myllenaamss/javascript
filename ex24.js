const prompt = require('prompt-sync')();

console.log("--- Cálculo de Raiz ---");

let base = Number(prompt("Insira a base: "));
let indice = Number(prompt("Insira o índice da raiz: "));

let resultado = base ** (1 / indice);

console.log(`A raiz de índice ${indice} de ${base} é: ${resultado}`);