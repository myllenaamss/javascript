const prompt = require("prompt-sync")();

console.log("--- Cálculo do Novo Salário com Aumento ---");

let salario = Number(prompt("Insira o valor do salário mensal atual: "));
let porcentagem = Number(prompt("Insira a porcentagem de aumento do salário: "));

let aumento = salario * (porcentagem / 100);
let novoSalario = salario + aumento;
let diferença = aumento;

console.log(`O novo salário será de ${novoSalario}, o valor do aumento foi de ${diferença}`);