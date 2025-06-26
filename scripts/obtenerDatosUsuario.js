var usuarioNombre = document.getElementById("usuario__nombre");
var usuarioUser = document.getElementById("usuario__user");
var usuarioMail = document.getElementById("usuario__mail");

usuarioNombre.textContent = localStorage.getItem("nombreUsuario");
usuarioUser.textContent = localStorage.getItem("userUsuario");
usuarioMail.innerHTML = localStorage.getItem("emailUsuario");