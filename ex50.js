const prompt = require('prompt-sync')();
console.log("---Sequência de Fibonacci: ");

//1.Inicialização dos Termo
let termo1 = 0;
let termo2 = 1;
let sequencia = [termo1, termo2];

// 2. Geração dos Termos:
// Já temos 2 termos, precisamos chegar ao 15º.
while (sequencia.length < 15) {
    let proximoTermo = termo1 + termo2;
    
    // Adiciona o novo termo ao array da sequência
    sequencia.push(proximoTermo);
    
    // Atualiza os valores para a próxima iteração
    termo1 = termo2;
    termo2 = proximoTermo;
}

// 3. Saída de Dados:
console.log("Sequência de Fibonacci (até o 15º termo):");
console.log(sequencia.join(", "));