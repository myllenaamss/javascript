const prompt = require('prompt-sync')();
console.log("--- Par ou Ímpar: ");

// 1. Entrada de Dados
let entrada = prompt("Digite um número inteiro: ");

// Converter a string recebida para um número inteiro
let numero = parseInt(entrada);

// 2. Processamento e Validação
if (isNaN(numero)) {
    console.log("Erro: Você não digitou um número válido.");
} else
    // Verificamos o resto da divisão por 2
    if (numero % 2 === 0) {

        // 3. Saída de Dados (Substituí alert por console.log)
        console.log(`O número ${numero} é Par.`);
    } else {
        console.log(`O número ${numero} é Ímpar.`);
    }