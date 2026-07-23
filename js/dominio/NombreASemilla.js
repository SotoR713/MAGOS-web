import { valorCaracteres } from "../datos/ListaCaracteres.js";

export function nombreASemilla(nombre) {
    let idTexto = "0";

    for (const caracter of nombre.toLowerCase()) {
        if (caracter in valorCaracteres) {
            idTexto += valorCaracteres[caracter];
        }
    }

    let id = Number(idTexto);
    if (id < 1) {
        id = 713;
    }
    return id;
}