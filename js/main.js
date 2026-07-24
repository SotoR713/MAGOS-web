import { registrarPantalla, mostrarPantalla } from "./pantallas/Organizador.js";
import { dibujarTitulo } from "./pantallas/Titulos.js";
import { dibujarExploracion } from "./pantallas/Exploracion.js";
import { dibujarBatalla } from "./pantallas/Batallas.js";
import { dibujarFin } from "./pantallas/Finales.js";
import { dibujarReparto } from "./pantallas/Repartir.js";



registrarPantalla("reparto", dibujarReparto);
registrarPantalla("fin", dibujarFin);
registrarPantalla("titulo", dibujarTitulo);
registrarPantalla("exploracion", dibujarExploracion);
registrarPantalla("batalla", dibujarBatalla);

mostrarPantalla("titulo");