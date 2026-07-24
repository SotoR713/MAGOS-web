import { BRival, BJefe, Cofre, Curacion } from "../datos/ListaEventos.js";
import { crearRival, crearJefe } from "../dominio/Fabrica.js";
import { raizDigital } from "../utilidades/RaizDigital.js";
import {
    PORCENTAJE_CURACION_EVENTO,
    PORCENTAJE_CURACION_COFRE,
    PORCENTAJE_DANO_COFRE,
    UMBRAL_SUBIR,
    UMBRAL_CURACION,
    UMBRAL_BATALLA
} from "../Configuracion.js";

// Resuelve un evento y devuelve qué debe hacer la pantalla:
//   { accion: "combate", enemigo: ... }  -> saltar a combate
//   { accion: "seguir", mensaje: ... }   -> quedarse en el mapa
export function resolverEvento(mapa, evento) {
    const jugador = mapa.getJugador();
    const generador = mapa.getGenerador();
    const posicion = mapa.getCamino().length;

    if (evento === BRival) {
        const rival = crearRival(generador.aleatorio(), posicion);
        return { accion: "combate", enemigo: rival };
    }

    if (evento === BJefe) {
        const jefe = crearJefe(generador.aleatorio(), posicion);
        return { accion: "combate", enemigo: jefe };
    }

    if (evento === Curacion) {
        const vidaCurar = Math.floor(jugador.getHpMax() * PORCENTAJE_CURACION_EVENTO / 100);
        jugador.curar(vidaCurar);
        return { accion: "seguir", mensaje: "Recuperaste " + vidaCurar + " de vida" };
    }

    if (evento === Cofre) {
        return resolverCofre(mapa);
    }

    return { accion: "seguir", mensaje: "" };
}

// El cofre trampa: 4 resultados posibles según un número
function resolverCofre(mapa) {
    const jugador = mapa.getJugador();
    const generador = mapa.getGenerador();

    let valor = Math.floor((generador.aleatorio() * generador.aleatorio()) / 713);
    valor = raizDigital(valor);

    if (valor <= UMBRAL_SUBIR) {
        jugador.subirNivel();
        return { accion: "seguir", mensaje: "¡El cofre te hizo subir de nivel!" };
    } else if (valor <= UMBRAL_CURACION) {
        const vidaCurar = Math.floor(jugador.getHpMax() * PORCENTAJE_CURACION_COFRE / 100);
        jugador.curar(vidaCurar);
        return { accion: "seguir", mensaje: "El cofre te curó " + vidaCurar + " de vida" };
    } else if (valor <= UMBRAL_BATALLA) {
        // Cofre trampa: batalla contra un rival
        const rival = crearRival(generador.aleatorio(), mapa.getCamino().length);
        return { accion: "combate", enemigo: rival };
    } else {
        const vidaDano = Math.floor(jugador.getHpMax() * PORCENTAJE_DANO_COFRE / 100);
        jugador.recibirDano(vidaDano);
        return { accion: "seguir", mensaje: "¡El cofre era una trampa! Perdiste " + vidaDano };
    }
}