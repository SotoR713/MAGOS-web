import { Generador } from "./logica/Generador.js";

const gen = new Generador(713);
console.log(gen.aleatorio());
console.log(gen.aleatorio());
console.log(gen.aleatorio());


console.log("Motor M.A.G.O.S. iniciado");
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