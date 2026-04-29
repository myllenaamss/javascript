const prompt = require('prompt-sync')();

console.log("--- Cálculo da Média e Verificação de Aprovação");

//1.Entrada de Dados
// No navegador, usamos o prompt(). O parseFloat converte o texto para número.
let nota1 = parseFloat(prompt("Digite a nota do 1º bimestre:"));
let nota2 = parseFloat(prompt("Digite a nota do 2º bimestre:"));
let nota3 = parseFloat(prompt("Digite a nota do 3º bimestre:"));
let nota4 = parseFloat(prompt("Digite a nota do 4º bimestre:"));

// 2. Processamento
// Calculamos a média aritmética simples
let media = (nota1 + nota2 + nota3 + nota4) / 4;

// Verificamos a condição de aprovação
let status = (media >= 5) ? "Aprovado" : "Reprovado";

// 3. Saída de Dados
console.log(`Média: ${media.toFixed(2)}`);
console.log(`Status: ${status}`);
alert(`Média final: ${media.toFixed(2)} - Aluno ${status}`);




