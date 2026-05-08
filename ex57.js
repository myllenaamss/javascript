const prompt = require('prompt-sync')();

console.log("--- Cálculo da Área Total da Residência ---");

let areaTotal = 0;
let continuar = "SIM";

while (continuar.toUpperCase() === "SIM") {
    let nome = prompt("Nome do cômodo: ");

    let largura = Number(prompt("Largura (em metros): "));
    let comprimento = Number(prompt("Comprimento (em metros): "));

    let area = largura * comprimento;

    console.log(`Área do(a) ${nome}: ${area} m²`);

    areaTotal += area;

    continuar = prompt("Deseja adicionar outro cômodo? (SIM/NÃO): ");
}

console.log(`\nÁrea total da residência: ${areaTotal} m²`);
