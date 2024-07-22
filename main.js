let timer;
    function startTimer(minutes) { //запуск таймера
      let circularProgress = document.getElementById("circular-progress"); //взяли элемент прогресс-бара из документа
      const timerElement = document.getElementById("timer"); //взяли элемент таймера из документа
      const seconds = minutes * 60; //перевели минуты в секунды
      let secStart = 0; // старт таймера
      
      function updateTimer() {
        let progress = secStart / seconds * 100;
        circularProgress.style.background = `conic-gradient(#fff ${progress * 3.6}deg, #212529 0deg)`;
        const displayMin = Math.floor(secStart / 60).toString().padStart(2, '0'); //задали отображение минут на экране и формат
        const displaySec = (secStart % 60).toString().padStart(2, '0'); //задали отображение секунд на экране и формат
        timerElement.textContent = displayMin + " : " + displaySec; // отображение минут и секунд на дисплее

        if (secStart < seconds) { // условия таймера
          timer = setTimeout(() => {
            secStart++;
            updateTimer();
          }, 1000);
        } else {
          timerElement.textContent = 'Over';
          clearTimeout(timer);
        }
      }
      updateTimer();
    }
    startTimer(0.33); //таймер на 20 секунд

    function stopTimer() { //остановка таймера
      clearTimeout(timer);
    }
    
    const btn = document.getElementById("button"); 
    btn.addEventListener('click', () => { //условия при нажатии на кнопку
      if (btn.textContent === 'Stop') {
        btn.textContent = 'Start';
        stopTimer();
      } else {
        btn.textContent = 'Stop';
        startTimer(0.33);
      }
    });