var form = document.getElementById("form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    validar();
});

function validar(){
    // Capturo los input del HTML
    var nombre = document.getElementById("nombre");
    var apellido = document.getElementById("apellido");
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var fechaNacimiento = document.getElementById("fechaNacimiento");
    var arrayFecha = fechaNacimiento.value.split("-");
    var dialog = document.getElementById("dialog");

    // expresiones regulares
    var expEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var expCaracteres = /^[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+(?:\s[A-ZÁÉÍÓÚÑ][a-záéíóúñ]+)*$/;
    var expUser = /^[a-zA-Z0-9_]{4,16}$/;

    // variable bandera
    var ingreso = true;

    // valido nombre
    if(!(expCaracteres.test(nombre.value))){
        ingreso = false;
        nombre.classList.add("invalido");
    }else{
        nombre.classList.remove("invalido");
    }

    // valido apellido
    if(!(expCaracteres.test(apellido.value))){
        ingreso = false;
        apellido.classList.add("invalido");
    }else{
        apellido.classList.remove("invalido");
    }

    // valido user
    if(!(expUser.test(user.value))){
        ingreso = false;
        user.classList.add("invalido");
    }else{
        user.classList.remove("invalido");
    }

    // valido email
    if(!(expEmail.test(email.value))){
        ingreso = false;
        email.classList.add("invalido");
    }else{
        email.classList.remove("invalido");
    }

    // valido fecha
    if(!(esFechaValida(arrayFecha[2], arrayFecha[1], arrayFecha[0]))){
        ingreso = false;
        fechaNacimiento.classList.add("invalido");
    }else{
        fechaNacimiento.classList.remove("invalido");
    }


    if(ingreso === true){
        localStorage.setItem("nombreUsuario", nombre.value);
        localStorage.setItem("userUsuario", user.value);
        localStorage.setItem("emailUsuario", email.value);
        
        if(window.location.href == "http://127.0.0.1:5500/presentacion.html"){
            window.location.href = "./inicio.html";
        }else{
            window.location.href = "./perfil.html";
        }
    }else{
        dialog.style.animation = "none";
        dialog.offsetHeight;
        dialog.style.animation = "sacudida 0.3s ease";
    }
}

/*
---------------------------------------------------------------
---------------------------FUNCIONES---------------------------
---------------------------------------------------------------
*/

function esBisiesto(anio) {
    return (anio % 4 == 0 && anio % 100 != 0) || (anio % 400 == 0);
}

function diasPorMes(mes, anio){
    var dias = [
        // días de los meses por orden
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ];

    if (esBisiesto(anio)){
        dias[1]=29;
    }

    return dias[mes-1];
}

function esFechaValida(dia, mes, anio){
    var exito = false;
    
    if((dia >=1) && (mes >=1 && mes<=12) && (anio >=1 && anio <=2025)){
        if(dia <= diasPorMes(mes, anio)){
            exito = true;            
        }
    }
    
    return exito;
}