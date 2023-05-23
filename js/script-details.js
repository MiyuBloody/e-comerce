//cojo el elemento formulario del documento
document.getElementById('laptp-form').addEventListener('submit', function(event){
    //obtengo los valores ingresados
    let modelo = document.getElementById('modelo').value;
    let fabricante = document.getElementById('fabricante').value;
    let precio = document.getElementById('precio').value;
    let ram = document.getElementById('ram').value;
    let descripcion =document.getElementById('descripcion').value;
    let imagen = document.getElementById('imagen').value;

    //crear una instancia de laptopview pasando la info

    let laptopview = new LaptopView(modelo, fabricante, precio, ram, descripcion, imagen)
});