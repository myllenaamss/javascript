const prompt = require('prompt-sync')();
console.log("--- Verificação de Valor Menor ou Igual a 3: ");

//1.Entrada de Dados
let N1 = Number(prompt("Insira um valor inteiro: "));
if (N1>1 && 3>N1){
    console.log(`${N1}`);
}
