var dialog = document.getElementById("dialog")
var abrirDialog = document.getElementById("abrirDialog");

// Por cada evento CLICK en abrirDialog ejecuto la función abrirDialogModal
abrirDialog.addEventListener("click", abrirDialogModal);
function abrirDialogModal(){
  dialog.showModal();
}

// cierro dialog si el usuario hace click fuera del cuadro del dialog
dialog.addEventListener("click", cerrarDialog);
function cerrarDialog(event){
  if (event.target === dialog) {
    dialog.close();
  }
}