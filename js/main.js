import { registrarPantalla, mostrarPantalla } from "./pantallas/Organizador.js";
import { dibujarBatalla } from "./pantallas/Batallas.js";
import { Jugador } from "./entidades/Jugador.js";
import { Agua } from "./datos/ListaElementos.js";
import { crearRival } from "./dominio/Fabrica.js";
import { Generador } from "./utilidades/Generador.js";
import { nombreASemilla } from "./dominio/NombreASemilla.js";

const idJugador = nombreASemilla("SotoR713");
const heroe = new Jugador(idJugador, "SotoR713", Agua, 20, 20, 8, 8, 8, 0);

const generador = new Generador(idJugador);
const rival = crearRival(generador.aleatorio(), 3);

registrarPantalla("batalla", dibujarBatalla);
mostrarPantalla("batalla", { jugador: heroe, rival: rival, generador: generador });