const app = document.getElementById("app");
const pantallas = {};

export function registrarPantalla(nombre, funcionDibujar) {
    pantallas[nombre] = funcionDibujar;
}

export function mostrarPantalla(nombre, datos) {
    app.innerHTML = "";
    const dibujar = pantallas[nombre];
    if (dibujar) {
        dibujar(app, datos);
    } else {
        console.error("No existe la pantalla:", nombre);
    }
}