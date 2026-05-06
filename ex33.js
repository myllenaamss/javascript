const prompt = require('prompt-sync')();

console.log("--- Valores Divisíveis por 2 e 3 ---");

// 1. Entrada de Dados
// Criamos um array para facilitar o processamento de vários números
let numeros = [];
numeros[1] = Number(prompt("Insira o primeiro valor: "));
numeros[2] = Number(prompt("Insira o segundo valor: "));
numeros[3] = Number(prompt("Insira o terceiro valor: "));
numeros[4] = Number(prompt("Insira o quarto valor: "));

console.log("\n--- Resultado da Análise ---");

// 2. Processamento 
for (let i = 0; i < numeros.length; i++) {
    const valor = numeros[i];
    
    // Verifica se é divisível por 2 E por 3
    if (valor % 2 === 0 && valor % 3 === 0) {
        console.log(`${valor} é divisível por 2 e 3.`);
    }
}

//3. Saída de Dados
// Usamos um loop para verificar cada número inserido
numeros.forEach((num, index) => {
    // Verificação: Se o resto da divisão por 2 é 0 E por 3 é 0
    if (num % 2 === 0 && num % 3 === 0) {
        console.log(`Valor ${index + 1} (${num}): É divisível por 2 e 3.`);
    } else {
        console.log(`Valor ${index + 1} (${num}): Não atende aos critérios.`);
    }
});