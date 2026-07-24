import { Agua, Fuego, Planta, Tierra, Neutral } from "../datos/ListaElementos.js";
import { mostrarPantalla } from "./Organizador.js";
import { Jugador } from "../entidades/Jugador.js";
import { nombreASemilla } from "../dominio/NombreASemilla.js";
import { VIDA_JUGADOR, FUERZA_JUGADOR, ARMADURA_JUGADOR, VELOCIDAD_JUGADOR } from "../Configuracion.js";
import { crearRival } from "../dominio/Fabrica.js";
import { Generador } from "../utilidades/Generador.js";

export function dibujarTitulo(contenedor, datos) {
    // --- Título ---
    const titulo = document.createElement("h1");
    titulo.classList.add("titulo-juego");
    titulo.textContent = "M.A.G.O.S.";

    const subtitulo = document.createElement("p");
    subtitulo.classList.add("subtitulo-juego");
    subtitulo.textContent = "La Onceava Senda";

    // --- Campo de nombre ---
    const etiquetaNombre = document.createElement("label");
    etiquetaNombre.textContent = "Nombre del mago:";

    const inputNombre = document.createElement("input");
    inputNombre.type = "text";
    inputNombre.classList.add("input-nombre");
    inputNombre.maxLength = 12;

    // --- Selección de elemento ---
    const etiquetaElemento = document.createElement("div");
    etiquetaElemento.textContent = "Elige tu elemento:";

    const opciones = [
        { nombre: "Agua", elemento: Agua },
        { nombre: "Fuego", elemento: Fuego },
        { nombre: "Planta", elemento: Planta },
        { nombre: "Tierra", elemento: Tierra },
        { nombre: "Neutral", elemento: Neutral }
    ];

    let elementoElegido = Agua;

    const contenedorElementos = document.createElement("div");
    contenedorElementos.classList.add("selector-elementos");

    for (const opcion of opciones) {
        const boton = document.createElement("button");
        boton.classList.add("boton-elemento");
        boton.textContent = opcion.nombre;

        boton.addEventListener("click", function () {
            elementoElegido = opcion.elemento;
            for (const b of contenedorElementos.children) {
                b.classList.remove("elemento-activo");
            }
            boton.classList.add("elemento-activo");
        });

        contenedorElementos.appendChild(boton);
    }

    // --- Botón empezar ---
    const botonEmpezar = document.createElement("button");
    botonEmpezar.classList.add("boton-continuar");
    botonEmpezar.textContent = "Comenzar la senda";

    botonEmpezar.addEventListener("click", function () {
        const nombre = inputNombre.value;

        // Crear la semilla desde el nombre
        const idJugador = nombreASemilla(nombre);

        // Crear el jugador real con sus stats iniciales
        const jugador = new Jugador(
            idJugador,
            nombre,
            elementoElegido,
            VIDA_JUGADOR,
            VIDA_JUGADOR,
            FUERZA_JUGADOR,
            ARMADURA_JUGADOR,
            VELOCIDAD_JUGADOR,
            0
        );

mostrarPantalla("exploracion", { jugador: jugador });
    });

    // --- Montar todo ---
    contenedor.appendChild(titulo);
    contenedor.appendChild(subtitulo);
    contenedor.appendChild(etiquetaNombre);
    contenedor.appendChild(inputNombre);
    contenedor.appendChild(etiquetaElemento);
    contenedor.appendChild(contenedorElementos);
    contenedor.appendChild(botonEmpezar);
}