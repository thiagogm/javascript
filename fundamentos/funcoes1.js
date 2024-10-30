/**
 * Estudo das funções simples
 * @author Thiago Moura
 */

hello()
//funçõ literal
function hello() {
    console.log("Hello function")
}
console.log(typeof(hello))

// função atribuída
//funções atribuídas precisam ser criadas no início do código (antes da chamada da função)
const hello2 = function(){
    console.log("Hello2 function")
}
hello2()

//Arrow function (forma simplificada de criar uma função atribuída)
const hello3 = () => {
    console.log("Hello3 function")
}
hello3()
console.log(typeof(hello3))

// arrow function mais simplificado (neste caso só é possível executar uma linha de código)

const hello4 = _ => console.log("Hello4 function")
hello4()
console.log(typeof(hello4))