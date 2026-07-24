import { registrarPantalla, mostrarPantalla } from "./pantallas/Organizador.js";
import { dibujarTitulo } from "./pantallas/Titulos.js";

registrarPantalla("titulo", dibujarTitulo);

mostrarPantalla("titulo");
// import { Generador } from "./utilidades/Generador.js";
// import { raizDigital } from "./utilidades/RaizDigital.js";
// import { crearElemento } from "./dominio/CrearElementos.js";
// import { Mago } from "./entidades/Magos.js";
// import { enfrentamiento } from "./dominio/Combate.js";
// import { listaRivales } from "./datos/ListaRival.js";
// import { crearRival } from "./dominio/Fabrica.js";
// import { Mapa } from "./dominio/Mapa.js";
// import { Jugador } from "./entidades/Jugador.js";
// import { Agua } from "./datos/ListaElementos.js";
// import { nombreASemilla } from "./dominio/NombreASemilla.js";
// import { registrarPantalla, mostrarPantalla } from "./pantallas/Organizador.js";
// import { dibujarTitulo } from "./pantallas/Titulos.js";

// registrarPantalla("titulo", dibujarTitulo);

// mostrarPantalla("titulo");
// const idJugador = nombreASemilla("SotoR713");
// const heroe = new Jugador(idJugador, "SotoR713", Agua, 20, 20, 5, 2, 3, 1);
// const mapa = new Mapa(heroe);

// console.log("=== Simulando 6 pasos del mapa ===");
// for (let paso = 0; paso < 6; paso++) {
//     const [op0, op1] = mapa.generarSiguientes();
//     console.log(`Paso ${paso}: opción0=${op0.getNombre()}, opción1=${op1.getNombre()} ${mapa.validarVsJefe() ? "(¡JEFE!)" : ""}`);
//     mapa.registrarAvance(0); // elijo siempre la opción 0
// }

//  const cuadricula = document.getElementById("cuadricula");
//  console.log(cuadricula);

// for (let i = 0; i < 90; i++) {
//     const casilla = document.createElement("div");
//     casilla.classList.add("casilla");
    
//     const columna = i % 10;
    
//     if (columna === 5) {
//         casilla.classList.add("camino");
//     } else {
//         casilla.classList.add("paisaje");
//     }
    
//     cuadricula.appendChild(casilla);
// }