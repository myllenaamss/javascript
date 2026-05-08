const prompt = require('prompt-sync')();
console.log("--- Quadrados na Faixa de Valores: "); 

// 1. Inicialização:
// Inicializamos um array para armazenar os resultados dos quadrados.
const resultadosQuadrados = [];

// 2. Laço de Iteração:
// Percorre os números inteiros de 15 a 200.
for (let i = 15; i <= 200; i++) {
    // Calcula o quadrado (i * i ou i ** 2)
    let quadrado = Math.pow(i, 2);
    
    // Armazena o resultado no array
    resultadosQuadrados.push({
        numero: i,
        quadrado: quadrado
    });
}

// 3. Saída de Dados:
// Apresenta os resultados formatados no console.
console.log("--- Quadrados dos números de 15 a 200 ---");

resultadosQuadrados.forEach(item => {
    console.log(`O quadrado de ${item.numero} é: ${item.quadrado}`);
});

