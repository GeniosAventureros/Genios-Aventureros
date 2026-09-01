
setInterval(()=>{

    indice++;

    if(indice>=slides.length){
        indice=0;
    }

    mostrarSlide(indice);

},4000);

function enviarFormulario(event) {

    event.preventDefault();

    // Borrar el formulario
    document.getElementById("formulario-contacto").style.display = "none";

    // Mostrar mensaje
    document.getElementById("mensaje-enviado").style.display = "block";
}
function enviarFormulario(event) {

    event.preventDefault();

    // Ocultar el formulario
    document.getElementById("formulario-contacto").style.display = "none";

    // Mostrar mensaje
    document.getElementById("mensaje-enviado").style.display = "block";

    // Esperar 4 segundos y volver a mostrar el formulario
    setTimeout(function() {

        document.getElementById("formulario-contacto").style.display = "block";

        document.getElementById("mensaje-enviado").style.display = "none";

        // Dejar el formulario vacío
        document.querySelector(".formulario").reset();

    }, 3000);
}