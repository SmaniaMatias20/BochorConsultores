// Script para controlar el menú hamburguesa
document.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const nav = document.querySelector('.lista-nav');

  hamburgerMenu.addEventListener('click', function () {
      nav.classList.toggle('show'); // Toggle añade o quita la clase 'show'
  });
});


