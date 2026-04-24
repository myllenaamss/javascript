const prompt = require('prompt-sync')();

console.log("--- Adição e Multiplicação de Quatro Números Inteiros ---");

let A = Number(prompt("Insira um número inteiro: "));
let B = Number(prompt("Insira um número inteiro: "));
let C = Number(prompt("Insira um número inteiro: "));
let D = Number(prompt("Insira um número inteiro: "));

let M1E2 = A * B;
let M1E3 = A * C;
let M1E4 = A * D;
let M2E3 = B * C;
let M2E4 = B * D
let M3E4 = C * D;

let A1E2 = A + B;
let A1E3 = A + C;
let A1E4 = A + D;
let A2E3 = B + C;
let A2E4 = B + D;
let A3E4 = C + D;

console.log(`Resultado das multiplicações:
    ${A} * ${B} = ${M1E2}
    ${A} * ${C} = ${M1E3}
    ${A} * ${D} = ${M1E4}
    ${B} * ${C} = ${M2E3}
    ${B} * ${D} = ${M2E4}
    ${C} * ${D} = ${M3E4} `);

console.log(`Resultado das adições:
    ${A} + ${B} = ${A1E2}
    ${A} + ${C} = ${A1E3}
    ${A} + ${D} = ${A1E4}
    ${B} + ${C} = ${A2E3}
    ${B} + ${D} = ${A2E4}
    ${C} + ${D} = ${A3E4}`);