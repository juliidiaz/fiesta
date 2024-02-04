const countdowns = [
    { id: 'countdown1', targetDate: new Date('2024-12-31T00:00:00').getTime() }
  ];

  function updateCountdown() {
    countdowns.forEach(countdown => {
      const now = new Date().getTime();
      const distance = countdown.targetDate - now;

      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

      document.getElementById('months1').innerHTML = months;
      document.getElementById('days1').innerHTML = days;
      document.getElementById('hours1').innerHTML = hours;
      document.getElementById('minutes1').innerHTML = minutes;

      // Si quieres hacer algo cuando el contador llega a cero, puedes agregar una condición aquí
      if (distance <= 0) {
        document.getElementById('countdown1').innerHTML = '¡Contador ha llegado a cero!';
      }
    });
  }

  // Actualiza el contador cada segundo
  setInterval(updateCountdown, 1000);

  // Inicializa el contador al cargar la página
  updateCountdown();