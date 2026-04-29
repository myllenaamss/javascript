const prompt = require('prompt-sync')();
console.log("--- Resolução de Equação de Segundo Grau: ");

//1. Entrada de Dados
const a = parseFloat(prompt('Digite o valor de a '));
const b = parseFloat(prompt('Digite o valor de b '));
const c = parseFloat(prompt('Digite o valor de c '));

// 2. Processamento
// Calculando o discriminante (Delta) (b² - 4ac)
let delta = Math.pow(b,2) - (4 *a * c);
if (delta >=0){
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    //3. Saida de Dados
    console.log(`x1 = ${x1}, x2 ${x2} (raizes da equacao)`);
}else{
    console.log("No existem raizes reais")
}
//  Bhaskara: x = (-b ± √(b² - 4ac)) / 2a.
