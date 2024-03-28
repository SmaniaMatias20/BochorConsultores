// Script para controlar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('.lista-nav');

    hamburgerMenu.addEventListener('click', function () {
        nav.classList.toggle('show'); // Toggle añade o quita la clase 'show'
    });



    // Animación para los enlaces del menú del encabezado
    const listaNav = document.querySelector('.lista-nav');
    listaNav.querySelectorAll('li').forEach(enlace => {
        enlace.addEventListener('mouseenter', () => {
            enlace.style.transform = 'scale(1.1)';
        });
        enlace.addEventListener('mouseleave', () => {
            enlace.style.transform = 'scale(1)';
        });
    });

    var imagenes = document.querySelectorAll('.consejo-imagen');

    // Agregar un evento de clic a cada imagen
    imagenes.forEach(function (imagen) {
        imagen.addEventListener('click', function () {
            // Cambiar el tamaño de la imagen al hacer clic
            this.classList.toggle('imagen-ampliada');
        });
    });







});


// confirm("Estas seguro que deseas salir del sitio web?");


