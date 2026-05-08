const prompt = require('prompt-sync')();
console.log("--- Somatório da Fatorial de Quinze Valores: ");

//1.Inicialização do Somatório
let somatorio = 0;

// Valores de exemplo para leitura (15 números)
const valoresLidos = [1, 2, 3, 4, 5, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2];

// 2. Laço de Iteração (percorre 15 vezes)
for (let i = 0; i < 15; i++) {
    let numero = valoresLidos[i];
    
    // 3. Cálculo da Fatorial
    let fatorial = 1;
    // Segundo laço: de 1 até o número lido
    for (let j = 1; j <= numero; j++) {
        fatorial *= j;
    }

    // 4. Atualização do Somatório
    somatorio += fatorial;
}

// 5. Saída de Dados
console.log("O somatório total das fatoriais é: " + somatorio);