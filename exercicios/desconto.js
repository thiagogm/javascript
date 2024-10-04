/**
 * Cálculo do valor do desconto
 * @author Thiago Moura
 */

const input = require ('readline-sync')

//variaveis

let totalDesconto, desconto, total

console.clear()
console.log("Cálculo do valor do Desconto")

//entrada

total = Number(input.question("Digite o valor da compra: "))
desconto = Number(input.question("Digite o valor do desconto em porcentagem: "))

//processamento

totalDesconto = total - ((desconto * total) / 100)

//saida
console.log(`total com desconto: R$ ${totalDesconto.toFixed(2)}`)

