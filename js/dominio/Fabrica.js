import { Rival } from "../entidades/Rival.js";
import { Jefe } from "../entidades/Jefe.js";
import { listaRivales } from "../datos/ListaRival.js";
import { listaJefes } from "../datos/ListaJefes.js";
import { crearElemento } from "./CrearElementos.js";

export function crearRival(numeroDado, valorPosicionActual) {
    let nivelCrear = numeroDado * valorPosicionActual;
    nivelCrear = nivelCrear % 20;

    const nivelar = nivelCrear % 10;
    let valorNivel;
    if (nivelar > 7) {
        valorNivel = valorPosicionActual - 1;
    } else if (nivelar > 4) {
        valorNivel = valorPosicionActual - 2;
    } else {
        valorNivel = valorPosicionActual;
    }

    valorPosicionActual = valorNivel;

    if (valorNivel < 0) {
        valorPosicionActual = 0;
    }

    const elementoAsignar = crearElemento(numeroDado);

    const base = listaRivales[nivelCrear];
    const rivalActual = new Rival(
        base.getId(), base.getNombre(), elementoAsignar,
        base.getHpActual(), base.getHpMax(), base.getFuerza(),
        base.getArmadura(), base.getVelocidad(), valorPosicionActual
    );
    rivalActual.repartirStats();
    return rivalActual;
}

export function crearJefe(numeroDado, valorPosicionActual) {
    const nivelCrear = numeroDado % 10;

    const elementoAsignar = crearElemento(numeroDado);

    const base = listaJefes[nivelCrear];
    const jefeActual = new Jefe(
        base.getId(), base.getNombre(), elementoAsignar,
        base.getHpActual(), base.getHpMax(), base.getFuerza(),
        base.getArmadura(), base.getVelocidad(), valorPosicionActual
    );
    jefeActual.repartirStats();
    return jefeActual;
}