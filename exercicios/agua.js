/**
 * Cálculo do cosumo de água
 * @author Thiago Moura
 */

const input = require('readline-sync')
console.log(typeof(input))

let consumo, peso

//console.clear()

peso = Number(input.question("Digite o seu peso: "))

consumo = peso * 0.035

console.log(`O seu consumo diário de água deve ser: ${consumo.toFixed(2)}litros`)

