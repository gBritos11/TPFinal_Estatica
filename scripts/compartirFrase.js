import { getCompartidas, getIndiceActual } from "./estadoMeGusta.js";

const botonCompartir = document.getElementById("botonCompartir");

botonCompartir.addEventListener("click", marcarCompartir);

export function marcarCompartir() {
    const indice = getIndiceActual();
    const compartidas = getCompartidas();

    compartidas[indice] = !compartidas[indice];
    actualizarIconoCompartir();
}

export function actualizarIconoCompartir(){
    if(getCompartidas()[getIndiceActual()]){
        botonCompartir.style.backgroundImage = "url('../Imagenes/compartirVerde.svg')";
        botonCompartir.style.transform = "scale(1.3)";
    }else{
        botonCompartir.style.backgroundImage = "url('../Imagenes/compartirBlanco.svg')";
        botonCompartir.style.transform = "scale(1)";
    }
}