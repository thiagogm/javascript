/**
 * Cálculo do troco
 * @author Thiago Moura
 */

const input = require ('readline-sync')

//variaveis

let valorPago, total, troco

console.clear()
console.log("Cálculo do valor do troco")

//entrada

valorPago = Number(input.question("Digite o valor pago: "))
total = Number(input.question("Digite o valor total da compra: "))

// processamento

troco = valorPago - total

//saida
console.log(`O valor do troco é: R$ ${troco.toFixed(2)}`)