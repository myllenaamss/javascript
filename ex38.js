const prompt = require('prompt-sync')();

console.log("--- Verificação de Valor Menor ou Igual a 3: ");

// 1. Entrada de Dados
// Convertemos para Number para garantir que cálculos e comparações funcionem
let valor = Number(prompt("Insira um valor inteiro: "));

// 2. Processamento e 3. Saída de Dados
// O operador <= verifica se é menor OU igual a 3
if (valor <= 3) {
    console.log("O valor inserido é: " + valor);
} else {
    // Adicionei um else opcional apenas para o programa não terminar "mudo"
    console.log("O valor é maior que 3.");
} 