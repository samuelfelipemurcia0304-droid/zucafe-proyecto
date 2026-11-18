// ==========================================
// SCRIPT PRINCIPAL - ZUCAFÉ WEB
// ==========================================

console.log("¡Zucafé JavaScript cargado correctamente!");

// Función interactiva para los botones de pedido del catálogo
function agregarPedido(nombreProducto) {
    alert("¡Has seleccionado: " + nombreProducto + "!\n\nPara completar tu pedido, por favor llena tus datos en la sección de contacto.");
    
    const seccionContacto = document.getElementById("contacto");
    if (seccionContacto) {
        seccionContacto.scrollIntoView({ behavior: 'smooth' });
    }
}

// Validación del formulario de contacto
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contacto");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault();
            
            const nombre = document.getElementById("nombre").value;
            const productoInteres = document.getElementById("producto-interes").value;
            
            alert("¡Muchas gracias, " + nombre + "! Hemos recibido tu solicitud sobre '" + productoInteres + "'. Nos pondremos en contacto contigo muy pronto.");
            
            formulario.reset();
        });
    }
});