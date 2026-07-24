import { mostrarPantalla } from "./Organizador.js";
import { STATS_POR_NIVEL_JUGADOR } from "../Configuracion.js";

export function dibujarReparto(contenedor, datos) {
    const jugador = datos.jugador;
    const mapa = datos.mapa;
    let puntos = STATS_POR_NIVEL_JUGADOR;

    // Título
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo-juego");
    titulo.textContent = "¡Subiste a nivel " + jugador.getNivel() + "!";

    // Contador de puntos
    const contador = document.createElement("div");
    contador.classList.add("caja-texto");

    // Zona de stats actuales
    const statsActuales = document.createElement("div");
    statsActuales.classList.add("caja-texto");

    function actualizarTextos() {
        contador.textContent = "Puntos por repartir: " + puntos;
        statsActuales.textContent =
            "HP: " + jugador.getHpMax() +
            "  Fuerza: " + jugador.getFuerza() +
            "  Armadura: " + jugador.getArmadura() +
            "  Velocidad: " + jugador.getVelocidad();
    }

    // Botones de stats
    const opciones = [
        { nombre: "HP", eleccion: 1 },
        { nombre: "Fuerza", eleccion: 2 },
        { nombre: "Armadura", eleccion: 3 },
        { nombre: "Velocidad", eleccion: 4 }
    ];

    const contenedorBotones = document.createElement("div");
    contenedorBotones.classList.add("selector-elementos");

    const botonesStats = [];

    for (const opcion of opciones) {
        const boton = document.createElement("button");
        boton.classList.add("boton-elemento");
        boton.textContent = "+ " + opcion.nombre;

        boton.addEventListener("click", function () {
            if (puntos > 0) {
                jugador.repartirStats(opcion.eleccion);
                puntos -= 1;
                actualizarTextos();
                if (puntos === 0) {
                    // Sin puntos: deshabilitar stats, habilitar continuar
                    for (const b of botonesStats) {
                        b.disabled = true;
                    }
                    botonContinuar.disabled = false;
                }
            }
        });

        botonesStats.push(boton);
        contenedorBotones.appendChild(boton);
    }

    // Botón continuar (deshabilitado hasta gastar todos los puntos)
    const botonContinuar = document.createElement("button");
    botonContinuar.classList.add("boton-continuar");
    botonContinuar.textContent = "Continuar";
    botonContinuar.disabled = true;
    botonContinuar.addEventListener("click", function () {
        mostrarPantalla("exploracion", { jugador: jugador, mapa: mapa });
    });

    actualizarTextos();

    contenedor.appendChild(titulo);
    contenedor.appendChild(contador);
    contenedor.appendChild(statsActuales);
    contenedor.appendChild(contenedorBotones);
    contenedor.appendChild(botonContinuar);
}