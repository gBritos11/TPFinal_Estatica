var inicio = document.getElementById("inicio");
var escribir = document.getElementById("escribir");
var categoria = document.getElementById("categoria");
var sobreInspiraccion = document.getElementById("sobreInspiraccion");
var perfil = document.getElementById("perfil");
var facebook = document.getElementById("facebook");
var instagram = document.getElementById("instagram");
var twitter = document.getElementById("twitter");
var meGustas = document.getElementById("opcion__meGustas");
var historialFrases = document.getElementById("opcion__historialFrase");
var descubrirFrases = document.getElementById("opcion__descubrirFrase");

inicio.addEventListener("click", ()=> {
    window.location.href = "./inicio.html";
})

escribir.addEventListener("click", ()=> {
    window.location.href = "./escribir.html";
})

categoria.addEventListener("click", ()=> {
    window.location.href = "./categoria.html";
})

sobreInspiraccion.addEventListener("click", ()=> {
    window.location.href = "./sobreInspiraccion.html";
})

perfil.addEventListener("click", ()=> {
    window.location.href = "./perfil.html";
})

facebook.addEventListener("click", ()=> {
    window.location.href = "https://www.facebook.com";
})

instagram.addEventListener("click", ()=> {
    window.location.href = "https://www.instagram.com";
})

twitter.addEventListener("click", ()=> {
    window.location.href = "https://x.com";
})

if(window.location.href == "http://127.0.0.1:5500/perfil.html"){
    meGustas.addEventListener("click", ()=> {
        window.location.href = "./categoria.html#galeria__fila--me-gusta";
    })

    historialFrases.addEventListener("click", ()=> {
        window.location.href = "./categoria.html#galeria__fila--historial-frases";
    })

    descubrirFrases.addEventListener("click", ()=> {
        window.location.href = "./categoria.html#galeria__fila--descubrir-frases";
    })
}