var botonGuardarFrase = document.getElementById("botonGuardarFrase");
var colores = document.getElementsByClassName("escribir__frase--color");
var frase = document.getElementById("fraseEscrita");
var resultado = document.getElementById("frase__resultado");
var colorElegido = null;

for (let i = 0; i < colores.length; i++) {
  colores[i].addEventListener("click", mostrarColor)
}

botonGuardarFrase.addEventListener("click", guardarFrase);

function guardarFrase(){
    if (colorElegido !== null && frase.value.trim() !== "") {
        resultado.textContent = frase.value;

        var fraseHTML = `
            <div class="frase-personalizada" style="background-color: ${colorElegido};">
                ${frase.value}
            </div>
        `;

        var frasesGuardadas = localStorage.getItem("frasesCarrusel") || "";

        frasesGuardadas += fraseHTML;

        localStorage.setItem("frasesCarrusel", frasesGuardadas);
        frase.value = "";
    } else {
        alert("Elegí un color y escribí una frase antes de guardar.");
    }
}

function mostrarColor(event){
    colorElegido = window.getComputedStyle(event.target).backgroundColor
    resultado.style.backgroundColor = colorElegido;
}