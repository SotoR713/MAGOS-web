import { Generador } from "./utilidades/Generador.js";
import { raizDigital } from "./utilidades/RaizDigital.js";
import { crearElemento } from "./dominio/CrearElementos.js";
import { Mago } from "./entidades/Magos.js";
import { Jugador } from "./entidades/Jugador.js";
import { Agua } from "./datos/ListaElementos.js";

import { enfrentamiento } from "./dominio/Combate.js";
import { listaRivales } from "./datos/ListaRival.js";

const genCombate = new Generador(713);
const luchador1 = listaRivales[2]; // Hexomante (Fuego)
const luchador2 = listaRivales[3]; // Algoritus (Planta)

const resultado = enfrentamiento(luchador1, luchador2, genCombate);
console.log("=== REGISTRO DE COMBATE ===");
for (const evento of resultado.registro) {
    console.log(evento);
}
console.log("GANADOR:", resultado.ganador.getNombre());






const cuadricula = document.getElementById("cuadricula");
console.log(cuadricula);

for (let i = 0; i < 90; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("casilla");
    
    const columna = i % 10;
    
    if (columna === 5) {
        casilla.classList.add("camino");
    } else {
        casilla.classList.add("paisaje");
    }
    
    cuadricula.appendChild(casilla);
}