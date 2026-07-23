import { Mago } from "./Magos.js";
import { MAXIMO_CRITICO_JUGADOR, BONIFICACION_CRITICO_JUGADOR, MAXIMA_EVASION_JUGADOR } from "../Configuracion.js";

export class Jugador extends Mago {

    subirNivel() {
        this.nivel += 1;
    }

    repartirStats(eleccion) {
        if (eleccion === 1) {
            this.hpMax += 1;
        } else if (eleccion === 2) {
            this.fuerza += 1;
        } else if (eleccion === 3) {
            this.armadura += 1;
        } else if (eleccion === 4) {
            this.velocidad += 1;
        }
    }

    calcularCritico(rival, aleato, dano) {
        const difVel = this.getVelocidad() - rival.getVelocidad();
        let porcentajeDano;
        if (difVel <= 0) {
            porcentajeDano = 0;
        } else {
            porcentajeDano = Math.floor((difVel * 100) / rival.getVelocidad());
        }

        if (porcentajeDano > MAXIMO_CRITICO_JUGADOR) {
            porcentajeDano = MAXIMO_CRITICO_JUGADOR;
        } else if (porcentajeDano < 0) {
            porcentajeDano = 0;
        }

        const activacion = aleato % 100;

        if (activacion <= porcentajeDano) {
            dano += Math.floor((dano * BONIFICACION_CRITICO_JUGADOR) / 100);
        }

        return dano;
    }

    evasion(rival, aleato) {
        const difVel = this.getVelocidad() - rival.getVelocidad();
        let porcentajeEva;
        if (difVel <= 0) {
            porcentajeEva = 0;
        } else {
            porcentajeEva = Math.floor((difVel * 100) / rival.getVelocidad());
        }

        if (porcentajeEva > MAXIMA_EVASION_JUGADOR) {
            porcentajeEva = MAXIMA_EVASION_JUGADOR;
        } else if (porcentajeEva < 0) {
            porcentajeEva = 0;
        }

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