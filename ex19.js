const prompt = require('prompt-sync')();

console.log("--- Cálculo das Quatro Operações Básicas ---")

let N1 = Number(prompt("Insira um valor númerico: "));
let N2 = Number(prompt("Insira um valor númerico: "));

let Mult = N1 * N2;
let Sub = N1 - N2
let Ad = N1 + N2;
let Div = N1/N2;

console.log(`Adição: ${N1} + ${N2} = ${Ad}
Subtração: ${N1} - ${N2} = ${Sub}
Multiplicação: ${N1} x ${N2} = ${Mult}
Divisão: ${N1} / ${N2} = ${Div}`);