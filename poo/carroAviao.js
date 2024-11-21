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
        console.log("  🚗");
        console.log(`Carro de cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
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
        super(ano, cor); // Chama o construtor da classe pai
        this.envergadura = envergadura; // Novo atributo
    }

    criarAviao() {
        console.log("------------------------------------------");
        console.log("✈️");
        console.log(`Avião de cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Envergadura: ${this.envergadura} metros`);
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

// Criando um objeto da classe Avião
console.log("===== Avião =====");
const aviao1 = new Aviao(2025, "branco", 36); // Ano, cor, envergadura
aviao1.criarAviao();
aviao1.ligar();
aviao1.acelerar();
aviao1.aterrizar();
aviao1.desligar();
