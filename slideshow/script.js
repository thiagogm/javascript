/**Slide Show**/


// array(vetor) de imagens
//                 [0]           [1]          [2]
let slides = ["banner1.jpg","banner2.jpg","banner3.jpg"]
let intervalo = 3000 //(3000ms = 3s (1s por imagem))
let indice = 0 // apoio a lógica (índice do array)


//Função para troca das imagens
function show() {
    //capturar o id do banner
    const slide = document.getElementById('slide')

    //Efeito de entrada
    //A estrutur abaixo verifica se foi atribuid a classe (.slideOut) ao identificador #slide
    if(slide.classList.contains('slideOut')){
        slide.classList.remove('slideOut')
    }
    slide.classList.add('slideIn')

    //Troca de imagem
    //Temporizador (nativo JS)
    setTimeout(() => {
        //Soma 1 ao índice do vetor
        indice++
    //se o último slide do vetor for atingido, voltar para o 0
    if(indice >= slides.length) {
        indice = 0
    }
    //substituir a imagem no documento html pela próima imagem do vetor (img/slides[0] img/slides[1] img/slides[2])
    slide.src = `img/${slides[indice]}`

},1000) //ajuste (sincronizar com o CSS)

    //Efeito saída
    if(slide.classList.contains('slideIn')){
        slide.classList.remove('slideIn')
    }
    slide.classList.add('slideOut')

    //Intervalo para próxima execução (loop infinito)
    setTimeout(show, intervalo)

}

// executar a função ao iniciar o documento js
show()