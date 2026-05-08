const prompt = require('prompt-sync')();

console.log("--- Fatorial dos Valores Ímpares entre 1 e 100 ---");

let resultado = 1;

for (let i = 1; i <= 100; i += 2) {
    let fatorial = 1;

    for (let j = 1; j <= i; j++) {
        fatorial *= j;
    }

    resultado *= fatorial;
}

console.log(`Resultado final: ${resultado}`);
