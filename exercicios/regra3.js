/**
 * Cálculo regra de 3 (porcentagem)
 * @author Thiago Moura
 */

const input = require ('readline-sync')

// variáveis

let x, y, valor

console.clear()
console.log("Regra de três")
console.log("x% de y = valor")

// entrada
x = Number(input.question("Digite o valor de X: "))
y = Number(input.question("Digite o valor de y: "))

//processamento

valor = (x * y) / 100

//saída
console.log(`Valor da porcentagem: ${x}% de ${y} = ${valor.toFixed(2)}`)