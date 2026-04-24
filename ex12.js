const prompt = require('prompt-sync')();

console.log("--- Conversão de Real para Dólar ---");

    let Real = Number(prompt("Insira o valor em reais: "));
    let Dolar = Real / 5.6;
    
    console.log(`O resultado da conversão é de: ${Dolar}`);