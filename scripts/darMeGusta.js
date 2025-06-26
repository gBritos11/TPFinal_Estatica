import { getMeGustas, getIndiceActual, frases } from "./estadoMeGusta.js";

const botonMeGusta = document.getElementById("botonMeGusta");

// Por cada evento CLICK en botonMeGusta ejecuto la función darMeGusta
botonMeGusta.addEventListener("click", darMeGusta);

function darMeGusta(){
    const indice = getIndiceActual();
    const meGustas = getMeGustas();
    
    meGustas[indice] = !meGustas[indice];
    actualizarIconoMeGusta();

    const fraseActual = frases[indice];

    let frasesGuardadas = localStorage.getItem("frasesLikeadas") || "";
    let lista = frasesGuardadas ? frasesGuardadas.split("|") : [];

    if (meGustas[indice]) {
        if (!lista.includes(fraseActual)) {
            lista.push(fraseActual);
        }
    } else {
        lista = lista.filter(f => f !== fraseActual);
    }

    localStorage.setItem("frasesLikeadas", lista.join("|"));
}

export function actualizarIconoMeGusta(){
    if (getMeGustas()[getIndiceActual()]){
        botonMeGusta.style.backgroundImage = "url('../Imagenes/likeRojo.svg')";
        botonMeGusta.style.transform = "scale(1.3)";
    } else{
        botonMeGusta.style.backgroundImage = "url('../Imagenes/likeBlanco.svg')";
        botonMeGusta.style.transform = "scale(1)";
    }
}

