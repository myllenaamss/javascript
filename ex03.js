// Passo 1: Entrada de dados
const prompt = require('prompt-sync')();

console.log("--- Cálculo do Volume de uma lata de óleo ---");
let raio = Number(prompt("Digite o raio: "));
let altura = Number(prompt("Digite a altura: "));

// Passo 2: Processamento do cálculo
let volume = Math.PI * (raio * raio) * altura; 

// Passo 3: Exibição do resultado
console.log(`O volume da lata de óleo é: ${volume} cm³`);