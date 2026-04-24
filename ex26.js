const prompt = require('prompt-sync')();

console.log("--- Cálculo do Quadrado da Divisão de Dois Números Inteiros: ");

let N1 = Number(prompt("Insira um valor númerico: "));
let N2 = Number(prompt("Insira um valor númerico: "));

let div = (N1/N2);
let resultado = div * div;

console.log(`Resultado: ${resultado}`);