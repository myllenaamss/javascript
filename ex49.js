const prompt = require('prompt-sync')();
console.log("--- Potência de uma Base Elevada a um Expoente: ");

//1.Inicialização da Potencia
// Definindo os valores de entrada
const base = 2;
const expoente = 3;

// 1. Inicialização da Potência:
// Inicialize a variável "potencia" com o valor da base.
let potencia = base;

// 2. Laço de Iteração:
// Inicie um laço de iteração usando o comando FOR que percorre o intervalo de 1 até o expoente.
// Nota: Para que o cálculo seja exato (ex: 2^3 = 2 * 2 * 2), o laço deve rodar (expoente - 1) vezes
// já que a primeira base já está na variável.
for (let i = 1; i < expoente; i++) {
    // Dentro do laço, multiplique a variável "potencia" pela base.
    potencia = potencia * base;
}

// 3. Saída de Dados:
// Exiba o resultado da potência.
console.log(`O resultado de ${base} elevado a ${expoente} é: ${potencia}`);