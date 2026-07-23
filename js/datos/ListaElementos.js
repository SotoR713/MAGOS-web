import { Elemento } from "../entidades/Elementos.js";

export const Agua = new Elemento("Agua", "Fuego", "Tierra");
export const Fuego = new Elemento("Fuego", "Planta", "Agua");
export const Planta = new Elemento("Planta", "Tierra", "Fuego");
export const Tierra = new Elemento("Tierra", "Agua", "Planta");
export const Neutral = new Elemento("Neutral", "", "");