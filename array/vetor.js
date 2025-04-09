/**
 * Estrutura de dados
 * Array
 */

    //* Array é uma estrutura de dados que armazena uma coleção de elementos.
    //* Os elementos podem ser de qualquer tipo, incluindo números, strings, objetos e até mesmo outros arrays.
    //* Os arrays são indexados, o que significa que cada elemento tem um índice associado a ele.
    //* Os índices começam em 0, então o primeiro elemento está no índice 0, o segundo no índice 1 e assim por diante.
    //* Os arrays podem ter qualquer tamanho e podem ser redimensionados dinamicamente.

//                  [0]     [1]      [2]      [3]       [4]
let alunosEM1 = ["Tania", "Pedro", "Maria", "João", "Vivivane"]

console.clear()
console.log(typeof(alunosEM1))
console.log(alunosEM1)

//o comando abaixo identifica o número de elementos de um vetor
console.log(alunosEM1.length)
//o comando abaixo exibe o índice do array associado ao alemento
console.table(alunosEM1)
console.log(alunosEM1[2])
//o comando abaixo adiciona um elemento ao vetor
alunosEM1.push("Jorge")
console.table(alunosEM1)
// para alterar um elemento do vetor, é necessário usar o índice
alunosEM1[3] = "Joãozinho"
console.table(alunosEM1)
//o comando abaixo remove o último elemento do vetor
alunosEM1.pop()
console.table(alunosEM1)
//removendo um elemento específico sem alterar o índice, neste caso é necessário fornecero índice do elemento a ser excluído
delete alunosEM1[1]
console.table(alunosEM1)
//=============================================================================================================================
console.clear()
   
//percorrendo um vetor
let notas = [10, 8, 9, 7, 6]
console.log(notas)
console.table(notas)

// laço for
for (let i = 0; i < notas.length; i++) {
    console.log(notas[i])
}

// laço forEach (simplificação do for exclusiva para percorrer o vetor)
notas.forEach((n) => {
    console.log(n)
})

// mapeamento map() (forEach + alteração do vetor)
// Exemplo 1: Adicionar 1 ponto a cada nota
let notasAtualizadas = notas.map((na) => {
    return na + 1
})
console.log(notasAtualizadas)
console.log(notas)

// Exemplo 2: Conversão e sistema de pontos para letras
/*
SENAC:
NA: Não atendeu (nota < 5)
PA: Parcialmente atendido (nota entre 5 e 7)
A:  Atendeu (nota > 7)
*/

let notasConvertidas = notas.map((nc) => {
    if (nc < 5) {
        return "NA"
    } else if (nc > 7) {
        return "A"
    } else {
        return "PA"
    }
})
console.log(notasConvertidas)
console.log(notas)

