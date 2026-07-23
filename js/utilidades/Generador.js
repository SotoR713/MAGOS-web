const MULTIPLICA = 120295;
const INCREMENTA = 713;
const MODELA = 240214;

export class Generador {
    constructor(dado) {
        this.dado = dado;
    }

    aleatorio() {
        this.dado = (this.dado * MULTIPLICA + INCREMENTA) % MODELA;
        return this.dado;
    }
}