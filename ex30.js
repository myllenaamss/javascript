const prompt = require('prompt-sync')();
console.log("--- Cálculo da Média e Verificação de Aprovação com Exame");

//1.Entrada de Dados
const Nota1 = Number(prompt("Digite a primeira nota"));
const Nota2 = Number(prompt("Digite a segunda nota"));
const Nota3 = Number(prompt("DIgite a terceira nota"));
const Nota4 = Number(prompt("Digite a quarta nota"));

//2.Processamento
//Calcular a média aritmética das quatro notas.n
//   - media = (nota1 + nota2 + nota3 + nota4) / 4
//   - SE media > 7
//       - exibir "Média:", media, "Aprovado"
//   - SENÃO SE media >= 5
//       - exibir "Média:", media, "Exame"
//   - SENÃO
//       - exibir "Média:", media, "Reprovado"