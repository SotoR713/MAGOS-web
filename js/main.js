import { registrarPantalla, mostrarPantalla } from "./pantallas/Organizador.js";
import { dibujarTitulo } from "./pantallas/Titulos.js";
import { dibujarExploracion } from "./pantallas/Exploracion.js";
import { dibujarBatalla } from "./pantallas/Batallas.js";

registrarPantalla("titulo", dibujarTitulo);
registrarPantalla("exploracion", dibujarExploracion);
registrarPantalla("batalla", dibujarBatalla);

mostrarPantalla("titulo");