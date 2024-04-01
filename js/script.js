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

    // Animacion Scroll Index
    
    ScrollReveal().reveal('.banner-imagen', { 
    delay: 100,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.contenedor-articulo', { 
    delay: 100,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.segundo-contenedor-articulo', { 
    delay: 200,
    duration: 1200,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.liderazgo', { 
    delay: 300,
    duration: 1400,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.publicidad', { 
    delay: 400,
    duration: 1600,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.recomendacion', { 
    delay: 500,
    duration: 1800,
    distance: '50px',
    origin: 'bottom'
    });

    // Animacion Scroll Service

    ScrollReveal().reveal('.articulos-servicios', { 
    delay: 100,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.sintoma', { 
    delay: 200,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.articulos-politicas', { 
    delay: 300,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    // Animacion Scroll About

    ScrollReveal().reveal('.card', { 
    delay: 100,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.eleccion', { 
    delay: 200,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.mision', { 
    delay: 300,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.vision', { 
    delay: 400,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });

    ScrollReveal().reveal('.valores', { 
    delay: 500,
    duration: 1000,
    distance: '50px',
    origin: 'bottom'
    });






});



