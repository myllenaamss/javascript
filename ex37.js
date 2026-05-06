const prompt = require('prompt-sync')();
console.log("---Verificação de Faixa de Valor: ");

let N1 = Number(prompt("Insira um valor inteiro: "));
if (N1>1 && 10>N1){
    console.log("O valor está na faixa");
}else{
    console.log("Valor não está na faixa permitida");
}


