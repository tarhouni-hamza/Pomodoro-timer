// Pomodoro timer
// times are in minutes
var focusTime = 25;
var shortBreak = 5;
var longBreak = 15;

var timeLeft = focusTime * 60; // in seconds
var currentMode = "focus";
var interval = null;
var isRunning = false;
var sessions = 0;

// getting the elements from the page
var timerDisplay = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var resetBtn = document.getElementById("reset-btn");
var sessionsDisplay = document.getElementById("sessions");
var modeButtons = document.querySelectorAll(".mode");

var focusBtn = document.getElementById("focus-btn");
var shortBtn = document.getElementById("short-btn");
var longBtn = document.getElementById("long-btn");

function updateDisplay() {
  var minutes = Math.floor(timeLeft / 60);
  var seconds = timeLeft % 60;

  // add a 0 in front if the number is less than 10
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  timerDisplay.textContent = minutes + ":" + seconds;
  document.title = minutes + ":" + seconds + " - Pomodoro";
}

function playSound() {
  // simple beep, found this way on MDN
  var ctx = new AudioContext();
  var osc = ctx.createOscillator();
  osc.connect(ctx.destination);
  osc.frequency.value = 600;
  osc.start();
  osc.stop(ctx.currentTime + 0.5);
}

function tick() {
  timeLeft = timeLeft - 1;
  updateDisplay();

  if (timeLeft <= 0) {
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = "Start";
    playSound();

    if (currentMode === "focus") {
      sessions = sessions + 1;
      sessionsDisplay.textContent = sessions;
    }
  }
}

function startPause() {
  if (isRunning) {
    // pause
    clearInterval(interval);
    isRunning = false;
    startBtn.textContent = "Start";
  } else {
    // start
    if (timeLeft <= 0) {
      return;
    }
    interval = setInterval(tick, 1000);
    isRunning = true;
    startBtn.textContent = "Pause";
  }
}

function setMode(mode) {
  clearInterval(interval);
  isRunning = false;
  startBtn.textContent = "Start";
  currentMode = mode;

  if (mode === "focus") {
    timeLeft = focusTime * 60;
  } else if (mode === "short") {
    timeLeft = shortBreak * 60;
  } else {
    timeLeft = longBreak * 60;
  }

  // remove active from all buttons then add it to the right one
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].classList.remove("active");
  }
  if (mode === "focus") focusBtn.classList.add("active");
  if (mode === "short") shortBtn.classList.add("active");
  if (mode === "long") longBtn.classList.add("active");

  updateDisplay();
}

function reset() {
  setMode(currentMode);
}

startBtn.addEventListener("click", startPause);
resetBtn.addEventListener("click", reset);
focusBtn.addEventListener("click", function () { setMode("focus"); });
shortBtn.addEventListener("click", function () { setMode("short"); });
longBtn.addEventListener("click", function () { setMode("long"); });

updateDisplay();s
