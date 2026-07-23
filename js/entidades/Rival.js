import { Mago } from "./Magos.js";
import { Agua, Fuego, Planta, Tierra, Neutral } from "./Elementos.js";
import { STATS_POR_NIVEL_RIVAL, PORCENTAJE_DANO_CRITICO_RIVAL, BONIFICACION_CRITICO_RIVAL, EVASION_RIVAL } from "../Configuracion.js";

export class Rival extends Mago {

    repartirStats() {
        let puntos = STATS_POR_NIVEL_RIVAL * (this.nivel - (2 * Math.floor(this.nivel / 10)));

        while (puntos > STATS_POR_NIVEL_RIVAL) {
            this.hpMax += 1;
            this.fuerza += 1;
            this.armadura += 1;
            this.velocidad += 1;
            puntos -= STATS_POR_NIVEL_RIVAL;
        }
        while (puntos > 0) {
            this.velocidad += 1;
            puntos -= 1;
        }
        this.hpActual = this.hpMax;
    }

    calcularCritico(rival, aleato, dano) {
        const porcentajeDano = PORCENTAJE_DANO_CRITICO_RIVAL;
        const activacion = aleato % 100;
        if (activacion <= porcentajeDano) {
            dano += Math.floor((dano * BONIFICACION_CRITICO_RIVAL) / 100);
        }
        return dano;
    }

    evasion(rival, aleato) {
        const porcentajeEva = EVASION_RIVAL;
        const activacion = aleato % 100;
        let esquivar;
        if (activacion <= porcentajeEva) {
            esquivar = 0;
        } else {
            esquivar = 1;
        }
        return esquivar;
    }
}

