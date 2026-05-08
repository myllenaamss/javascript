const prompt = require('prompt-sync')();
console.log("--- Múltiplo de 3 e 5: ");

// 1. Entrada de Dados
// Usamos 'valor' como o nome da variável
let valor = Number(prompt("Insira um valor: "));

// 2. Processamento
// Ajustado de 'numero' para 'valor' para manter a consistência
if (valor % 3 === 0 && valor % 5 === 0) {
    
    // 3. Saída de Dados
    console.log(`O número ${valor} é múltiplo de 3 e 5 ao mesmo tempo!`);
} else {
    console.log(`O número ${valor} não atende aos critérios (múltiplo de 3 e 5).`);
}
