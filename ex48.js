const prompt = require('prompt-sync')();
console.log("--- Potências de 3: ");

//1.Inicialização do Contador de Expoentes
let expoente = 0;

// 2. Laço de Iteração com Condição de Parada:
while (expoente <= 15) {
    // Calcula o valor da potência de 3 elevado ao expoente
    let resultado = Math.pow(3, expoente);
    
    // Exibe o resultado no console
    console.log(`3 elevado a ${expoente} = ${resultado}`);
    
    // Incremente o contador de expoentes "expoente" em 1
    expoente++;
}