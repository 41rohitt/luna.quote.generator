const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");

let sec = 0;
let min = 0;
let hr = 0;

let leadingSec = 0;
let leadingMin = 0;
let leadingHr = 0;

let timerInterval = null;
let timerStatus = "stopped";

function stopWatch() {
  sec++;

  if (sec / 60 === 1) {
    sec = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hr++;
    }
  }

  if (sec < 10) {
    leadingSec = "0" + sec.toString();
  } else {
    leadingSec = sec;
  }

  if (min < 10) {
    leadingMin = "0" + min.toString();
  } else {
    leadingMin = min;
  }
  if (hr < 10) {
    leadingHr = "0" + hr.toString();
  } else {
    leadingHr = hr;
  }

  let displayTimer = (document.getElementById("timer").innerText =
    leadingHr + ":" + leadingMin + ":" + leadingSec);
}

startStopBtn.addEventListener("click", function () {
  if (timerStatus === "stopped") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-pause" id="pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
    timerStatus = "stopped";
  }
});

resetBtn.addEventListener("click", function () {
  window.clearInterval(timerInterval);
  sec = 0;
  min = 0;
  hr = 0;

  document.getElementById("timer").innerHTML = "00:00:00";
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class="fa-solid fa-play" id="play"></i>`;
  timerStatus = "stopped";
});
