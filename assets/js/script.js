// ==========================================
// SCRIPT PRINCIPAL - ZUCAFÉ (WHATSAPP INTEGRATION)
// ==========================================

console.log("¡Zucafé JavaScript cargado correctamente!");

// Función para botones directos del catálogo
function agregarPedido(nombreProducto) {
    const telefonoNegocio = "573223341617"; // Tu número real de WhatsApp
    const mensaje = encodeURIComponent(`Hola Zucafé, quiero hacer un pedido de: *${nombreProducto}*`);
    
    // Abre el chat de WhatsApp con el mensaje preescrito
    window.open(`https://wa.me/${telefonoNegocio}?text=${mensaje}`, '_blank');
}

// Manejo del formulario de contacto para enviar a WhatsApp
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contacto");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita que la página se recargue
            
            // Capturamos los datos del formulario
            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const producto = document.getElementById("producto-interes").value;
            const mensajeUsuario = document.getElementById("mensaje").value;
            
            const telefonoNegocio = "573223341617"; // Tu número real de WhatsApp
            
            // Armamos el texto ordenado para WhatsApp
            const textoWhatsApp = encodeURIComponent(
                `*¡Nuevo Pedido desde la Web!* ☕\n\n` +
                `*Nombre:* ${nombre}\n` +
                `*Teléfono:* ${telefono}\n` +
                `*Producto:* ${producto}\n` +
                `*Mensaje/Dirección:* ${mensajeUsuario}`
            );
            
            // Abrimos WhatsApp con el pedido listo
            window.open(`https://wa.me/${telefonoNegocio}?text=${textoWhatsApp}`, '_blank');
            
            // Limpiamos el formulario
            formulario.reset();
        });
    }
});