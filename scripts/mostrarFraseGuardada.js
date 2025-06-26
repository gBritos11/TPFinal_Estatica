window.addEventListener("DOMContentLoaded", function () {
    var carruselCategoria = document.getElementById("carruselCategoria");
    var carruselFavoritas = document.getElementById("carruselFavoritas");

    var frasesGuardadas = localStorage.getItem("frasesCarrusel");
    var frasesLikeadas = localStorage.getItem("frasesLikeadas");

    if (frasesGuardadas) {
        carruselCategoria.innerHTML = frasesGuardadas;
    }

    if (frasesLikeadas && carruselFavoritas) {
        var lista = frasesLikeadas.split("|");
        carruselFavoritas.innerHTML = "";

        lista.forEach(src => {
            const img = document.createElement("img");
            img.src = src;
            console.log(img.src)
            img.alt = "Frase que te gustó";
            carruselFavoritas.appendChild(img);
            img.classList.add("carrusel__img")
        });
    }
});