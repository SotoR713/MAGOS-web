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

