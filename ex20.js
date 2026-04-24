const prompt = require("prompt-sync")();

console.log("--- Cálculo da Velocidade de um Projetil ---");

let Distancia = Number(prompt("Insira a distância percorrida em quilômetros: "));
let Tempo = Number(prompt("Insira o tempo em horas: "));

let ms = Distancia/Tempo/3.6;

console.log(`Velocidade = ${ms.toFixed(2)} m/s`);