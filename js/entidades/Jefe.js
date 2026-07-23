import { Mago } from "./Magos.js";
import { Agua, Fuego, Planta, Tierra, Neutral } from "../entidades/Elementos.js";
import { STATS_POR_NIVEL_JEFE, PORCENTAJE_DANO_CRITICO_JEFE, BONIFICACION_CRITICO_JEFE, EVASION_JEFE } from "../Configuracion.js";

export class Jefe extends Mago {

    repartirStats() {
        let puntos = STATS_POR_NIVEL_JEFE * this.nivel;

        while (puntos > STATS_POR_NIVEL_JEFE) {
            this.hpMax += 1;
            this.fuerza += 1;
            this.armadura += 1;
            this.velocidad += 1;
            puntos -= STATS_POR_NIVEL_JEFE;
        }
        while (puntos > 0) {
            this.hpMax += 1;
            this.velocidad += 1;
            puntos -= 2;
        }
        this.hpActual = this.hpMax;
    }

    calcularCritico(rival, aleato, dano) {
        const porcentajeDano = PORCENTAJE_DANO_CRITICO_JEFE;
        const activacion = aleato % 100;
        if (activacion <= porcentajeDano) {
            dano += Math.floor((dano * BONIFICACION_CRITICO_JEFE) / 100);
        }
        return dano;
    }

    evasion(rival, aleato) {
        const porcentajeEva = EVASION_JEFE;
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

