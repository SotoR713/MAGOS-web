import { PORCENTAJE_CURACION_VICTORIA } from "../Configuracion.js";

export function enfrentamiento(mago1, mago2, generador) {
    const registro = [];
    let turno = 1;

    registro.push({ tipo: "inicio", mago1: mago1.getNombre(), mago2: mago2.getNombre() });

    let primero, segundo;
    if (mago1.getVelocidad() > mago2.getVelocidad()) {
        primero = mago1;
        segundo = mago2;
    } else {
        primero = mago2;
        segundo = mago1;
    }

    while (primero.getHpActual() > 0 && segundo.getHpActual() > 0) {
        // Golpe del primero al segundo
        let dano = primero.calcularDano(segundo);
        let danoOriginal = dano;
        dano = primero.calcularCritico(segundo, generador.aleatorio(), dano) * segundo.evasion(primero, generador.aleatorio());
        let diferencia = dano - danoOriginal;
        segundo.recibirDano(dano);
        registro.push({
            tipo: "golpe", turno,
            atacante: primero.getNombre(), objetivo: segundo.getNombre(),
            dano, diferencia, hpObjetivo: segundo.getHpActual()
        });

        // Golpe del segundo al primero (si sigue vivo)
        dano = segundo.calcularDano(primero);
        danoOriginal = dano;
        dano = segundo.calcularCritico(primero, generador.aleatorio(), dano) * primero.evasion(segundo, generador.aleatorio());
        diferencia = dano - danoOriginal;
        if (primero.getHpActual() > 0) {
            primero.recibirDano(dano);
            registro.push({
                tipo: "golpe", turno,
                atacante: segundo.getNombre(), objetivo: primero.getNombre(),
                dano, diferencia, hpObjetivo: primero.getHpActual()
            });
        }

        turno += 1;
    }

    const ganador = primero.getHpActual() > 0 ? primero : segundo;
    registro.push({ tipo: "resultado", ganador: ganador.getNombre() });

    return { ganador, registro };
}