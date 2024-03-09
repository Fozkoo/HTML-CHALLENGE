document.addEventListener('DOMContentLoaded', function() {
    // Obtén referencia a los elementos del DOM
    var hamburger = document.querySelector('.contain-hamburger');
    var menuMobile = document.querySelector('.contain-menu-mobile');
    var closeBtn = document.querySelector('.contain-close');

    // Agrega un evento de clic al elemento hamburger
    hamburger.addEventListener('click', function() {
        // Cambia el estilo del menú móvil a "display: flex"
        menuMobile.style.display = 'flex';
    });

    // Agrega un evento de clic al botón de cierre
    closeBtn.addEventListener('click', function() {
        // Cambia el estilo del menú móvil a "display: none"
        menuMobile.style.display = 'none';
    });
});