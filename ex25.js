const prompt = require ('prompt-sync')();

console.log("--- Sucessor e Antecessor de um Número Inteiro ---");

let N1 = Number(prompt("Insira um número: "));


console.log(`Antecessor: ${N1 -1}
Sucessor: ${N1 + 1}`);