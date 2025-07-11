
      function updateCountdown() {
        const countdownElement = document.getElementById("countdown");
        const targetDate = new Date("2025-07-26T00:00:00");
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
          countdownElement.innerHTML = "¡Llegó el 26 de julio!";
          clearInterval(timerInterval);
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
      }

      // Actualizar cada segundo
      const timerInterval = setInterval(updateCountdown, 1000);
      updateCountdown(); // Llamada inicial