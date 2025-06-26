var img = document.getElementsByClassName("carrusel__img");
var imgElegida = null;

for(let i = 0; i < img.length; i++){
    img[i].addEventListener("click", abrirImagen);
}

window.addEventListener("click", function (e) {
    if (imgElegida && !imgElegida.contains(e.target)) {
        imgElegida.classList.remove("ampliarImagen");
        imgElegida.classList.add("carrusel__img");
        imgElegida = null;
    }
});

function abrirImagen(event){
    if (imgElegida) {
        imgElegida.classList.remove("ampliarImagen");
        imgElegida.classList.add("carrusel__img");
    }

    imgElegida = event.target;

    imgElegida.classList.add("ampliarImagen");
    imgElegida.classList.remove("carrusel__img");
    event.stopPropagation();
}
