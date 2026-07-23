export function raizDigital(numero) {
    while (numero >= 10) {
        let suma = 0;
        const texto = String(numero);
        for (const caracter of texto) {
            suma += Number(caracter);
        }
        numero = suma;
    }
    return numero;
}