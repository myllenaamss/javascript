const prompt = require('prompt-sync')();

console.log("Somatório, Média e Total de Valores Lidos");

let somatorio = 0;
let totalValores = 0;

while (true) {
    let valor = Number(prompt("Insira valor: "));

    if (valor <= 0) {
        break;
    }

    somatorio = somatorio + valor;
    totalValores = totalValores + 1;
}

let media = somatorio / totalValores;

console.log(`Somatório: ${somatorio}, Média: ${media}, Total de valores lidos: ${totalValores}`);
