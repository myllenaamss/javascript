const prompt = require('prompt-sync')();
console.log("---Somatório dos Valores Pares: ");

//1.Inicialização da Soma
// Criamos a variável com "let" pois o valor dela vai mudar ao longo do tempo.
let somaPares = 0;

// 2. Laço de Iteração:
// - Começamos em 2 (primeiro par).
// - Enquanto i for menor ou igual a 500, o laço continua.
// - i += 2 faz com que o laço "pule" de 2 em 2, garantindo que só passamos por pares.
for (let i = 2; i <= 500; i += 2) {
    // Adiciona o valor atual de "i" à variável somaPares
    somaPares += i;
}

// 3. Saída de Dados:
console.log("O somatório dos valores pares de 1 a 500 é:", somaPares);