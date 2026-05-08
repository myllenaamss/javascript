const prompt = require('prompt-sync')();

console.log("--- Divisão Inteira Sem Usar / ---");

let dividendo = Number(prompt("Digite o dividendo: "));
let divisor = Number(prompt("Digite o divisor: "));

if (divisor === 0) {
    console.log("Não é possível dividir por zero.");
} else {
    let sinal = 1;

    // Determina o sinal do resultado
    if ((dividendo < 0 && divisor > 0) || (dividendo > 0 && divisor < 0)) {
        sinal = -1;
    }

    let a = Math.abs(dividendo);
    let b = Math.abs(divisor);

    let quociente = 0;

    while (a >= b) {
        a -= b;
        quociente++;
    }

    quociente *= sinal;

    console.log("Quociente:", quociente);
    console.log("Resto:", a);
}
