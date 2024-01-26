document.addEventListener('DOMContentLoaded', function () {
  var navh = document.querySelector('.navbar-h');
  var menu = document.querySelector('.menu-h');

  navh.addEventListener('click', function () {
      menu.classList.toggle('active-menu');
  });
});
