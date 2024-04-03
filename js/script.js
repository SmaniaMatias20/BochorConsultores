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

    const elementsToRevealIndex = [
    { selector: '.banner-imagen', delay: 100 },
    { selector: '.contenedor-articulo', delay: 100 },
    { selector: '.segundo-contenedor-articulo', delay: 200 },
    { selector: '.liderazgo', delay: 300 },
    { selector: '.publicidad', delay: 400 },
    { selector: '.recomendacion', delay: 500 }
    ];
    
    elementsToRevealIndex.forEach(function(element) {
    ScrollReveal().reveal(element.selector, {
        delay: element.delay,
        duration: 1000 + element.delay,
        distance: '50px',
        origin: 'bottom'
    });
    });

    // Animacion Scroll Service

    const elementsToRevealService = [
        { selector: '.articulos-servicios', delay: 100 },
        { selector: '.sintoma', delay: 200 },
        { selector: '.articulos-politicas', delay: 300 }
    ];
    
    elementsToRevealService.forEach(function(element) {
    ScrollReveal().reveal(element.selector, {
        delay: element.delay,
        duration: 1000,
        distance: '50px',
        origin: 'bottom'
    });
    });

    // Animacion Scroll About
    const elementsToRevealAbout = [
    { selector: '.card', delay: 100 },
    { selector: '.eleccion', delay: 200 },
    { selector: '.mision', delay: 300 },
    { selector: '.vision', delay: 400 },
    { selector: '.valores', delay: 500 }
    ];
    
    elementsToRevealAbout.forEach(function(element) {
        ScrollReveal().reveal(element.selector, {
            delay: element.delay,
            duration: 1000,
            distance: '50px',
            origin: 'bottom'
        });
    });






});



