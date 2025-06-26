import { obtenerNumRandom } from './obtenerNumRandom.js';
import { frases, colores, setIndiceActual, getIndiceActual } from './estadoMeGusta.js';
import { actualizarIconoMeGusta } from './darMeGusta.js';
import { actualizarIconoCompartir } from './compartirFrase.js'

const botonCambiarFrase = document.getElementById("cambiarFrase");
const imgFrase = document.getElementById("frase");
const cantFrases = frases.length - 1;

window.addEventListener("DOMContentLoaded", () => {
    const indiceInicial = obtenerNumRandom(0, frases.length - 1);
    
    imgFrase.style.backgroundImage = `url("${frases[indiceInicial]}")`;
    imgFrase.style.backgroundColor = colores[indiceInicial];
});

// Por cada evento CLICK en botonCambiarFrase ejecuto la función cambiarFrase
botonCambiarFrase.addEventListener("click", cambiarFrase);

function cambiarFrase(){   
    let nuevoIndice;

    do {
        nuevoIndice = obtenerNumRandom(0, cantFrases);
    } while ( nuevoIndice === getIndiceActual());

    setIndiceActual(nuevoIndice);
    
    imgFrase.style.backgroundImage = 'url("'+frases[nuevoIndice]+'")';
    imgFrase.style.backgroundColor = colores[nuevoIndice];
    
    actualizarIconoMeGusta();
    actualizarIconoCompartir();
}