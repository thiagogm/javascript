/** 
 * Ficha de um aluno de academia
 * * author Thiago Moura
 */

//variáveis
let nome
let idade
let peso
let altura
let vip
let fcm
let imc
console.clear()

// entrada de dados
nome = "Thiago Moura"
idade = 39
peso = 115
altura = 1.95
vip = true

//processamento
fcm = 208 - (0.7 * idade)
imc = peso / (altura * altura)

// saída
console.log("Ficha do aluno")
console.log("_______________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`VIP: ${vip}`)
console.log(`FCM:  ${fcm}`)
console.log(`IMC:  ${imc.toFixed(2)}`)
