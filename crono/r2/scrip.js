document.addEventListener("DOMContentLoaded", function () {
  const timers = [
    { id: "ejercicio01Input", duration: 30 },
    { id: "descanso01Input", duration: 20 },
    { id: "ejercicio02Input", duration: 25 },
    { id: "descanso02Input", duration: 5 },
    { id: "ejercicio03Input", duration: 25 }
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
    const timerInput = document.getElementById(currentTimer.id);
    let remainingTime = currentTimer.duration;

    intervalId = setInterval(function () {
      remainingTime--;
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;
      timerInput.value = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

      if (remainingTime <= 0) {
        clearInterval(intervalId);
        playAlarm();
        currentTimerIndex++;
        startTimer();
      }
    }, 1000);
  }

  function playAlarm() {
    console.log('otro');/*
    const alarmSound = document.getElementById("alarmSound");
    alarmSound.play();
    */
  }

  document.getElementById("startButton").addEventListener("click", startTimer);
});
