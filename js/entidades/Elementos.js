export class Elemento {
    constructor(nombre, fortaleza, debilidad) {
        this.nombre = nombre;
        this.fortaleza = fortaleza;
        this.debilidad = debilidad;
    }

    getNombre() {
        return this.nombre;
    }
    getFortaleza() {
        return this.fortaleza;
    }
    getDebilidad() {
        return this.debilidad;
    }
}

export const Agua = new Elemento("Agua", "Fuego", "Tierra");
export const Fuego = new Elemento("Fuego", "Planta", "Agua");
export const Planta = new Elemento("Planta", "Tierra", "Fuego");
export const Tierra = new Elemento("Tierra", "Agua", "Planta");
export const Neutral = new Elemento("Neutral", "", "");