import { Mapa } from "../dominio/Mapa.js";
import { mostrarPantalla } from "./Organizador.js";
import { crearRival } from "../dominio/Fabrica.js";
import { BRival } from "../datos/ListaEventos.js";
import { resolverEvento } from "../dominio/ResolverEvento.js";

export function dibujarExploracion(contenedor, datos) {
    const jugador = datos.jugador;
    const mapa = datos.mapa || new Mapa(jugador);

    mapa.generarSiguientes();
    const op0 = mapa.getSiguiente0();
    const op1 = mapa.getSiguiente1();

function elegirCamino(eleccion) {
        const eventoElegido = (eleccion === 0) ? op0 : op1;
        mapa.registrarAvance(eleccion);

        const resultado = resolverEvento(mapa, eventoElegido);

        if (resultado.accion === "combate") {
            mostrarPantalla("batalla", {
                jugador: jugador,
                rival: resultado.enemigo,
                generador: mapa.getGenerador(),
                mapa: mapa
            });
        } else {
            // "seguir": mostrar el mensaje del evento y esperar clic para continuar
            mostrarMensaje(resultado.mensaje);
        }
    }

    // Muestra un mensaje ocupando la pantalla, con botón para continuar
    function mostrarMensaje(texto) {
        contenedor.innerHTML = "";

        const caja = document.createElement("div");
        caja.classList.add("caja-texto");
        caja.textContent = texto;

        const boton = document.createElement("button");
        boton.classList.add("boton-continuar");
        boton.textContent = "Continuar";
        boton.addEventListener("click", function () {
            contenedor.innerHTML = "";
            dibujarExploracion(contenedor, { jugador: jugador, mapa: mapa });
        });

        contenedor.appendChild(caja);
        contenedor.appendChild(boton);
    }

    // --- Cuadrícula 10x9 ---
    const cuadricula = document.createElement("div");
    cuadricula.id = "cuadricula";

    const FILA_CENTRO = 4;
    const COL_JUGADOR = 2;
    const COL_BIFURCA = 4;
    const COL_OPCIONES = 6;
    const FILA_OP0 = 2;
    const FILA_OP1 = 6;

    for (let i = 0; i < 90; i++) {
        const casilla = document.createElement("div");
        casilla.classList.add("casilla");

        const fila = Math.floor(i / 10);
        const col = i % 10;

        let esCamino = false;
        let contenido = "";
        let claseExtra = "";
        let esOpcion = null;

        if (fila === FILA_CENTRO && col <= COL_BIFURCA) {
            esCamino = true;
            if (col === COL_JUGADOR) {
                claseExtra = "jugador";
                contenido = "@";
            }
        }
        if (col === COL_BIFURCA && fila >= FILA_OP0 && fila <= FILA_CENTRO) {
            esCamino = true;
        }
        if (fila === FILA_OP0 && col >= COL_BIFURCA && col <= COL_OPCIONES) {
            esCamino = true;
        }
        if (col === COL_BIFURCA && fila >= FILA_CENTRO && fila <= FILA_OP1) {
            esCamino = true;
        }
        if (fila === FILA_OP1 && col >= COL_BIFURCA && col <= COL_OPCIONES) {
            esCamino = true;
        }
        if (fila === FILA_OP0 && col === COL_OPCIONES) {
            esCamino = true;
            claseExtra = "evento";
            contenido = op0.getCaracter();
            esOpcion = 0;
        }
        if (fila === FILA_OP1 && col === COL_OPCIONES) {
            esCamino = true;
            claseExtra = "evento";
            contenido = op1.getCaracter();
            esOpcion = 1;
        }

        if (esCamino) {
            casilla.classList.add("camino");
        } else {
            casilla.classList.add("paisaje");
        }
        if (claseExtra) {
            casilla.classList.add(claseExtra);
        }
        if (contenido) {
            casilla.textContent = contenido;
        }

        if (esOpcion !== null) {
            casilla.classList.add("clicable");
            const eleccion = esOpcion;
            casilla.addEventListener("click", function () {
                elegirCamino(eleccion);
            });
        }

        cuadricula.appendChild(casilla);
    }

    contenedor.appendChild(cuadricula);

    // --- Barra inferior de stats ---
    const barra = document.createElement("div");
    barra.classList.add("barra-stats");

    const zonaJugador = document.createElement("div");
    zonaJugador.classList.add("barra-jugador");

    const nombreLinea = document.createElement("div");
    nombreLinea.classList.add("barra-nombre");
    nombreLinea.textContent = jugador.getNombre() + " (" + jugador.getElemento().getNombre() + ")";

    const statsLinea = document.createElement("div");
    statsLinea.classList.add("barra-stats-detalle");
    statsLinea.textContent =
        "HP: " + jugador.getHpActual() + "/" + jugador.getHpMax() +
        "  Nv: " + jugador.getNivel() +
        "  Fue: " + jugador.getFuerza() +
        "  Arm: " + jugador.getArmadura() +
        "  Vel: " + jugador.getVelocidad();

    zonaJugador.appendChild(nombreLinea);
    zonaJugador.appendChild(statsLinea);

    const zonaSenda = document.createElement("div");
    zonaSenda.classList.add("barra-senda");
    zonaSenda.textContent = "Senda: " + mapa.getPosicion();

    barra.appendChild(zonaJugador);
    barra.appendChild(zonaSenda);

    contenedor.appendChild(barra);
}