/**
 * Assincronismo
 * Promise
 * @author Thiago Moura
 

const input = require('readline-sync')
let login, senha

//estrutura de dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

//Autenticação de usuário
console.clear()
console.log("--------------------------")
console.log("    Usuário    ")
console.log("--------------------------")
login = input.question("login: ")
senha = input.question("senha: ") // AGORA A SENHA É ARMAZENADA NA VARIÁVEL CORRETA
console.log("--------------------------")

function logar(login, senha) {
    //uso de promise (acesso ao banco de dados)
    return new Promise((resolve, reject) => { // CORRETO
        //simulação de delay no acesso ao banco
        setTimeout(() => {
            //se existir no banco de dados o usuário
            if (database.hasOwnProperty(login)) {
                // se a senha estiver correta
                if (database[login].senha === senha) {
                    resolve("Autenticação bem sucedida. Olá, " +
                        database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente")
                }
            } else {
                reject("Usuário não encontrado. Por favor verifique o login")
            }
        }, 2000)
    })
}

// executar a função logar
//no uso de promise é necessário usar o .then
logar(login, senha)
    .then((message) => {
        console.log(message) // Exibir mensagem de sucesso
    })
    .catch((error) => {
        console.log("Erro de autenticação. " + error)
    })

    */

    /**
 * Assincronismo
 * Promise
 * @author Thiago Moura
 */

const input = require('readline-sync')
let login, senha

// Estrutura de dados (simulando um banco de dados)
const database = {
    admin: {
        usuario: "Administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

// Autenticação de usuário
console.clear()
console.log("--------------------------")
console.log("    Login do Usuário    ")
console.log("--------------------------")
login = input.question("Login: ")
senha = input.question("Senha: ", { hideEchoBack: true }) // Oculta senha
console.log("--------------------------")

function logar(login, senha) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                if (database[login].senha === senha) {
                    resolve(`Autenticação bem-sucedida! Olá, ${database[login].usuario}.`)
                } else {
                    reject("Senha incorreta. Por favor, tente novamente.")
                }
            } else {
                reject("Usuário não encontrado. Verifique o login digitado.")
            }
        }, 2000)
    })
}

// Executar a função logar
logar(login, senha)
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.log("Erro de autenticação: " + error)
    })
