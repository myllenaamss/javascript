const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área de uma Circunferência ---");

let raio = Number(prompt("Insira o valor do raio da circunferência: "));

let area = Math.PI * (raio * raio);

console.log(`O valor da área é: ${area.toFixed(2)} `);