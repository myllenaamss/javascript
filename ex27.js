const prompt = require('prompt-sync')();

console.log("---Cálculo da Diferença entre Dois Números Inteiros")

//1. Entrada de Dados
let N1 = Number(prompt("Insira um valor númerico: "));
let N2 = Number(prompt("Insira um valor númerico: "));
let diferença;

//2.Processamento
if(N2 > N1){
 diferença = N2 - N1;
}else {
    diferença  = N1 - N2;
}

//3.Saída de Dados
console.log(`\nResultado da diferença: ${diferença}`); 
