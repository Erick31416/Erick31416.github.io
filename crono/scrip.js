document.addEventListener("DOMContentLoaded", function () {
    const timers = [
      { id: "actividad010", duration: 30 },{ id: "descanso010", duration: 30 },
      { id: "actividad020", duration: 30 },{ id: "descanso020", duration: 30 },
      { id: "actividad030", duration: 30 },{ id: "descanso030", duration: 30 },
      { id: "actividad040", duration: 30 },{ id: "descanso040", duration: 30 },
      { id: "actividad050", duration: 20 },{ id: "descanso050", duration: 15 },
      { id: "actividad060", duration: 20 },{ id: "descanso060", duration: 15 },
      { id: "actividad070", duration: 20 },{ id: "descanso070", duration: 15 },
      { id: "actividad080", duration: 20 },{ id: "descanso080", duration: 15 },
      { id: "actividad090", duration: 20 },{ id: "descanso090", duration: 15 },
      { id: "actividad100", duration: 20 },{ id: "descanso100", duration: 15 },
      { id: "actividad110", duration: 20 },{ id: "descanso110", duration: 15 },
      { id: "actividad120", duration: 20 },{ id: "descanso120", duration: 15 },
      { id: "actividad130", duration: 30 },{ id: "descanso130", duration: 30 },
      { id: "actividad140", duration: 30 },{ id: "descanso140", duration: 30 },
    ];
  
    let currentTimerIndex = 0;
    let intervalId;
  
    function startTimer() {
      const requestWakeLock = async () => {
        try {
          const wakeLock = await navigator.wakeLock.request("screen");
          console.log(wakeLock);
        } catch (err) {
          // The wake lock request fails - usually system-related, such as low battery.
      
          console.log(`${err.name}, ${err.message}`);
        }
      };
      
      requestWakeLock();
      if (currentTimerIndex >= timers.length) {
        clearInterval(intervalId);
        alert("¡Todos los intervalos han terminado!");
        return;
      }
  
      const currentTimer = timers[currentTimerIndex];
      console.log(currentTimer.id + "Timer");
      let currenttype = currentTimer.id;
      
      if (currenttype.includes('actividad')) {//
        document.body.style.backgroundColor = "LightGreen";
    } else if (currenttype.includes('descanso')) {
        document.body.style.backgroundColor = "Lavender";
    }

      const timerElement = document.getElementById(currentTimer.id + "Timer");
      let remainingTime = currentTimer.duration;
      timerElement.textContent = remainingTime;
  
      intervalId = setInterval(function () {
        remainingTime--;
        timerElement.textContent = remainingTime;
  
        if (remainingTime <= 0) {
          document.getElementById(currentTimer.id).style.display = "none";



          clearInterval(intervalId);
          playAlarm(currentTimer.id);
          currentTimerIndex++;
          startTimer();
        }
      }, 1000);
    }
  
    function playAlarm(currentTimer) {
      //alert('alarma');

      //const alarmSound = document.getElementById("alarmSound");
      //alarmSound.play();
    }
  
    document.getElementById("startButton").addEventListener("click", startTimer);
  });
  