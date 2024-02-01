document.addEventListener('DOMContentLoaded', function () {
  var navh = document.querySelector('.navbar-h');
  var menu = document.querySelector('.menu-h');

  navh.addEventListener('click', function () {
      menu.classList.toggle('active-menu');
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
      const header = question.querySelector('.question-header');
      const answer = question.querySelector('.answer');

      header.addEventListener('click', function () {
          // Alternar clase 'active' en la pregunta para cambiar el ícono
          question.classList.toggle('active');

          // Alternar la visibilidad de la respuesta
          if (answer.style.display === 'block') {
              answer.style.display = 'none';
          } else {
              answer.style.display = 'block';

              // Cerrar otras respuestas abiertas
              questions.forEach(q => {
                  if (q !== question && q.classList.contains('active')) {
                      q.classList.remove('active');
                      q.querySelector('.answer').style.display = 'none';
                  }
              });
          }
      });
  });
});
