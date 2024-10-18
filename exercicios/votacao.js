/**
 * Verificar obrigatoriedade de votar em função da idade
 */

const input = require('readline-sync')

let idade

console.clear()
console.log("Obrigatoriedade de votação")

idade = Number(input.question("Digite a sua idade: "))

if (idade < 16) {
    console.log("Proibido Votar!")
}  else if (idade === 16 || idade === 17 || idade > 70){
    console.log("Voto Facultativo!")
}   else {
    console.log("Voto Obrigatório")
 
    
            
}