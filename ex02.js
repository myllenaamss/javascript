const readline = require('readline');

// Configuração da interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Entrada de Dados
rl.question("Digite a temperatura em Fahrenheit (°F): ", (answer) => {
  let fahrenheit = Number(answer);

  // 2. Processamento
  let celsius = (fahrenheit - 32) * 5 / 9;

  // 3. Saída de Dados
  console.log(`Temperatura em Celsius: ${celsius.toFixed(1)}°C`);

  // Fecha a interface
  rl.close();
});