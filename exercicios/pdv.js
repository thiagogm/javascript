/**
 * PDV
 * @author Thiago Moura
 */

const input = require ('readline-sync')

//variaveis

let total, desconto, totalDesconto, valorDesconto, valorPago, troco

console.clear()

console.log("$$$$$$$\\  $$$$$$$\\  $$\\    $$\\ ")
console.log("$$  __$$\\ $$  __$$\\ $$ |   $$ |")
console.log("$$ |  $$ |$$ |  $$ |$$ |   $$ |")
console.log("$$$$$$$  |$$ |  $$ |\\$$\\  $$  |")
console.log("$$  ____/ $$ |  $$ | \\$$\\$$  / ")
console.log("$$ |      $$ |  $$ |  \\$$$  /  ")
console.log("$$ |      $$$$$$$  |   \\$  /   ")
console.log("\\__|      \\_______/     \\_/   ")
console.log("")


//entrada 1

total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("Digite o valor do desconto em porcentagem: "))

//processamento 1
valorDesconto = (desconto * total) / 100

//processamento 2
totalDesconto = total - valorDesconto

//saida 1

console.log("")
console.log("--------------------------------")
console.log(`Total: R$ ${total.toFixed(2)}`)
console.log(`Desconto: ${desconto}%`)
console.log(`Valor do desconto: ${valorDesconto.toFixed(2)}`)
console.log(`Total com desconto: ${totalDesconto.toFixed(2)}`)
console.log("")

//entrada 2
valorPago = Number(input.question("Valor em dinheiro pago pelo cliente: "))

//processamento 3
troco = valorPago - totalDesconto

//saida 2

console.log("--------------------------------")
console.log("")
console.log(`Valor pago em dinheiro: ${valorPago.toFixed(2)}`)
console.log(`Troco: R$ ${troco.toFixed(2)}`)
console.log("--------------------------------")
