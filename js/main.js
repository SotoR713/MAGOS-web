console.log("Motor M.A.G.O.S. iniciado");
const cuadricula = document.getElementById("cuadricula");
console.log(cuadricula);
for (let i = 0; i < 90; i++) {
    const casilla = document.createElement("div");
    casilla.classList.add("casilla");
    cuadricula.appendChild(casilla);
}