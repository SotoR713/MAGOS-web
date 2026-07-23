import { Generador } from "./utilidades/Generador.js";
import { raizDigital } from "./utilidades/RaizDigital.js";
import { crearElemento } from "./dominio/CrearElementos.js";
import { Mago } from "./entidades/Magos.js";
import { Jugador } from "./entidades/Jugador.js";
import { Agua } from "./datos/ListaElementos.js";

const heroe = new Jugador(1, "Test", Agua, 20, 20, 5, 2, 3, 1);
console.log("Nombre:", heroe.getNombre(), "| Nivel:", heroe.getNivel());
heroe.subirNivel();
console.log("Tras subir nivel:", heroe.getNivel());
heroe.recibirDano(8);
console.log("HP tras recibir 8 de daño:", heroe.getHpActual());

console.log("Clase Mago cargada:", Mago);
const genElem = new Generador(713);
const num = genElem.aleatorio();
const elem = crearElemento(num);
console.log("Número:", num, "→ Elemento:", elem.getNombre());

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