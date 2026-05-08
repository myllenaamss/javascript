const prompt = require('prompt-sync')();
console.log("---Tabuada de um Número: ");

// 1. Entrada de Dados:
// Solicita ao usuário o número e converte para valor numérico
let numero = Number(prompt("Digite o número para gerar a tabuada:"));

// 2. Inicialização:
// Inicializa o multiplicador como 1
let multiplicador = 1;

console.log(`Tabuada do ${numero}:`);

// 3. Enquanto o multiplicador for menor ou igual a 10:
while (multiplicador <= 10) {
    // Calcula o produto
    let produto = numero * multiplicador;

    // Apresenta o resultado no console no formato solicitado
    console.log(`${numero} x ${multiplicador} = ${produto}`);

    // Incremente o multiplicador
    multiplicador++;
}
