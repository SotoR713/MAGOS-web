import { Agua, Fuego, Planta, Tierra, Neutral } from "./Elementos.js";

export function crearElemento(numeroDado) {
    const asignacion = Math.floor((numeroDado % 10) / 2);
    if (asignacion === 0) {
        return Agua;
    } else if (asignacion === 1) {
        return Fuego;
    } else if (asignacion === 2) {
        return Planta;
    } else if (asignacion === 3) {
        return Tierra;
    } else {
        return Neutral;
    }
}