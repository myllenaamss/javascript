const prompt = require('prompt-sync')();
console.log("--- Multiplicação e Verificação: ");

// 1. Entrada de Dados
// Convertemos a entrada para Número
let N1 = Number(prompt("Insira um valor numérico inteiro: "));

// 2. Processamento
// Multiplicamos o valor inserido por 2 (ou o fator que você desejar)
let resultado = N1 * 2;

// 3. Verificação
// Verificamos se o resultado da multiplicação é maior que 30
if (resultado > 30) {
    
    // 4. Saída de Dados
    // Apresentamos o resultado apenas se ele for maior que 30
    console.log("O resultado é maior que 30: " + resultado);
} else {
    // Adicionei um feedback caso não seja maior que 30 (Opcional)
    console.log("O resultado (" + resultado + ") não é maior que 30.");
}