const prompt = require('prompt-sync')();
console.log("--- Soma dos Cem Primeiros Números Naturais: ");

//1.Inicialização da Soma
// Inicializa a variável para acumular os valores
let soma = 0;

// 2. Laço de Iteração:
// Percorre os números de 1 até 100 (inclusive)
for (let i = 1; i <= 100; i++) {
    // Adiciona o número atual (i) à variável soma
    soma += i; 
}

// 3. Saída de Dados:
// Exibe o resultado final no console
console.log("A soma dos cem primeiros números naturais é:", soma);