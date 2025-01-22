/**
 * Eventos de intervalo
 * @author Thiago Moura
 */

let ligada = false;
let intervalo; // Variável para armazenar o ID do intervalo

function piscar() {
    // Gera o intervalo para alternar o estado da lâmpada
    intervalo = setInterval(() => {
        if (ligada === false) {
            document.getElementById('lamp').src = "img/on.jpg";
        } else {
            document.getElementById('lamp').src = "img/off.jpg";
        }
        ligada = !ligada; // Alterna o estado
    }, 50);
}

function desligar() {
    // Para o intervalo e desliga a lâmpada
    clearInterval(intervalo);
    document.getElementById('lamp').src = "img/off.jpg";
    ligada = false; // Reseta o estado
}