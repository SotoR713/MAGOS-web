import { enfrentamiento } from "../dominio/Combate.js";

export function dibujarBatalla(contenedor, datos) {
    const jugador = datos.jugador;
    const rival = datos.rival;

    const hpInicialJugador = jugador.getHpActual();
    const hpInicialRival = rival.getHpActual();

    // Correr el combate ANTES de dibujar: obtenemos el registro completo
    const resultado = enfrentamiento(jugador, rival, datos.generador);
    const registro = resultado.registro;

    // --- Zona del rival ---
    const ladoRival = document.createElement("div");
    ladoRival.classList.add("lado-combatiente");

    const nombreRival = document.createElement("div");
    nombreRival.classList.add("nombre-combatiente");
    nombreRival.textContent = rival.getNombre() + " (" + rival.getElemento().getNombre() + ")";

    const barraRival = document.createElement("div");
    barraRival.classList.add("barra-vida");
    const rellenoRival = document.createElement("div");
    rellenoRival.classList.add("barra-vida-relleno");
    rellenoRival.style.width = (hpInicialRival / rival.getHpMax()) * 100 + "%";
    barraRival.appendChild(rellenoRival);

    const hpRival = document.createElement("div");
    hpRival.classList.add("hp-texto");
    hpRival.textContent = hpInicialRival + " / " + rival.getHpMax();

    ladoRival.appendChild(nombreRival);
    ladoRival.appendChild(barraRival);
    ladoRival.appendChild(hpRival);

    // --- Caja de texto ---
    const cajaTexto = document.createElement("div");
    cajaTexto.classList.add("caja-texto");
    cajaTexto.textContent = "¡" + rival.getNombre() + " aparece en la senda!";

    // --- Zona del jugador ---
    const ladoJugador = document.createElement("div");
    ladoJugador.classList.add("lado-combatiente");

    const nombreJugador = document.createElement("div");
    nombreJugador.classList.add("nombre-combatiente");
    nombreJugador.textContent = jugador.getNombre() + " (" + jugador.getElemento().getNombre() + ")";

    const barraJugador = document.createElement("div");
    barraJugador.classList.add("barra-vida");
    const rellenoJugador = document.createElement("div");
    rellenoJugador.classList.add("barra-vida-relleno");
    rellenoJugador.style.width = (hpInicialJugador / jugador.getHpMax()) * 100 + "%";
    barraJugador.appendChild(rellenoJugador);

    const hpJugador = document.createElement("div");
    hpJugador.classList.add("hp-texto");
    hpJugador.textContent = hpInicialJugador + " / " + jugador.getHpMax();

    ladoJugador.appendChild(nombreJugador);
    ladoJugador.appendChild(barraJugador);
    ladoJugador.appendChild(hpJugador);

    // --- Botón ---
    const boton = document.createElement("button");
    boton.classList.add("boton-continuar");
    boton.textContent = "Continuar";

    // --- Montar todo ---
    contenedor.appendChild(ladoRival);
    contenedor.appendChild(cajaTexto);
    contenedor.appendChild(ladoJugador);
    contenedor.appendChild(boton);

    // --- Reproducción del combate turno a turno ---
    let indice = 0;

    function mostrarEvento() {
        if (indice >= registro.length) {
            boton.textContent = "Fin";
            return;
        }

        const evento = registro[indice];

        if (evento.tipo === "inicio") {
            cajaTexto.textContent = "⚔ ¡Comienza el combate! ⚔";
        } else if (evento.tipo === "golpe") {
            // Actualizar la barra y HP del que recibió el golpe
            if (evento.objetivo === rival.getNombre()) {
                const porcentaje = (evento.hpObjetivo / rival.getHpMax()) * 100;
                rellenoRival.style.width = porcentaje + "%";
                hpRival.textContent = evento.hpObjetivo + " / " + rival.getHpMax();
            } else {
                const porcentaje = (evento.hpObjetivo / jugador.getHpMax()) * 100;
                rellenoJugador.style.width = porcentaje + "%";
                hpJugador.textContent = evento.hpObjetivo + " / " + jugador.getHpMax();
            }

            // Narración según la diferencia (igual que en Python)
            if (evento.diferencia > 0) {
                cajaTexto.textContent = "¡¡¡CRITICO!!! " + evento.atacante + " causa " + evento.dano + " a " + evento.objetivo;
            } else if (evento.diferencia < 0) {
                cajaTexto.textContent = "El Mago " + evento.atacante + " ataco, pero " + evento.objetivo + " esquivo el ataque";
            } else {
                cajaTexto.textContent = "el mago " + evento.atacante + " ataco y causo " + evento.dano + " a mago " + evento.objetivo;
            }
        } else if (evento.tipo === "resultado") {
            cajaTexto.textContent = "EL Mago " + evento.ganador + " derroto a su rival";
            boton.textContent = "Fin";
        }

        indice += 1;
    }

    boton.addEventListener("click", mostrarEvento);
}