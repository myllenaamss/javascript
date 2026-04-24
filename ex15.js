const prompt = require('prompt-sync')();

console.log("--- Cálculo do Produto e da Soma de Quatro Números---");

let N1 = Number(prompt("Insira um valor: "));
let N2 = Number(prompt("Insira um valor: "));
let N3 = Number(prompt("Insira um valor: "));
let N4 = Number(prompt("Insira um valor: "));

let P1e3 = (N1 * N3);
let P2e4 = (N2 + N4);

console.log(`Produto: ${P1e3} (${N1} * ${N3}), Soma: ${P2e4} (${N2} + ${N4})`);
