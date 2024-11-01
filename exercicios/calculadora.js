/**
 * Desenvolvimento de uma calculadora
 * @author Thiago Moura
 */

const input = require('readline-sync')

let a, b, opcao

do{

console.clear()
console.log("Calculadora")

a = Number(input.question("Digite o primeiro numero: "))
b = Number(input.question("Digite o segundo numero: "))

console.log("1. Somar")
console.log("2. Subtrair")
console.log("3 Multiplicar")
console.log("4 Dividir")
console.log("5 Calcular a %")
console.log("")
opcao = Number(input.question("Digite a opcao desejada: "))



switch (opcao) {
    case 1:
        console.log(somar(a, b))
        break
    case 2:
        console.log(subtrair(a, b))
        break
    case 3:
        console.log(multiplicar(a, b))
        break
    case 4:
        console.log(dividir(a, b))
        break
    case 5: 
        console.log(porcentagem(a, b))
        break
    default:
        console.log("Opção inválida")
        break
}

function somar(a, b) {
    return console.log(`Calculo: ${a} + ${b} é igual a ${a + b}`)
}

function subtrair(a, b) {
    return console.log(`Calculo: ${a} - ${b} é igual a ${a - b}`)
}

function multiplicar(a, b) {
    return console.log(`Calculo: ${a} * ${b} é igual a ${a * b}`)
}

function dividir(a, b) {
    return console.log(`Calculo: ${a} / ${b} é igual a ${a / b}`)
}

function porcentagem(a, b) {
    return console.log(`Calculo: ${a} % de ${b}  é igual a ${a * b / 100}`)
}

opcao = input.question("Deseja calcular novamente? (s/n)  ")
} while (opcao === 's');