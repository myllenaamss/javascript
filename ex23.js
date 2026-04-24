const prompt = require('prompt-sync')();

console.log("--- Conversão de Pés para Metros ---");

let fts = Number(prompt("Insira uma medida em pés: "));

let mts = fts * 0.3048;

console.log(`${fts} é igual a ${mts} metros.`);