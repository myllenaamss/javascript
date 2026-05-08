const prompt = require('prompt-sync')();
console.log("--- Conversão de Graus Celsius em Fahrenheit: ");

//1.Laço de Iteração
// O laço começa em 10, vai até 100 e incrementa de 10 em 10
for (let celsius = 10; celsius <= 100; celsius += 10) {
    
    // Cálculo da conversão
    let fahrenheit = (celsius * 1.8) + 32;

    // Passo 2: Saída de Dados
    console.log(`${celsius}°C equivale a ${fahrenheit.toFixed(1)}°F`);
}
