export class Evento {
    constructor(nombre, caracter) {
        this.nombre = nombre;
        this.caracter = caracter;
    }
    getNombre() {
        return this.nombre;
    }
    getCaracter() {
        return this.caracter;
    }
}