const prompt = require('prompt-sync')();
console.log("--- Somatório de Grãos de Trigo no Tabuleiro de Xadrez: ");

//1.Inicialização do Somatório
// Usamos BigInt (n no final) porque o número excederá 18 quintilhões
let totalGraos = 0n;
let quadro = 1;

// 2. Laço de Iteração
while (quadro <= 64) {
    // Cálculo: 2 elevado ao (quadro - 1)
    // O operador ** é usado para potência em JS
    let graosNoQuadro = 2n ** BigInt(quadro - 1);

    // 3. Atualização do Somatório
    totalGraos += graosNoQuadro;

    quadro++;
}

// 4. Saída de Dados
console.log("O somatório total de grãos de trigo é:");
console.log(totalGraos.toString());