const prompt = require('prompt-sync')();
console.log("--- Somatório e Média de Dez Valores: ");

let somatorio = 0;
let contador = 0;

while(contador <= 10){
    let valor = Number(prompt("Insira valor: "));
    somatorio = somatorio + valor;
    contador = contador + 1;}
let media = somatorio / 10;
console.log(`Somatório: ${somatorio}, Média: ${media}`);