/**
 * Calculo da área de um triangulo
 * @author Luiz/Thiago Moura
 */

//importar a biblioteca read-linesync
const input = require('readline-sync')

//váriaveis
let base, altura, area

console.clear()
console.log("Cálculo da área de um triangulo ")

//entrada

base = Number(input.question("Digite a base do triangulo: "))
altura = Number(input.question("Digite a altura do triangulo: "))

//processamento

area = (base * altura) /2

//saida
console.log(`A área do triangulo é: ${area.toFixed(1)}`)