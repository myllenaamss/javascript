const prompt = require('prompt-sync')();
console.log("--- Valores Divisíveis por 4 Menores que 200: ");

//1.Laço de Iteração
// Iniciamos em 4, o limite é 196 e aumentamos de 4 em 4
for (let i = 4; i <= 196; i += 4) {
    console.log(i);
}