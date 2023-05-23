// Obtener todos los botones "Eliminar"
let botonesEliminar = document.querySelectorAll('.btn-danger');

// Recorrer los botones y agregar el evento onclick
botonesEliminar.forEach(function(boton) {
  boton.onclick = function() {
    // Obtener el padre (td) del botón
    let td = this.parentNode;

    // Obtener el padre (fila - tr) del td
    let fila = td.parentNode;

    // Eliminar la fila de la tabla
    fila.remove();
  };
});



