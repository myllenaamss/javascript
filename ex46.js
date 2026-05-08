const prompt = require('prompt-sync')();
console.log("--- Números Ímpares na Faixa de Valores: ");

//1.Inicialização
// - Inicialize uma variável "numero" com valor 1.
let numero = 1;

// 2. Laço de Iteração:
// - Enquanto "numero" for menor ou igual a 199, faça:
while (numero <= 199) {
    
    // - Exiba o valor de "numero".
    console.log(numero);
    
    // - Incremente o valor de "numero" em 2.
    numero += 2; 
}