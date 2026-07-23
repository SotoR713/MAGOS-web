import { Generador } from "./utilidades/Generador.js";
import { raizDigital } from "./utilidades/RaizDigital.js";
import { crearElemento } from "./dominio/CrearElementos.js";
import { Mago } from "./entidades/Magos.js";
import { Jugador } from "./entidades/Jugador.js";
import { Agua } from "./datos/ListaElementos.js";

import { enfrentamiento } from "./dominio/Combate.js";
import { listaRivales } from "./datos/ListaRival.js";

import { crearRival } from "./dominio/Fabrica.js";

import { nombreASemilla } from "./dominio/NombreASemilla.js";

const semilla = nombreASemilla("SotoR713");
console.log("Semilla de 'SotoR713':", semilla);

const genNombre = new Generador(semilla);
console.log("Primer aleatorio:", genNombre.aleatorio());





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