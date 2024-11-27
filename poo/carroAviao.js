console.clear()

// Classe modelo Carro
class Carro {
    constructor(ano, cor) {
        this.ano = ano;
        this.cor = cor;
        this.ligado = false; // Estado inicial do carro desligado
    }

    criarCarro() {
        console.log("------------------------------------------");
        console.log("  🚗 Carro criado:");
        console.log(`Ano: ${this.ano}`);
        console.log(`Cor: ${this.cor}`);
    }

    ligar() {
        if (!this.ligado) {
            this.ligado = true;
            console.log("🔑 O carro foi ligado!");
        } else {
            console.log("⚠ O carro já está ligado.");
        }
    }

    desligar() {
        if (this.ligado) {
            this.ligado = false;
            console.log("🔑 O carro foi desligado!");
        } else {
            console.log("⚠ O carro já está desligado.");
        }
    }

    acelerar() {
        if (this.ligado) {
            console.log("🏎️ VRUM VRUM! O carro está acelerando!");
        } else {
            console.log("🚫 Ligue o carro antes de acelerar.");
        }
    }
}

// Classe Avião (herança de Carro)
class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor); // Inicializa os atributos herdados
        this.envergadura = envergadura; // Novo atributo exclusivo da classe Aviao
    }

    criarAviao() {
        console.log("===== Detalhes do Avião =====");
        super.criarCarro(); // Chama o método da classe pai
        console.log(`Envergadura (exclusiva): ${this.envergadura} metros`);
    }

    aterrizar() {
        console.log("🛬 O avião está aterrizando com segurança!");
    }

    // Polimorfismo: modificando o método acelerar() da classe pai
    acelerar() {
        if (this.ligado) {
            console.log("✈️ VRUUUUM! O avião está decolando a toda velocidade!");
        } else {
            console.log("🚫 Ligue o avião antes de acelerar.");
        }
    }
}

// Criando objetos e exibindo os dois no mesmo fluxo
console.log("===== Criando Veículos =====");

// Criando um carro
const carro1 = new Carro(2021, "vermelho");
carro1.criarCarro();
carro1.ligar();
carro1.acelerar();
carro1.desligar();

console.log("");

// Criando um avião
const aviao1 = new Aviao(2025, "branco", 36); // Ano, cor, envergadura
aviao1.criarAviao();
aviao1.ligar();
aviao1.acelerar();
aviao1.aterrizar();
aviao1.desligar();
