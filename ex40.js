const prompt = require('prompt-sync')();

console.log("--- Soma e Verificação ---");

// 1. Entrada de Dados
// Removi a primeira pergunta genérica para focar nos números reais
let n1 = Number(prompt("Digite o primeiro número: "));
let n2 = Number(prompt("Digite o segundo número: "));
let n3 = Number(prompt("Digite o terceiro número: "));

// 2. Processamento
let resultado = n1 + n2 + n3;

// 3. Verificação e 4. Saída de Dados
if (resultado > 100) {
    // No Node.js, usamos console.log em vez de alert
    console.log("--------------------------------------");
    console.log("A soma é maior que 100!");
    console.log("Resultado: " + resultado);
    console.log("--------------------------------------");
} else {
    // Opcional: Feedback caso seja menor ou igual a 100
    console.log("A soma é " + resultado + ". (Não é maior que 100, por isso não apresentada conforme a regra).");
}
