/** 
 * APP - calculadora de saúde
 * * author Thiago Moura
 */

//bibliotecas
const input = require('readline-sync')
const colors = require('colors')

//variáveis
let nome, idade, peso, altura, fcm, imc, consumo

//limpar a tela
console.clear()

console.log("    _    _            _ _   _        _____      _            _       _  ")  
console.log("   | |  | |          | | | | |      / ____|    | |          | |     | | ")                                                                                 
console.log("   | |__| | ___  __ _| | |_| |__   | |     __ _| | ___ _   _| | __ _| |_ ")
console.log("   |  __  |/ _ \\// _` | | __| '_ \\ | |    / _` | |/ __| | | | |/ _` | __/ _ \\| '__|")
console.log("   | |  | |  __/ (_| | | |_| | | | | |___| (_| | | (__| |_| | | (_| | || (_) | |")
console.log("   |_|  |_|\\___|\\__,_|_|\\__|_| |_|  \\_____\\__,_|_|\\___|\\__,_|_|\\__,_|\\__\\___/|_|  ")
console.log("")

// entrada de dados
nome = input.question("Digite o seu nome: ")
idade = Number(input.question("Digite a sua idade: "))
peso = Number(input.question("Digite o seu peso em Kg: "))
altura = Number(input.question("Digite a sua altura em metros: "))

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)
consumo = peso * 0.035


// saída
console.log("")
console.log("Ficha do aluno")
console.log("_______________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`FCM:  ${fcm}`)
console.log(`IMC:  ${imc.toFixed(2)}`)

// tabela IMC
if (imc < 18.5) {
    console.log("Abaixo do peso".cyan)
} else if (imc < 25) {
    console.log("Peso normal".green)
} else if (imc < 30) {
    console.log("Levemente acima do peso".yellow)
} else if (imc < 35) {
    console.log("Obesidade Grau 1".magenta)
} else if (imc < 40) {
    console.log("Obesidade Grau 2 (severa)".red)
} else {
    console.log("Obesidade Grau 3 (mórbida".bgRed)
}
// consumo de água
console.log(`Consumir por dia ${consumo.toFixed(3)} litros de água`)