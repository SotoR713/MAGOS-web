import { mostrarPantalla } from "./Organizador.js";

export function dibujarFin(contenedor, datos) {
    const jugador = datos.jugador;
    const posicion = datos.posicion || 0;
    const victoria = datos.victoria || false;

    const titulo = document.createElement("h1");
    titulo.classList.add("titulo-juego");
    titulo.textContent = victoria ? "¡Victoria!" : "Has caído";

    const mensaje = document.createElement("div");
    mensaje.classList.add("caja-texto");
    mensaje.textContent = victoria
        ? jugador.getNombre() + " completó la senda."
        : jugador.getNombre() + " cayó en la senda. Llegaste a la posición " + posicion + ".";

    const boton = document.createElement("button");
    boton.classList.add("boton-continuar");
    boton.textContent = "Volver al inicio";
    boton.addEventListener("click", function () {
        mostrarPantalla("titulo");
    });

    contenedor.appendChild(titulo);
    contenedor.appendChild(mensaje);
    contenedor.appendChild(boton);
}