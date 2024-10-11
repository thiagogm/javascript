/**
 * Calcular qual combustível é mais vantajoso, álcool ou gasolina
 * @author Thiago Moura
 */

const readline = require ("readline-sync")
const colors = require('colors')

console.clear()
console.log("Calcular Alcool x gasolina")

let precoGasolina =  readline.question("Digite o valor do litro da gasolina: ")
let precoAlcool =  readline.question("Digite o valor do litro do alcool: ")
let relacao =  precoAlcool / precoGasolina

if (relacao < 0.7) {
    console.log("É mais vantajoso abastecer com álcool.")
    } else {
    console.log("É mais vantajoso abastecer com gasolina.")
}
