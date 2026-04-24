const prompt = require('prompt-sync')();

console.log("--- Apuração de Votos em uma Eleição Sindical ---");

let cand1 = Number(prompt("Votos do candidato 1: "));
let cand2 = Number(prompt("Votos do candidato 2: "));
let cand3 = Number(prompt("Votos do candidato 3: "));

let nulos = Number(prompt("Votos nulos: "));
let brancos = Number(prompt("Votos em branco: "));

let total = cand1 + cand2 + cand3 + nulos + brancos;

let percCand1 = (cand1 / total) * 100;
let percCand2 = (cand2 / total) * 100;
let percCand3 = (cand3 / total) * 100;

let percNulos = (nulos / total) * 100;
let percBrancos = (brancos / total) * 100;

console.log("\n--- RESULTADO ---");
console.log(`Total de eleitores: ${total}`);

console.log(`Candidato 1: ${percCand1.toFixed(2)}%`);
console.log(`Candidato 2: ${percCand2.toFixed(2)}%`);
console.log(`Candidato 3: ${percCand3.toFixed(2)}%`);

console.log(`Nulos: ${percNulos.toFixed(2)}%`);
console.log(`Brancos: ${percBrancos.toFixed(2)}%`);