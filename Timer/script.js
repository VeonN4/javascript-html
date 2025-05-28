const startBtn = document.querySelector("#start-btn")
const stopBtn = document.querySelector("#stop-btn")
const resetBtn = document.querySelector("#reset-btn")

const jamText = document.querySelector("#jam")
const menitText = document.querySelector("#menit")
const detikText = document.querySelector("#detik")

let timer
let jam = 0
let menit = 0
let detik = 0 

const increment = () => {
  detik++

  if (detik === 60) {
    detik = 0
    menit++
  } if (menit === 60) {
    menit = 0
    jam++
  }

  showTimer()
}

const showTimer = () => {
  jamText.textContent = jam < 10 ? "0" + jam : jam
  menitText.textContent = menit < 10 ? "0" + menit : menit 
  detikText.textContent = detik < 10 ? "0" + detik : detik 
}

startBtn.addEventListener("click", () => {
  timer = setInterval(increment, 1)
}) 

stopBtn.addEventListener("click", () => {
  clearInterval(timer)
})

resetBtn.addEventListener("click", () => {
  detik = 0
  menit = 0
  jam = 0

  showTimer()
})