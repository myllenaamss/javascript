const prompt = require('prompt-sync')();
console.log("--- Ordenação de Três Números Inteiros");

//1.Entrada de Dados
let N1 = Number(prompt("Insira o primeiro valor:"));
let N2 = Number(prompt("Insira o segundo valor"));
let N3 = Number(prompt("Insira o terceiro valor"));

//2.Processamento
let temp;

// Se o primeiro valor for maior que o segundo, troque-os.
if (a > b) {
    temp = a;
    a = b;
    b = temp;
}

// Se o primeiro valor for maior que o terceiro, troque-os.
if (a > c) {
    temp = a;
    a = c;
    c = temp;
}

// Se o segundo valor for maior que o terceiro, troque-os.
if (b > c) {
    temp = b;
    b = c;
    c = temp;
}

// 3. Saída de Dados
console.log(`Valores em ordem crescente: ${a}, ${b}, ${c}`);
alert(`Os números ordenados são: ${a}, ${b}, ${c}`); 

