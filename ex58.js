const prompt = require('prompt-sync')();

console.log("--- Maior e Menor Valores ---");

let maior = null;
let menor = null;

while (true) {
    let entrada = prompt("Digite um valor (negativo para sair): ");
    let valor = Number(entrada);

    if (isNaN(valor)) {
        console.log("Por favor, digite um número válido.");
        continue;
    }

    if (valor < 0) {
        break;
    }

    if (maior === null || valor > maior) {
        maior = valor;
    }

    if (menor === null || valor < menor) {
        menor = valor;
    }
}

if (maior === null) {
    console.log("Nenhum valor foi informado.");
} else {
    console.log("Maior valor:", maior);
    console.log("Menor valor:", menor);
}
