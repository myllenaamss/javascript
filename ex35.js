const prompt = require('prompt-sync')();
console.log("--- Maior e Menor Valor ---");

// 1. Entrada de Dados
let numeros = [];
// Preenchendo o array de forma mais limpa (índices 0 a 4)
numeros[0] = Number(prompt("Insira o 1º valor: "));
numeros[1] = Number(prompt("Insira o 2º valor: "));
numeros[2] = Number(prompt("Insira o 3º valor: "));
numeros[3] = Number(prompt("Insira o 4º valor: "));
numeros[4] = Number(prompt("Insira o 5º valor: "));

// 2. Processamento
// Iniciamos assumindo que o primeiro número (índice 0) é tanto o maior quanto o menor
let maior = numeros[0];
let menor = numeros[0];

// O loop começa do 1 porque o 0 já foi definido acima
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
        maior = numeros[i];
    }
    if (numeros[i] < menor) {
        menor = numeros[i];
    }
}

// 3. Saída de Dados
console.log("---------------------------");
console.log(`Maior: ${maior}`);
console.log(`Menor: ${menor}`);