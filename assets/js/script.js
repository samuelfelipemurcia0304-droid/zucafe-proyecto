// ==========================================
// SCRIPT PRINCIPAL - ZUCAFÉ (FULL INTERACTIVITY)
// ==========================================

console.log("¡Zucafé JavaScript cargado correctamente!");

// 1. Función para botones directos del catálogo
function agregarPedido(nombreProducto) {
    const telefonoNegocio = "573223341617"; // Tu número real de WhatsApp
    const mensaje = encodeURIComponent(`Hola Zucafé, quiero hacer un pedido de: *${nombreProducto}*`);
    
    // Abre el chat de WhatsApp con el mensaje preescrito
    window.open(`https://wa.me/${telefonoNegocio}?text=${mensaje}`, '_blank');
}

// 2. Manejo del formulario de contacto y envío de pedidos a WhatsApp
document.addEventListener("DOMContentLoaded", function() {
    const formulario = document.getElementById("formulario-contacto");
    
    if (formulario) {
        formulario.addEventListener("submit", function(evento) {
            evento.preventDefault(); // Evita que la página se recargue sola
            
            // Capturamos los datos que escribió el usuario
            const nombre = document.getElementById("nombre").value;
            const telefono = document.getElementById("telefono").value;
            const producto = document.getElementById("producto-interes").value;
            const mensajeUsuario = document.getElementById("mensaje").value;
            
            const telefonoNegocio = "573223341617"; // Tu número real de WhatsApp
            
            // Armamos el texto ordenado para que te llegue al WhatsApp
            const textoWhatsApp = encodeURIComponent(
                `*¡Nuevo Pedido desde la Web!* ☕\n\n` +
                `*Nombre:* ${nombre}\n` +
                `*Teléfono:* ${telefono}\n` +
                `*Producto:* ${producto}\n` +
                `*Mensaje/Dirección:* ${mensajeUsuario}`
            );
            
            // Abrimos WhatsApp con el pedido listo
            window.open(`https://wa.me/${telefonoNegocio}?text=${textoWhatsApp}`, '_blank');
            
            // Limpiamos el formulario después de enviarlo
            formulario.reset();
        });
    }

    // 3. Desplazamiento suave (Smooth Scroll) para los enlaces del menú
    document.querySelectorAll('nav a').forEach(enlace => {
        enlace.addEventListener('click', function(e) {
            const idDestino = this.getAttribute('href');
            
            // Solo aplicamos scroll suave si el enlace es un ID interno (empieza con #)
            if (idDestino && idDestino.startsWith('#')) {
                e.preventDefault();
                const seccionDestino = document.querySelector(idDestino);
                if (seccionDestino) {
                    seccionDestino.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});