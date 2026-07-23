import { Generador } from "./logica/Generador.js";
import { raizDigital } from "./logica/RaizDigita.js";
import { crearElemento } from "./logica/CrearElementos.js";

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