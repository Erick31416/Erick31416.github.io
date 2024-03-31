document.addEventListener("DOMContentLoaded", function () {
    const timers = [
      { id: "actividad01", duration: 3 },{ id: "descanso01", duration: 2 },
      
      { id: "burpies", duration: 25 },
      { id: "descanso2", duration: 5 },
      { id: "burpies2", duration: 25 }
    ];
  
    let currentTimerIndex = 0;
    let intervalId;
  
    function startTimer() {
      if (currentTimerIndex >= timers.length) {
        clearInterval(intervalId);
        alert("¡Todos los intervalos han terminado!");
        return;
      }
  
      const currentTimer = timers[currentTimerIndex];
      console.log(currentTimer.id + "Timer");
      const timerElement = document.getElementById(currentTimer.id + "Timer");
      let remainingTime = currentTimer.duration;
      timerElement.textContent = remainingTime;
  
      intervalId = setInterval(function () {
        remainingTime--;
        timerElement.textContent = remainingTime;
  
        if (remainingTime <= 0) {
          clearInterval(intervalId);
          playAlarm();
          currentTimerIndex++;
          startTimer();
        }
      }, 1000);
    }
  
    function playAlarm() {
      alert('alarma');
      //const alarmSound = document.getElementById("alarmSound");
      //alarmSound.play();
    }
  
    document.getElementById("startButton").addEventListener("click", startTimer);
  });
  