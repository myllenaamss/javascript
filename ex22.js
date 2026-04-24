const prompt = require('prompt-sync')();

console.log(`--- Cálculo do Volume de uma Esfera ---`);

let raio = Number(prompt("Insira o raio da esfera: "));

let Volume = (4/3) * Math.PI * (raio * raio * raio);

console.log(`O volume dessa esfera é: ${Volume.toFixed(2)}`);