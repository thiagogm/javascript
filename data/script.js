/**data automática no rodapé
 * @author Thiago Moura
*/

function obterData(){
    const data = new Date()
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }
    return data.toLocaleDateString('pt-BR', options)
}

// a linha abaixo insere na tag <p> identificada como data atual o retorno da função
document.getElementById('dataAtual').innerHTML = obterData()