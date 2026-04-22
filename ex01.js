const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

// 1. Entrada de Dados
readline.question('Digite a temperatura em graus Celsius: ', (entrada) => {
  let celsius = parseFloat(entrada);

  // Validação simples
  if (isNaN(celsius)) {
    console.log("Por favor, insira um número válido.");
  } else {
    // 2. Processamento
    let fahrenheit = (celsius * 9 / 5) + 32;

    // 3. Saída de Dados
    console.log(`A temperatura convertida é: ${fahrenheit.toFixed(1)}°F`);
  }

  readline.close();
});