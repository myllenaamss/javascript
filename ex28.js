const prompt = require('prompt-sync')();

console.log("--- Classificação de Número Positivo ou Negativo ---");

// 1. Entrada de Dados
// Definimos a variável N1 e convertemos para Número
let N1 = Number(prompt("Insira um valor numérico inteiro: "));

// 2. Processamento
if (N1 > 0) {
    // Se for maior que zero
    console.log("O número é Positivo");

} 

//3.Saída de Dados
else if (N1 < 0) {
    // Se não for maior que zero, mas for menor que zero
    console.log("O número é Negativo");
} 
else {
    // Se não for nenhuma das opções acima, só sobrou o zero
    console.log("O número é Neutro (zero)"); }