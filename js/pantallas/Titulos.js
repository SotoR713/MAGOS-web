export function dibujarTitulo(contenedor, datos) {
    const titulo = document.createElement("h1");
    titulo.textContent = "M.A.G.O.S.";

    const subtitulo = document.createElement("p");
    subtitulo.textContent = "La Onceava Senda";

    contenedor.appendChild(titulo);
    contenedor.appendChild(subtitulo);
}