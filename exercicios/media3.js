/**
 * Cálculo da média aritmética de 3 valores
 * @author Thiago Moura
 */

//importar a biblioteca read-linesync
const input = require('readline-sync')

// váriáveis
let num1, num2, num3, media

console.clear()
console.log("Cálculo da média aritmética de 3 números")

//entrada 
// No console, entradas(input) númericas precisa ser convertidas com uso do método Number()

num1 = Number(input.question("Digite o primeiro numero: "))
num2 = Number(input.question("Digite o segundo numero: "))
num3 = Number(input.question("Digite o terceiro numero: "))

// processamento
media = (num1 + num2 + num3) / 3

//saída
console.log(`Média: ${media.toFixed(1)}`)