var WORK_TIME = 25 * 60;
var BREAK_TIME = 5 * 60;
var time = WORK_TIME;
var isActive = false;
var isWork = true;
var timer = null;
var timerElement = document.getElementById("timer");
var sessionTypeElement = document.getElementById("session-type");
var startPauseButton = document.getElementById("start-pause");
var resetButton = document.getElementById("reset");
function formatTime(seconds) {
    var mins = Math.floor(seconds / 60);
    var secs = seconds % 60;
    return "".concat(mins.toString().padStart(2, "0"), ":").concat(secs.toString().padStart(2, "0"));
}
function updateDisplay() {
    timerElement.textContent = formatTime(time);
    sessionTypeElement.textContent = isWork ? "Work Session" : "Break Session";
}
function toggleTimer() {
    isActive = !isActive;
    if (isActive) {
        startPauseButton.textContent = "Pause";
        timer = setInterval(function () {
            time--;
            if (time === 0) {
                if (isWork) {
                    time = BREAK_TIME;
                    isWork = false;
                }
                else {
                    time = WORK_TIME;
                    isWork = true;
                }
                isActive = false;
                startPauseButton.textContent = "Start";
                if (timer)
                    clearInterval(timer);
            }
            updateDisplay();
        }, 1000);
    }
    else {
        startPauseButton.textContent = "Start";
        if (timer)
            clearInterval(timer);
    }
}
function resetTimer() {
    isActive = false;
    isWork = true;
    time = WORK_TIME;
    startPauseButton.textContent = "Start";
    if (timer)
        clearInterval(timer);
    updateDisplay();
}
startPauseButton.addEventListener("click", toggleTimer);
resetButton.addEventListener("click", resetTimer);
updateDisplay();
