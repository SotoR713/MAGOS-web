const app = document.getElementById("app");
const pantallas = {};

export function registrarPantalla(nombre, funcionDibujar) {
    pantallas[nombre] = funcionDibujar;
}

export function mostrarPantalla(nombre, datos) {
    app.innerHTML = "";

    const marco = document.createElement("div");
    marco.id = "marco";
    app.appendChild(marco);

    const dibujar = pantallas[nombre];
    if (dibujar) {
        dibujar(marco, datos);
    } else {
        console.error("No existe la pantalla:", nombre);
    }
}