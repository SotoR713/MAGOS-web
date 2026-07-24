import { Generador } from "../utilidades/Generador.js";
import { BRival, BJefe, Cofre, Curacion } from "../datos/ListaEventos.js";
import { raizDigital } from "../utilidades/RaizDigital.js";
import { POSICIONES_JEFE, SIGUIENTE_RIVAL, SIGUIENTE_COFRE } from "../Configuracion.js";

export class Mapa {
    constructor(jugador) {
        this.jugador = jugador;
        this.generador = new Generador(jugador.getId());
        this.posicion = 0;
        this.camino = [];
        this.siguiente0 = BRival;
        this.siguiente1 = BRival;
    }

    getJugador() { return this.jugador; }
    getGenerador() { return this.generador; }
    getPosicion() { return this.posicion; }
    getCamino() { return this.camino; }
    getSiguiente0() { return this.siguiente0; }
    getSiguiente1() { return this.siguiente1; }

    registrarAvance(eleccion) {
        this.camino.push(eleccion);
        this.posicion += 1;
    }

  validarVsJefe() {
    return this.camino.length > 0 && this.camino.length % POSICIONES_JEFE === 0;
}

    generarSiguientes() {
        if (this.validarVsJefe()) {
            this.siguiente0 = BJefe;
            this.siguiente1 = BJefe;
        } else {
            this.generarSiguienteNoJefe();
        }
        return [this.siguiente0, this.siguiente1];
    }

    generarSiguienteNoJefe() {
        let valor1 = raizDigital(this.generador.aleatorio());
        if (valor1 <= SIGUIENTE_RIVAL) {
            this.siguiente1 = BRival;
        } else if (valor1 <= SIGUIENTE_COFRE) {
            this.siguiente1 = Cofre;
        } else {
            this.siguiente1 = Curacion;
        }

        let valor2 = raizDigital(this.generador.aleatorio());
        if (valor2 <= SIGUIENTE_RIVAL) {
            this.siguiente0 = BRival;
        } else if (valor2 <= SIGUIENTE_COFRE) {
            this.siguiente0 = Cofre;
        } else {
            this.siguiente0 = Curacion;
        }

        return [this.siguiente0, this.siguiente1];
    }
}