import { DANO_MINIMO, DANO_FUERTE_ELEMENTAL } from "../Configuracion.js";

export class Mago {
    constructor(id, nombre, elemento, hpActual, hpMax, fuerza, armadura, velocidad, nivel) {
        this.id = id;
        this.nombre = nombre;
        this.elemento = elemento;
        this.hpActual = hpActual;
        this.hpMax = hpMax;
        this.fuerza = fuerza;
        this.armadura = armadura;
        this.velocidad = velocidad;
        this.nivel = nivel;
    }

    getId() { return this.id; }
    getNombre() { return this.nombre; }
    getElemento() { return this.elemento; }
    getHpActual() { return this.hpActual; }
    getHpMax() { return this.hpMax; }
    getFuerza() { return this.fuerza; }
    getArmadura() { return this.armadura; }
    getVelocidad() { return this.velocidad; }
    getNivel() { return this.nivel; }

    repartirStats() {
        throw new Error("funcion repartir no declarada");
    }
    calcularCritico(rival) {
        throw new Error("funcion critico no declarada");
    }
    evasion(rival) {
        throw new Error("funcion evasion no declarada");
    }

    calcularDano(objetivo) {
        let dano = this.getFuerza() - objetivo.getArmadura();
        if (dano < DANO_MINIMO) {
            dano = DANO_MINIMO;
        }
        if (objetivo.getElemento().getNombre() === this.getElemento().getFortaleza()) {
            dano += Math.floor((dano * DANO_FUERTE_ELEMENTAL) / 100);
        } else if (objetivo.getElemento().getNombre() === this.getElemento().getDebilidad()) {
            dano = Math.floor((dano * DANO_FUERTE_ELEMENTAL) / 100);
        }
        if (dano < DANO_MINIMO) {
            dano = DANO_MINIMO;
        }
        return dano;
    }

    recibirDano(dano) {
        this.hpActual -= dano;
        if (this.hpActual < 0) {
            this.hpActual = 0;
        }
    }

    curar(cantidadCurar) {
        this.hpActual += cantidadCurar;
        if (this.hpActual > this.hpMax) {
            this.hpActual = this.hpMax;
        }
        return cantidadCurar;
    }
}