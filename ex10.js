const prompt = require('prompt-sync')();

console.log("--- Cálculo da Diferença entre Dois Números Inteiros ---");

let N1 = Number(prompt("Insira um valor númerico inteiro: "));
let N2 = Number(prompt("Insira novamente um valor númerico inteiro"));

let diferença = N1 - N2;

console.log(`A diferença entre os números ${N1} e ${N2} é: ${diferença}`);