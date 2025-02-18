const WORK_TIME = 25 * 60
const BREAK_TIME = 5 * 60

let time = WORK_TIME
let isActive = false
let isWork = true
let timer: number | null = null

const timerElement = document.getElementById("timer") as HTMLDivElement
const sessionTypeElement = document.getElementById("session-type") as HTMLDivElement
const startPauseButton = document.getElementById("start-pause") as HTMLButtonElement
const resetButton = document.getElementById("reset") as HTMLButtonElement

function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60)
  const secs = seconds % 60
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
}

function updateDisplay() {
  timerElement.textContent = formatTime(time)
  sessionTypeElement.textContent = isWork ? "Work Session" : "Break Session"
}

function toggleTimer() {
  isActive = !isActive
  if (isActive) {
    startPauseButton.textContent = "Pause"
    timer = setInterval(() => {
      time--
      if (time === 0) {
        if (isWork) {
          time = BREAK_TIME
          isWork = false
        } else {
          time = WORK_TIME
          isWork = true
        }
        isActive = false
        startPauseButton.textContent = "Start"
        if (timer) clearInterval(timer)
      }
      updateDisplay()
    }, 1000)
  } else {
    startPauseButton.textContent = "Start"
    if (timer) clearInterval(timer)
  }
}

function resetTimer() {
  isActive = false
  isWork = true
  time = WORK_TIME
  startPauseButton.textContent = "Start"
  if (timer) clearInterval(timer)
  updateDisplay()
}

startPauseButton.addEventListener("click", toggleTimer)
resetButton.addEventListener("click", resetTimer)

updateDisplay()

