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



});



